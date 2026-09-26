import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio as constants } from '../data';

const ScafffolderCLI = () => {
    return (
        <Link
            href={constants.work.cards.scafffolder.href}
            className="custom-cursor-view-more col-span-12 xl:col-span-5 row-span-2 md:row-span-4 xl:row-span-6 bg-[#B6A1DC] rounded-2xl border-4 border-black p-4 pl-6 flex flex-col gap-2 overflow-hidden group select-none"
        >
            <Image
                src={constants.work.cards.scafffolder.logo.src}
                alt={constants.work.cards.scafffolder.logo.alt}
                width={201}
                height={41}
            />
            <p className="text-black font-quicksand text-base transition-all duration-300 flex flex-row gap-1 group-hover:gap-2">
                {constants.work.cards.scafffolder.tagline.map((item) => <span key={item}>{item}</span>)}
            </p>
            <div className="w-125 md:w-175 xl:w-125 h-96 scale-90 flex items-center justify-center animate-sizeup-slow">
                <video
                    preload="none"
                    src={constants.work.cards.scafffolder.demo.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                    poster={constants.work.cards.scafffolder.demo.poster}
                    className="rounded-md transition duration-300 ease-in-out group-hover:-translate-y-2"
                />
            </div>
        </Link>
    );
};

export default ScafffolderCLI;
