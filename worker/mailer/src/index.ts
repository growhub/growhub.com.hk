/**
 * growhub-mailer — Cloudflare Worker that emails a contact-form submission
 * through Email Routing's `send_email` binding.
 *
 * It is invoked by the site's Pages Function (`/api/contact`) via a Service
 * binding, so it does not need a public route (disable workers.dev for it).
 *
 * Config (worker/mailer/wrangler.toml):
 *   - [[send_email]] SEND_EMAIL, destination_address = verified inbox
 *   - [vars] CONTACT_FROM (sender on the zone), CONTACT_TO (verified inbox)
 */

// Provided by the Workers runtime.
// @ts-expect-error - resolved at deploy time.
import { EmailMessage } from 'cloudflare:email';

interface SendEmailBinding {
  send(message: unknown): Promise<void>;
}

interface Env {
  SEND_EMAIL: SendEmailBinding;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
}

interface Payload {
  name?: string;
  company?: string;
  email?: string;
  content?: string;
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405);
    }

    let data: Payload;
    try {
      data = (await request.json()) as Payload;
    } catch {
      return json({ error: 'bad_request' }, 400);
    }

    const name = (data.name ?? '').trim();
    const company = (data.company ?? '').trim();
    const email = (data.email ?? '').trim();
    const content = (data.content ?? '').trim();
    if (!name || !email || !content) {
      return json({ error: 'validation' }, 400);
    }

    const from = env.CONTACT_FROM || 'contact@growhub.com.hk';
    const to = env.CONTACT_TO;
    if (!to) {
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
  },
};
