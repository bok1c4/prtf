# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal portfolio site. All content is hardcoded in `data/`; the CV in `public/Boris_Nikolic_CV.pdf` is generated from it. There is no CMS, API, or database.

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

No test runner is configured, and there is no CI: lint and build run only locally or in the Docker command below. There is no separate `tsc` script; `bun run build` is the type check.

Regenerate the CV with the site running (any headless Chromium: Chrome, Edge, or Brave):

```bash
chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/Boris_Nikolic_CV.pdf http://localhost:3000/resume
```

The `dev` script prefixes `NODE_OPTIONS=--no-experimental-webstorage` using POSIX env syntax. `bun run dev` handles that on every OS; `npm run dev` on Windows will not.

Without local Bun or Node, build in a container: `docker run --rm -v "$PWD:/app" -v prtf_node_modules:/app/node_modules -w /app oven/bun:1 sh -c "bun install && bun run lint && bun run build"`.

## Architecture

- **Content lives in `data/`** (`site.ts`, `personal.ts`, `skills.ts`, `experience.ts`, `projects.ts`, `resume.ts`, `ai.ts`, `homelab.ts`), re-exported from `data/index.ts` and typed by `types/index.ts`. Sections, pages, `/resume`, and the shell's command output are presentation only; change copy in `data/`, in one place.
- **Copy that is not in `data/`**: a few strings are hardcoded and must be updated by hand when the matching data changes. `data/site.ts` restates the tagline in `SITE.title` and `SITE.description` (separately from `positioning.taglineFocus`); `app/opengraph-image.tsx` hardcodes the stack line and the tab strip; `components/Terminal.tsx` hardcodes the CV path in the `cv` command (everything else uses `resume.url`) and the `neofetch`/`uname` version strings; section headings and ledes live in `sections/*`.
- **Routes**: `/` (`app/page.tsx` composes `sections/*` in order: Hero, Work, Experience, Capabilities, AiWorkflow, HomeLab, About, Contact), `/resume`, plus `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`, `not-found.tsx`. The tab order in `components/TopBar.tsx` and the chord order in `components/KeyboardNav.tsx` mirror the page order.
- **Anchors are a shared contract**: each section's `Pane id` (`work`, `experience`, `capabilities`, `ai`, `homelab`, `about`, `contact`) is referenced by `windows` in `TopBar.tsx`, `chords` in `KeyboardNav.tsx`, the hero buttons and their `keyHint`s, and the key list in the shell's `help` output and `README.md`; `StatusLine.tsx` displays the id of the section in view as `~/prtf/<id>.md`. Renaming or adding a section touches all of them. Likewise `ProjectCard` renders `id="project-<slug>"` for the shell's `open <slug>`, and `KeyboardNav` focuses `#terminal-input` on `:`.
- **Design tokens** are CSS variables in `app/globals.css`: raw gruvbox colors (`--gb-*`, utilities `text-gb-yellow`, `bg-gb-green`, ...) mapped onto semantic tokens (`--canvas`, `--surface`, `--ink`, `--accent`, ...) exposed through `@theme inline` as `bg-canvas`, `text-ink`, `border-line`, etc. Print CSS re-maps the tokens to a light palette for `.resume`. Add new colors as tokens, not as raw hex in components. The exceptions are `app/opengraph-image.tsx`, `app/icon.tsx`, and `viewport.themeColor` in `app/layout.tsx`: `next/og` and metadata cannot read CSS variables, so they repeat the gruvbox hex values and need a manual update if the palette changes.
- **TUI primitives**: `components/ui/Pane.tsx` (bordered section with a title on the border), `components/ui/Prompt.tsx` (decorative `user@host:path$ cmd` line), `components/ui/Buffer.tsx` (line-number gutter plus status line), `components/ui/SectionHeader.tsx` (prompt + `#` heading). Chrome: `components/TopBar.tsx` (tmux windows), `components/StatusLine.tsx` (bottom bar), `components/KeyboardNav.tsx` (`g` chords, `:`, `?`).
- **Client components**: `Terminal.tsx` (the shell), `StatusLine.tsx`, `KeyboardNav.tsx`, `PrintButton.tsx`. Everything else is a server component; add `"use client"` only for state or browser events.
- **The shell** (`components/Terminal.tsx`) reads from `data/`. A new command touches three places in that file: the `COMMANDS` array (tab completion), the `switch` in `run()`, and the `help` output; a new virtual file goes in the `FILES` array (for `ls` and completion) and in the `catFile` switch. `neofetch` and `contact` look up `positioning.currently` by label (`role`, `open to`, `based`, `degree`), so renaming a label in `data/personal.ts` silently prints `undefined` there.
- **SEO**: `app/layout.tsx` builds the metadata and a JSON-LD Person schema from `data/site.ts` and `data/personal.ts`, but hardcodes the postal address (Belgrade, RS); update it there if the location changes. `app/opengraph-image.tsx` fetches JetBrains Mono from GitHub when the image is rendered and falls back to `monospace` if the fetch fails, so an offline build produces a differently set image without an error.
- **Links**: use `components/ui/SmartLink.tsx` (or `ButtonLink`) rather than raw `<a>`/`Link`; it handles external links (new tab plus screen-reader note), hash and mailto links, and static files.
- `lib/utils.ts` exports `cn()` (clsx + tailwind-merge), used by the ui primitives.
- TypeScript path alias: `@/*` → project root
- `next.config.ts` sets `output: "standalone"` for Docker

