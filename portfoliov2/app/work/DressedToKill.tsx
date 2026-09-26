import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { portfolio as constants } from '../data'

const DressedTpKill = () => {
    return (
        <Link
            href={constants.work.cards.dressedToKill.href}
            className="custom-cursor-view-more bg-work-card-dressed-to-kill flex-1 w-full h-full xl:min-h-46.75 xl:max-h-46.75 rounded-2xl border-4 border-black p-3 flex items-center justify-center group overflow-hidden relative"
        >
            <div className="animate-sizeup-moderate z-50 flex flex-col items-center">
                <Image
                    src={constants.work.cards.dressedToKill.logo.src}
                    alt={constants.work.cards.dressedToKill.logo.alt}
                    width={243}
                    height={72}
                    className="md:  group-hover:scale-110 md:group-hover:-translate-x-5 transition duration-300 ease-in-out z-20"
                />
                <p className="text-sm font-quicksand transition duration-300 opacity-0 group-hover:opacity-100">
                    {constants.work.cards.dressedToKill.tagline}
                </p>
            </div>
            <div className="absolute top-50% left-50% animate-sizeup-slow">
                <div className="bg-work-card-dressed-to-kill-accent w-10 h-10 rounded-full z-10 group-hover:opacity-100 group-hover:scale-[40] transition duration-500"></div>
            </div>
            <div className="absolute top-0 left-0 z-50 group-hover:animate-wiggle">
                <Image
                    src={constants.work.cards.dressedToKill.decorations[0]}
                    alt={constants.work.cards.dressedToKill.logo.alt}
                    width={60}
                    height={60}
                    className="-translate-y-20 group-hover:translate-y-0 transition duration-300 ease-in-out"
                />
            </div>
            <div className="absolute bottom-0 right-0 z-50 group-hover:animate-wiggle">
                <Image
                    src={constants.work.cards.dressedToKill.decorations[1]}
                    alt={constants.work.cards.dressedToKill.logo.alt}
                    width={60}
                    height={60}
                    className="scale-0 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 transition duration-300 ease-in-out"
                />
            </div>
            <div className="absolute bottom-0 left-0 z-50 group-hover:animate-wiggle">
                <Image
                    src={constants.work.cards.dressedToKill.decorations[2]}
                    alt={constants.work.cards.dressedToKill.logo.alt}
                    width={60}
                    height={60}
                    className="-translate-x-10 rotate-90 group-hover:rotate-0 group-hover:translate-x-0 transition duration-500 ease-in-out"
                />
            </div>
            <div className="absolute top-0 right-0 z-50 group-hover:animate-wiggle">
                <Image
                    src={constants.work.cards.dressedToKill.decorations[3]}
                    alt={constants.work.cards.dressedToKill.logo.alt}
                    width={60}
                    height={60}
                    className="scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition duration-300 ease-in-out"
                />
            </div>
        </Link>
    )
}

export default DressedTpKill
