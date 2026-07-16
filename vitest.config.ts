import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': r('./src'),
      '@ui': r('./src/components/ui'),
      '@feature': r('./src/components/feature'),
      '@page': r('./src/components/page'),
      '@layouts': r('./src/layouts'),
      '@i18n': r('./src/i18n'),
    },
  },
});
