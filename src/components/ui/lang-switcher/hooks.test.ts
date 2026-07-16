import { describe, expect, it } from 'vitest';
import { buildLocaleLinks } from './hooks';

describe('buildLocaleLinks', () => {
  it('returns a link for every locale', () => {
    const links = buildLocaleLinks('zh-hk', '/');
    expect(links.map((l) => l.code)).toEqual(['zh-hk', 'en', 'ja']);
  });

  it('marks the current locale active', () => {
    const links = buildLocaleLinks('ja', '/');
    expect(links.find((l) => l.active)?.code).toBe('ja');
    expect(links.filter((l) => l.active)).toHaveLength(1);
  });

  it('preserves the route across locales', () => {
    const links = buildLocaleLinks('en', '/contact');
    expect(links.find((l) => l.code === 'zh-hk')?.href).toBe('/contact');
    expect(links.find((l) => l.code === 'en')?.href).toBe('/en/contact');
    expect(links.find((l) => l.code === 'ja')?.href).toBe('/ja/contact');
  });

  it('uses the short locale label', () => {
    const links = buildLocaleLinks('en', '/');
    expect(links.find((l) => l.code === 'ja')?.label).toBe('日');
  });
});
