/**
 * growhub-ai — runs the prototype-planner inference on Workers AI.
 *
 * Workers AI works reliably from a Worker (its first-class environment), so
 * the site's Pages Function (/api/prototype) forwards to this Worker through a
 * Service binding (AISVC) instead of calling the AI binding from Pages.
 *
 * POST body: { idea: string, lang?: 'en' | 'ja' | 'zh-hk' }
 * Response:  { ok: true, plan } | { error, stage?, detail? }
 */

interface AiBinding {
  run(model: string, input: unknown): Promise<{ response?: string }>;
}

interface Env {
  AI: AiBinding;
}

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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405);
    }
    try {
      let body: { idea?: string; lang?: string };
      try {
        body = (await request.json()) as typeof body;
      } catch {
        return json({ error: 'bad_request' }, 400);
      }

      const idea = (body.idea ?? '').trim().slice(0, MAX_IDEA_LEN);
      if (!idea) {
        return json({ error: 'validation' }, 400);
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
          const out = await env.AI.run(model, input);
          raw = out.response ?? '';
          if (raw) break;
        } catch (e) {
          lastError = e instanceof Error ? e.message : String(e);
          console.error(`growhub-ai: AI.run failed for ${model}:`, lastError);
        }
      }

      if (!raw) {
        return json(
          { error: 'ai_failed', stage: 'run', detail: lastError || 'empty response' },
          502
        );
      }

      const parsed = extractJson(raw);
      if (!parsed || typeof parsed !== 'object') {
        return json({ error: 'ai_failed', stage: 'parse', detail: raw.slice(0, 200) }, 502);
      }

      return json({ ok: true, plan: parsed });
    } catch (e) {
      const detail = e instanceof Error ? e.message : String(e);
      console.error('growhub-ai: unhandled error', detail);
      return json({ error: 'ai_failed', stage: 'handler', detail }, 500);
    }
  },
};
