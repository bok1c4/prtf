# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal portfolio site with case studies and a resume. All content is hardcoded in `data/`; there is no CMS, API, or database.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** via `@import "tailwindcss"` in `app/globals.css` (no `tailwind.config`, no shadcn/ui)
- **Bun** for local development; **npm + Node LTS** inside Docker
- `next/font/google` (JetBrains Mono only), `next/og` for the Open Graph image and favicon, `@vercel/analytics`

## Commands

```bash
bun install                      # install dependencies
bun run dev                      # start dev server
bun run build                    # production build
bun run start                    # start production server
bun run lint                     # run ESLint (next lint)
rm -rf .next && bun run build    # clean rebuild
```

No test runner is configured.

The `dev` script prefixes `NODE_OPTIONS=--no-experimental-webstorage` using POSIX env syntax. `bun run dev` handles that on every OS; `npm run dev` on Windows will not.

Without local Bun or Node, build in a container: `docker run --rm -v "$PWD:/app" -v prtf_node_modules:/app/node_modules -w /app oven/bun:1 sh -c "bun install && bun run lint && bun run build"`.

## Architecture

- **Content lives in `data/`** (`site.ts`, `personal.ts`, `skills.ts`, `experience.ts`, `projects.ts`, `resume.ts`, `ai.ts`, `homelab.ts`), re-exported from `data/index.ts` and typed by `types/index.ts`. Sections, pages, and the shell's command output are presentation only.
- **Routes**: `/` (`app/page.tsx` composes `sections/*` in order: Hero, AiWorkflow, Work, HomeLab, About, Capabilities, Experience, Contact), `/work/[slug]` (statically generated from `caseStudies`), `/resume`, plus `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`, `not-found.tsx`.
- **Design tokens** are CSS variables in `app/globals.css`: raw gruvbox colors (`--gb-*`, utilities `text-gb-yellow`, `bg-gb-green`, ...) mapped onto semantic tokens (`--canvas`, `--surface`, `--ink`, `--accent`, ...) exposed through `@theme inline` as `bg-canvas`, `text-ink`, `border-line`, etc. Print CSS re-maps the tokens to a light palette for `.resume`. Add new colors as tokens, not as raw hex in components.
- **TUI primitives**: `components/ui/Pane.tsx` (bordered section with a title on the border), `components/ui/Prompt.tsx` (decorative `user@host:path$ cmd` line), `components/ui/Buffer.tsx` (line-number gutter plus status line), `components/ui/SectionHeader.tsx` (prompt + `#` heading). Chrome: `components/TopBar.tsx` (tmux windows), `components/StatusLine.tsx` (bottom bar), `components/KeyboardNav.tsx` (`g` chords, `:`, `?`).
- **Client components**: `Terminal.tsx` (the shell; its command table lives in the same file and reads from `data/`), `StatusLine.tsx`, `KeyboardNav.tsx`, `PrintButton.tsx`. Everything else is a server component; add `"use client"` only for state or browser events.
- **Links**: use `components/ui/SmartLink.tsx` (or `ButtonLink`) rather than raw `<a>`/`Link`; it handles external links (new tab plus screen-reader note), hash and mailto links, and static files.
- **Diagrams** are dependency-free (`FlowDiagram`: CSS grid, stacks on mobile). Per-case-study diagram content is in `components/diagrams/index.tsx`, keyed by `CaseStudy.diagram`. Only public projects get diagrams.
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge), used by the ui primitives.
- TypeScript path alias: `@/*` → project root
- `next.config.ts` sets `output: "standalone"` for Docker

## Content rules

- Every fact must trace to `data/`, the public GitHub repositories, or the owner's confirmation. `CONTENT_REVIEW.md` lists what is unverified; do not turn an open question into a claim.
- No numeric metrics unless the owner supplies them.
- Client work (Fairphone on Odoo, the Rust platform under NDA) is described only at the level already on the pages; do not add internals, data, or numbers. The hero never names clients.
- The owner never held a Linux administration job; the operations background is Hack The Box and the home lab.

## Resume

`/resume` renders from `data/` with print styles (A4, navigation hidden). `public/resume.pdf` is generated from that route with headless Chrome (command in `README.md`); regenerate it after any content change. `ResumeButton` links to `/resume` and to `resume.url` (`/resume.pdf`).

## Docker

Multi-stage build on `node:lts-alpine`: stage 1 runs `npm install` and `npm run build` (Bun is not in the image), stage 2 runs `node server.js` from the standalone output on port 3000. Both `bun.lock` and `package-lock.json` are tracked; keep them in sync because local dev uses Bun and Docker uses npm.

## Engineering Approach

- Solve with the smallest effective output
- Change only what is necessary when modifying existing code
- No over-engineering; no heavy dependencies unless justified
- If ambiguity blocks correct implementation, ask one concise clarifying question
