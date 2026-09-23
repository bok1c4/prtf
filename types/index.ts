export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  handle: string;
  email: string;
  location: string;
  links: Link[];
}

export interface Principle {
  title: string;
  detail: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Positioning {
  /** Hero tagline, split so the second half can carry the accent color. */
  taglineLead: string;
  taglineFocus: string;
  subline: string;
  /** Hero bullets, all taken from the CV summary and experience. */
  highlights: string[];
  /** The CV summary, used by About and by /resume. */
  summary: string[];
  university: string;
  person: string[];
  workingWith: string[];
  principles: Principle[];
  currently: Fact[];
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  usage?: string;
  primary: SkillItem[];
  /** Working knowledge; rendered as such on the site and the resume. */
  secondary?: SkillItem[];
}

export interface Role {
  title: string;
  company: string;
  period: string;
  /** Engagement type and place, e.g. "Freelance B2B" or "Self-directed · Belgrade". */
  meta?: string;
  summary?: string;
  highlights: string[];
  note?: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-line problem statement. */
  problem: string;
  stack: string[];
  /** Two or three technical highlights. */
  highlights: string[];
  repo?: string;
  note?: string;
}

/** Resume-only values; everything else on /resume derives from the site data. */
export interface ResumeData {
  url: string;
  label: string;
  updated: string;
}

export interface AiLoopStep {
  step: string;
  detail: string;
}

export interface AiItem {
  name: string;
  detail: string;
}

export interface AiWorkflow {
  intro: string;
  loop: AiLoopStep[];
  prompting: { summary: string; practices: string[] };
  claudeCode: { summary: string; items: AiItem[] };
  mcp: { summary: string; items: AiItem[] };
}

export interface HomeLabItem {
  label: string;
  detail: string;
}

export interface HomeLab {
  intro: string;
  items: HomeLabItem[];
}
