# Reddit post for r/commandline

**Subreddit:** r/commandline

**Title:** I built an AI CLI agent that runs commands autonomously in your terminal

---

Hey r/commandline,

I've been building Krud AI for the past several months — an autonomous CLI agent that actually *executes* tasks in your terminal, not just suggests what you should type.

You describe a goal in plain English, and it:

1. Plans the steps
2. Runs the shell commands in your actual environment
3. Reads stdout/stderr and adapts if something fails
4. Completes the task or asks a targeted follow-up

It's different from Copilot CLI or Warp's AI features because it's genuinely autonomous — it can handle multi-step workflows, recover from errors, and keep context across a long session using a rolling token budget.

Works on macOS (Apple Silicon + Intel) and Linux (x86_64).

Install in one line:

```bash
curl -fsSL https://install.krud.ai | sh
```

Then `krud login` and `krud chat`.

Free trial, no credit card. Would love feedback from people who live in the terminal.

https://dabcloud.in
