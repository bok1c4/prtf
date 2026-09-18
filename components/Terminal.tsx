"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { useRouter } from "next/navigation";
import PixelIcon from "@/components/PixelIcon";
import {
  aiWorkflow,
  caseStudies,
  education,
  homelab,
  personal,
  positioning,
  SITE,
  skillGroups,
  timeline,
  workNote,
} from "@/data";

type Line = { id: number; kind: "cmd" | "out" | "err" | "sys"; text: string };

const FILES = [
  "about.md",
  "ai-workflow.md",
  "contact.md",
  "experience.md",
  "homelab.md",
  "resume.txt",
  "skills/",
  "work/",
];

const COMMANDS = [
  "help",
  "ls",
  "cat",
  "open",
  "cd",
  "git",
  "neofetch",
  "whoami",
  "skills",
  "homelab",
  "systemctl",
  "contact",
  "resume",
  "ai",
  "clear",
  "pwd",
  "echo",
  "date",
  "uname",
  "history",
  "theme",
];

const QUICK = ["help", "ls work", "cat ai-workflow.md", "homelab", "git log"];

const PALETTE = "__palette__";
const NEOFETCH = "__neofetch__";

const slugs = caseStudies.map((study) => study.slug);
const facts = Object.fromEntries(
  positioning.currently.map((fact) => [fact.label, fact.value]),
);

function pad(text: string, width: number) {
  return text.length >= width ? text : text + " ".repeat(width - text.length);
}

export function neofetchRows(): [string, string][] {
  return [
    ["OS", "Linux-flavoured web · Next.js 15 · TypeScript"],
    ["Host", SITE.url.replace("https://", "")],
    ["Shell", "prtf-sh 2.0"],
    ["Editor", "LazyVim · tmux"],
    ["Role", facts.role],
    ["Location", facts.based],
    ["Degree", facts.degree],
    ["Contact", personal.email],
  ];
}

function help(): string[] {
  return [
    "prtf-sh: available commands",
    "  help               this list",
    "  ls [work|skills]   list files, case studies, or skill groups",
    "  cat <file>         about.md · ai-workflow.md · homelab.md · contact.md · experience.md · resume.txt · work/<slug>",
    "  open <slug>        open a case study (tab completes)",
    "  git log            the story as commits",
    "  neofetch           who is this",
    "  homelab            the lab: network, firewall, servers, hardening",
    "  skills             skill tree",
    "  contact            how to reach me",
    "  resume             open the resume",
    "  clear              clear the screen (ctrl+l)",
    "",
    "keys: ↑/↓ history · tab completion · : focuses this shell · g + h/a/w/l/s/e/c/r jumps · ? help",
  ];
}

function listWork(): string[] {
  const width = Math.max(...slugs.map((slug) => slug.length)) + 2;
  return [
    "work/",
    ...caseStudies.map(
      (study) => `  ${pad(study.slug + "/", width)}${study.title}`,
    ),
    "",
    "open <slug> to read a case study",
    "",
    `~/projects: ${workNote.count} ${workNote.detail}`,
  ];
}

function listSkills(): string[] {
  return [
    "skills/",
    ...skillGroups.map(
      (group) =>
        `  ${pad(group.category.toLowerCase().replace(/ /g, "-") + "/", 30)}${group.primary
          .map((item) => item.name)
          .join(", ")}`,
    ),
  ];
}

function skillTree(): string[] {
  const out: string[] = ["skills/"];
  skillGroups.forEach((group, gi) => {
    const last = gi === skillGroups.length - 1;
    out.push(`${last ? "└── " : "├── "}${group.category}`);
    const items = [
      ...group.primary.map((item) => item.name),
      ...(group.secondary ?? []).map((item) => `${item.name} (also)`),
    ];
    items.forEach((item, ii) => {
      const lastItem = ii === items.length - 1;
      out.push(`${last ? "    " : "│   "}${lastItem ? "└── " : "├── "}${item}`);
    });
  });
  return out;
}

function gitLog(): string[] {
  const commits = [...timeline].reverse();
  return [
    "commit history (story)",
    ...commits.map((entry, index) => {
      const ref = index === 0 ? "HEAD -> main" : `HEAD~${index}`;
      return `${pad(ref, 14)}${entry.ref}: ${entry.title}`;
    }),
    "",
    `education  ${education.degree} (${education.status.toLowerCase()})`,
  ];
}

