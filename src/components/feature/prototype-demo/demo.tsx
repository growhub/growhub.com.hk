import { type FormEvent, useState } from 'react';
import { normalizePlan } from './hooks';
import type { DemoProps, PrototypePlan } from './types';

type Status = 'idle' | 'loading' | 'done' | 'error';

export default function Demo({ lang, labels, contactHref }: DemoProps) {
  const [idea, setIdea] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [plan, setPlan] = useState<PrototypePlan | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const honeypot =
      (e.currentTarget.elements.namedItem('company_url') as HTMLInputElement | null)?.value ?? '';
    const value = idea.trim();
    if (!value) {
      setStatus('error');
      setError(labels.errors.empty);
      return;
    }

    setStatus('loading');
    setError('');
    setPlan(null);
    try {
      const res = await fetch('/api/prototype', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea: value, lang, company_url: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        plan?: unknown;
        error?: string;
      };
      if (res.status === 503 || data.error === 'not_configured') {
        setStatus('error');
        setError(labels.errors.notConfigured);
        return;
      }
      const normalised = data.ok ? normalizePlan(data.plan) : null;
      if (!normalised) {
        setStatus('error');
        setError(labels.errors.failed);
        return;
      }
      setPlan(normalised);
      setStatus('done');
    } catch {
      setStatus('error');
      setError(labels.errors.failed);
    }
  }

  function reset() {
    setStatus('idle');
    setPlan(null);
    setError('');
    setIdea('');
  }

  const chipList = 'flex flex-wrap gap-2';
  const chip =
    'rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-3 py-1.5 text-sm text-[color:var(--color-ink-muted)]';

  return (
    <div className="mx-auto mt-10 max-w-3xl">
      {status !== 'done' && (
        <form onSubmit={onSubmit} className="card p-6 sm:p-8">
          <label htmlFor="demo-idea" className="sr-only">
            {labels.placeholder}
          </label>
          <textarea
            id="demo-idea"
            name="idea"
            rows={3}
            maxLength={500}
            value={idea}
            onChange={(e) => {
              const v = e.currentTarget.value;
              setIdea(v);
            }}
            placeholder={labels.placeholder}
            className="w-full resize-none rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] px-4 py-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink-faint)] transition focus:border-[color:var(--color-brand-2)] focus:outline-none"
          />

          {/* Honeypot */}
          <input
            type="text"
            name="company_url"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {labels.examples.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setIdea(ex)}
                className={`${chip} transition-colors hover:border-[color:var(--color-brand-2)] hover:text-[color:var(--color-brand)]`}
              >
                {ex}
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-primary disabled:opacity-60"
            >
              {status === 'loading' ? labels.loading : labels.button}
            </button>
            {status === 'loading' && (
              <span
                className="h-5 w-5 animate-spin rounded-full border-2 border-[color:var(--color-border)] border-t-[color:var(--color-brand)]"
                aria-hidden="true"
              />
            )}
          </div>

          {status === 'error' && <p className="mt-3 text-sm text-[#dc2626]">{error}</p>}
          <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-ink-faint)]">
            {labels.disclaimer}
          </p>
        </form>
      )}

      {status === 'done' && plan && (
        <div className="card p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-brand-2)]">
            {labels.result.heading}
          </p>
          {plan.appName && (
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
              {plan.appName}
            </h3>
          )}
          {plan.summary && (
            <p className="mt-2 leading-relaxed text-[color:var(--color-ink-muted)]">
              {plan.summary}
            </p>
          )}

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {plan.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {labels.result.features}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-[color:var(--color-ink-muted)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand-2)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {plan.screens.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-[color:var(--color-ink)]">
                  {labels.result.screens}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {plan.screens.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-[color:var(--color-ink-muted)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {plan.stack.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[color:var(--color-ink)]">
                {labels.result.stack}
              </h4>
              <div className={`${chipList} mt-2`}>
                {plan.stack.map((s) => (
                  <span key={s} className={chip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {plan.nextStep && (
            <div className="mt-6 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-2)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-brand-2)]">
                {labels.result.nextStep}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--color-ink)]">
                {plan.nextStep}
              </p>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href={contactHref} className="btn btn-primary">
              {labels.result.cta}
            </a>
            <button type="button" onClick={reset} className="btn btn-ghost">
              {labels.result.again}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
