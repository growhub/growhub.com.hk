import { type FormEvent, useEffect, useRef, useState } from 'react';
import { inputClass, labelClass } from './constants';
import { buildContactSchema } from './hooks';
import type { ContactLabels, ContactValues } from './types';

interface Props {
  labels: ContactLabels;
  /** Localized thanks page to redirect to on success. */
  action: string;
  /** Cloudflare Turnstile site key. Empty string disables the widget. */
  siteKey?: string;
}

type FieldErrors = Partial<Record<'name' | 'email' | 'content' | 'turnstile' | 'generic', string>>;

interface TurnstileApi {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      callback?: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
      theme?: 'light' | 'dark' | 'auto';
    }
  ) => string;
  reset: (id?: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
const errorText = 'mt-1.5 text-xs text-[#dc2626]';

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

/** Load the Turnstile script once and resolve when window.turnstile is ready. */
function loadTurnstile(): Promise<TurnstileApi> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) {
      resolve(window.turnstile);
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SRC}"]`);
    const onReady = () => {
      if (window.turnstile) resolve(window.turnstile);
      else reject(new Error('turnstile unavailable'));
    };
    if (existing) {
      existing.addEventListener('load', onReady);
      existing.addEventListener('error', () => reject(new Error('turnstile failed to load')));
      return;
    }
    const script = document.createElement('script');
    script.src = TURNSTILE_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', onReady);
    script.addEventListener('error', () => reject(new Error('turnstile failed to load')));
    document.head.appendChild(script);
  });
}

export default function ContactForm({ labels, action, siteKey = '' }: Props) {
  const [values, setValues] = useState<ContactValues>({
    name: '',
    company: '',
    email: '',
    content: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [token, setToken] = useState('');

  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const schema = buildContactSchema(labels.errors);
  const turnstileEnabled = siteKey !== '';

  // Render the Turnstile widget once the script is ready.
  useEffect(() => {
    if (!turnstileEnabled || !widgetRef.current) return;
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !widgetRef.current || widgetId.current !== null) return;
        widgetId.current = ts.render(widgetRef.current, {
          sitekey: siteKey,
          theme: 'auto',
          callback: (t) => {
            setToken(t);
            setErrors((prev) => ({ ...prev, turnstile: undefined }));
          },
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        });
      })
      .catch(() => {
        // If the challenge script is blocked, don't hard-block the user.
        setErrors((prev) => ({ ...prev, turnstile: undefined }));
      });
    return () => {
      cancelled = true;
    };
  }, [turnstileEnabled, siteKey]);

  const update = (key: keyof ContactValues) => (e: { currentTarget: { value: string } }) => {
    // Read the value synchronously — the synthetic event's currentTarget is
    // nulled out by the time the state updater runs during render.
    const value = e.currentTarget.value;
    setValues((v) => ({ ...v, [key]: value }));
  };

  const resetTurnstile = () => {
    setToken('');
    if (turnstileEnabled && window.turnstile && widgetId.current !== null) {
      window.turnstile.reset(widgetId.current);
    }
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Capture the honeypot before any await (currentTarget clears afterwards).
    const honeypot =
      (e.currentTarget.elements.namedItem('company_url') as HTMLInputElement | null)?.value ?? '';
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    if (turnstileEnabled && !token) {
      setErrors({ turnstile: labels.errors.turnstile });
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          name: parsed.data.name,
          company: parsed.data.company ?? '',
          email: parsed.data.email,
          content: parsed.data.content,
          'cf-turnstile-response': token,
          company_url: honeypot,
        }),
      });
      if (res.ok) {
        window.location.href = action;
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.status === 400 && data.error === 'turnstile') {
        setSubmitting(false);
        resetTurnstile();
        setErrors({ turnstile: labels.errors.turnstile });
        return;
      }
      throw new Error('submit failed');
    } catch {
      setSubmitting(false);
      resetTurnstile();
      setErrors({ generic: labels.errors.generic });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      {/* Honeypot — hidden from real users; bots that fill it are dropped. */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            {labels.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            className={inputClass}
          />
          {errors.name && <p className={errorText}>{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            {labels.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={update('company')}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="email">
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={update('email')}
          placeholder={labels.emailPlaceholder}
          aria-invalid={Boolean(errors.email)}
          className={inputClass}
        />
        {errors.email && <p className={errorText}>{errors.email}</p>}
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="content">
          {labels.content}
        </label>
        <textarea
          id="content"
          name="content"
          rows={6}
          value={values.content}
          onChange={update('content')}
          aria-invalid={Boolean(errors.content)}
          className={inputClass}
        />
        {errors.content && <p className={errorText}>{errors.content}</p>}
      </div>

      {turnstileEnabled && (
        <div className="mt-5">
          <div ref={widgetRef} className="flex justify-center sm:justify-start" />
          {errors.turnstile && <p className={errorText}>{errors.turnstile}</p>}
        </div>
      )}

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary w-full py-4 text-base font-semibold disabled:opacity-60 sm:w-auto sm:min-w-[20rem] sm:py-5 sm:text-lg"
        >
          {submitting ? labels.sending : labels.submit}
        </button>
        {errors.generic && <p className="text-xs text-[#dc2626]">{errors.generic}</p>}
        <p className="text-center text-xs text-[color:var(--color-ink-faint)]">
          {labels.privacyNote}
        </p>
      </div>
    </form>
  );
}
