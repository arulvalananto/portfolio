import {
  bio,
  careerStartDate,
  certificates,
  educationDetails,
  experienceArea,
  experienceDetails,
  projectsOverview,
  recentArticles,
  skills,
  socialLinks,
} from "./catalog";

export const person = {
  careerStartDate,
  bio,
  education: educationDetails,
  experience: experienceDetails,
  skills,
  certificates,
  socialLinks,
  articles: recentArticles,
  projectOverview: projectsOverview,
  experienceAreas: experienceArea,
} as const;
