/**
 * Cloudflare Pages Function — contact form handler (POST /api/contact).
 *
 * This is the backend API. It runs on Cloudflare's Workers runtime, but as a
 * Pages Function (a file under `functions/` is auto-deployed as a serverless
 * endpoint alongside the static site) — so there is no separate Worker to
 * manage; bindings/env are configured in the Pages project settings.
 *
 * Flow: receive the POSTed form → (optional) verify Cloudflare Turnstile with
 * the secret key → email the submission to the Email Routing destination via
 * the `send_email` binding.
 *
 * Required Pages configuration (Settings → Functions, and Environment vars):
 *   - Binding `SEND_EMAIL` (type: "Send email"), destination_address = the
 *     verified Email Routing address (your Gmail).
 *   - `CONTACT_FROM`  e.g. "contact@growhub.com.hk" (an address on your zone)
 *   - `CONTACT_TO`    the verified destination, must match the binding's
 *     destination_address (your Gmail).
 *   - `TURNSTILE_SECRET_KEY` (secret) — optional; when set, tokens are verified.
 *
 * This file runs only in the Cloudflare Pages runtime; it is not part of the
 * Astro build (Astro builds `src/` → `dist/`; Cloudflare serves `functions/`).
 */

// `cloudflare:email` is provided by the Workers runtime.
// @ts-expect-error - resolved at deploy time, not during the Astro build.
import { EmailMessage } from 'cloudflare:email';

interface SendEmailBinding {
  send(message: unknown): Promise<void>;
}

interface Env {
  SEND_EMAIL: SendEmailBinding;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
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

/** UTF-8 safe base64 (chunked to avoid call-stack limits on large input). */
function base64Utf8(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

/** Fold a long string into 76-char lines (RFC 2045 for base64 bodies). */
function fold(b64: string): string {
  return (b64.match(/.{1,76}/g) ?? []).join('\r\n');
}

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

  const from = env.CONTACT_FROM;
  const to = env.CONTACT_TO;
  if (!from || !to) {
    return json({ error: 'not_configured' }, 500);
  }

  const subject = `[GrowHub] お問い合わせ — ${name}`;
  const bodyText = [
    `Name: ${name}`,
    `Company: ${company || '-'}`,
    `Email: ${email}`,
    '',
    'Message:',
    content,
  ].join('\n');

  const fromDomain = from.split('@')[1] ?? 'growhub.com.hk';
  const raw =
    `From: GrowHub Website <${from}>\r\n` +
    `To: ${to}\r\n` +
    `Reply-To: ${email}\r\n` +
    `Message-ID: <${crypto.randomUUID()}@${fromDomain}>\r\n` +
    `Date: ${new Date().toUTCString()}\r\n` +
    `Subject: =?UTF-8?B?${base64Utf8(subject)}?=\r\n` +
    'MIME-Version: 1.0\r\n' +
    'Content-Type: text/plain; charset="utf-8"\r\n' +
    'Content-Transfer-Encoding: base64\r\n' +
    '\r\n' +
    fold(base64Utf8(bodyText));

  try {
    await env.SEND_EMAIL.send(new EmailMessage(from, to, raw));
  } catch {
    return json({ error: 'send_failed' }, 502);
  }

  return json({ ok: true });
};
