import Image from "next/image";
import type { Metadata } from "next";
import { IoMailOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { ImQuotesLeft } from "react-icons/im";

import { inter } from "../lib/fonts";
import { skills } from "../lib/common";
import ExternalLink from "../ui/external-link";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Profile",
};

const AboutPage = () => (
  <main
    className={`py-10 w-[1280px] max-w-[1280px] m-auto grid grid-cols-24 auto-rows-[50px] gap-5 h-full ${inter.variable} font-inter`}
  >
    <section
      id="bio"
      className="col-span-9 row-span-6 bg-layout2 p-5 rounded-2xl"
    >
      <h1 className="text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]">
        Arul Valan Anto
      </h1>
      <div>
        <p></p>
      </div>
    </section>
    <section
      id="skills"
      className="col-span-15 row-span-3 bg-layout2 p-5 rounded-2xl flex flex-col gap-5"
    >
      <h1 className="font-semibold text-2xl text-black">Skills</h1>
      <div className="flex flex-row flex-wrap gap-5">
        {[...skills.primary, ...skills.secondary]?.map((skill, index) => (
          <AnimatedTooltip
            key={index}
            tooltipInfo={{
              name: skill.title,
              id: index,
              yearofexperience: skill.yearofexperience ?? "1",
            }}
          >
            <a
              href={`https://www.google.com/search?q=${skill.title.toLowerCase()}`}
              title={skill.title}
              className={`border-2 border-black ${skill.className} flex items-center justify-center w-8 h-8 md:w-12 md:h-12 xl:w-8 xl:h-8 transition duration-100 hover:scale-110`}
              target="_blank"
              rel="noopener norefferer nofollow"
            >
              <Image
                key={index}
                src={skill?.src ?? ""}
                alt={skill.title}
                width="24"
                height="24"
                className={`${skill.imageClassName ?? ""}`}
              />
            </a>
          </AnimatedTooltip>
        ))}
      </div>
    </section>
    <section
      id="airdeck-project"
      className="col-span-7 row-span-5 bg-layout2 p-5 rounded-2xl flex flex-col gap-5"
    >
      <h1>AirDeck</h1>
    </section>
    <section
      id="my-top-reads"
      className="col-span-8 row-span-8 bg-layout2 p-5 rounded-2xl flex flex-col gap-5"
    >
      <h1 className="font-semibold text-2xl text-black">My Top reads</h1>
    </section>
    {/*<section
      id="filler"
      className="col-span-7 row-span-2 bg-layout2 p-5 rounded-2xl"
    >
      <h1 className="font-semibold text-2xl text-black">Filler</h1>
    </section>*/}
    <section
      id="social profiles"
      className="col-span-9 row-span-8 bg-layout2 p-5 rounded-2xl"
    >
      <h1 className="font-semibold text-2xl text-black">Follow me</h1>
    </section>
    <section
      id="vidable-ai-project"
      className="col-span-7 row-span-5 bg-layout2 p-5 rounded-2xl flex flex-col gap-5"
    >
      <h1>Vidable</h1>
    </section>
    <section
      id="quote"
      className="col-span-8 row-span-2 bg-layout2 p-5 rounded-2xl flex flex-col gap-2"
    >
      <ImQuotesLeft size={32} />
      <h6 className="font-medium text-2xl italic">
        What you seek is seeking you.
      </h6>
    </section>
    <section
      id="landgenius-project"
      className="col-span-7 row-span-5 bg-layout2 p-5 rounded-2xl flex flex-col gap-5"
    >
      <h1>LandGenius</h1>
    </section>
    <section
      id="location"
      className="col-span-8 row-span-3 bg-layou2 overflow-hidden rounded-2xl relative"
    >
      <ExternalLink
        href="https://maps.app.goo.gl/77KHe5BfBXmceoqv6"
        title="location"
      >
        <Image
          src="/map_location.webp"
          alt="location"
          width="620"
          height="190"
          className="scale-150"
          unoptimized
        />
        <div className="absolute left-[102px] top-[76px] rounded-full bg-[#679BFF] opacity-20 s-3 styles_marker-pulse__BxsPp"></div>
        <div className="absolute w-3 h-3 left-[96px] top-[72px] rounded-full bg-[#679BFF] border-2 border-white shadow-md"></div>
        <p className="absolute bottom-0 right-0 font-normal text-xs px-2 py-1 m-2 bg-layout2 bg-opacity-50 rounded-md">
          Kanyakumari, TN, India
        </p>
      </ExternalLink>
    </section>
    <section
      id="call-to-action"
      className="col-span-9 row-span-1 p-5 bg-black text-white rounded-xl flex items-center justify-center"
    >
      <ExternalLink
        href="mailto:arulvalananto@gmail.com"
        title="mail to"
        className="flex flex-row items-center gap-5 w-full"
      >
        <Marquee
          speed={70}
          delay={1}
          gradientColor="black"
          gradient
          gradientWidth="50px"
        >
          <p className="pr-40 text-sm overflow-hidden flex flex-row gap-2">
            <span>If you&apos;d like to work with me</span>
            <span className="arrow-right">-&gt;</span>
            <span className="bg-[#00f] underline underline-offset-2 text-white font-poppins px-2 capitalize">
              Say hello
            </span>{" "}
          </p>
        </Marquee>
        <div className="relative">
          <IoMailOutline size={20} />
          <span className="w-1.5 h-1.5 absolute top-0 -right-0.5 rounded-full bg-red-600 animate-pulse"></span>
        </div>
      </ExternalLink>
    </section>
  </main>
);

export default AboutPage;
