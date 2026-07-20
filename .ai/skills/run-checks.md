# Skill: run the quality gate

The gate that must be green before committing:

```bash
pnpm check   # biome: auto-fix lint + format
pnpm test    # vitest run — all suites incl. every hooks.test.ts
pnpm build   # astro build → dist/ must succeed
```

If `pnpm lint` reports formatting diffs, run `pnpm check` to apply them.
For a visual check, `pnpm preview` and open `dist/`, or screenshot with the
pre-installed Chromium.

Common gotchas:

- Missing i18n key in one locale → TypeScript build error. Fill all three.
- New color token in `@theme` shadowing a Tailwind utility → keep colors on
  `:root`.
- A fresh npm release refused → `minimumReleaseAge` (7-day) policy; pin older.
