'use client';

import React from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { redirect, useRouter } from 'next/navigation';

import { inter } from '@/app/lib/fonts';
import { projects } from '@/app/lib/common';
import constants from '@/app/lib/constants';
import ProjectDetails from './ProjectDetails';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectImageGallery from './ProjectImageGallery';

const WorkOverview: React.FC<{ params: Promise<{ slug: string }> }> = ({
    params,
}) => {
    const router = useRouter();
    const { slug } = React.use(params);

    const project = slug
        ? projects[slug.split('-').join('')]
        : '';

    if (!project) {
        redirect('/work');
    }

    return (
        <div
            className={`w-full h-full py-10 md:pt-20 md:pb-10 ${inter.variable} overflow-x-hidden`}
        >
            <div className="w-full lg:w-200 lg:max-w-200 m-auto px-5 pb-5 lg:px-0">
                <button
                    className="bg-gray-100 px-2 py-1 rounded-md flex flex-row gap-1 items-center border border-gray-200 hover:border-gray-300 transform duration-200 ease-in-out"
                    onClick={() => router.back()}
                >
                    <IoChevronBack />
                    <span>{constants.work.detail.backLabel}</span>
                </button>
            </div>
            <ProjectDetails project={project} />
            {project.hasShowImageLayout && (
                <ProjectImageGallery project={project} />
            )}
            {project.showKeyFeatures && (
                <ProjectKeyFeatures project={project} />
            )}
        </div>
    );
};

export default WorkOverview;
