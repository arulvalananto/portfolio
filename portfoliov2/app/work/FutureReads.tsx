import React from "react";
import Link from "next/link";
import Image from "next/image";

const FutureReads = () => {
  return (
    <Link
      href="/work/future-reads"
      className="col-span-12 md:col-span-6 xl:col-span-4 row-span-2 md:row-span-4 xl:row-span-6 bg-[#F0ABFC] rounded-2xl border-4 border-black relative group select-none overflow-hidden flex flex-col gap-2 md:gap-6 p-5 cursor-pointer"
    >
      <Image
        src="/projects_futurereads_logo.svg"
        alt="FutureReads Project"
        width={183}
        height={23}
      />
      <p className="flex flex-row gap-1.5 md:gap-0 md:flex-col text-black font-quicksand text-base">
        <span>Discover Every Detail</span>
        <span>Frame by Frame</span>
      </p>
      <div className="animate-bounce-right motion-reduce:animate-none">
        <Image
          src="/projects_futurereads_look.webp"
          alt="FutureReads Project Overview"
          width={1600}
          height={900}
          className="transition duration-300 md:translate-x-6 rounded-md group-hover:translate-x-10 group-hover:translate-y-10 md:group-hover:scale-150"
        />
      </div>
    </Link>
  );
};

export default FutureReads;
