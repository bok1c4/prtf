export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  demo?: { repoUrl: string };
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  links: SocialLink[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  status: string;
}
