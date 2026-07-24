import type { Dict, Locale } from '@i18n/ui';

export interface PrototypePlan {
  appName: string;
  summary: string;
  features: string[];
  screens: string[];
  stack: string[];
  nextStep: string;
}

export type DemoLabels = Dict['demo'];

export interface DemoProps {
  lang: Locale;
  labels: DemoLabels;
  contactHref: string;
}
