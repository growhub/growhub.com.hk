import { getDict, type Locale, localizePath } from '@i18n/ui';
import type { FooterLink } from './types';

/** Footer navigation links, localized. */
export function buildFooterLinks(lang: Locale): FooterLink[] {
  const t = getDict(lang);
  return [
    { href: localizePath('/', lang), label: t.footer.nav_home },
    { href: localizePath('/policy/privacy', lang), label: t.footer.nav_privacy },
    { href: localizePath('/contact', lang), label: t.footer.nav_contact },
  ];
}
