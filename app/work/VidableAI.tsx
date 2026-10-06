import React from "react";
import Link from "next/link";
import Image from "next/image";

import { portfolio as constants } from "../data";

const VidableAI: React.FC = () => {
  return (
    <Link
      href={constants.work.cards.vidable.href}
      className="custom-cursor-view-more flex-1 w-full h-full xl:max-h-100 bg-work-card-vidable rounded-2xl border-4 border-black p-3 flex flex-col lg:flex-row lg:items-start relative select-none overflow-hidden group"
    >
      <div className="flex flex-col gap-3 lg:gap-5 lg:pt-10">
        <Image
          src={constants.work.cards.vidable.logo.src}
          alt={constants.work.cards.vidable.logo.alt}
          width={160}
          height={27}
          className="max-h-8"
        />
        <p className="flex flex-row xl:hidden text-black font-normal text-base font-quicksand">
          {constants.work.cards.vidable.tagline.join(" ")}
        </p>
        <p className="hidden xl:flex flex-col text-black font-normal text-xl font-quicksand">
          <span>{constants.work.cards.vidable.tagline[0]}</span>
          <span>{constants.work.cards.vidable.tagline[1]}</span>
        </p>
      </div>
      <div className="max-h-100 animate-sizeup-slow">
        <Image
          src={constants.work.cards.vidable.image.src}
          alt={constants.work.cards.vidable.image.alt}
          width={366}
          height={370}
        />
      </div>
      <div className="hidden md:block transition-all duration-500 ease-in-out absolute top-0 -right-8 -rotate-90 -translate-y-20 translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0">
        <Image
          src={constants.work.cards.vidable.overlays[0].src}
          alt={constants.work.cards.vidable.overlays[0].alt}
          width={133}
          height={89}
        />
      </div>
      <div className="hidden md:block transition duration-500 absolute bottom-0 -left-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
        <Image
          src={constants.work.cards.vidable.overlays[1].src}
          alt={constants.work.cards.vidable.overlays[1].alt}
          width={133}
          height={133}
        />
      </div>
    </Link>
  );
};

export default VidableAI;
