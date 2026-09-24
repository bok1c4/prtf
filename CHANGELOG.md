# Changelog

## 2026-09-24: close to five years

"Four years of hands-on web development" becomes "close to five years" in the hero highlight and the summary (About and `/resume`), on the owner's request. The CV PDF is regenerated.

## 2026-09-23: content matched to the CV

The owner's CV (`public/Boris_Nikolic_CV.pdf`) is now the source of truth; the site says what it says, in the same words where the CV has them.

- **Hero**: "Software Developer · Backend-focused Full-Stack (Python, Go, PostgreSQL, React)" with the sub-line "Based in Belgrade, Serbia · Remote friendly (CET) · Looking for full-time or part-time roles with flexible working hours · B2B contractor or employee" (the availability clause added on the owner's request after the CV was written), four highlights drawn from the CV, and a primary "download cv" button (`/Boris_Nikolic_CV.pdf`, also `g d` and the shell's `cv` command). The name is written Boris Nikolić, as on the CV.
- **About and `/resume` summary**: the CV summary verbatim (first person). No "four years of professional experience" wording, nothing that leads with AI.
- **Experience**: four dated roles, newest first, with the CV's bullets: Fairphone (2025 – present, B2B contract), independent full-stack developer (2024), frontend developer internship (2023, Zaječar), web development intern (2022, Zaječar). The 2023 entry also notes C# codebases on .NET in a Windows environment, added on the owner's request after the CV was written. The story timeline and the "over 50 projects" line are gone.
- **Projects**: four cards in CV order (E-commerce platform, Systems & networking in C/C++, Order & revenue management platform, RPG campaign manager), each with a one-line problem statement, stack tags, two or three highlights, and a repo link where one exists. No images: none of the repositories contains a screenshot or diagram. The case-study pages under `/work/` and their components are removed; the Fairphone work is under experience.
- **Skills**: the CV's six groups, short, no tools or plugins. Secondary items are labelled "working knowledge". C# (.NET) was added to Languages as working knowledge on the owner's request after the CV was written.
- **Home lab** trimmed to Forgejo, hardened Linux servers, Prometheus and Grafana, plus two free-time items the owner added the same day: IRC chats hosted over Tor onion services and I2P garlic routing, and Rust implementations for systems work. Penetration testing and red or blue team material are off the main page.
- **Education**: BSc Software Engineering, Singidunum University, Belgrade, expected 2027.
- **SEO**: title, description, and Open Graph values are "Boris Nikolić · Backend-focused Full-Stack Developer (Python, Go, PostgreSQL)"; the OG image shows the tagline and sub-line.
- **AI section** kept, with the "daily pair" phrasing, plugin names, and the tools pane removed; its `/resume` counterpart is the Skills line only.
- **Removed**: `public/resume.pdf` (the generated PDF; the CV file replaces it), `app/work/[slug]`, `components/casestudy/*`, `components/diagrams/*`.
- **Follow-ups the same day**: the CV PDF is generated from `/resume` again (one A4 page) so the download matches the site, replacing the owner's designed PDF on request; the 2023 employer reads "High school partner company"; the summary's second sentence and the hero's third bullet describe the DevOps side with security in mind (hardened Linux servers, Docker, CI/CD pipelines, monitoring) instead of C/C++ systems code, which stays under Projects and Skills. The DevOps sentence includes deploying and managing services, and every availability line names backend, full-stack, or DevOps roles.
- **Relocation** (owner's request the same day): the hero sub-line and the CV header add "Open to relocation within Europe"; the contact lede and the shell's `open to` fact say it is for hybrid roles with a couple of office days a week. The CV PDF is regenerated.
- **NestJS** (owner's request the same day): Node.js/Express becomes NestJS in the hero highlight, the summary, the 2024 role bullet, and the Backend skill item (now "NestJS (Node.js, Express)"). The CV PDF is regenerated.

## 2026-09-22: home page order

The work first, then how it gets done. New order: hero, case studies, story, skills, AI workflow, home lab, about, contact. Before, the AI workflow sat directly under the hero and the case studies came third, which front-loaded the page with process before a visitor had seen any work. The tab bar, the `?` help dialog, and the Open Graph image follow the new order; section ids and keyboard chords are unchanged.

## 2026-09-18: four years, C#/.NET, warmer AI copy, one-page resume

- **Experience**: four years of professional experience (owner's statement, first stated as three, corrected to four the same day): the first year frontend only, then backend servers alongside frontend websites, then both at once, full stack. The story gains a "backend servers" commit between "frontend developer" and "software developer"; every "two years" line updated.
- **C# and .NET**: systems work in high school (owner's statement); added to the high-school timeline entry and to the Languages skill group as a secondary item.
- **AI copy**: "AI agents in the loop" replaced by "AI as a daily pair" across the hero, about, site description, resume, and OG alt text. The AI section now explains how AI is used (a codebase I'm new to, from the ground up, the everyday, memory and specs) instead of listing tools; plugin names stay in the skills group. Sub-pane headings "claude code" and "mcp servers" renamed to "day to day" and "real systems" on the site and in the shell.
- **Resume on one A4 page**: the core competencies section removed (it duplicated Skills and the role bullets), the Fairphone AI bullet removed (the summary makes the AI point once per document), project descriptions and the projects note tightened, the Path line hidden in print, print CSS reduced to 8.6pt with tighter margins, and the html background forced white in print. `public/resume.pdf` regenerated: one A4 page.
- **Follow-up wording**: the principle "AI in the loop, developer accountable" retitled "AI writes, I answer for it"; the hero story now shows the arc ("from frontend-only work to full-stack platforms"); the AI-assisted workflow skill line describes usage instead of listing tools.
- **Home lab expanded** (owner's statement): locally hosted VMs for privacy and security work (Qubes OS, Whonix, Tor and onion services) and penetration testing with red and blue team practice against the owner's own lab. New `vms` and `security` entries in the home lab section, a sharper intro ("attacking and defending them"), Penetration testing and the VM stack added to the Security and networking skill group, and the resume's Home lab project updated (local blockchains dropped from the resume line for space; still on the site).
- **Anonymous communication hosting** (owner's statement): a new `anonymity` entry in the home lab section ("Self-hosted chats and servers for anonymous communication: onion services on Tor, garlic-routed services on I2P"), I2P added to the Security and networking skill group and to the resume's Home lab stack and description (compact mention).
- **De-duplication pass** (owner flagged the Home lab entry repeating its stack line): resume project descriptions no longer repeat tool names their stack lines already carry (Toy Store, RPG manager, C/C++, Home lab); the resume summary no longer repeats "backend-focused full-stack" from the headline nor enumerates the home lab; the Fairphone role summary reworded so the first bullet does not echo it; the home lab intro no longer duplicates the `origins` row; Tor moved out of the `vms` row (the `anonymity` row owns it); the security skills usage line no longer repeats the home lab `security` row.

## 2026-09-12: broader technology inventory

Added after a scan of the owner's own repositories (public and private; only public ones are named on the site) plus the owner's confirmation for what no repository shows.

- **Skills**: Angular (frontend job, client work, coursework), Express, Laravel, Django, Spring Boot, an MVC practice item, ORMs (Prisma, TypeORM, Mongoose, Spring Data JPA), React Router, Redux Toolkit, Vite, Bash scripting, GitHub Actions and GitLab CI in place of a generic CI/CD item, Jest, Lua. C/C++ promoted to a primary language with a socket-programming item and an "HTTP servers and proxies from scratch" item in the security and networking group.
- **Hero and resume competencies**: "Full-stack delivery" now names React, Angular, and Next.js frontends and Express, Laravel, Django, and Spring Boot backends.
- **Story**: a "frontend developer" commit between university and the current role ("First professional work: building web frontends, Angular included"); the resume path line follows.
- **Also built**: the C++ multi-hop HTTP forward proxy and the C++20 password manager (PostgreSQL, GPG + AES-256-GCM), both public repositories. The resume gains one "Systems and networking in C/C++" project line.
- `CONTENT_REVIEW.md` records what rests on the owner's word (Angular, Laravel, GitLab CI) and what the repository scan verified.
- Print stylesheet tightened (9.5pt body, smaller margins and section gaps) so the longer resume still fits two A4 pages.
- "Working with people" rewritten: requirements gathered directly, trade-offs explained in plain language, modules and features shipped end to end (built, tested, tailored to the production VPS), alongside the stakeholders through delivery. The hero bullet, the Fairphone page, and the resume bullet say the same thing.

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
