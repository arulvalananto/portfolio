import Image from "next/image";

import { portfolio } from "@/app/data";
import ViewportReveal from "@/app/ui/viewport-reveal";

export default function SkillsSection() {
  const { skills } = portfolio.person;

  return (
    <ViewportReveal
      as="section"
      id="skills"
      className="col-span-12 xl:col-span-15 row-span-6 xs:row-span-5 sm:row-span-4 md:row-span-5 xl:row-span-3 bg-layout2 p-5 sm:pt-6 sm:p-5 xl:p-5 xl:pt-5 rounded-2xl flex flex-col gap-4 sm:gap-7 xl:gap-2 transition duration-300 ease-in-out"
    >
      <h1 className="font-semibold text-2xl theme-text">
        {portfolio.aboutMe.skills.heading}
      </h1>
      <div className="flex flex-row flex-wrap gap-5 xl:gap-x-5 xl:gap-y-2">
        {[...skills.primary, ...skills.secondary].map((skill, index) => (
          <div
            key={index}
            className={`border-2 border-[--theme-border-strong] theme-text rounded-sm ${skill.className} flex items-center justify-center w-8 h-8 md:w-12 md:h-12 xl:w-8 xl:h-8`}
          >
            <Image
              src={skill.src ?? ""}
              alt={skill.title}
              width={skill.width ?? 24}
              height={skill.height ?? 24}
              className={skill.imageClassName ?? ""}
            />
          </div>
        ))}
      </div>
    </ViewportReveal>
  );
}
