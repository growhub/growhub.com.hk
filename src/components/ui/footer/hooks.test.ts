import { describe, expect, it } from 'vitest';
import { buildFooterLinks } from './hooks';

describe('buildFooterLinks', () => {
  it('links to home, privacy and contact', () => {
    const links = buildFooterLinks('en');
    expect(links.map((l) => l.href)).toEqual(['/', '/policy/privacy', '/contact']);
  });

  it('localizes hrefs for non-default locales', () => {
    const links = buildFooterLinks('zh-hk');
    expect(links.map((l) => l.href)).toEqual(['/zh-hk', '/zh-hk/policy/privacy', '/zh-hk/contact']);
  });

  it('uses localized labels', () => {
    expect(buildFooterLinks('ja')[0].label).toBe('ホーム');
  });
});
