import { htmlLang, type Locale, locales, localizePath } from '@i18n/ui';
import { SITE_FALLBACK } from './constants';
import type { AlternateLink } from './types';

/** Resolve the site base URL, falling back to production when unset. */
export function resolveSite(site: URL | undefined): URL {
  return site ?? new URL(SITE_FALLBACK);
}

/** Absolute canonical URL for the given route + locale. */
export function buildCanonical(route: string, lang: Locale, site: URL): string {
  return new URL(localizePath(route, lang), site).href;
}

/** One hreflang alternate per locale, plus an x-default pointing at the default locale. */
export function buildAlternateLinks(route: string, site: URL): AlternateLink[] {
  const links: AlternateLink[] = locales.map((loc) => ({
    hreflang: htmlLang[loc],
    href: new URL(localizePath(route, loc), site).href,
  }));
  links.push({ hreflang: 'x-default', href: new URL(localizePath(route, 'zh-hk'), site).href });
  return links;
}
