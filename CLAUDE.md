# GrowHub — guide for Claude Code

The **canonical** rules, skills, and agent definitions for this repo live in
[`.ai/`](./.ai/README.md). This file is just the Claude Code entry point and
imports the shared rules so they load into context:

@.ai/rules/00-overview.md
@.ai/rules/10-tech-stack.md
@.ai/rules/20-conventions.md
@.ai/rules/30-workflow.md

- **Skills**: `.ai/skills/` (also available at `.claude/skills/`)
- **Agents**: `.ai/agents/` (also available at `.claude/agents/`)

When you change a rule, edit the file under `.ai/` — not a copy. Design system
reference: [`DESIGN.md`](./DESIGN.md).
