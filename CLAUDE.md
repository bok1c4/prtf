# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal portfolio web application. `prtf.md` is the original generation prompt (historical context only) — the actual build diverges from it: shadcn/ui was not used; plain Tailwind + CSS variables are used instead.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** (no shadcn/ui — uses plain Tailwind + CSS variables)
- **Bun** as package manager (production runtime: Node LTS)

## Commands

```bash
bun install          # install dependencies
bun run dev          # start dev server
bun run build        # production build
bun run start        # start production server
bun run lint         # run ESLint
```

No test runner is configured.

## Architecture

- All portfolio content lives in `data/index.ts` — sections are pure presentation layers that import from it
- Types for all data structures are in `types/index.ts`
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for class composition
- Most sections are server components; `"use client"` only for interactive components — `sections/Projects.tsx` is a client component (demo system state), `components/ResumeButton.tsx` and `components/DemoTerminal.tsx` are also client
- Tailwind v4 is imported via `@import "tailwindcss"` in `globals.css`, not via `tailwind.config`; theme is done with CSS variables
- TypeScript path alias: `@/*` → project root
- `next.config.ts` sets `output: "standalone"` for Docker
- Dark theme only — no light mode. CSS variables in `globals.css` are set unconditionally; there is no media query or theme toggle.

## Demo System

`lib/demo.ts` manages ephemeral Docker Compose instances for the "Run ▶" button on the Toy Store project card. API routes are under `app/api/demo/`. `components/DemoTerminal.tsx` renders an xterm.js terminal streaming SSE logs.

- Allowlist: only `github.com/bok1c4/toy_store` is permitted
- TTL: 5 min, then `docker compose down -v` auto-runs
- In-memory `Map` tracks instances — no database needed
- Projects with a `demo` field in `data/index.ts` get the Run button
- When deployed in Docker, the socket must be mounted: `-v /var/run/docker.sock:/var/run/docker.sock`

## Docker

Multi-stage build: stage 1 uses `npm install --frozen-lockfile` + `npm run build` (not bun — bun is local-only); stage 2 runs Node LTS Alpine with `node server.js` on port 3000. Do not convert the Dockerfile to use bun.

## Engineering Approach

- Solve with the smallest effective output
- Change only what is necessary when modifying existing code
- No over-engineering; no heavy dependencies unless justified
- If ambiguity blocks correct implementation, ask one concise clarifying question
