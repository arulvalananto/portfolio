import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio as constants } from '../data';

const Synthup: React.FC = () => {
    return (
        <Link
            href={constants.work.cards.synthUp.href}
            className="custom-cursor-view-more col-span-12 md:col-span-6 xl:col-span-3 row-span-3 md:row-span-5 xl:row-span-5 order-2 xl:order-1 bg-work-card-synthup bg-[url('/projects_sprinkle_effect.webp')] select-none rounded-2xl border-4 border-black p-3 flex flex-col gap-3 relative overflow-hidden group"
        >
            <div className="bg-radial-gradient absolute -bottom-36 -right-36 w-96 h-96 xl:w-80 xl:h-80 rounded-full filter blur-xl transition-all ease-in-out delay-150 duration-1000 group-hover:-bottom-32 group-hover:-right-32 group-hover:scale-105"></div>
            <Image
                src={constants.work.cards.synthUp.logo.src}
                alt={constants.work.cards.synthUp.logo.alt}
                width={150}
                height={26}
                priority
            />
            <p className="font-quicksand font-medium text-base flex flex-col items-start">
                <span>{constants.work.cards.synthUp.tagline[0]}</span>
                <span>{constants.work.cards.synthUp.tagline[1]}</span>
            </p>
        </Link>
    );
};

export default Synthup;
