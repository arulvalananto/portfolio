import React from "react";
import Link from "next/link";
import Image from "next/image";

import { portfolio as constants } from "../data";

const LandGenius: React.FC = () => {
  return (
    <Link
      href={constants.work.cards.landGenius.href}
      className="custom-cursor-view-more relative group col-span-2 xl:col-span-1 row-span-4 md:row-span-6 xl:row-span-12 bg-work-card-landgenius rounded-2xl border-4 border-black p-5 space-y-6 lg:space-y-12 select-none overflow-hidden transition duration-1000 ease-out hover:bg-size-[40px_40px] hover:bg-minus-one hover:bg-dot"
    >
      <Image
        src={constants.work.cards.landGenius.logo.src}
        alt={constants.work.cards.landGenius.logo.alt}
        width={191}
        height={41}
      />
      <p className="flex flex-col lg:items-end text-sm md:text-xl font-quicksand text-black font-normal">
        <span>{constants.work.cards.landGenius.tagline[0]}</span>
        <span>{constants.work.cards.landGenius.tagline[1]}</span>
      </p>
      <div className="flex flex-col lg:items-end">
        <Image
          src={constants.work.cards.landGenius.images[0].src}
          alt={constants.work.cards.landGenius.images[0].alt}
          width={600}
          height={250}
          className="rounded-md"
        />
      </div>
      <div className="transition-all duration-500 absolute bottom-5 right-10 translate-x-0 translate-y-48 group-hover:translate-x-0 group-hover:translate-y-0">
        <Image
          src={constants.work.cards.landGenius.images[1].src}
          alt={constants.work.cards.landGenius.images[1].alt}
          width={150}
          height={160}
          className="rounded-md"
        />
      </div>
    </Link>
  );
};

export default LandGenius;
