export type SkillInfo = {
  src?: string;
  title: string;
  className?: string;
  imageClassName?: string;
  yearofexperience?: string;
  color?: string;
};

export type Skill = {
  [key: string]: SkillInfo[];
  primary: SkillInfo[];
  secondary: SkillInfo[];
};

export type ProjectLink = { link: string; title: string };

export type Project = {
  name: string;
  oneliner: string;
  role: string | string[];
  tools: string[];
  timeline: { from: string; to: string; isPresent: boolean };
  description: string;
  context: string;
  links: {
    website?: ProjectLink;
    application?: ProjectLink;
    plugin?: ProjectLink;
    cli?: ProjectLink;
    comingSoon?: ProjectLink;
  };
  externalLinks?: ProjectLink[];
  category: string[] | string;
  type: string;
};

export type ProjectDetails = {
  [key: string]: Project;
  airdeck: Project;
  vidableai: Project;
  landgenius: Project;
};
