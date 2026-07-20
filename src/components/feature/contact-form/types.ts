import type { Locale } from '@i18n/ui';

export interface ContactFormProps {
  lang: Locale;
}

export interface ContactErrors {
  name: string;
  email: string;
  content: string;
  turnstile: string;
  generic: string;
}

export interface ContactLabels {
  name: string;
  company: string;
  email: string;
  content: string;
  submit: string;
  sending: string;
  privacyNote: string;
  emailPlaceholder: string;
  errors: ContactErrors;
}

export interface ContactValues {
  name: string;
  company?: string;
  email: string;
  content: string;
}
