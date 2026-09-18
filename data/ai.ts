import type { AiWorkflow } from "@/types";

export const aiWorkflow: AiWorkflow = {
  intro:
    "AI is how I build now, and I enjoy the craft more because of it. Not autocomplete on the side: an agent in the terminal all day, briefed like a teammate. The loop stays the same whether the codebase is years old or an empty directory: brief, plan, build with tests, review, verify, document. The agent gets the same context a new colleague would, written down in the repository.",
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
      "A daily pair, not a chat window. Every repository carries its own setup, so a session starts knowing the project instead of asking about it.",
    items: [
      {
        name: "a codebase I'm new to",
        detail:
          "The first session is orientation: the agent reads the repository and writes down what it learned (stack, commands, architecture, rules), so every session after starts productive.",
      },
      {
        name: "from the ground up",
        detail:
          "Brainstorm before code: goals, constraints, and trade-offs argued out with the agent, a plan written and committed next to the code, then small tasks with tests first.",
      },
      {
        name: "the everyday",
        detail:
          "Features, fixes, debugging, and reviews run the same loop, with planning, review, and verification checklists so quality does not depend on the day.",
      },
      {
        name: "memory and specs",
        detail:
          "Persistent memory files plus written specs and plans committed next to the code, so the next session, human or agent, picks up where the last one stopped.",
      },
    ],
  },
  mcp: {
    summary:
      "The agent does not just write code, it acts. MCP servers give it real tools instead of pasted output, declared per project so it knows exactly what it can call.",
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
