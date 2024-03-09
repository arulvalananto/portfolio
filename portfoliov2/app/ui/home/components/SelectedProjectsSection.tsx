import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import SkillBadge from "../../skill-badge";
import { selectedProjects } from "@/app/lib/common";
import VidableHomePageImage from "./VidableHomePageImage";
import AirDeckHomePageImage from "./AirDeckHomePageImage";
import LandGeniusHomePageImage from "./LandGeniusHomePageImage";

const SelectedProjectsSection = () => {
  return (
    <div className="py-5 pb-10 xl:py-10 xl:pb-20 w-full flex flex-col gap-20 select-none">
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <Image
          src="/work_section_alien.gif"
          alt="Work"
          width={60}
          height={60}
        />
        <h5 className="font-bold font-poppins text-2xl uppercase">Work</h5>
        <p className="text-xs uppercase font-poppins font-normal opacity-50">
          Selected Work
        </p>
      </div>
      <div className="flex flex-col gap-10 xl:gap-40">
        {selectedProjects.map((project, index) => (
          <div
            key={project.name}
            className="w-full h-full xl:h-[350px] flex flex-col xl:flex-row items-start gap-2 md:gap-5"
          >
            <div
              className={`order-2 ${
                index % 2 === 0 ? "xl:order-1" : "xl:order-2"
              } flex-1 flex flex-col gap-5 xl:gap-8 w-full h-full font-DMSans`}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-[32px] font-bold">
                  {project.name}
                </h3>
                <p className="text-base md:text-xl font-normal opacity-50">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-row items-center flex-wrap gap-4">
                {project.skills.map((area) => (
                  <SkillBadge key={area.title} {...area} />
                ))}
              </div>
              <Link href={project.url}
                className="flex flex-row gap-2 items-center font-poppins font-medium text-xs group"
              >
                <span className="group-hover:scale-105 transition duration-500">
                  Visit the Site
                </span>
                <FaArrowRightLong className="transition duration-500 group-hover:translate-x-3" />
              </Link>
            </div>
            {index == 0 ? (
              <AirDeckHomePageImage project={project} index={index} />
            ) : index === 1 ? (
              <LandGeniusHomePageImage project={project} index={index} />
            ) : (
              <VidableHomePageImage project={project} index={index} />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link
          href="/work"
          className="text-black font-poppins text-sm font-normal border-2 border-black px-4 py-2 capitalize rounded-md bg-[#A79CF8] hover:borde-4 hover:scale-105 transition-all duration-500 ease-in-out shadow-md"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default SelectedProjectsSection;
