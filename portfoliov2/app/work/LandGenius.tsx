import React from "react";
import Link from "next/link";
import Image from "next/image";

const LandGenius = () => {
  return (
    <Link
      href="/work/landgenius"
      className="col-span-2 xl:col-span-1 row-span-4 md:row-span-6 xl:row-span-12 bg-[#A5B4FC] rounded-2xl border-4 border-black p-5 space-y-6 lg:space-y-12 cursor-pointer select-none overflow-hidden transition duration-1000 ease-out hover:bg-[length:40px_40px] hover:bg-minus-one hover:bg-dot"
    >
      <Image
        src="/projects_landgenius_logo.svg"
        alt="LandGenius Project"
        width={191}
        height={41}
      />
      <p className="flex flex-col lg:items-end text-sm md:text-xl font-quicksand text-black font-normal">
        <span>Comprehensive</span>
        <span>environmental analysis</span>
      </p>
      <div className="flex flex-col lg:items-end">
        <Image
          src="/projects_landgenius_look.webp"
          alt="LandGenius Project"
          width={600}
          height={250}
          className="rounded-md"
        />
      </div>
    </Link>
  );
};

export default LandGenius;
