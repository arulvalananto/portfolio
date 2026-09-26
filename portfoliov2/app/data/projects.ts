import content from './content'
import type { Project } from './types'
import { projects, selectedProjects } from './catalog'

export type ProjectRecord = Project & { slug: string }

const slugAliases = {
    vidableai: 'vidable-ai',
    framewiseai: 'framewise-ai',
    futurereads: 'future-reads',
    thecrawlerman: 'the-crawler-man',
    scafffoldercli: 'scafffolder-cli',
    dressedtokill: 'dressed-to-kill'
} as const

const getSlug = (key: string) => slugAliases[key as keyof typeof slugAliases] ?? key

export const projectEntries: ProjectRecord[] = Object.entries(projects).map(([key, project]) => ({
    ...project,
    slug: getSlug(key)
}))

export const projectData = {
    bySlug: Object.fromEntries(projectEntries.map((project) => [project.slug, project])),
    featured: selectedProjects,
    details: projects,
    cards: content.work.cards
} as const
