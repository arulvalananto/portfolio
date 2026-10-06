import { copy } from "./copy";
import { site } from "./site";
import content from "./content";
import { person } from "./person";
import { projectData } from "./projects";

export const portfolio = {
  ...content,
  site,
  copy,
  person,
  projects: projectData,
  resumeDriveLink: content.resumeDriveLink,
} as const;

export { getSocialIcon } from "./social-icons";
export type * from "./types";
