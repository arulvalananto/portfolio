import { site } from "./site";
import content from "./content";
import { person } from "./person";
import { projectData } from "./projects";

export const portfolio = {
  ...content,
  site,
  person,
  projects: projectData,
} as const;

export { getSocialIcon } from "./social-icons";
export type * from "./types";
