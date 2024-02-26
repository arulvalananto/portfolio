import React from "react";
import Image from "next/image";
import Link from "next/link";

const TheCrawlerMan = () => {
  return (
    <Link
      href="/work/the-crawler-man"
      className="col-span-2 md:col-span-1 xl:col-span-1 row-span-3 md:row-span-8 order-2 md:order-1 bg-[#FFCB3B] rounded-2xl border-4 border-black p-3 overflow-hidden relative select-none cursor-pointer group"
    >
      <div className="flex items-center -translate-y-3 h-[99px]">
        <Image
          src="/projects_thecrawlerman_logo_animation.gif"
          alt="The crawlerman logo animation"
          width={99}
          height={71}
          className="-translate-y-2 -translate-x-6"
          priority
        />
        <Image
          src="/projects_thecrawlerman_logo.svg"
          alt="The crawlerman logo text"
          width={202}
          height={42}
          className="-translate-x-9"
          priority
        />
      </div>
      <p className="text-lg font-quicksand font-normal text-black flex flex-col">
        <span>pre-defined APIs</span>
        <span>explicitly designed for</span>
        <span className="text-white bg-black py-0 px-2 rounded-sm w-20 flex items-center justify-center mt-[2px]">
          scraping
        </span>
      </p>
      <div className="absolute bottom-10 right-3">
        <Image
          src="/projects_thecrawlerman_demo_animation.gif"
          alt=""
          width={268}
          height={213}
        />
      </div>
      <p className="absolute bottom-3 left-3 text-sm font-quicksand font-normal text-black transition-all duration-500 group-hover:text-white z-50 group-hover:bottom-[10px]">
        working in progress
      </p>
      <div className="bg-black box-wave absolute bottom-0 left-0 w-full h-[72px] z-40 duration-500 transition-all translate-y-[72px] group-hover:translate-y-0"></div>
    </Link>
  );
};

export default TheCrawlerMan;
