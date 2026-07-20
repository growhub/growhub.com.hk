# Code conventions

## Filenames

- **kebab-case** for everything (`contact-form.astro`, `lang-switcher`, …).

## Component-folder convention

Each component is a folder under `src/components/{ui,feature,page}/<name>/`:

```
<name>/
  <name>.astro | <name>.tsx   # the component (feature.tsx for React islands)
  index.ts                    # barrel re-export
  types.ts                    # 型定義 — TypeScript types/interfaces
  constants.ts                # 定数 — static data (icon paths, image lists…)
  hooks.ts                    # ロジック — pure logic / helpers
  hooks.test.ts               # Vitest tests for hooks.ts (REQUIRED)
```

- `ui/` = generic building blocks (header, footer, logo, lang-switcher…).
- `feature/` = page sections (hero, services, works, contact-form…).
- `page/` = full page compositions.
- Split any non-trivial logic out of `.astro`/`.tsx` into `hooks.ts` and test it.
- Keep static/config data in `constants.ts`, types in `types.ts`.

## i18n

- All copy lives in `src/i18n/ui.ts` under the `Dict` interface, with entries for
  **`en`, `zh-hk`, `ja`** (English is the default, no URL prefix).
- Add a field to the `Dict` interface first, then fill **all three** locales, or
  the build fails on the type.
- Write natural copy per language (not machine translations); keep the
  "prototype-first / zero upfront cost" positioning.
- Use `localizePath(path, lang)` for links; section anchors resolve against the
  localized home (e.g. `/#services`, `/ja#services`).

## Styling

- Read theme via `var(--color-*)` or arbitrary values `[color:var(--color-*)]`.
- Reusable classes (`.card`, `.btn`, `.glass`, `.text-gradient`, …) live in
  `global.css`. Respect `prefers-reduced-motion`.
