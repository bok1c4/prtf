# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A modern portfolio web application (not yet scaffolded). See `prtf.md` for the full spec.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Bun** as package manager (production runtime: Node LTS)

## Commands

```bash
bun install          # install dependencies
bun run dev          # start dev server
bun run build        # production build
bun run start        # start production server
bun run lint         # run ESLint
```

## Folder Structure

```
app/          # Next.js App Router pages and layouts
components/   # reusable UI components
sections/     # page sections (Hero, About, Projects, Contact, etc.)
lib/          # utility functions
types/        # TypeScript type definitions
data/         # config-driven data/content
```

## Architecture

- Use **server components** by default; add `"use client"` only when necessary
- Sections are modular and data-driven — render from arrays/objects, not hardcoded markup
- shadcn/ui for UI primitives; Tailwind for all custom styling
- No tight coupling between sections

## Docker

Multi-stage build, Node LTS production image, `next start` entrypoint, port 3000.

## Engineering Approach

- Solve with the smallest effective output
- Change only what is necessary when modifying existing code
- No over-engineering; no heavy dependencies unless justified
- If ambiguity blocks correct implementation, ask one concise clarifying question
