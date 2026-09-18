import type { HomeLab } from "@/types";

export const homelab: HomeLab = {
  intro:
    "Hosting my own servers and VMs, configuring and hardening them, attacking and defending them, and automating the whole thing.",
  items: [
    {
      label: "servers",
      detail:
        "Self-hosted Ubuntu machines, including a Forgejo git forge for my own repositories.",
    },
    {
      label: "vms",
      detail:
        "Locally hosted VMs for privacy and security work: Qubes OS and Whonix.",
    },
    {
      label: "anonymity",
      detail:
        "Self-hosted chats and servers for anonymous communication: onion services on Tor, garlic-routed services on I2P.",
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
      label: "security",
      detail:
        "Penetration testing, red team and blue team practice, all against my own lab.",
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
