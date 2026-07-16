import { getDict, type Locale, localeNames, locales, localizePath } from '@i18n/ui';
import type { LangLink, NavLink } from './types';

/** Primary nav links. Section anchors resolve against the localized home page. */
export function buildNavLinks(lang: Locale): NavLink[] {
  const t = getDict(lang);
  const home = localizePath('/', lang);
  const base = home === '/' ? '' : home;
  return [
    { href: `${base}#services`, label: t.nav.services },
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
