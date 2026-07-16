import { describe, expect, it } from 'vitest';
import { buildContactAction } from './hooks';

describe('buildContactAction', () => {
  it('targets the localized thanks page', () => {
    expect(buildContactAction('zh-hk')).toBe('/contact/thanks');
    expect(buildContactAction('en')).toBe('/en/contact/thanks');
    expect(buildContactAction('ja')).toBe('/ja/contact/thanks');
  });
});
