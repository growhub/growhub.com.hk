import { type Locale, localizePath } from '@i18n/ui';
import { z } from 'zod';
import type { ContactErrors } from './types';

/** Netlify redirects here after a successful submit (localized thanks page). */
export function buildContactAction(lang: Locale): string {
  return localizePath('/contact/thanks', lang);
}

/**
 * Zod schema for the contact form with localized error messages.
 * `company` is optional; name / email / message are required.
 */
export function buildContactSchema(errors: ContactErrors) {
  return z.object({
    name: z.string().trim().min(1, errors.name),
    company: z.string().trim().optional(),
    email: z.string().trim().min(1, errors.email).email(errors.email),
    content: z.string().trim().min(1, errors.content),
  });
}
