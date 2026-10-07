import type { SocialIconKey } from "./social-icons";

export type SocialLink = {
  name: string;
  username: string;
  href: string;
  title: string;
  className: string;
  bgClassName: string;
  iconClassName: string;
  textClassName: string;
  layoutClassName: string;
  icon: SocialIconKey;
};

export type SkillInfo = {
  src?: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  color?: string;
};

export type CareerSkill = Pick<SkillInfo, "title"> & { color: string };

export type Skill = {
  [key: string]: SkillInfo[];
  primary: SkillInfo[];
  secondary: SkillInfo[];
};

export type ProjectLink = { link: string; title: string };

export type ProjectAchievement = {
  title?: string;
  description: string;
};

export type HomeProject = {
  name: string;
  className: string;
  imageUrl: string;
};

export type Project = {
  name: string;
  oneliner: string;
  role: string | string[];
  tools: string[];
  timeline: { from: string; to: string; isPresent: boolean };
  description: string;
  context: string;
  achievements?: ProjectAchievement[];
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
  bgImageLayout?: string;
  hasShowImageLayout?: boolean;
  showKeyFeatures?: boolean;
  status?: string;
};

export type ProjectDetails = {
  [key: string]: Project;
  airdeck: Project;
  vidableai: Project;
  landgenius: Project;
};
