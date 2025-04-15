import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Highlight = () => {
    return (
        <Link
            href="/work/highlight"
            className="custom-cursor-view-more col-span-12 xl:col-span-5 row-span-3 md:row-span-6 xl:row-span-5 order-1 xl:order-2 bg-[#7412D7] rounded-2xl border-4 border-black p-3 space-y-3 relative overflow-hidden group"
        >
            <div className="w-[640px] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[500px] h-72 md:h-96 xl:h-[500px] absolute bg-[#7412D7] -bottom-[100px] md:-bottom-[120px] md:-right-[300px] lg:-right-[200px] xl:-bottom-[350px] xl:-right-36 animate-loadIn-iframe motion-reduce:animate-none  transition-all duration-500 group-hover:-bottom-[80px] md:group-hover:-bottom-[100px]  xl:group-hover:-bottom-[320px] select-none rounded-xl">
                <iframe
                    src="https://highlightt.web.app/embed/zD2w4KaJrTju1iZhUqPN?p=0&bg=7412D7&f=12&ed=allow-me"
                    title="Hightlight: welcome_to_my_portfolio.js"
                    width="100%"
                    height="100%"
                    allow="clipboard-write"
                    className="rounded-[12px] bg-[#7412D7]"
                    loading="lazy"
                />
            </div>
            <div className="absolute top-1 right-4 animate-loadIn motion-reduce:animate-none flex items-center justify-center">
                <Image
                    src="/projects_highlight_star2.svg"
                    alt="Highlight Project"
                    width={14}
                    height={14}
                    className="animate-shaker-reverse-slow"
                />
            </div>
            <div className="hidden absolute bottom-[40px] animate-loadIn motion-reduce:animate-none md:flex items-center justify-center">
                <Image
                    src="/projects_highlight_star1.svg"
                    alt="Highlight Project"
                    width={24}
                    height={23}
                    className="animate-shaker"
                />
            </div>
            <div className="hidden absolute bottom-[15px] left-[75px] animate-loadIn-slow motion-reduce:animate-none md:flex items-center justify-center">
                <Image
                    src="/projects_highlight_star2.svg"
                    alt="Highlight Project"
                    width={34}
                    height={32}
                    className="animate-shaker-reverse"
                />
            </div>
            <Image
                src="/projects_highlight_logo.svg"
                alt="Highlight Project"
                width={176}
                height={36}
                priority
            />
            <p className="font-leagueSpartan font-normal text-xl flex flex-row md:flex-col gap-1.5 md:gap-0 items-start text-white select-none">
                <span>Better Code</span>
                <span>Snippets!</span>
            </p>
        </Link>
    );
};

export default Highlight;
