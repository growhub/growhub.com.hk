import { getDict, type Locale, localeNames, locales, localizePath } from '@i18n/ui';
import type { LangLink, NavLink } from './types';

/**
 * Primary nav links. Section anchors always resolve against the localized
 * home page (e.g. `/#services`, `/ja#services`) so they work from any page —
 * clicking a section link from /contact navigates home and scrolls there.
 */
export function buildNavLinks(lang: Locale): NavLink[] {
  const t = getDict(lang);
  const base = localizePath('/', lang);
  return [
    { href: `${base}#services`, label: t.nav.services },
    { href: `${base}#capabilities`, label: t.nav.capabilities },
    { href: `${base}#ai`, label: t.nav.approach },
    { href: `${base}#works`, label: t.nav.works },
    { href: `${base}#company`, label: t.nav.company },
  ];
}

/** Localized "contact" call-to-action link. */
export function buildContactLink(lang: Locale): NavLink {
  return { href: localizePath('/contact', lang), label: getDict(lang).nav.contact };
}

/** One link per locale for the language switcher, flagging the active one. */
export function buildLangLinks(lang: Locale, route: string): LangLink[] {
  return locales.map((loc) => ({
    href: localizePath(route, loc),
    code: loc,
    label: localeNames[loc],
    active: loc === lang,
  }));
}
