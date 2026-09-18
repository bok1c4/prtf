import type { ResumeData } from "@/types";

export const resume: ResumeData = {
  url: "/resume.pdf",
  label: "Download resume",
  headline: "Software Developer · backend-focused full-stack",
  summary:
    "Software developer building platforms and shipping software with AI as a daily pair, every change reviewed and owned. Four years of professional experience: the first year frontend only, then backend servers alongside the frontend work, now the full stack, backend first. Odoo modules and data systems on PostgreSQL, Go and Python services, React, Angular, and Next.js frontends, MVC frameworks (Laravel, Django, Spring Boot) on client and university work, and systems and networking code in C and C++. Finishing a BSc in Software Engineering (2023 – 2027). Runs a self-hosted home lab, operated like production.",
  note:
    "Over 50 personal and client projects since school; most are private or under agreements not to discuss them.",
  projects: [
    {
      name: "Toy Store, full-stack e-commerce",
      stack: "Go, Gin, Next.js 14, PostgreSQL 16, Redis 7, Nginx, Stripe, Docker Compose",
      description:
        "Dual-token JWT auth with revocable refresh tokens, two-step PaymentIntent checkout, order management with line-item snapshots, an admin dashboard, and a cache-aside catalog with graceful degradation.",
      link: "https://github.com/bok1c4/toy_store",
    },
    {
      name: "RPG campaign manager (university coursework)",
      stack: "Java 21, Spring Boot 3.4, Spring Security (JWT), PostgreSQL 16, React 18, Docker Compose",
      description:
        "Final project for the Internet Software Architecture course: a REST API with access and refresh tokens, role-based authorization, and CRUD for campaigns, characters, sessions, and items, behind a single-page frontend.",
      link: "https://github.com/bok1c4/rpg-campaign-manager",
    },
    {
      name: "Control Management System Platform",
      stack: "Go, Next.js, React, TypeScript, PostgreSQL",
      description:
        "Multi-role CMS web application with authentication, order management, revenue reporting, a notification system, and role-based access control.",
    },
    {
      name: "Systems and networking in C/C++",
      stack: "C, C++20, POSIX sockets, PostgreSQL, GPG, AES-256-GCM, CMake",
      description:
        "A multi-hop HTTP forward proxy with layered encryption in progress, a multi-client HTTP server written from the socket up, and a terminal password manager with hybrid per-secret encryption.",
      link: "https://github.com/bok1c4/HTTP-Proxy",
    },
    {
      name: "Home lab",
      stack: "Ubuntu, Qubes OS, Whonix, Tor, I2P, Forgejo, iptables, SSH, Grafana, Prometheus",
      description:
        "Self-hosted servers and VMs run like production: a private git forge, custom firewalling, hardening automated end to end, full monitoring, privacy VMs, chats and servers for anonymous communication over onion and garlic routing, and penetration testing with red and blue team practice against the lab.",
    },
  ],
  updated: "September 2026",
};
