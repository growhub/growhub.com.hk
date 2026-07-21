import { describe, expect, it } from 'vitest';
import { buildAlternateLinks, buildCanonical, resolveSite } from './hooks';

const site = new URL('https://example.com');

describe('resolveSite', () => {
  it('falls back to the production URL when unset', () => {
    expect(resolveSite(undefined).href).toBe('https://growhub.com.hk/');
  });

  it('passes through a provided site', () => {
    expect(resolveSite(site).href).toBe('https://example.com/');
  });
});

describe('buildCanonical', () => {
  it('builds a localized absolute URL', () => {
    expect(buildCanonical('/contact', 'en', site)).toBe('https://example.com/contact');
    expect(buildCanonical('/', 'zh-hk', site)).toBe('https://example.com/zh-hk');
  });
});

describe('buildAlternateLinks', () => {
  it('emits one link per locale plus x-default', () => {
    const links = buildAlternateLinks('/contact', site);
    expect(links).toHaveLength(4);
    expect(links.find((l) => l.hreflang === 'ja')?.href).toBe('https://example.com/ja/contact');
    expect(links.at(-1)).toEqual({
      hreflang: 'x-default',
      href: 'https://example.com/contact',
    });
  });
});
