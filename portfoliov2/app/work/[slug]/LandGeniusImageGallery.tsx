import React from "react";
import Image from "next/image";

import { Project } from "@/app/lib/types";

const LandGeniusImageGallery = ({ project }: { project: Project }) => {
  return (
    <>
      <div
        className={`rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 bg-[#494F56] flex items-end justify-center group overflow-hidden`}
      >
        <Image
          src="/landgenius_project_overview_title_v2.gif"
          alt="Landgenius flow"
          width={500}
          height={500}
          className="hidden md:block transition"
        />
        <Image
          src="/landgenius_project_overview_title.gif"
          alt="Landgenius flow"
          width={700}
          height={700}
          className="block md:hidden transition"
        />
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 flex items-center justify-center group`}
      >
        <Image
          src="/landgenius_project_overview_features.svg"
          alt="Landgenius flow"
          width={500}
          height={500}
          className="transition duration-300 ease-in-out group-hover:scale-95"
        />
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg order-4 lg:order-3 col-span-12 lg:col-span-6 sm:row-span-2 row-span-1 flex items-center justify-center group`}
      >
        <div className="w-[600px] h-[300px] flex items-center justify-center animate-sizeup-slow z-50">
          <video
            preload="none"
            src="/landgenius_project_overview_demo.webm"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
            poster="/landgenius_project_overview_demo_poster.webp"
            className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
          />
        </div>
      </div>
      <div
        className={`rounded-lg order-3 lg:order-4 col-span-12 lg:col-span-6 row-span-1 bg-[#5155FF] flex items-center justify-center group`}
      >
        <Image
          src="/landgenius_project_overview_flow.gif"
          alt="Landgenius flow"
          width={500}
          height={500}
          className="transition duration-300 ease-in-out group-hover:scale-95"
        />
      </div>
    </>
  );
};

export default LandGeniusImageGallery;
