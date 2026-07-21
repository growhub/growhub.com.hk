import { describe, expect, it } from 'vitest';
import { buildOrganizationSchema, buildWebsiteSchema } from './hooks';

const site = new URL('https://growhub.com.hk');

describe('buildOrganizationSchema', () => {
  it('is a ProfessionalService with the real company identity', () => {
    const org = buildOrganizationSchema('en', site);
    expect(org['@type']).toBe('ProfessionalService');
    expect(org.name).toBe('GrowHub Limited');
    expect(org.foundingDate).toBe('2019-04-17');
    expect(org.founder).toEqual({ '@type': 'Person', name: 'Mika Nakamura' });
    expect(org.address.addressCountry).toBe('HK');
  });

  it('uses absolute asset URLs', () => {
    const org = buildOrganizationSchema('en', site);
    expect(org.logo).toBe('https://growhub.com.hk/android-chrome-512x512.png');
    expect(org.image).toBe('https://growhub.com.hk/og.png');
  });

  it('exposes the four services as an OfferCatalog', () => {
    const org = buildOrganizationSchema('ja', site);
    expect(org.hasOfferCatalog.itemListElement).toHaveLength(4);
    expect(org.hasOfferCatalog.itemListElement[0].itemOffered['@type']).toBe('Service');
    expect(org.hasOfferCatalog.itemListElement[0].itemOffered.name).toBe('Webアプリ・サービス開発');
  });

  it('localizes the description', () => {
    expect(buildOrganizationSchema('en', site).description).toContain('Hong Kong');
    expect(buildOrganizationSchema('ja', site).description).toContain('香港');
  });
});

describe('buildWebsiteSchema', () => {
  it('is a WebSite listing all site languages and linking the publisher', () => {
    const web = buildWebsiteSchema('en', site);
    expect(web['@type']).toBe('WebSite');
    expect(web.inLanguage).toEqual(['en', 'zh-Hant-HK', 'ja']);
    expect(web.publisher['@id']).toBe('https://growhub.com.hk/#organization');
  });
});
