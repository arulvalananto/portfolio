import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import SkillBadge from "../../skill-badge";
import { selectedProjects } from "@/app/lib/common";

const SelectedProjectsSection = () => {
  return (
    <div className="py-10 w-full flex flex-col gap-20">
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <Image
          src="/home_work_intro_icon.svg"
          alt="Work"
          width={32}
          height={30}
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
            className="w-full h-full xl:h-[350px] flex flex-col xl:flex-row items-start gap-2 xl:gap-5"
          >
            <div
              className={`order-2 ${
                index % 2 === 0 ? "xl:order-1" : "xl:order-2"
              } flex-1 flex flex-col gap-5 xl:justify-between w-full h-full font-DMSans`}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-[32px] font-bold">{project.name}</h3>
                <p className="text-xl font-normal opacity-50">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-row items-center flex-wrap gap-4">
                {project.skills.map((area) => (
                  <SkillBadge key={area.alt} {...area} />
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener nofollow"
                className="flex flex-row gap-3 items-center"
              >
                <span>Visit the Site</span>
                <FaArrowRightLong />
              </a>
            </div>
            <div
              className={`order-1 ${
                index % 2 === 0 ? "xl:order-2" : "xl:order-1"
              } xl:flex-1 w-full h-[750px] xl:h-full ${
                project.className
              } border-4 rounded-md border-black overflow-hidden flex items-center justify-center`}
            >
              <Image
                src="/projects_framewise_look.webp"
                alt="AirDeck"
                width={500}
                height={350}
                className="rounded-md hidden xl:block"
              />
              <Image
                src="/projects_framewise_look.webp"
                alt="AirDeck"
                width={950}
                height={600}
                className="rounded-md block xl:hidden"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link
          href="/projects"
          className="text-black font-poppins text-sm font-normal border-2 border-black px-4 py-2 capitalize rounded-md bg-[#A79CF8]"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default SelectedProjectsSection;
