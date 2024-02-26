import React from "react";
import Image from "next/image";
import Link from "next/link";

const DressedTpKill = () => {
  return (
    <Link
      href="/work/dressed-to-kill"
      className="bg-[#FFEFD6] flex-1 w-full h-full xl:min-h-[187px] xl:max-h-[187px] rounded-2xl border-4 border-black p-3 flex items-center justify-center group overflow-hidden cursor-pointer relative"
    >
      <div className="animate-sizeup-moderate z-50 flex flex-col items-center">
        <Image
          src="/projects_dressed_to_kill_logo.svg"
          alt="Dressed-to-kill project"
          width={243}
          height={71}
          className="md:  group-hover:scale-110 md:group-hover:-translate-x-5 transition duration-300 ease-in-out z-20"
        />
        <p className="text-sm font-quicksand transition duration-300 opacity-0 group-hover:opacity-100">
          Dress. Slay. Repeat.
        </p>
      </div>
      <div className="absolute top-50% left-50% animate-sizeup-slow">
        <div className="bg-[#F2B950] w-10 h-10 rounded-full z-10 group-hover:opacity-100 group-hover:scale-[40] transition duration-500"></div>
      </div>
      <div className="absolute top-0 left-0 z-50 group-hover:animate-wiggle">
        <Image
          src="/projects_dressedtokill_comma.svg"
          alt="Dressed-to-kill project"
          width={60}
          height={60}
          className="-translate-y-20 group-hover:translate-y-0 transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 right-0 z-50 group-hover:animate-wiggle">
        <Image
          src="/projects_dressedtokill_dot.svg"
          alt="Dressed-to-kill project"
          width={60}
          height={60}
          className="scale-0 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 transition duration-300 ease-in-out"
        />
      </div>
      <div className="absolute bottom-0 left-0 z-50 group-hover:animate-wiggle">
        <Image
          src="/projects_dressedtokill_semicolon.svg"
          alt="Dressed-to-kill project"
          width={60}
          height={60}
          className="-translate-x-10 rotate-90 group-hover:rotate-0 group-hover:translate-x-0 transition duration-500 ease-in-out"
        />
      </div>
      <div className="absolute top-0 right-0 z-50 group-hover:animate-wiggle">
        <Image
          src="/projects_dressedtokill_exclamatory.svg"
          alt="Dressed-to-kill project"
          width={60}
          height={60}
          className="scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};

export default DressedTpKill;
