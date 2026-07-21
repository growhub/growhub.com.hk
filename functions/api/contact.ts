/**
 * Cloudflare Pages Function — contact form handler (POST /api/contact).
 *
 * Runs on the Workers runtime as a Pages Function. It validates the form,
 * verifies Turnstile (when a secret is set), then delegates email delivery to
 * the `growhub-mailer` Worker via a Service binding (Pages Functions cannot use
 * the Email Routing send binding directly).
 *
 * Required Pages configuration:
 *   - Binding `MAILER` (type: Service) → the `growhub-mailer` Worker.
 *   - `TURNSTILE_SECRET_KEY` (secret) — optional; when set, tokens are verified.
 */

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  MAILER: Fetcher;
  TURNSTILE_SECRET_KEY?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const out = (await res.json()) as { success?: boolean };
  return out.success === true;
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'bad_request' }, 400);
  }

  // Honeypot: real users never fill this hidden field.
  if ((form.get('company_url') as string)?.trim()) {
    return json({ ok: true });
  }

  const name = (form.get('name') as string)?.trim() ?? '';
  const company = (form.get('company') as string)?.trim() ?? '';
  const email = (form.get('email') as string)?.trim() ?? '';
  const content = (form.get('content') as string)?.trim() ?? '';

  if (!name || !email || !content) {
    return json({ error: 'validation' }, 400);
  }

  // Server-side Turnstile verification (only when a secret is configured).
  if (env.TURNSTILE_SECRET_KEY) {
    const token = (form.get('cf-turnstile-response') as string) ?? '';
    const ok = await verifyTurnstile(
      env.TURNSTILE_SECRET_KEY,
      token,
      request.headers.get('CF-Connecting-IP')
    );
    if (!ok) return json({ error: 'turnstile' }, 400);
  }

  if (!env.MAILER) {
    return json({ error: 'not_configured' }, 500);
  }

  // Delegate delivery to the mailer Worker (internal Service binding call).
  const res = await env.MAILER.fetch(
    new Request('https://mailer/send', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, company, email, content }),
    })
  );
  if (!res.ok) {
    return json({ error: 'send_failed' }, 502);
  }

  return json({ ok: true });
};
