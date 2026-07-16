// @ts-check

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.growhub.com.hk',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'zh-hk',
    locales: ['zh-hk', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'zh-hk',
        locales: {
          'zh-hk': 'zh-Hant-HK',
          en: 'en',
          ja: 'ja',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
