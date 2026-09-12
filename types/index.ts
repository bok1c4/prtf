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

export interface Capability {
  title: string;
  detail: string;
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
  eyebrow: string;
  headline: string;
  headlineEmphasis: string;
  story: string;
  summary: string[];
  university: string;
  person: string[];
  capabilities: Capability[];
  principles: Principle[];
  currently: Fact[];
  short: string;
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  usage: string;
  primary: SkillItem[];
  secondary?: SkillItem[];
}

export interface Role {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  note?: string;
}

export interface TimelineEntry {
  ref: "init" | "feat";
  title: string;
  detail: string;
}

export interface Education {
  degree: string;
  status: string;
  institution?: string;
}

export interface Decision {
  decision: string;
  rationale: string;
}

export type DiagramId = "toy-store";

export type CaseStudyKind = "client" | "personal";

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  kind: CaseStudyKind;
  featured: boolean;
  client?: string;
  period?: string;
  note?: string;
  role: string;
  roleDetail: string;
  stakeholders: string[];
  context: string[];
  goals: string[];
  features: string[];
  architecture: string[];
  dataFlow: string[];
  implementation: string[];
  decisions: Decision[];
  challenges: string[];
  results: string[];
  stack: string[];
  tags: string[];
  links: Link[];
  diagram?: DiagramId;
}

export interface MoreWork {
  title: string;
  description: string;
  stack: string[];
  link?: Link;
}

export interface ResumeProject {
  name: string;
  stack: string;
  description: string;
  link?: string;
}

/** Resume-only copy. Competencies, skills, experience, story, and
 *  education are derived from the same data the site renders. */
export interface ResumeData {
  url: string;
  label: string;
  headline: string;
  summary: string;
  note: string;
  projects: ResumeProject[];
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
  environment: string[];
}

export interface HomeLabItem {
  label: string;
  detail: string;
}

export interface HomeLab {
  intro: string;
  items: HomeLabItem[];
}
