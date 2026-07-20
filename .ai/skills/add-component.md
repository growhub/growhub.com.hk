# Skill: add a component

1. Decide the layer: `ui/` (generic), `feature/` (page section), or `page/`.
2. Create `src/components/<layer>/<name>/` (kebab-case) with:
   - `<name>.astro` or `<name>.tsx` (React island → `client:*` directive)
   - `index.ts` barrel: `export { default } from './<name>.astro'`
   - `types.ts` — props/types
   - `constants.ts` — static data (only if needed)
   - `hooks.ts` + `hooks.test.ts` — any non-trivial logic, with Vitest tests
3. Pull all copy from `src/i18n/ui.ts` (add fields to `Dict` + all 3 locales).
4. Style with theme variables (`var(--color-*)`) and existing utility classes.
5. Wire it into the page composition (e.g. `src/components/page/home-page`).
6. `pnpm check && pnpm test && pnpm build`, then screenshot to verify layout.
