/**
 * Cloudflare Pages Function — AI prototype-planner demo (POST /api/prototype).
 *
 * Takes a short product idea and asks Cloudflare Workers AI to return a
 * structured prototype plan (features / screens / stack / first step). This is
 * the site's "living proof": visitors experience the zero-upfront-cost
 * prototyping idea firsthand.
 *
 * Required Pages configuration:
 *   - Binding `AI` (type: "Workers AI").
 * Recommended:
 *   - A Cloudflare Rate Limiting rule on /api/prototype (e.g. 5 req/min/IP).
 */

interface AiBinding {
  run(model: string, input: unknown): Promise<{ response?: string }>;
}

interface Env {
  AI?: AiBinding;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const MODEL = '@cf/meta/llama-3.1-8b-instruct';
const MAX_IDEA_LEN = 500;

const LANG_NAME: Record<string, string> = {
  en: 'English',
  ja: 'Japanese',
  'zh-hk': 'Traditional Chinese (Hong Kong)',
};

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

/** Pull the first JSON object out of a model response (it may add prose/fences). */
function extractJson(text: string): unknown {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
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

  if (!env.AI) {
    return json({ error: 'not_configured' }, 503);
  }

  const language = LANG_NAME[body.lang ?? 'en'] ?? 'English';
  const system = [
    'You are a senior product engineer at GrowHub, a Hong Kong software studio that starts every project with a free, AI-driven working prototype.',
    `A visitor describes an idea. Propose a concise, realistic prototype plan. Respond ONLY with a JSON object (no markdown, no commentary) in this exact shape:`,
    '{"appName": string, "summary": string, "features": string[], "screens": string[], "stack": string[], "nextStep": string}',
    '- appName: a short, catchy working name.',
    '- summary: one sentence describing the concept.',
    '- features: 4-6 concrete core features (short phrases).',
    '- screens: 3-5 key screens/pages (short phrases).',
    '- stack: 3-5 suitable technologies.',
    '- nextStep: one sentence on what GrowHub would build first as the free prototype.',
    `Write every string value in ${language}. Keep it practical and encouraging. Do not include any text outside the JSON.`,
  ].join('\n');

  let raw: string;
  try {
    const out = await env.AI.run(MODEL, {
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: idea },
      ],
      max_tokens: 900,
      temperature: 0.7,
    });
    raw = out.response ?? '';
  } catch {
    return json({ error: 'ai_failed' }, 502);
  }

  const parsed = extractJson(raw);
  if (!parsed || typeof parsed !== 'object') {
    return json({ error: 'ai_failed' }, 502);
  }

  return json({ ok: true, plan: parsed });
};
