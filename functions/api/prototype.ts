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

// Tried in order; the first that returns usable text wins.
const MODELS = ['@cf/meta/llama-3.1-8b-instruct', '@cf/meta/llama-3-8b-instruct'];
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
  // Everything is wrapped so the endpoint always returns JSON (never an HTML
  // 502 from an uncaught throw), which also surfaces the real error as `detail`.
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

    if (!env.AI) {
      return json({ error: 'not_configured' }, 503);
    }

    const language = LANG_NAME[body.lang ?? 'en'] ?? 'English';
    const system = [
      'You are a senior product engineer at GrowHub, a Hong Kong software studio that starts every project with a free, AI-driven working prototype.',
      'A visitor describes an idea. Propose a concise, realistic prototype plan. Respond ONLY with a JSON object (no markdown, no commentary) in this exact shape:',
      '{"appName": string, "summary": string, "features": string[], "screens": string[], "stack": string[], "nextStep": string}',
      '- appName: a short, catchy working name.',
      '- summary: one sentence describing the concept.',
      '- features: 4-6 concrete core features (short phrases).',
      '- screens: 3-5 key screens/pages (short phrases).',
      '- stack: 3-5 suitable technologies.',
      '- nextStep: one sentence on what GrowHub would build first as the free prototype.',
      `Write every string value in ${language}. Keep it practical and encouraging. Do not include any text outside the JSON.`,
    ].join('\n');

    const input = {
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: idea },
      ],
      max_tokens: 700,
    };

    let raw = '';
    let lastError = '';
    for (const model of MODELS) {
      try {
        // Race against a timeout so a hung inference fails cleanly (JSON),
        // rather than letting the platform return an uncatchable 502.
        const out = (await Promise.race([
          env.AI.run(model, input),
          new Promise((_, reject) => setTimeout(() => reject(new Error('ai_timeout_25s')), 25_000)),
        ])) as { response?: string };
        raw = out.response ?? '';
        if (raw) break;
      } catch (e) {
        lastError = e instanceof Error ? e.message : String(e);
        console.error(`prototype: AI.run failed for ${model}:`, lastError);
      }
    }

    if (!raw) {
      return json({ error: 'ai_failed', stage: 'run', detail: lastError || 'empty response' }, 502);
    }

    const parsed = extractJson(raw);
    if (!parsed || typeof parsed !== 'object') {
      console.error('prototype: could not parse JSON:', raw.slice(0, 600));
      return json({ error: 'ai_failed', stage: 'parse', detail: raw.slice(0, 200) }, 502);
    }

    return json({ ok: true, plan: parsed });
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    console.error('prototype: unhandled error', detail);
    return json({ error: 'ai_failed', stage: 'handler', detail }, 500);
  }
};
