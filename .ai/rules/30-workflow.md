# Workflow & git

## Before every commit

```bash
pnpm lint && pnpm test && pnpm build
```

All three must pass. Run `pnpm check` to auto-fix formatting/lint first.

## Verifying UI

Astro has no runtime to unit-test visually, so verify layout by building and
serving `dist/`, then screenshotting with the pre-installed Chromium
(Playwright, `executablePath: '/opt/pw-browsers/chromium'` in CI-like envs).
Force `.reveal` elements visible (`classList.add('is-visible')`) before shots.

## Commits

- Small, focused commits with a clear imperative subject and a short body
  explaining the *why*.
- Conventional-commit style prefixes are used (`feat`, `fix`, `style`,
  `refactor`, `docs`, …) with an optional scope, e.g. `feat(works): …`.
- Do not commit secrets or environment-specific values.
- Only open a pull request when explicitly asked.

## Adding dependencies

- Justify new deps; prefer the platform / existing libraries.
- `minimumReleaseAge` will reject packages younger than 7 days — pin to a
  slightly older release if needed.
- Declare native build deps under `onlyBuiltDependencies` in
  `pnpm-workspace.yaml`.

## Contact form / Cloudflare

- The form posts to the Pages Function `functions/api/contact.ts`, which
  verifies Turnstile server-side and emails via the `send_email` binding.
  Required config is documented in the README. The Function runs only in the
  Cloudflare runtime — verify it on deploy, not in `pnpm build`.
