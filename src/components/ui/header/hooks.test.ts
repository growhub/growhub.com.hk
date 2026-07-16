import { describe, expect, it } from 'vitest';
import { buildContactLink, buildLangLinks, buildNavLinks } from './hooks';

describe('buildNavLinks', () => {
  it('uses bare anchors for the default locale', () => {
    const links = buildNavLinks('zh-hk');
    expect(links.map((l) => l.href)).toEqual([
      '#services',
      '#capabilities',
      '#ai',
      '#works',
      '#company',
    ]);
  });

  it('prefixes anchors with the localized home for non-default locales', () => {
    expect(buildNavLinks('en')[0].href).toBe('/en#services');
    expect(buildNavLinks('en')[1].href).toBe('/en#capabilities');
    expect(buildNavLinks('ja')[4].href).toBe('/ja#company');
  });

  it('labels come from the locale dictionary', () => {
    expect(buildNavLinks('en')[0].label).toBe('Services');
    expect(buildNavLinks('ja')[0].label).toBe('サービス');
  });
});

describe('buildContactLink', () => {
  it('points to the localized contact page', () => {
    expect(buildContactLink('zh-hk').href).toBe('/contact');
    expect(buildContactLink('ja').href).toBe('/ja/contact');
  });
});

describe('buildLangLinks', () => {
  it('returns one link per locale, marking the active one', () => {
    const links = buildLangLinks('en', '/contact');
    expect(links).toHaveLength(3);
    const active = links.find((l) => l.active);
    expect(active?.code).toBe('en');
    expect(active?.href).toBe('/en/contact');
  });

  it('localizes every locale for the current route', () => {
    const links = buildLangLinks('zh-hk', '/policy/privacy');
    expect(links.find((l) => l.code === 'ja')?.href).toBe('/ja/policy/privacy');
    expect(links.find((l) => l.code === 'zh-hk')?.href).toBe('/policy/privacy');
  });
});
