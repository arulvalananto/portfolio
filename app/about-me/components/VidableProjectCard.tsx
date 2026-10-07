import Link from "next/link";
import Image from "next/image";

import { portfolio } from "@/app/data";

export default function VidableProjectCard() {
  const { vidable } = portfolio.aboutMe.projects;

  return (
    <Link
      href={vidable.href}
      id="vidable-ai-project"
      className="group relative col-span-12 xl:col-span-7 row-span-4 xs:row-span-5 md:row-span-7 xl:row-span-5 bg-layout2 hover:bg-[url('/about_vidable_project.webp')] bg-cover p-5 pb-0 rounded-2xl flex flex-col gap-5 transition-all duration-300 ease-in-out hover:shadow-xl"
    >
      <h1 className="text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 uppercase opacity-0 group-hover:opacity-100 ease-in-out group-hover:left-20 group-hover:top-10 xl:group-hover:left-1/2 xl:group-hover:top-2 group-hover:text-3xl xl:group-hover:text-lg transition-all duration-300">
        {vidable.title}
      </h1>
      <div className="overflow-hidden flex items-center justify-center group relative cursor-pointer">
        <div className="transition duration-750 z-50 scale-50 xs:scale-100 translate-y-25 sm:translate-y-1/3 group-hover:scale-[0.2] xs:group-hover:scale-[0.3] md:group-hover:scale-50 xl:group-hover:scale-[0.5] group-hover:translate-y-10">
          <Image
            src={vidable.image.src}
            alt={vidable.image.alt}
            width={500}
            height={500}
          />
        </div>
      </div>
    </Link>
  );
}
