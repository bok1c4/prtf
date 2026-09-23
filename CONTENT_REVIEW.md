# Content Review

Source of truth since 2026-09-23: the owner's CV (`public/Boris_Nikolic_CV.pdf`, one A4 page) plus the owner's instructions for this update. Everything on the site traces to one of those, to a public GitHub repository, or to an earlier explicit statement by the owner that the CV does not contradict.

## From the CV, not verifiable from public sources

- Four years of hands-on web development: web development intern (school programme, Zaječar, 2022), frontend developer (part-time internship, local software company, Zaječar, 2023), independent full-stack developer (self-directed, Belgrade, 2024), software developer on a B2B contract for Fairphone (2025 – present). Employer names for 2022 and 2023 are not given on the CV; the 2023 internship was at a high school partner company (shown as such), whose name the owner will give in interviews.
- Fairphone work: Odoo modules for sustainability and procurement teams, replication of ERP data into analytical warehouses, the architecture of a customer-facing web shop, direct stakeholder work. Client-owned, licensed software; described only at the level the CV uses.
- Working knowledge of Java (Spring Boot) and PHP (Laravel); Angular; GitLab CI; motion & graphic design.
- The Order & revenue management platform (Go, Next.js, TypeScript, PostgreSQL) has no public repository.
- The 2023 internship also included contributing to C# codebases on .NET in a Windows environment (owner's statement, 2026-09-23; not on the CV PDF, shown on the site and /resume). C# (.NET) is also listed under Languages as working knowledge on the owner's request the same day.
- BSc Software Engineering, Singidunum University, Belgrade, expected 2027.
- Availability (owner's statements, 2026-09-23): backend, full-stack, or DevOps roles; full-time, or part-time with flexible working hours; remote friendly (CET); B2B contractor or employee; open to relocation within Europe for hybrid roles with a couple of office days a week (the owner named Switzerland, the Netherlands, and Slovenia as examples; the site says only within Europe). The DevOps sentence in the summary (deploying and managing services, hardened Linux servers, Docker, CI/CD, monitoring) is the owner's wording too. The site, /resume, and the generated CV PDF carry the same lines.

## From the owner's earlier statements, kept because the CV does not contradict them

- "Off the keyboard": sim racing, Counter-Strike, cars; the gym; pasta and protein-rich meals.
- The six working principles under "How I work" in About.
- The "Working with people" list in the projects section, which matches the CV's stakeholder bullet.
- The "How I work with AI" section (loop, prompting, day to day, real systems). The CV mentions AI-assisted development (Claude Code, Codex) only under Skills; the section stays as site-only material.
- Home lab: Forgejo, hardened Linux servers, Prometheus and Grafana (the CV's Ops line names Forgejo and hardened home-lab servers), plus two free-time items the owner asked for on 2026-09-23: IRC chats hosted over Tor onion services and I2P garlic routing, and Rust implementations for systems work.

## Verified from public repositories

- E-commerce platform (`toy_store`): the highlights on the site are the CV's; the problem statement draws on the README (external product catalog, cache-aside Redis, graceful degradation).
- Systems & networking in C/C++ (`HTTP-Proxy`, plus `micro-http-server` and `Password-Manager`): the CV's highlights; the proxy README marks its encryption phase as in progress.
- RPG campaign manager (`rpg-campaign-manager`): Internet Software Architecture coursework; Java 21, Spring Boot 3, JWT access and refresh tokens, role-based authorization, React SPA.
- None of the four repositories contains a screenshot or an architecture diagram, so the project cards have no images.

## Deliberately not on the site

- Any count of projects, any metric, any claim of "professional experience" phrased differently from the CV's "four years of hands-on web development".
- Penetration testing and red or blue team practice (removed from the main page at the owner's request; not on the CV). IRC hosting over Tor and I2P returned to the home lab section the same day, on the owner's request, as a free-time project.
- Editor and tool lists (Neovim, tmux, lazygit) and plugin names.
- Internals, data, or numbers of the client systems.
- A statement that the degree is completed. It is expected in 2027.

## Open questions

1. Should the "How I work with AI" section stay? It is not on the CV.
2. Employer names for the 2022 and 2023 internships, if they should appear.
3. The `/resume` page mirrors the CV content in HTML; the download button serves the CV PDF itself. If the PDF changes, update `data/` to match, or drop `/resume`.
