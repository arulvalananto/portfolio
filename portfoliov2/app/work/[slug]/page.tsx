'use client'

import React from 'react'
import { IoChevronBack } from 'react-icons/io5'
import { redirect, useRouter } from 'next/navigation'

import { inter } from '@/app/lib/fonts'
import ProjectDetails from './ProjectDetails'
import { portfolio as constants } from '@/app/data'
import ProjectKeyFeatures from './ProjectKeyFeatures'
import ProjectImageGallery from './ProjectImageGallery'

const WorkOverview: React.FC<{ params: Promise<{ slug: string }> }> = ({ params }) => {
    const router = useRouter()
    const { slug } = React.use(params)

    const project = slug ? constants.projects.bySlug[slug] : undefined

    if (!project) {
        redirect('/work')
    }

    return (
        <div
            className={`w-full h-full py-10 md:pt-20 md:pb-10 ${inter.variable} overflow-x-hidden`}
        >
            <div className="w-full lg:w-200 lg:max-w-200 m-auto px-5 pb-5 lg:px-0">
                <button
                    className="theme-elevated px-2 py-1 rounded-md flex flex-row gap-1 items-center border hover:border-[var(--theme-border-strong)] transform duration-200 ease-in-out"
                    onClick={() => router.back()}
                >
                    <IoChevronBack />
                    <span>{constants.work.detail.backLabel}</span>
                </button>
            </div>
            <ProjectDetails project={project} />
            {project.hasShowImageLayout && <ProjectImageGallery project={project} />}
            {project.showKeyFeatures && <ProjectKeyFeatures project={project} />}
        </div>
    )
}

export default WorkOverview
