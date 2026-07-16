import { type Locale, localeNames, locales, localizePath } from '@i18n/ui';
import type { LocaleLink } from './types';

/** Build a switcher link for every locale, preserving the current route. */
export function buildLocaleLinks(lang: Locale, route: string): LocaleLink[] {
  return locales.map((loc) => ({
    href: localizePath(route, loc),
    code: loc,
    label: localeNames[loc],
    active: loc === lang,
  }));
}