## Content rules

- Every fact on the site must trace to the owner's statements recorded in `CONTENT_REVIEW.md`, to a public GitHub repository, or to code that was read. Do not turn an open question into a claim.
- No numeric metrics, counts of years of experience, or dates beyond those recorded in `CONTENT_REVIEW.md`. The project count in the projects lede is computed from `data/projects.ts`; do not hardcode it. The degree is expected in 2027; never say it is completed.
- Client work (Fairphone) is described only at the level recorded in `PROJECT_ARCHITECTURE.md`, which the owner confirmed the agreement allows (2026-11-07); no client data, figures, or code. The CDC system is a prototype; never call it production. The customer-facing web shop on top of Odoo was another team's project; never mention it.
- Copy leads with the role and the stack, not with AI, and introduces the owner as a software engineer, not as a client's developer: Fairphone and Odoo are evidence under Experience, not the identity. AI-assisted development appears under Skills, in its own section, and as the last sentence of the summary (owner's request, 2026-11-21); keep it out of the hero.
- No editor or tool lists (Neovim, tmux, lazygit) and no plugin names on the site.
- Private repositories are never linked from the site. The client repositories (`fair-material`, `DCP`) are never named or linked; the modules are described only as recorded in `PROJECT_ARCHITECTURE.md`. Insightify's app repository is private, so its project links the public `website-scraper` repository instead.
- Copy style: no em dashes; use colons, commas, "·", or an en dash in date ranges. Keep copy lean, no filler, and do not let adjacent copy restate itself.
- Every content change gets a dated entry in `CHANGELOG.md` (what changed and why); a new claim also gets its source recorded in `CONTENT_REVIEW.md`, and anything said about a system must stay within `PROJECT_ARCHITECTURE.md`.

## Workflow

Work lands on `chore/<topic>` (or `feat/<topic>`) branches merged into `main` by pull request; do not commit to `main` directly. Copy changes use a `content:` commit prefix.

## Resume and CV

`/resume` renders the CV from `data/` with print styles sized for one A4 page; `public/Boris_Nikolic_CV.pdf` (path in `data/resume.ts`) is generated from that route with a headless Chromium (command under Commands). Regenerate it after any content change, check that it is still one page, and bump `resume.updated` in `data/resume.ts` when the month changes. By convention the PDF goes in its own `content: regenerate the CV PDF` commit after the content commit.

The one-page fit is a budget, not a guarantee: any added line in `data/experience.ts`, `data/projects.ts`, or `data/skills.ts` can spill onto a second page. The `@page` margins and the `pt` sizes in the `@media print` block of `app/globals.css` are the tuning knobs; that block sits outside every `@layer` on purpose, so it overrides Tailwind's utilities. When the content no longer fits, ask the owner what to cut (projects have been removed for this before) rather than shrinking the type further.

## Docker

Multi-stage build on `node:lts-alpine`: stage 1 runs `npm install` and `npm run build` (Bun is not in the image), stage 2 runs `node server.js` from the standalone output on port 3000. The Dockerfile copies only `package.json` and `bun.lock`, so npm resolves versions from the ranges in `package.json`; `package-lock.json` is tracked but not used by the image. The `--frozen-lockfile` flag on that `npm install` is a Bun flag that npm ignores. To pin the image to the lockfile, copy `package-lock.json` and use `npm ci`.

## Engineering Approach

- Solve with the smallest effective output
- Change only what is necessary when modifying existing code
- No over-engineering; no heavy dependencies unless justified
- If ambiguity blocks correct implementation, ask one concise clarifying question
