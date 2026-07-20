# AGENTS.md — guide for Codex & other CLI agents

The **canonical** rules, skills, and agent definitions live in
[`.ai/`](./.ai/README.md). Read those in full before non-trivial work. This file
is the Codex/CLI entry point and summarizes the essentials.

## Project

GrowHub corporate site — Astro v5 (static) + React 19 islands + Tailwind v4,
trilingual (**en default / zh-hk / ja**). Voice: "Build first, then talk." —
zero-upfront-cost, AI-driven prototype first.

## Must-follow rules (details in `.ai/rules/`)

- **kebab-case** filenames; component-folder convention
  (`<name>/{<name>.astro|tsx, index.ts, types.ts, constants.ts, hooks.ts,
  hooks.test.ts}`). Every `hooks.ts` has a `hooks.test.ts` (Vitest).
- All user-facing copy lives in `src/i18n/ui.ts` in **all three** locales.
- Style via CSS variables (`var(--color-*)`); reuse `.card`/`.btn`/… utilities.
  Never add color tokens inside `@theme` (shadows Tailwind utilities).
- Before committing: `pnpm lint && pnpm test && pnpm build` (use `pnpm check`
  to auto-fix). Focused commits, conventional-commit style. PRs only when asked.
- Cloudflare Pages host; contact form is a Pages Function in `functions/`.

## Skills & agents

- Task recipes: `.ai/skills/` — add-component, add-translation, run-checks.
- Roles: `.ai/agents/` — frontend-engineer, reviewer.

Design system: [`DESIGN.md`](./DESIGN.md).