function story(): string[] {
  return [
    ...[...timeline].reverse().flatMap((entry) => [
      `${entry.ref}: ${entry.title}`,
      `  ${entry.detail}`,
    ]),
    "",
    `education: ${education.degree}, ${education.status.toLowerCase()}`,
  ];
}

function homelabStatus(): string[] {
  const width = Math.max(...homelab.items.map((item) => item.label.length)) + 2;
  return [
    homelab.intro,
    "",
    ...homelab.items.map((item) => `${pad(item.label + ":", width)}${item.detail}`),
  ];
}

function catFile(name: string): { out: string[]; err?: boolean; nav?: string } {
  const clean = name.replace(/^\.\//, "").replace(/^~\//, "");
  switch (clean) {
    case "about.md":
      return {
        out: [
          ...positioning.summary.flatMap((p) => [p, ""]),
          "## university",
          positioning.university,
          "",
          "## off the keyboard",
          ...positioning.person.map((fact) => `  - ${fact}`),
        ],
      };
    case "ai-workflow.md":
      return {
        out: [
          "# how I work with AI",
          aiWorkflow.intro,
          "",
          "## loop",
          ...aiWorkflow.loop.map(
            (step, index) => `  ${index + 1}. ${pad(step.step, 9)} ${step.detail}`,
          ),
          "",
          "## prompting",
          ...aiWorkflow.prompting.practices.map((item) => `  - ${item}`),
          "",
          "## day to day",
          ...aiWorkflow.claudeCode.items.map(
            (item) => `  - ${item.name}: ${item.detail}`,
          ),
          "",
          "## real systems",
          ...aiWorkflow.mcp.items.map((item) => `  - ${item.name}: ${item.detail}`),
        ],
      };
    case "homelab.md":
      return { out: homelabStatus() };
    case "contact.md":
      return {
        out: [
          `email     ${personal.email}`,
          ...personal.links.map(
            (link) => `${pad(link.label.toLowerCase(), 10)}${link.href}`,
          ),
          `location  ${personal.location}`,
        ],
      };
    case "experience.md":
      return { out: story() };
    case "resume.txt":
    case "resume":
      return { out: ["opening /resume ..."], nav: "/resume" };
    case "skills":
    case "skills/":
    case "work":
    case "work/":
      return { out: [`cat: ${clean}: Is a directory`], err: true };
    default: {
      const slug = clean.replace(/^work\//, "").replace(/\/$/, "");
      const study = caseStudies.find((item) => item.slug === slug);
      if (study) {
        return {
          out: [
            `# ${study.title}`,
            study.summary,
            "",
            `role: ${study.role}`,
            `stack: ${(study.stack.length ? study.stack : study.tags).join(", ")}`,
            "",
            `open ${study.slug} to read the full case study`,
          ],
        };
      }
      return { out: [`cat: ${name}: No such file or directory`], err: true };
    }
  }
}

function openStudy(arg: string): { out: string[]; err?: boolean; nav?: string } {
  const slug = arg.replace(/^work\//, "").replace(/\/$/, "");
  if (!slug) return { out: ["usage: open <slug>  (try: ls work)"], err: true };
  if (slugs.includes(slug)) {
    return { out: [`opening /work/${slug} ...`], nav: `/work/${slug}` };
  }
  return { out: [`open: no such case study: ${slug} (try: ls work)`], err: true };
}

type Result = { out: string[]; err?: boolean; nav?: string; clear?: boolean };

function run(raw: string, history: string[]): Result {
  const trimmed = raw.trim();
  if (!trimmed) return { out: [] };
  const [cmd, ...rest] = trimmed.split(/\s+/);
  const args = rest.filter((arg) => !arg.startsWith("-"));
  const command = cmd.toLowerCase();

  switch (command) {
    case "help":
    case "?":
      return { out: help() };
    case "ls": {
      const target = (args[0] ?? "~").replace(/\/$/, "");
      if (["~", ".", ""].includes(target)) return { out: [FILES.join("  ")] };
      if (target === "work") return { out: listWork() };
      if (target === "skills") return { out: listSkills() };
      return {
        out: [`ls: cannot access '${args[0]}': No such file or directory`],
        err: true,
      };
    }
    case "cat":
      if (!args[0]) return { out: ["usage: cat <file>  (try: ls)"], err: true };
      return catFile(args[0]);
    case "open":
      return openStudy(args[0] ?? "");
    case "cd": {
      const target = args[0] ?? "~";
      if (target === "~" || target === "." || target === "/") return { out: [] };
      if (target.replace(/\/$/, "") === "work") {
        return { out: ["work/: use `ls work` and `open <slug>`"] };
      }
      return openStudy(target);
    }
    case "git":
      if (args[0] === "log") return { out: gitLog() };
      if (args[0] === "status") {
        return { out: ["On branch main", "nothing to commit, portfolio clean"] };
      }
      return { out: ["git: try `git log` or `git status`"], err: true };
    case "neofetch":
      return { out: [NEOFETCH, "", PALETTE] };
    case "whoami":
      return {
        out: [`${personal.name}: ${personal.title}, backend-focused full-stack. ${personal.location}.`],
      };
    case "skills":
    case "tree":
      return { out: skillTree() };
    case "homelab":
    case "systemctl":
      return { out: homelabStatus() };
    case "contact":
      return catFile("contact.md");
    case "resume":
      return catFile("resume.txt");
    case "ai":
      return catFile("ai-workflow.md");
    case "clear":
      return { out: [], clear: true };
    case "pwd":
      return { out: ["/home/boris/prtf"] };
    case "echo":
      return { out: [rest.join(" ")] };
    case "date":
      return { out: [new Date().toString()] };
    case "uname":
      return { out: ["prtf-web 2.0 · Next.js 15 · TypeScript · Linux-flavoured"] };
    case "history":
      return { out: history.map((item, index) => `${pad(String(index + 1), 4)}${item}`) };
    case "theme":
      return { out: ["gruvbox dark, as it should be"] };
    case "sudo":
      return {
        out: ["boris is not in the sudoers file. This incident will be reported."],
        err: true,
      };
    case "exit":
    case "logout":
      return { out: ["There is no exit from here. Try `contact` instead."] };
    case "vim":
    case "nvim":
    case "vi":
      return { out: ["You are already in the editor. :q does nothing here."] };
    case "rm":
      return { out: ["rm: permission denied. This portfolio is read-only."], err: true };
    default:
      return {
        out: [`prtf-sh: command not found: ${cmd} (try \`help\`)`],
        err: true,
      };
  }
}

function complete(input: string): { value: string; options?: string[] } {
  const parts = input.split(/\s+/);
  const last = parts[parts.length - 1] ?? "";
  let candidates: string[];
  if (parts.length <= 1) {
    candidates = COMMANDS;
  } else {
    const cmd = parts[0].toLowerCase();
    const files = ["cat", "ls", "cd", "open"].includes(cmd)
      ? [...FILES, ...slugs, ...slugs.map((slug) => `work/${slug}`)]
      : [];
    candidates = cmd === "git" ? ["log", "status"] : files;
  }
  const matches = candidates.filter((item) => item.startsWith(last));
  if (matches.length === 0) return { value: input };
  if (matches.length === 1) {
    parts[parts.length - 1] = matches[0];
    return { value: parts.join(" ") + (matches[0].endsWith("/") ? "" : " ") };
  }
  let prefix = matches[0];
  for (const match of matches) {
    while (!match.startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  parts[parts.length - 1] = prefix;
  return { value: parts.join(" "), options: matches };
}

function Palette() {
  const colors = [
    "var(--gb-red)",
    "var(--gb-green)",
    "var(--gb-yellow)",
    "var(--gb-blue)",
    "var(--gb-purple)",
    "var(--gb-aqua)",
    "var(--gb-orange)",
    "var(--gb-fg1)",
  ];
  return (
    <span className="inline-flex gap-1" aria-hidden="true">
      {colors.map((color) => (
        <span
          key={color}
          className="inline-block h-3.5 w-5"
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}

function Neofetch() {
  const rows = neofetchRows();
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3 py-1">
      <PixelIcon />
      <div className="min-w-0">
        <div className="font-bold text-gb-yellow">{personal.handle}</div>
        <div className="text-gb-bg4">{"─".repeat(personal.handle.length)}</div>
        {rows.map(([key, value]) => (
          <div key={key}>
            <span className="text-gb-aqua">{pad(key + ":", 10)}</span>
            <span className="text-ink">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const lineClass: Record<Line["kind"], string> = {
  cmd: "text-ink",
  out: "text-ink-2",
  err: "text-gb-red",
  sys: "text-muted",
};

export default function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const historyIndex = useRef<number | null>(null);
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoScroll = useRef(false);

  const push = useCallback((kind: Line["kind"], texts: string[]) => {
    autoScroll.current = true;
    setLines((prev) => [
      ...prev,
      ...texts.map((text) => ({ id: nextId.current++, kind, text })),
    ]);
  }, []);

  useEffect(() => {
    const intro = [
      NEOFETCH,
      "",
      PALETTE,
      "",
      "type `help` to list commands. try: ls work · cat ai-workflow.md · homelab",
    ];
    setLines(
      intro.map((text, index) => ({
        id: index + 1,
        kind: index === intro.length - 1 ? "sys" : "out",
        text,
      })),
    );
    nextId.current = intro.length + 1;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el && autoScroll.current) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const execute = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (trimmed) setHistory((prev) => [...prev, trimmed]);
      historyIndex.current = null;
      const result = run(trimmed, history);
      if (result.clear) {
        setLines([]);
        nextId.current = 1;
      } else {
        push("cmd", [trimmed]);
        if (result.out.length) push(result.err ? "err" : "out", result.out);
      }
      setInput("");
      if (result.nav) router.push(result.nav);
    },
    [history, push, router],
  );

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    execute(input);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      execute(input);
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const result = complete(input);
      setInput(result.value);
      if (result.options) push("sys", [result.options.join("  ")]);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) return;
      const index =
        historyIndex.current === null
          ? history.length - 1
          : Math.max(0, historyIndex.current - 1);
      historyIndex.current = index;
      setInput(history[index]);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex.current === null) return;
      const index = historyIndex.current + 1;
      if (index >= history.length) {
        historyIndex.current = null;
        setInput("");
      } else {
        historyIndex.current = index;
        setInput(history[index]);
      }
      return;
    }
    if (event.ctrlKey && event.key.toLowerCase() === "l") {
      event.preventDefault();
      setLines([]);
      nextId.current = 1;
      return;
    }
    if (event.ctrlKey && event.key.toLowerCase() === "c") {
      event.preventDefault();
      push("cmd", [`${input}^C`]);
      setInput("");
    }
  };

  return (
    <section
      aria-label="Interactive shell"
      className="flex h-full flex-col overflow-hidden rounded-[3px] border border-line-strong bg-canvas"
    >
      <div className="statusline border-b border-line" aria-hidden="true">
        <span className="seg-mode">SHELL</span>
        <span className="seg-strong">prtf-sh</span>
        <span className="min-w-0 flex-1 truncate">~ · type help</span>
      </div>
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-relevant="additions"
        className="term-out min-h-0 flex-1 overflow-y-auto px-3 py-3 sm:px-4"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <div key={line.id} className={lineClass[line.kind]}>
            {line.kind === "cmd" ? (
              <>
                <span className="text-gb-green">{personal.handle}</span>
                <span className="text-muted">:~$ </span>
                {line.text}
              </>
            ) : line.text === PALETTE ? (
              <Palette />
            ) : line.text === NEOFETCH ? (
              <Neofetch />
            ) : (
              line.text || " "
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-line px-3 py-2 sm:px-4"
      >
        <label htmlFor="terminal-input" className="shrink-0 text-[13px]">
          <span className="text-gb-green">{personal.handle}</span>
          <span className="text-muted">:~$</span>
          <span className="sr-only"> command</span>
        </label>
        <input
          ref={inputRef}
          id="terminal-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="send"
          placeholder="help"
          aria-describedby="terminal-hint"
          className="min-w-0 flex-1 bg-transparent text-[13px] text-ink caret-gb-yellow placeholder:text-gb-bg4 focus:outline-none"
        />
      </form>
      <div className="flex flex-wrap gap-1.5 border-t border-line px-3 py-2 sm:px-4">
        {QUICK.map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => execute(command)}
            className="rounded-sm border border-line px-2 py-0.5 text-xs text-ink-2 transition-colors hover:border-accent hover:text-accent"
          >
            {command}
          </button>
        ))}
      </div>
      <p id="terminal-hint" className="sr-only">
        Type a command and press Enter. Tab completes, arrow keys browse
        history, Ctrl+L clears.
      </p>
    </section>
  );
}
