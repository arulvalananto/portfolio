import React from "react";
import Image from "next/image";
import Link from "next/link";

const VidableAI = () => {
  return (
    <Link
      href="/work/vidable-ai"
      className="flex-1 w-full h-full xl:max-h-[400px] bg-[#77C686] rounded-2xl border-4 border-black p-3 flex flex-col lg:flex-row lg:items-start relative select-none overflow-hidden group cursor-pointer"
    >
      <div className="flex flex-col gap-3 lg:gap-5 lg:mt-10">
        <Image
          src="/projects_vidable_logo.svg"
          alt="Vidable Project"
          width={160}
          height={32}
          className="max-h-[32px]"
        />
        <p className="flex flex-row xl:hidden text-black font-normal text-base font-quicksand">
          turns video libraries into dynamic assets
        </p>
        <p className="hidden xl:flex flex-col text-black font-normal text-xl font-quicksand">
          <span>turns video libraries into</span>
          <span>dynamic assets</span>
        </p>
      </div>
      <div className="max-h-[400px] animate-sizeup-slow">
        <Image
          src="/projects_vidable_look.svg"
          alt="Vidable Project Overview"
          width={366}
          height={400}
        />
      </div>
      <div className="hidden md:block transition-all duration-500 ease-in-out absolute top-0 -right-8 -rotate-90 -translate-y-20 translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0">
        <Image
          src="/projects_vidable_overlay_1.svg"
          alt="Attract People"
          width={133}
          height={112}
        />
      </div>
      <div className="hidden md:block transition duration-500 absolute bottom-0 -left-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
        <Image
          src="/projects_vidable_overlay_2.svg"
          alt="Attract People"
          width={133}
          height={112}
        />
      </div>
    </Link>
  );
};

export default VidableAI;
