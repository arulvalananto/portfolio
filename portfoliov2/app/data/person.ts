import {
    bio,
    certificates,
    educationDetails,
    experienceArea,
    experienceDetails,
    projectsOverview,
    recentArticles,
    skills,
    socialLinks,
} from './catalog';

export const person = {
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
