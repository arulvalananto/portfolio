import React from "react";
import Image from "next/image";
import Link from "next/link";

const ScafffolderCLI = () => {
  return (
    <Link
      href="/work/scafffolder-cli"
      className="custom-cursor-view-more col-span-12 xl:col-span-5 row-span-2 md:row-span-4 xl:row-span-6 bg-[#B6A1DC] rounded-2xl border-4 border-black p-4 pl-6 flex flex-col gap-2 overflow-hidden group select-none"
    >
      <Image
        src="/projects_scaffolder_logo.svg"
        alt="Framewise Project"
        width={201}
        height={41}
      />
      <p className="text-black font-quicksand text-base transition-all duration-300 flex flex-row gap-1 group-hover:gap-2">
        <span>Instant</span>
        <span>Scaffold</span>
        <span>CLI</span>
      </p>
      <div className="w-[500px] md:w-[700px] xl:w-[500px] h-96 scale-90 flex items-center justify-center animate-sizeup-slow">
        <video
          preload="none"
          src="/projects_scaffolder_demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          poster="/projects_scaffolder_demo_poster.webp"
          className="rounded-md transition duration-300 ease-in-out group-hover:-translate-y-2"
        />
      </div>
    </Link>
  );
};

export default ScafffolderCLI;
