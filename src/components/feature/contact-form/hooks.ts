import { type Locale, localizePath } from '@i18n/ui';

/** Netlify redirects here after a successful submit (localized thanks page). */
export function buildContactAction(lang: Locale): string {
  return localizePath('/contact/thanks', lang);
}
