'use client';

import React from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { redirect, useRouter } from 'next/navigation';

import { inter } from '@/app/lib/fonts';
import { projects } from '@/app/lib/common';
import ProjectDetails from './ProjectDetails';
import ProjectKeyFeatures from './ProjectKeyFeatures';
import ProjectImageGallery from './ProjectImageGallery';

const WorkOverview = ({ params }: { params: { slug: string } }) => {
    const router = useRouter();

    const project = params.slug
        ? projects[params.slug.split('-').join('')]
        : '';

    if (!project) {
        redirect('/work');
    }

    return (
        <div
            className={`w-full h-full py-10 md:pt-20 md:pb-10 ${inter.variable} overflow-x-hidden`}
        >
            <div className="w-full lg:w-[800px] lg:max-w-[800px] m-auto mb-4">
                <button
                    className="bg-gray-200 px-2 py-1 rounded-md flex flex-row gap-1 items-center"
                    onClick={() => router.back()}
                >
                    <IoChevronBack />
                    <span>back</span>
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
