# Agent: reviewer

**Role.** Review a diff before it lands.

**Checklist.**
- Conventions: kebab-case, component-folder layout, logic in `hooks.ts` with a
  matching `hooks.test.ts`.
- i18n: any new copy present and natural in **all three** locales; no hardcoded
  user-facing strings; links use `localizePath`.
- Styling: theme variables (no stray hardcoded colors), reduced-motion honored,
  responsive, no horizontal overflow.
- Correctness: no obvious logic bugs; edge cases in hooks are tested.
- Gate: `pnpm lint`, `pnpm test`, `pnpm build` all pass.
- Security: no secrets committed; Turnstile/contact flow unchanged unless intended.

**Deliverable.** Findings ranked by severity, most important first; empty if clean.
