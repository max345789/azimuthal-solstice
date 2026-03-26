# Show HN: Krud AI – an autonomous CLI agent (curl install, no browser)

**Title:** Show HN: Krud AI – an autonomous CLI agent (curl install, no browser)

---

Hey HN,

I built Krud AI — an autonomous CLI agent that lives in your terminal and actually executes things, not just suggests them.

The core idea: you describe a task in plain English, and Krud plans it, runs the shell commands, reads the output, recovers from errors, and drives it to completion. No browser tab, no IDE plugin, no copy-pasting suggestions.

Some things it handles well:

- Multi-step debugging: reads your stack trace, finds the root cause, applies the fix
- Scaffolding projects from a single sentence description
- Automated git workflows (branch, commit, PR) from a natural language prompt
- Refactoring across many files without manual edits

It uses a rolling token budget to keep long sessions coherent — something I found missing in other tools when tasks spanned many steps.

One-line install (macOS + Linux):

```
curl -fsSL https://install.krud.ai | sh
```

Then: `krud login` → `krud chat`

Free trial included, no credit card.

Site: https://dabcloud.in
GitHub: https://github.com/max345789/krud-ai

Happy to answer questions about the architecture, the token budget approach, or anything else.
