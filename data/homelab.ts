import type { HomeLab } from "@/types";

export const homelab: HomeLab = {
  intro:
    "Hosting my own servers, configuring and hardening them, and automating the whole thing. It started with Hack The Box, which is where Linux, Git, Nmap, and Kali Linux came from.",
  items: [
    {
      label: "servers",
      detail:
        "Self-hosted Ubuntu machines, including a Forgejo git forge for my own repositories.",
    },
    {
      label: "network",
      detail: "Home network and custom iptables firewall rules for the self-hosted services.",
    },
    {
      label: "hardening",
      detail:
        "SSH hardening automated end to end with a script I built after researching what hardening should cover.",
    },
    {
      label: "monitoring",
      detail: "Grafana and Prometheus over the whole stack.",
    },
    {
      label: "experiments",
      detail: "Local blockchains, for learning.",
    },
    {
      label: "origins",
      detail: "Hack The Box: Linux, Git, Nmap, Kali Linux.",
    },
  ],
};
