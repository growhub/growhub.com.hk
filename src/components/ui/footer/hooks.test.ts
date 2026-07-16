import { describe, expect, it } from 'vitest';
import { buildFooterLinks } from './hooks';

describe('buildFooterLinks', () => {
  it('links to home, privacy and contact', () => {
    const links = buildFooterLinks('zh-hk');
    expect(links.map((l) => l.href)).toEqual(['/', '/policy/privacy', '/contact']);
  });

  it('localizes hrefs for non-default locales', () => {
    const links = buildFooterLinks('en');
    expect(links.map((l) => l.href)).toEqual(['/en', '/en/policy/privacy', '/en/contact']);
  });

  it('uses localized labels', () => {
    expect(buildFooterLinks('ja')[0].label).toBe('ホーム');
  });
});
