import Link from "next/link";
import Image from "next/image";

import { portfolio } from "@/app/data";

type LandGeniusProjectCardProps = {
  showMore: boolean;
};

export default function LandGeniusProjectCard({
  showMore,
}: LandGeniusProjectCardProps) {
  const { landGenius } = portfolio.aboutMe.projects;

  return (
    <Link
      href={landGenius.href}
      id="landgenius-project"
      className={`${
        showMore ? "col-span-12 xl:col-span-8" : "col-span-12 xl:col-span-7"
      } group relative row-span-4 xs:row-span-5 md:row-span-7 xl:row-span-5 bg-about-cta rounded-2xl transition duration-300 ease-in-out overflow-y-clip flex flex-col xl:items-center xl:justify-center hover:shadow-xl`}
    >
      <h1 className="text-xl md:text-3xl font-bold text-black p-5 pb-0 opacity-0 -translate-x-36 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
        {landGenius.title}
      </h1>
      <div className="transition duration-500 ease-in-out scale-75 group-hover:scale-100 md:scale-75 xl:group-hover:90 xl:scale-110 xl:group-hover:scale-125">
        <Image
          src={landGenius.image.src}
          alt={landGenius.image.alt}
          width="840"
          height="669"
        />
      </div>
    </Link>
  );
}
