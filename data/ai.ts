import type { AiWorkflow } from "@/types";

export const aiWorkflow: AiWorkflow = {
  intro:
    "AI is part of how I ship software, not an autocomplete on the side. Tools come and go; the loop stays: brief, plan, build with tests, review, verify, document. The agent gets the same context a new teammate would, written down in the repository.",
  loop: [
    {
      step: "brief",
      detail:
        "A written brief with goals, constraints, and integrity rules: what the agent may and may not invent.",
    },
    {
      step: "plan",
      detail:
        "Brainstorm, then a written plan before code. Specs and plans are committed next to the code.",
    },
    {
      step: "build",
      detail:
        "Small tasks, tests first where the stack allows. The agent works from CLAUDE.md and the docs hierarchy, not from chat memory.",
    },
    {
      step: "review",
      detail:
        "AI review passes (code review, security review) followed by my own read of every change.",
    },
    {
      step: "verify",
      detail:
        "Lint, build, run, and drive the actual app before anything is called done.",
    },
    {
      step: "document",
      detail:
        "STATUS, CHANGELOG, and open-question files so the next session, human or agent, starts with context.",
    },
  ],
  prompting: {
    summary:
      "Prompts are repository files with a job, a reading order, rules, and a done checklist. They are versioned like code and reviewed like code.",
    practices: [
      "Role prompts per job: a Builder prompt for features and fixes, a Testing prompt for coverage, each with its own goal, workflow, and checklist.",
      "A docs hierarchy the agent reads first: CONTEXT.md, STATUS.md, coding standards, and the security remediation plan.",
      "Hard rules as NEVER / ALWAYS lists (no secret logging, parameterized SQL, crypto/rand only) that come before style preferences.",
      "A reporting format for finished work: what changed, files, tests added, breaking changes, next steps.",
      "An example session in the prompt so the agent sees a full loop, not just rules.",
      "Tool inventory in CLAUDE.md: which commands, plugins, and MCP servers exist, so the agent uses real tools instead of guessing.",
    ],
  },
  claudeCode: {
    summary:
      "Claude Code is the daily driver, configured per repository rather than per chat.",
    items: [
      {
        name: "CLAUDE.md per repo",
        detail:
          "Stack, commands, architecture, content rules, and the inventory of tools the agent can use.",
      },
      {
        name: "superpowers plugin",
        detail:
          "brainstorming, writing-plans, test-driven-development, systematic-debugging, verification-before-completion.",
      },
      {
        name: "engineering plugin",
        detail:
          "code review, debugging, architecture decision records, deploy checklists, and the MCP connectors it ships with.",
      },
      {
        name: "qodo-standards plugin",
        detail: "Managed coding rules loaded into the session before code is written.",
      },
      {
        name: "memory and specs",
        detail:
          "Persistent memory files plus written specs and plans committed next to the code.",
      },
    ],
  },
  mcp: {
    summary:
      "MCP servers give the agent real tools instead of pasted output. Which servers and tools exist is declared in the project config, so the agent knows exactly what it can call.",
    items: [
      {
        name: "GitLab",
        detail:
          "Pipeline automation from Claude: merge requests, pipeline status, and job logs without leaving the session.",
      },
      {
        name: "cloud infrastructure",
        detail:
          "Managing infrastructure resources through MCP tools, with the same review loop as code changes.",
      },
      {
        name: "issue and ops trackers",
        detail:
          "GitHub, Jira and Confluence, Linear, Datadog, and PagerDuty connectors from the engineering plugin, enabled per project.",
      },
      {
        name: "browser",
        detail:
          "Claude drives a browser against the running app: screenshots, console, DOM checks, keyboard navigation.",
      },
    ],
  },
  environment: [
    "Neovim (LazyVim) as the editor",
    "tmux and lazygit in the terminal",
    "Linux on every machine",
    "Claude Code and Codex as the agents; local LLMs for experiments",
  ],
};
