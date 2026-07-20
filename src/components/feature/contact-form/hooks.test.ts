import { describe, expect, it } from 'vitest';
import { buildContactAction, buildContactSchema } from './hooks';
import type { ContactErrors } from './types';

const errors: ContactErrors = {
  name: 'name required',
  email: 'bad email',
  content: 'content required',
  turnstile: 'verify please',
  generic: 'oops',
};
const schema = buildContactSchema(errors);

describe('buildContactAction', () => {
  it('targets the localized thanks page (en is the default locale)', () => {
    expect(buildContactAction('en')).toBe('/contact/thanks');
    expect(buildContactAction('zh-hk')).toBe('/zh-hk/contact/thanks');
    expect(buildContactAction('ja')).toBe('/ja/contact/thanks');
  });
});

describe('buildContactSchema', () => {
  it('accepts a valid submission without a company', () => {
    expect(schema.safeParse({ name: 'Yuki', email: 'a@b.com', content: 'Hello' }).success).toBe(
      true
    );
  });

  it('accepts an optional company', () => {
    expect(
      schema.safeParse({ name: 'Yuki', company: 'GrowHub', email: 'a@b.com', content: 'Hi' })
        .success
    ).toBe(true);
  });

  it('rejects a missing name with the localized message', () => {
    const r = schema.safeParse({ name: '', email: 'a@b.com', content: 'Hi' });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues.find((i) => i.path[0] === 'name')?.message).toBe('name required');
    }
  });

  it('rejects an invalid email', () => {
    const r = schema.safeParse({ name: 'Yuki', email: 'not-an-email', content: 'Hi' });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues.some((i) => i.path[0] === 'email')).toBe(true);
    }
  });

  it('rejects an empty message', () => {
    expect(schema.safeParse({ name: 'Yuki', email: 'a@b.com', content: '' }).success).toBe(false);
  });
});
