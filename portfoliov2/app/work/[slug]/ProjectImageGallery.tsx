import React from 'react'

import { Project } from '@/app/data'
import { portfolio as constants } from '@/app/data'
import AirDeckImageGallery from './AirDeckImageGallery'
import VidableImageGallery from './VidableImageGallery'
import LandGeniusImageGallery from './LandGeniusImageGallery'

type ProjectImageGalleryProps = {
    project: Project
}

const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({ project }) => {
    return (
        <div className="my-10 md:mt-20 px-5 md:p-0 w-full md:w-200 md:max-w-200 lg:w-7xl lg:max-w-7xl h-full m-auto grid grid-cols-12 auto-rows-90 lg:auto-rows-75 gap-2">
            {project.name === constants.work.detail.galleryProjects.airDeck ? (
                <AirDeckImageGallery project={project} />
            ) : project.name === constants.work.detail.galleryProjects.vidable ? (
                <VidableImageGallery project={project} />
            ) : project.name === constants.work.detail.galleryProjects.landGenius ? (
                <LandGeniusImageGallery project={project} />
            ) : (
                <>
                    <div
                        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
                    ></div>
                    <div
                        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 sm:row-span-2`}
                    ></div>
                    <div
                        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
                    ></div>
                    <div
                        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
                    ></div>
                    <div
                        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
                    ></div>
                    <div
                        className={`${project.bgImageLayout} rounded-lg col-span-12 lg:col-span-6 row-span-1`}
                    ></div>
                </>
            )}
        </div>
    )
}

export default ProjectImageGallery
