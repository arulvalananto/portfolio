import {
  careerStartDate,
  experienceArea,
  recentArticles,
  skills,
  socialLinks,
} from "./catalog";

export const person = {
  careerStartDate,
  skills,
  socialLinks,
  articles: recentArticles,
  experienceAreas: experienceArea,
} as const;
