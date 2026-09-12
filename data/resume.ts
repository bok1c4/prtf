import type { ResumeData } from "@/types";

export const resume: ResumeData = {
  url: "/resume.pdf",
  label: "Download resume",
  headline: "Software Developer · backend-focused full-stack",
  summary:
    "Software developer building platforms and shipping software with AI agents in the loop. Two years of professional experience in software development, backend-focused full-stack: Odoo modules and data systems on PostgreSQL, Go and Python services, React, Angular, and Next.js frontends, MVC frameworks (Laravel, Django, Spring Boot) on client and university work, and systems and networking code in C and C++. Finishing a BSc in Software Engineering (2023 – 2027). Runs a self-hosted home lab: Ubuntu servers, iptables firewalls, automated SSH hardening, Grafana and Prometheus.",
  note:
    "Over 50 personal and client projects since school; most are private or under agreements not to discuss them. Client work is described at the level the engagements allow.",
  projects: [
    {
      name: "Toy Store, full-stack e-commerce",
      stack: "Go, Gin, Next.js 14, PostgreSQL 16, Redis 7, Nginx, Stripe, Docker Compose",
      description:
        "E-commerce platform with dual-token JWT authentication (refresh tokens revocable via Redis), cart and wishlist, two-step Stripe PaymentIntent checkout, order management with line-item snapshots, admin dashboard, and a cache-aside Redis catalog with graceful degradation.",
      link: "https://github.com/bok1c4/toy_store",
    },
    {
      name: "RPG campaign manager (university coursework)",
      stack: "Java 21, Spring Boot 3.4, Spring Security (JWT), PostgreSQL 16, React 18, Docker Compose",
      description:
        "Final project for the Internet Software Architecture course: REST API with JWT access and refresh tokens and role-based authorization, CRUD for campaigns, characters, sessions, and items, React SPA, Docker Compose.",
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
        "A multi-hop HTTP forward proxy on native sockets with layered encryption in progress, a multi-client HTTP socket server, and a terminal password manager storing secrets in PostgreSQL under a hybrid GPG + AES-256-GCM scheme.",
      link: "https://github.com/bok1c4/HTTP-Proxy",
    },
    {
      name: "Home lab",
      stack: "Ubuntu, Forgejo, iptables, SSH, Grafana, Prometheus",
      description:
        "Self-hosted Ubuntu servers with a Forgejo git forge, home network and custom iptables firewall, SSH hardening automated end to end with an own script, Grafana and Prometheus monitoring, and local blockchains for experiments.",
    },
  ],
  updated: "September 2026",
};
