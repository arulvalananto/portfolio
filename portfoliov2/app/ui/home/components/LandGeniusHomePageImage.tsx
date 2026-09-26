import React from 'react'

import type { HomeProject } from '@/app/data'

export type LandGeniusHomePageImageProps = {
    project: HomeProject
    index: number
}

const LandGeniusHomePageImage: React.FC<LandGeniusHomePageImageProps> = ({ project, index }) => {
    return (
        <div
            className={`order-1 ${
                index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'
            } xl:flex-1 w-full h-37.5 xs:h-[300px] sm:h-87.5 md:h-125 lg:h-187.5 xl:h-full ${
                project.className
            } border-4 rounded-md border-black overflow-hidden flex items-center justify-center group cursor-pointer relative`}
        >
            <div className="absolute w-full h-full bg-black z-50 opacity-0 group-hover:opacity-15 transition duration-500"></div>
            <div className="bg-[url('/home_landgenius_overview.webp')] bg-center bg-cover w-full h-full transition duration-[2500ms] group-hover:scale-150 z-40"></div>
        </div>
    )
}

export default LandGeniusHomePageImage
