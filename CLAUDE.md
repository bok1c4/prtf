# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal portfolio web application. See `prtf.md` for the full spec.

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
- All sections are server components; `"use client"` only for interactive components (e.g. `components/ResumeButton.tsx`)
- Tailwind v4 is imported via `@import "tailwindcss"` in `globals.css`, not via `tailwind.config`; theme is done with CSS variables
- TypeScript path alias: `@/*` → project root
- `next.config.ts` sets `output: "standalone"` for Docker

## Docker

Multi-stage build: Bun installs + Next.js builds in stage 1, Node LTS Alpine runs `node server.js` on port 3000 in stage 2.

## Engineering Approach

- Solve with the smallest effective output
- Change only what is necessary when modifying existing code
- No over-engineering; no heavy dependencies unless justified
- If ambiguity blocks correct implementation, ask one concise clarifying question
