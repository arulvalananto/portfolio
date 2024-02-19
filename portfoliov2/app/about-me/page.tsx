import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { FcAdvertising } from "react-icons/fc";

import Navbar from "../ui/navbar";
import { dancingScript, poppins } from "../lib/fonts";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
  bio,
  certificates,
  educationDetails,
  experienceDetails,
  projects,
  skills,
  socialLinks,
} from "./common";

export const metadata: Metadata = {
  title: "About me - Arul Valan Anto",
  description: "About Arul Valan Anto, a software engineer.",
};

const AboutPage = () => (
  <main
    className={`${poppins.variable} ${dancingScript.variable} pb-5 space-y-10`}
  >
    <Navbar />
    <div className="w-full max-w-full xl:w-[1270px] xl:max-w-[1270px] m-auto">
      <div className="w-[165px] h-[50px]">
        <Image
          src="/about_hello.svg"
          width={0}
          height={0}
          alt="Welcome to About Page!"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    <div className="w-full max-w-full h-full xl:w-[1270px] xl:max-w-[1270px] xl:h-[737px] m-auto flex flex-col xl:flex-row gap-4 p-4 xl:p-0">
      <div className="flex-1 flex flex-col gap-5 order-2 xl:order-1">
        <section
          id="about"
          className="w-full h-full xl:h-[220px] bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-3 order-1"
        >
          <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
            About
          </h3>
          <p>{bio}</p>
        </section>
        <div className="w-full h-full xl:h-[170px] flex flex-col xl:flex-row items-center gap-5 order-3 xl:order-2">
          <section
            id="education"
            className="flex-1 w-full h-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-1 order-2 xl:order-1"
          >
            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
              Education
            </h3>
            <ul className="space-y-2">
              {educationDetails.map((education, index) => (
                <li key={index}>
                  <h5>{education.degree}</h5>
                  <p className="font-quicksand text-white text-xs">
                    {education.school}
                  </p>
                  <p className="text-[10px] flex items-center gap-2 italic">
                    <span>{education.date}</span>
                    <span>|</span>
                    <span>{education.score}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section
            id="experience"
            className="flex-1 w-full h-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-1 order-1 xl:order-2"
          >
            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
              Experience
            </h3>
            <ul className="space-y-2">
              {experienceDetails.map((experience, index) => (
                <li key={index}>
                  <h5 className="font-quicksand text-base">
                    <b>{experience.position}</b>{" "}
                    <span>
                      at {experience.company}, {experience.location}
                    </span>
                  </h5>
                  <p className="font-quicksand text-white text-xs italic">
                    {experience.date}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="w-full h-full flex-1 flex flex-col xl:flex-row items-center gap-5 order-2 xl:order-3">
          <section
            id="skills"
            className="flex-1 w-full xl:max-w-[472px] h-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2"
          >
            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
              Skills
            </h3>
            <div className="space-y-3">
              {["primary", "secondary"].map((skillType) => (
                <div className="space-y-3" key={skillType}>
                  <h6 className="text-sm font-light font-quicksand">
                    {skillType[0].toUpperCase() + skillType.slice(1)}:
                  </h6>
                  <div className="flex flex-row flex-wrap gap-4">
                    {skills[skillType]?.map((skill, index) => (
                      <AnimatedTooltip
                        key={index}
                        tooltipInfo={{
                          name: skill.alt,
                          id: index,
                          yearofexperience: skill.yearofexperience,
                        }}
                      >
                        <a
                          href={`https://www.google.com/search?q=${skill.alt.toLowerCase()}`}
                          title={skill.alt}
                          className={`border-2 border-black ${skill.className} flex items-center justify-center w-8 h-8`}
                          target="_blank"
                          rel="noopener norefferer nofollow"
                        >
                          <Image
                            key={index}
                            src={skill.src}
                            alt={skill.alt}
                            width="24"
                            height="24"
                            className={`${skill.imageClassName ?? ""}`}
                          />
                        </a>
                      </AnimatedTooltip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="flex-1 w-full h-full text-white rounded-md flex flex-col gap-5">
            <section
              id="certificates"
              className="w-full h-full xl:h-[92px] bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-2 order-2 xl:order-1"
            >
              <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                Certificates
              </h3>
              <div className="flex items-center gap-5">
                {certificates.map((certificate, index) => (
                  <a
                    key={index}
                    href={certificate.href}
                    title={certificate.title}
                    target="_blank"
                    rel="noopener norefferer nofollow"
                  >
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      width={certificate.width}
                      height={certificate.height}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </section>
            <section
              id="projects"
              className="flex-1 w-full bg-portfolio-about-section text-white rounded-md p-4 xl:px-4 xl:py-2 space-y-3 order-1 xl:order-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                  Projects
                </h3>
                <Link
                  href="/projects"
                  className="font-quicksand underline underline-offset-2"
                >
                  See All
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:gap-0 xl:justify-between">
                {projects.map((project, index) => (
                  <a
                    key={index}
                    href={project.href}
                    className="w-[75px] h-[75px] md:w-[125px] md:h-[125px] bg-violet-500 border-2 border-black relative group"
                    title={project.title}
                    target="_blank"
                    rel="noopener norefferer nofollow"
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={125}
                      height={125}
                      unoptimized
                      className="hidden md:block"
                    />
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={75}
                      height={75}
                      unoptimized
                      className="block md:hidden"
                    />
                    <div className="hidden group-hover:flex items-center justify-center bg-black opacity-50 absolute top-0 left-0 w-full h-full">
                      <p className="font-quicksand text-base font-medium">
                        Read More
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[290px] xl:max-w-[290px] flex flex-col items-center gap-5 xl:gap-0  xl:justify-between order-1 xl:order-2">
        <div className="border-2 border-black rounded-md xl:w-full h-[316px] flex items-end justify-end bg-[#4B24B5]">
          <Image
            src="/about_profile.webp"
            alt="Arul Valan Anto's profile pic"
            width={290}
            height={316}
          />
        </div>
        <div className="w-full flex flex-col sm:justify-center sm:flex-row xl:flex-col gap-5">
          <div className="bg-portfolio-yellowGreen w-full max-w-full sm:w-[300px] sm:max-w-[300px] xl:w-[290px] xl:max-w-[290px] h-[68px] border-2 border-black rounded-md flex items-center justify-between p-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                title={link.title}
                className={`w-10 h-10 rounded-full ${link.className} border-2 border-black flex items-center justify-center`}
                target="_blank"
                rel="noopener norefferer nofollow"
              >
                <link.Icon size={20} color="white" />
              </a>
            ))}
          </div>
          <button
            type="button"
            className="bg-black w-full max-w-full sm:w-[300px] sm:max-w-[300px] px-3 xl:px-0 xl:w-full xl:max-w-full h-[68px] rounded-md flex items-center justify-center gap-3"
          >
            <FcAdvertising size={32} />
            <span className="text-white text-base font-medium font-poppins">
              Reach me at here
            </span>
          </button>
        </div>
        <div className="w-full h-[212px] bg-portfolio-blue text-white relative border-2 border-black rounded-md p-2 pt-4 group hidden xl:block">
          <Image
            src="/about_curly_arrow.svg"
            alt="Hire me arrow"
            width={60}
            height={60}
            className="absolute -top-6 left-[135px] transition duration-300 group-hover:-translate-y-1"
          />
          <p className="text-md font-normal font-dancingScript">
            Hire me If you&apos;d like
          </p>
          <Image
            src="/about_random_player.gif"
            alt="Hire me GIF"
            width={290}
            height={161}
            className="absolute -bottom-10 right-0 object-contain scale-50 fade-in-5s"
          />
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;
