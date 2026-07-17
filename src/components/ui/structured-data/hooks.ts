import { getDict, htmlLang, type Locale, locales } from '@i18n/ui';

// biome-ignore lint/suspicious/noExplicitAny: JSON-LD is loosely typed by nature.
type Json = Record<string, any>;

const ORG_ID = '#organization';
const SITE_ID = '#website';

/**
 * schema.org ProfessionalService describing GrowHub, built from the real
 * company data in the i18n dictionary (no fabricated facts).
 */
export function buildOrganizationSchema(lang: Locale, site: URL): Json {
  const t = getDict(lang);
  const { origin } = site;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${origin}/${ORG_ID}`,
    name: 'GrowHub Limited',
    url: `${origin}/`,
    logo: new URL('/android-chrome-512x512.png', site).href,
    image: new URL('/og.png', site).href,
    description: t.meta.home_desc,
    foundingDate: '2019-04-17',
    founder: { '@type': 'Person', name: 'Mika Nakamura' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '21/F., Kam Fung Commercial Building, 2-4 Tin Lok Lane',
      addressLocality: 'Wan Chai',
      addressRegion: 'Hong Kong',
      addressCountry: 'HK',
    },
    areaServed: { '@type': 'Place', name: 'Hong Kong' },
    knowsLanguage: ['zh-Hant', 'en', 'ja'],
    knowsAbout: [
      'Web application development',
      'SaaS development',
      'Website production',
      'Mobile app development',
      'AI-driven development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.services.title,
      itemListElement: t.services.items.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.name, description: s.desc },
      })),
    },
  };
}

/** schema.org WebSite, linked to the organization as publisher. */
export function buildWebsiteSchema(_lang: Locale, site: URL): Json {
  const { origin } = site;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${origin}/${SITE_ID}`,
    name: 'GrowHub',
    url: `${origin}/`,
    inLanguage: locales.map((l) => htmlLang[l]),
    publisher: { '@id': `${origin}/${ORG_ID}` },
  };
}
