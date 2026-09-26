import content from './content';
import { copy } from './copy';
import { person } from './person';
import { projectData } from './projects';
import { site } from './site';

export const portfolio = {
    ...content,
    site,
    copy,
    person,
    projects: projectData,
    resumeDriveLink: content.resumeDriveLink,
} as const;

export { getSocialIcon } from './social-icons';
export type * from './types';
