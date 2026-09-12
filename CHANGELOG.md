# Changelog

## 2026-09-12: broader technology inventory

Added after a scan of the owner's own repositories (public and private; only public ones are named on the site) plus the owner's confirmation for what no repository shows.

- **Skills**: Angular (frontend job, client work, coursework), Express, Laravel, Django, Spring Boot, an MVC practice item, ORMs (Prisma, TypeORM, Mongoose, Spring Data JPA), React Router, Redux Toolkit, Vite, Bash scripting, GitHub Actions and GitLab CI in place of a generic CI/CD item, Jest, Lua. C/C++ promoted to a primary language with a socket-programming item and an "HTTP servers and proxies from scratch" item in the security and networking group.
- **Hero and resume competencies**: "Full-stack delivery" now names React, Angular, and Next.js frontends and Express, Laravel, Django, and Spring Boot backends.
- **Story**: a "frontend developer" commit between university and the current role ("First professional work: building web frontends, Angular included"); the resume path line follows.
- **Also built**: the C++ multi-hop HTTP forward proxy and the C++20 password manager (PostgreSQL, GPG + AES-256-GCM), both public repositories. The resume gains one "Systems and networking in C/C++" project line.
- `CONTENT_REVIEW.md` records what rests on the owner's word (Angular, Laravel, GitLab CI) and what the repository scan verified.
- Print stylesheet tightened (9.5pt body, smaller margins and section gaps) so the longer resume still fits two A4 pages.

## 2026-09-12: terminal-workspace portfolio (branch `feat/terminal-redesign`)

Rebuilt from the previous single-page portfolio over several review rounds with the owner. This entry describes the result.

### Site

- **Look and feel**: JetBrains Mono, gruvbox dark tokens mapped onto semantic tokens in `app/globals.css`, tmux-style window tabs (`components/TopBar.tsx`), a lualine-style status line fixed to the bottom that tracks the section and scroll position (`components/StatusLine.tsx`), bordered panes with titles on the frame, `$`-prompt section headers, `# / ##` markdown-style headings, `[bracketed]` tags.
- **Interactive shell** in the hero (`components/Terminal.tsx`): `help`, `ls [work|skills]`, `cat <file>`, `open <slug>`, `cd`, `git log|status`, `neofetch` (with a pixel-art penguin, `components/PixelIcon.tsx`), `whoami`, `skills`, `homelab`, `contact`, `resume`, `clear`, `pwd`, `echo`, `date`, `uname`, `history`, `theme`, plus a few easter eggs. Tab completion, arrow-key history, Ctrl+L, Ctrl+C, tappable quick commands. The frame is pinned to the buffer's height on large screens and scrolls inside.
- **Keyboard** (`components/KeyboardNav.tsx`): `g` + `h/a/w/l/s/e/c/r` jumps, `:` focuses the shell, `?` opens a help dialog; all ignored while typing.
- **Home page order**: hero (Neovim-style buffer: name, headline "I build platforms and ship software with AI agents in the loop", story line, six capability bullets, key-hinted buttons), AI workflow, work, home lab, about, skills, story (`git log`), contact.
- **AI workflow** (`data/ai.ts`): the six-step loop, prompting practices, the Claude Code setup (CLAUDE.md per repo, superpowers, engineering, qodo-standards plugins, memory and specs), MCP servers (GitLab pipelines, cloud infrastructure, tracker connectors, browser), environment (Neovim, tmux, Linux, Claude Code and Codex).
- **Work**: two pages, `/work/fairphone-odoo-platform` (client work at the level the engagement allows, with a visible note; no diagram) and `/work/toy-store` (full case study with a runtime diagram); a "50+ projects" line; "Also built" with the CMS platform and the RPG campaign manager coursework.
- **Home lab** (`data/homelab.ts`): servers with Forgejo, network and iptables, automated SSH hardening, Grafana and Prometheus, local blockchains, Hack The Box origins.
- **About**: two paragraphs, a university card (2023 – 2027), an off-the-keyboard card, and six working principles in a grid.
- **Working with people**: a seventh capability ("Working with stakeholders"), a "Working with people" list in the work section, stakeholder lines on the client page, and an experience bullet on the resume: direct communication with stakeholders, technical terms and trade-offs explained in plain language to non-technical people, delivery against what they need.
- **Resume** (`/resume`): derives competencies, skills, experience, story, and education from the same data as the site; only the summary, projects, and a note are resume-specific. Prints to A4 with a light palette.
- **SEO**: title template, canonical URLs, Open Graph and Twitter cards, generated OG image (terminal window, JetBrains Mono fetched at build time with a fallback) and favicon (`>_`), sitemap, robots, Person JSON-LD.
- **Accessibility**: skip link, landmarks and heading order, `role="log"` shell output, focus rings in the accent color, screen-reader notes on external links, `prefers-reduced-motion` respected, all text/background pairs at or above 4.5:1.

### Content decisions

- The owner is a Software Developer, finishing a BSc in Software Engineering (2023 – 2027), with two years of professional experience. No Linux administration job is claimed; the operations background is Hack The Box and the home lab.
- Client work is described only at the level the engagements allow: what was built and what it replaced, not how it works inside, and never numbers. The hero never names clients.
- No invented metrics anywhere; the only figure ("50+ projects") is the owner's.
- Removed at the owner's request: the password-manager project, the Sales Report System, the desk-ordering MRP, the website scraper, the message-queue microservice, the Rust platform page, and the diagram components for client systems.

### Files

Content in `data/` (`site`, `personal`, `skills`, `experience`, `projects`, `resume`, `ai`, `homelab`), types in `types/index.ts`, chrome in `components/`, sections in `sections/`, routes in `app/`. `resume.html` and `components/Nav.tsx` from the previous version are gone. Dependencies unchanged; `bun.lock` gained the `@vercel/analytics` entry that `package.json` already had.

### Validation

`tsc --noEmit`, `next lint`, and `next build` pass (11 routes). Driven in the browser: shell commands, tab completion, shell navigation, the `?` dialog and `g` chords, hero and About heights at 1280px, mobile at 375px with no horizontal overflow, the footer clearing the fixed status line, and `/resume` text extraction in ATS order.
