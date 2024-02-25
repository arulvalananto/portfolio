export type SkillInfo = {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  yearofexperience?: string;
  color?: string;
  width: string;
};

export type Skill = {
  [key: string]: SkillInfo[];
  primary: SkillInfo[];
  secondary: SkillInfo[];
};
