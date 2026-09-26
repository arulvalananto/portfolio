import React from 'react'
import Image from 'next/image'

import type { HomeProject } from '@/app/data'

export type AirDeckHomePageImageProps = {
    project: HomeProject
    index: number
}

const AirDeckHomePageImage: React.FC<AirDeckHomePageImageProps> = ({ project, index }) => {
    return (
        <div
            className={`order-1 ${
                index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'
            } xl:flex-1 w-full h-37.5 xs:h-[300px] sm:h-87.5 md:h-125 lg:h-187.5 xl:h-full ${
                project.className
            } border-4 rounded-md border-black overflow-hidden relative group cursor-pointer typewriter-container`}
        >
            <div className="w-full h-full flex flex-col items-center justify-center xl:hover:justify-end transition duration-500">
                <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={350}
                    height={350}
                    className="rounded-md z-50 scale-[0.5] xs:scale-100 lg:scale-[2] xl:group-hover:scale-100 xl:scale-105 transition duration-500 filter blur-sm group-hover:blur-none"
                />
                <Image
                    src="/home_airdeck_project_overlay_1.svg"
                    alt={project.name}
                    width={150}
                    height={150}
                    className="transition duration-500 rounded-md absolute top-2 left-0"
                />
                <Image
                    src="/home_airdeck_project_overlay_2.svg"
                    alt={project.name}
                    width={100}
                    height={100}
                    className="transition duration-300 rounded-md absolute bottom-0 right-0"
                />
                <div className="z-10 absolute top-10 left-37.5 transition duration-500 scale-0 group-hover:scale-100 hidden lg:block">
                    <div className="relative">
                        <div className="absolute top-8 left-9">
                            <h6 className="font-quicksand text-xs font-medium typewriting-effect">
                                A Document Narration platform
                            </h6>
                        </div>
                        <Image
                            src="/home_airdeck_project_title_bg.svg"
                            alt={project.name}
                            width={300}
                            height={300}
                            className="rounded-md"
                        />
                    </div>
                </div>
                <div className="absolute top-24 right-24 animate-moveIn">
                    <Image
                        src="/home_airdeck_project_arrow_1.svg"
                        alt={project.name}
                        width={15}
                        height={15}
                        className="rotate-90 opacity-0 group-hover:opacity-100 transition duration-500 hidden lg:block"
                    />
                </div>
                <div className="absolute bottom-24 left-24 animate-moveIn">
                    <Image
                        src="/home_airdeck_project_arrow_3.svg"
                        alt={project.name}
                        width={15}
                        height={15}
                        className="opacity-0 rotate-60 group-hover:opacity-100 transition duration-500 hidden lg:block"
                    />
                </div>
            </div>
        </div>
    )
}

export default AirDeckHomePageImage
