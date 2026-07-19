import { type FormEvent, useState } from 'react';
import { inputClass, labelClass } from './constants';
import { buildContactSchema } from './hooks';
import type { ContactLabels, ContactValues } from './types';

interface Props {
  labels: ContactLabels;
  /** Localized thanks page to redirect to on success. */
  action: string;
}

type FieldErrors = Partial<Record<'name' | 'email' | 'content' | 'generic', string>>;

const errorText = 'mt-1.5 text-xs text-[#dc2626]';

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&');
}

export default function ContactForm({ labels, action }: Props) {
  const [values, setValues] = useState<ContactValues>({
    name: '',
    company: '',
    email: '',
    content: '',
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const schema = buildContactSchema(labels.errors);

  const update = (key: keyof ContactValues) => (e: { currentTarget: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.currentTarget.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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

    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: parsed.data.name,
          company: parsed.data.company ?? '',
          email: parsed.data.email,
          content: parsed.data.content,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      window.location.href = action;
    } catch {
      setSubmitting(false);
      setErrors({ generic: labels.errors.generic });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
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

      <div className="mt-6 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary w-full disabled:opacity-60 sm:w-auto sm:px-14"
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
