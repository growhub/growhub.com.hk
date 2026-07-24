/**
 * Cloudflare Pages Function — AI prototype-planner demo (POST /api/prototype).
 *
 * Workers AI does not run reliably directly from a Pages Function, so this
 * validates the request and forwards it to the `growhub-ai` Worker (which owns
 * the Workers AI binding) through a Service binding (AISVC).
 *
 * Required Pages configuration:
 *   - Binding `AISVC` (type: Service) → the `growhub-ai` Worker.
 * Recommended:
 *   - A Rate Limiting rule on /api/prototype (e.g. 5 req/min/IP).
 */

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  AISVC?: Fetcher;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const MAX_IDEA_LEN = 500;

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  try {
    let body: { idea?: string; lang?: string; company_url?: string };
    try {
      body = (await request.json()) as typeof body;
    } catch {
      return json({ error: 'bad_request' }, 400);
    }

    // Honeypot: real users never fill this hidden field.
    if (body.company_url?.trim()) {
      return json({ error: 'validation' }, 400);
    }

    const idea = (body.idea ?? '').trim().slice(0, MAX_IDEA_LEN);
    if (!idea) {
      return json({ error: 'validation' }, 400);
    }

    if (!env.AISVC) {
      return json({ error: 'not_configured' }, 503);
    }

    // Forward to the AI Worker via the Service binding (internal call).
    const res = await env.AISVC.fetch(
      new Request('https://ai/prototype', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ idea, lang: body.lang }),
      })
    );

    // Pass the Worker's JSON response straight through.
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    console.error('prototype: proxy error', detail);
    return json({ error: 'ai_failed', stage: 'proxy', detail }, 502);
  }
};
