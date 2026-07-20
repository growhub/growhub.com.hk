# Tech stack & tooling

| Area         | Choice                                                        |
| ------------ | ------------------------------------------------------------- |
| Framework    | Astro v5, `output: 'static'`                                  |
| Interactive  | React 19 via `@astrojs/react` — **islands only**              |
| Styling      | Tailwind CSS v4 (`@tailwindcss/vite`) + CSS-variable theming  |
| i18n         | Astro i18n; central dict `src/i18n/ui.ts`                     |
| Validation   | Zod (contact form)                                            |
| Pkg manager  | pnpm 10.x (`packageManager` pinned)                           |
| Lint/format  | Biome                                                         |
| Tests        | Vitest + jsdom + @testing-library/react                       |
| Hosting      | Cloudflare Pages (was Netlify); Pages Functions in `functions/` |

## Commands

```bash
pnpm dev        # astro dev
pnpm build      # astro build → dist/
pnpm preview    # serve dist/
pnpm lint       # biome check .
pnpm check      # biome check --write .  (auto-fix + format)
pnpm test       # vitest run
```

## Conventions that bite

- **Do not add color tokens inside `@theme`** in `global.css` — a token like
  `--color-base` would shadow Tailwind's `text-base` utility. Colors live on
  `:root` / `:root[data-theme=…]` and are read via `var(--color-*)`.
- pnpm `minimumReleaseAge` (in `pnpm-workspace.yaml`) blocks packages published
  in the last 7 days — expect fresh releases to be refused; that's intentional.
- Biome ignores `public/`. `functions/` runs only in the Cloudflare runtime, so
  the Astro build does not type-check it.
- Path aliases: `@ui`, `@feature`, `@page`, `@layouts`, `@i18n`.
