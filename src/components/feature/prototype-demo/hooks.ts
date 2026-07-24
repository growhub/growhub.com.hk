import type { PrototypePlan } from './types';

/** Coerce an unknown value into a trimmed, de-duplicated string array. */
function toStringArray(value: unknown, max: number): string[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of value) {
    if (typeof item !== 'string') continue;
    const s = item.trim();
    if (!s || seen.has(s)) continue;
    seen.add(s);
    out.push(s);
    if (out.length >= max) break;
  }
  return out;
}

/**
 * Defensively normalise the AI response into a renderable plan. Returns null
 * when the payload has neither a summary nor any features (i.e. unusable).
 */
export function normalizePlan(data: unknown): PrototypePlan | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;
  const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

  const plan: PrototypePlan = {
    appName: str(d.appName),
    summary: str(d.summary),
    features: toStringArray(d.features, 6),
    screens: toStringArray(d.screens, 5),
    stack: toStringArray(d.stack, 6),
    nextStep: str(d.nextStep),
  };

  if (!plan.summary && plan.features.length === 0) return null;
  return plan;
}
