import { describe, expect, it } from 'vitest';
import { buildFooterLinks, buildFooterSectionLinks } from './hooks';

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

describe('buildFooterSectionLinks', () => {
  it('resolves section anchors against the home page for the default locale', () => {
    expect(buildFooterSectionLinks('en').map((l) => l.href)).toEqual([
      '/#services',
      '/#capabilities',
      '/#ai',
      '/#works',
      '/#company',
    ]);
  });

  it('prefixes anchors with the localized home for non-default locales', () => {
    expect(buildFooterSectionLinks('ja')[0].href).toBe('/ja#services');
    expect(buildFooterSectionLinks('zh-hk')[4].href).toBe('/zh-hk#company');
  });
});
