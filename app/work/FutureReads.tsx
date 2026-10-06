import React from "react";
import Link from "next/link";
import Image from "next/image";

import { portfolio as constants } from "../data";

const FutureReads: React.FC = () => {
  return (
    <Link
      href={constants.work.cards.futureReads.href}
      className="custom-cursor-view-more col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-5 xl:row-span-5 order-2 xl:order-3 bg-work-card-future-reads rounded-2xl border-4 border-black relative group select-none overflow-hidden flex flex-col gap-2 md:gap-6 p-5"
    >
      <Image
        src={constants.work.cards.futureReads.logo.src}
        alt={constants.work.cards.futureReads.logo.alt}
        width={183}
        height={23}
        priority
      />
      <p className="text-black font-quicksand text-base block xs:hidden">
        {constants.work.cards.futureReads.tagline.join(" ")}
      </p>
      <p className="hidden xs:flex flex-row gap-1.5 md:gap-0 md:flex-col text-black font-quicksand text-base">
        <span>{constants.work.cards.futureReads.tagline[0]}</span>
        <span>{constants.work.cards.futureReads.tagline[1]}</span>
      </p>
      <div className="animate-bounce-right motion-reduce:animate-none">
        <Image
          src={constants.work.cards.futureReads.image.src}
          alt={constants.work.cards.futureReads.image.alt}
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
