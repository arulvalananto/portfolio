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
