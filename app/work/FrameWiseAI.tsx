import React from "react";
import Link from "next/link";
import Image from "next/image";

import { portfolio as constants } from "../data";

const FrameWiseAI: React.FC = () => {
  return (
    <Link
      href={constants.work.cards.frameWise.href}
      className="custom-cursor-view-more col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-4 xl:row-span-6 bg-work-card-framewise rounded-2xl border-4 border-black p-3 flex flex-col gap-4 md:gap-0 md:justify-between overflow-hidden select-none group"
    >
      <Image
        src={constants.work.cards.frameWise.logo.src}
        alt={constants.work.cards.frameWise.logo.alt}
        width={115}
        height={25}
      />
      <p className="flex flex-row gap-1.5 lg:gap-0 lg:flex-col text-white font-quicksand text-xs md:text-sm">
        <span>{constants.work.cards.frameWise.tagline[0]}</span>
        <span>{constants.work.cards.frameWise.tagline[1]}</span>
      </p>
      <div className="animate-sizeup-slow motion-reduce:animate-none min-h-34.25">
        <Image
          src={constants.work.cards.frameWise.image.src}
          alt={constants.work.cards.frameWise.image.alt}
          width={1600}
          height={900}
          className="rounded-md border-none transition-all duration-300 lg:scale-100 xl:scale-[1.4] lg:translate-y-10 lg:group-hover:scale-100 lg:group-hover:translate-y-0 lg:group-hover:border-work-card-framewise-hover-border lg:group-hover:border-4"
        />
      </div>
    </Link>
  );
};

export default FrameWiseAI;
