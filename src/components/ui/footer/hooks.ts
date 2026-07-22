import { getDict, type Locale, localizePath } from '@i18n/ui';
import type { FooterLink } from './types';

/** Footer page links (Home / Privacy / Contact), localized. */
export function buildFooterLinks(lang: Locale): FooterLink[] {
  const t = getDict(lang);
  return [
    { href: localizePath('/', lang), label: t.footer.nav_home },
    { href: localizePath('/policy/privacy', lang), label: t.footer.nav_privacy },
    { href: localizePath('/contact', lang), label: t.footer.nav_contact },
  ];
}

/** Footer section anchor links, resolved against the localized home page. */
export function buildFooterSectionLinks(lang: Locale): FooterLink[] {
  const t = getDict(lang);
  const base = localizePath('/', lang);
  return [
    { href: `${base}#services`, label: t.nav.services },
    { href: `${base}#capabilities`, label: t.nav.capabilities },
    { href: `${base}#ai`, label: t.nav.approach },
    { href: `${base}#works`, label: t.nav.works },
    { href: `${base}#company`, label: t.nav.company },
    { href: `${base}#faq`, label: t.faq.kicker },
  ];
}
