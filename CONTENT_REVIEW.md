# Content Review

What on the site and resume rests only on the owner's word, and what is still open. Everything else traces to the repository, the public GitHub repositories, or the owner's explicit statements in the redesign sessions.

## Stated by the owner, not verifiable from public sources

- Two years of professional experience; the listed contract role starts in 2025.
- BSc Software Engineering: enrolled 2023, finishing by the end of 2027.
- Client work for Fairphone: Odoo modules for sustainability and procurement operations that replaced manual tracking, replication of ERP data into analytical warehouses, and the architecture of a customer-facing web shop. Licensed and under agreement; described only at that level.
- Home lab: Ubuntu servers, Forgejo, iptables firewall, automated SSH hardening script, Grafana and Prometheus, local blockchains. Origins in Hack The Box.
- AI workflow: Claude Code and Codex; superpowers, engineering, and qodo-standards plugins (present in the owner's environment); MCP servers for GitLab pipeline automation and cloud infrastructure; the tracker connectors and browser from the engineering plugin.
- "50+ personal and client projects since school", most private or under agreements.
- Off the keyboard: sim racing, Counter-Strike, cars; the gym; pasta and protein-rich meals.
- Control Management System Platform (no public repository).
- Working with stakeholders: direct communication, explaining technical terms to non-technical people, working alongside them (added at the owner's request, in the owner's terms).
- Angular: used at the frontend developer job, in client work, and in university coursework (owner's word; no repository shows it). Laravel and the MVC work: client work and university coursework (owner's word). GitLab CI: owner's word, consistent with the GitLab MCP line.
- The "frontend developer" timeline entry has no employer or dates; the owner has not supplied them.

## Verified from the owner's repositories (2026-09-12 scan)

Express, Mongoose, JWT and bcrypt, Multer, React Router, Redux Toolkit, and Vite (four 2023 full-stack apps, private); Django (a 2023 e-commerce app, private); Spring Boot and Spring Data JPA (rpg-campaign-manager, public); plain PHP MVC (barber-shop, public); TypeORM and Jest (NestJS projects); Prisma and Stripe (2024 Next.js products, private); Bash (four repos plus the hardening script); GitHub Actions (one repo); Lua (LazyConfig, public); C and C++ across 16 repos, including the public HTTP-Proxy (multi-hop forward proxy, encryption phase in progress per its README) and Password-Manager (C++20, PostgreSQL, GPG + AES-256-GCM). Not found anywhere: Vue, Svelte, .NET, GraphQL, Kubernetes, Terraform.

## Open questions

1. The contract role period (2025 – present) is shorter than "two years of professional experience". Add the earlier role, or change the wording, whichever is accurate.
2. Confirm the contract allows naming Fairphone on the site and resume.
3. Which plugins and MCP servers to keep in the AI section; remove any not actually in use.
4. Regenerate `public/resume.pdf` from `/resume` after review; the checked-in PDF predates the redesign.

## Deliberately not on the site

- Internals, data, or numbers of the client systems (the replication engine included).
- The password-manager project and its agent prompts, the Sales Report System, the desk-ordering MRP, the website scraper, the message-queue microservice, and the Rust platform under NDA, all removed at the owner's request.
- Any Linux administration job: the operations background is Hack The Box and the home lab.

## Recommended future improvements

- Add a light theme (the tokens support it; print CSS shows the pattern).
- Load a display font into the Open Graph image if the build-time fetch is ever unwanted.
- Keep `data/` as the single source: the resume derives competencies, skills, experience, story, and education from it.
