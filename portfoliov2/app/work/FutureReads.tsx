import React from "react";
import Link from "next/link";
import Image from "next/image";

const FutureReads = () => {
  return (
    <Link
      href="/work/future-reads"
      className="custom-cursor-view-more col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-5 xl:row-span-5 order-2 xl:order-3 bg-[#F0ABFC] rounded-2xl border-4 border-black relative group select-none overflow-hidden flex flex-col gap-2 md:gap-6 p-5"
    >
      <Image
        src="/projects_futurereads_logo.svg"
        alt="FutureReads Project"
        width={183}
        height={23}
        priority
      />
      <p className="text-black font-quicksand text-base block xs:hidden">
        Read-later app with recommendation feature
      </p>
      <p className="hidden xs:flex flex-row gap-1.5 md:gap-0 md:flex-col text-black font-quicksand text-base">
        <span>Read-later app with</span>
        <span>recommendation feature</span>
      </p>
      <div className="animate-bounce-right motion-reduce:animate-none">
        <Image
          src="/projects_futurereads_look.webp"
          alt="FutureReads Project Overview"
          width={1600}
          height={900}
          priority
          className="transition duration-300 md:translate-x-6 rounded-md group-hover:translate-x-10 group-hover:translate-y-10 md:group-hover:scale-150"
        />
      </div>
    </Link>
  );
};

export default FutureReads;
