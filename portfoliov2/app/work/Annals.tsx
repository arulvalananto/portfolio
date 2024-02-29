import React from "react";
import Image from "next/image";
import Link from "next/link";

const Annals = () => {
  return (
    <Link
      href="/work/annals"
      className="custom-cursor-view-more col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-5 xl:row-span-5 order-2 xl:order-3 bg-[#0F172A] rounded-2xl border-4 border-black p-3 flex flex-col items-center gap-10 xl:gap-[18px] overflow-hidden group select-none"
    >
      <Image
        src="/projects_annals_logo.svg"
        alt="Highlight Project"
        width={126}
        height={31}
        priority
      />
      <p className="font-quicksand text-xl text-white font-normal">
        All-in-one personal space
      </p>
      <div className="animate-loadIn-slow">
        <Image
          src="/projects_annals_look.webp"
          alt="Highlight Project"
          width={275}
          height={150}
          priority
          className="rounded-md transition duration-300 group-hover:scale-90 group-hover:rotate-3 group-hover:translate-x-2 group-hover:-translate-y-4 group-hover:border-4 group-hover:border-white"
        />
      </div>
    </Link>
  );
};

export default Annals;
