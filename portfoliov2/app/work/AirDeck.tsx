import React from "react";
import Image from "next/image";
import Link from "next/link";

const AirDeck = () => {
  return (
    <Link
      href="/work/airdeck"
      className="custom-cursor-view-more col-span-2 md:col-span-1 xl:col-span-2 row-span-3 md:row-span-8 order-1 md:order-2 bg-[#6C56F9] rounded-2xl border-4 border-black p-3 flex flex-col xl:flex-row gap-1 md:gap-0 items-start justify-between group relative overflow-hidden grid-paper select-none"
    >
      <div className="flex flex-col gap-2 md:gap-4 mt-4 xl:mt-16">
        <Image
          src="/projects_airdeck_logo.webp"
          alt="AirDeck Project"
          width={160}
          height={40}
          priority
        />
        <p className="text-sm sm:text-2xl font-quicksand font-normal">
          Document Narration Platform
        </p>
      </div>
      <div className="w-96 sm:w-[450px] h-96 flex items-center justify-center animate-sizeup-slow z-50">
        <video
          preload="none"
          src="/projects_airdeck_demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          poster="/projects_airdeck_demo_poster.webp"
          className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
        />
      </div>
      <div>
        <div className="transition-all duration-300 absolute -top-40 left-1/4 w-40 h-28 border-2 opacity-100 rounded-md group-hover:-top-10 group-hover:bg-white group-hover:border-black group-hover:border-4 group-hover:scale-50"></div>
        <div className="transition-all duration-300 absolute w-10 h-40 border-2 border-white opacity-40 -rotate-45 rounded-3xl -bottom-24 -right-10"></div>
        <div className="transition-all duration-300 absolute -bottom-48 -right-48 w-10 h-40 bg-white -rotate-45 rounded-3xl group-hover:-bottom-24 group-hover:-right-10 group-hover:border-2 group-hover:border-black"></div>
        <div className="transition-all duration-300 absolute top-1/2 left-7 w-10 h-20 rounded-3xl rotate-45 border-2 opacity-40"></div>
        <div className="transition-all duration-300 absolute top-1/2 left-7 w-10 h-20 rounded-3xl rotate-45 border-2 opacity-40 -translate-x-24 group-hover:opacity-100 group-hover:bg-white group-hover:border-black group-hover:translate-x-0"></div>
        <div className="transition-all duration-300 absolute top-5 left-1/2 w-10 h-10 border-2 opacity-40 rounded-md group-hover:opacity-100 group-hover:top-96 group-hover:rotate-45 group-hover:bg-white group-hover:border-black group-hover:scale-110 group-hover:rounded-none"></div>
        <div className="transition-all duration-300 absolute -top-10 right-0 w-16 h-16 border-2 rounded-full opacity-40 group-hover:opacity-100 group-hover:top-2 group-hover:right-3 group-hover:w-10 group-hover:h-10 group-hover:bg-white group-hover:border-black"></div>
      </div>
    </Link>
  );
};

export default AirDeck;
