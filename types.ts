
export interface SystemMetric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  date: string;
  category: 'AI Platform' | 'Infrastructure' | 'Systems';
  metrics: SystemMetric[];
  architecture: {
    description: string;
    tradeoffs: string[];
    failureMitigation: string;
  };
}

export interface ExperienceItem {
  title: string;
  bullets: string[];
  recruiterNotes: string;
  iconName: 'cpu' | 'layers' | 'code';
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  iconUrl: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  location: string;
  heroImage: string;
  expertise: ExperienceItem[];
  skills: Skill[];
  projects: Project[];
}
