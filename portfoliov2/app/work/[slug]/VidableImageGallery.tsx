import React from "react";
import Image from "next/image";
import { Project } from "@/app/lib/types";

const VidableImageGallery = ({ project }: { project: Project }) => {
  return (
    <>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 bg-[#2B2B2B] bg-[url('/vidable_overview_1.svg')] bg-cover bg-center`}
      ></div>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 sm:row-span-2 bg-[url('/vidable_overview_2_bg.svg')] bg-cover bg-center flex items-center justify-center group`}
      >
        <Image
          src="/home_vidable_project_look.webp"
          alt="Vidable AI image"
          width={200}
          height={200}
          className="rounded-md group-hover:scale-110 transition duration-1000"
        />
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 flex items-center justify-center group`}
      >
        <Image
          src="/vidable_overview_3.svg"
          alt="Vidable Overview 3"
          width={175}
          height={100}
          className="border border-black border-opacity-50 rounded-lg group-hover:rotate-6 group-hover:scale-110 duration-300"
        />
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 flex items-end justify-end hover:scale-105 transition duration-500`}
      >
        <Image
          src="/vidable_overview_4.webp"
          alt="Vidable Overview 4"
          width={450}
          height={450}
        />
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 bg-[#2B2B2B] bg-[url('/vidable_overview_5.svg')] bg-cover bg-center`}
      ></div>
      <div
        className={`${project.bgImageLayout} rounded-lg col-span-12 lg:col-span-6 row-span-1 bg-[#F0712A] flex items-center justify-center`}
      >
        <Image
          src="/vidable_overview_6.webp"
          alt="Vidable Overview 6"
          width={450}
          height={300}
        />
      </div>
    </>
  );
};

export default VidableImageGallery;
