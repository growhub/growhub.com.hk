# .ai — shared AI development config

This directory is the **single source of truth** for AI coding assistants
working on this repository. Tool-specific entry points all point back here so
that Claude Code, Cursor, and Codex (and any future tool) share the same rules,
skills, and agent definitions.

```
.ai/
  rules/    # how to write code in this repo (conventions, stack, workflow)
  skills/   # step-by-step task recipes (add a component, a translation, …)
  agents/   # role definitions for delegated sub-agents
```

## How each tool consumes this

| Tool        | Entry point (committed)     | Points to        |
| ----------- | --------------------------- | ---------------- |
| Claude Code | `CLAUDE.md`, `.claude/`     | `.ai/`           |
| Cursor      | `.cursor/rules/*.mdc`       | `.ai/`           |
| Codex / CLI | `AGENTS.md`, `.agents/`     | `.ai/`           |

`.claude/agents`, `.claude/skills`, and `.agents/` are symlinks to the matching
`.ai/` folders, so there is only ever one copy to maintain. Edit files under
`.ai/` — never the symlinks or the pointer files, except to change the pointer
itself.

Start with [`rules/00-overview.md`](./rules/00-overview.md).
