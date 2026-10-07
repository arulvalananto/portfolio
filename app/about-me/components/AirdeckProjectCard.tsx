import Link from "next/link";

import { portfolio } from "@/app/data";

export default function AirdeckProjectCard() {
  const { airdeck } = portfolio.aboutMe.projects;

  return (
    <Link
      href={airdeck.href}
      id="airdeck-project"
      className="group col-span-12 xl:col-span-7 row-span-4 xs:row-span-5 md:row-span-7 xl:row-span-5 grid-paper bg-work-card-airdeck p-5 rounded-2xl flex flex-col justify-center items-center transition duration-300 ease-in-out overflow-hidden"
    >
      <h1 className="text-white opacity-0 group-hover:opacity-100 text-3xl font-bold self-start">
        {airdeck.title}
      </h1>
      <div className="w-62.5 xs:w-[300px] sm:w-96 md:w-150 xl:w-75 h-96 flex items-center justify-center animate-sizeup-slow z-50">
        <video
          preload="none"
          src={airdeck.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
          poster={airdeck.posterSrc}
          className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
        />
      </div>
    </Link>
  );
}
