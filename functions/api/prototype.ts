/**
 * Cloudflare Pages Function — AI prototype-planner demo (POST /api/prototype).
 *
 * Calls OpenRouter (https://openrouter.ai) — an OpenAI-compatible LLM gateway —
 * directly from the Pages Function. No Worker or Service binding is needed.
 *
 * Required Pages configuration (Settings → Environment variables, encrypted):
 *   - `OPENROUTER_API_KEY`  — an OpenRouter API key (sk-or-...).
 * Optional:
 *   - `OPENROUTER_MODEL`    — model slug(s), comma-separated, tried in order.
 *                             Defaults below. Append `:free` for zero-cost tiers,
 *                             e.g. `meta-llama/llama-3.3-70b-instruct:free`
 *                             (free rosters rotate — verify on openrouter.ai/models).
 * Recommended:
 *   - A Rate Limiting rule on /api/prototype (e.g. 5 req/min/IP).
 */

interface Env {
  OPENROUTER_API_KEY?: string;
  OPENROUTER_MODEL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const MAX_IDEA_LEN = 500;
const DEFAULT_MODELS = ['openrouter/free'];

const PLAN_SCHEMA = {
  type: 'object',
  properties: {
    appName: { type: 'string' },
    summary: { type: 'string' },
    features: {
      type: 'array',
      items: { type: 'string' },
      minItems: 3,
      maxItems: 6,
    },
    screens: {
      type: 'array',
      items: { type: 'string' },
      minItems: 3,
      maxItems: 5,
    },
    stack: {
      type: 'array',
      items: { type: 'string' },
      minItems: 2,
      maxItems: 6,
    },
    nextStep: { type: 'string' },
  },
  required: ['appName', 'summary', 'features', 'screens', 'stack', 'nextStep'],
  additionalProperties: false,
} as const;

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

function buildSystemPrompt(lang?: string): string {
  const language = LANG_NAME[lang ?? 'en'] ?? 'English';
  return [
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
}

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

    if (!env.OPENROUTER_API_KEY) {
      return json({ error: 'not_configured' }, 503);
    }

    const models = (env.OPENROUTER_MODEL ?? '')
      .split(',')
      .map((m) => m.trim())
      .filter(Boolean);
    const modelList = models.length > 0 ? models : DEFAULT_MODELS;

    const payload = {
      messages: [
        { role: 'system', content: buildSystemPrompt(body.lang) },
        { role: 'user', content: idea },
      ],
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'prototype_plan',
          strict: true,
          schema: PLAN_SCHEMA,
        },
      },
      max_tokens: 700,
      temperature: 0.4,
    };

    let raw = '';
    let lastError = '';
    let providerStatus: number | undefined;
    for (const model of modelList) {
      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
            'content-type': 'application/json',
            // Optional attribution headers recommended by OpenRouter.
            'http-referer': 'https://growhub.com.hk',
            'x-title': 'GrowHub Prototype Demo',
          },
          body: JSON.stringify({ ...payload, model }),
        });

        if (!res.ok) {
          providerStatus = res.status;
          lastError = `${model}: HTTP ${res.status} ${(await res.text()).slice(0, 160)}`;
          continue;
        }

        const data = (await res.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        raw = data.choices?.[0]?.message?.content ?? '';
        if (raw) break;
        lastError = `${model}: empty response`;
      } catch (e) {
        lastError = `${model}: ${e instanceof Error ? e.message : String(e)}`;
      }
    }

    if (!raw) {
      console.error('prototype: all models failed', lastError);
      return json({ error: 'ai_failed', stage: 'run', providerStatus }, 503);
    }

    const parsed = extractJson(raw);
    if (!parsed || typeof parsed !== 'object') {
      console.error('prototype: model returned an invalid plan');
      return json({ error: 'ai_failed', stage: 'parse' }, 503);
    }

    return json({ ok: true, plan: parsed });
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    console.error('prototype: unhandled error', detail);
    return json({ error: 'ai_failed', stage: 'handler' }, 503);
  }
};
