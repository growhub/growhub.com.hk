# Project overview

GrowHub Limited corporate website (`growhub.com.hk`) — a Hong Kong software
studio. Trilingual marketing site: **English (default), Traditional Chinese
(zh-hk), Japanese (ja)**.

Positioning: "Build first, then talk." — start every project with a
**zero-upfront-cost, AI-driven working prototype**, then shape the service
around it. Keep this voice in any copy you write.

## Stack (see `10-tech-stack.md`)

- Astro v5 (`output: 'static'`) + React 19 islands + Tailwind CSS v4
- pnpm (workspace with supply-chain `minimumReleaseAge`), Biome, Vitest, Zod
- Astro i18n, CSS-variable theming, Cloudflare Pages (Functions in `functions/`)

## Golden rules

1. **Match the surrounding code** — idioms, naming, comment density.
2. **kebab-case** filenames; the component-folder convention in `20-conventions.md`.
3. **Every `hooks.ts` has a `hooks.test.ts`** (Vitest).
4. All user-facing text goes through the i18n dictionary (`src/i18n/ui.ts`) in
   **all three locales** — never hardcode copy in a component.
5. Before committing: `pnpm lint && pnpm test && pnpm build` must pass.
6. Do not hardcode secrets; env vars are documented in the README.
