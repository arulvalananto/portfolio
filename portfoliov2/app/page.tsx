import Image from "next/image";
import Marquee from "react-fast-marquee";

import { experienceArea, skills } from "./lib/common";
import SkillBadge from "./ui/skill-badge";

const Home = () => (
  <main className="w-[1280px] max-w-[1280px] h-full m-auto mt-4 overflow-hidden">
    <div className="dashed-grid-paper w-full h-[772px] border-4 border-black rounded-md select-none pt-10 relative overflow-hidden animate-sizeup-fast">
      <h1 className="text-[40px] font-bold font-DMSans flex flex-col gap-1 items-center">
        <span>Hi, I’m Arul Valan Anto &ndash; Full Stack Developer</span>
        <span>Based In India, Currently Software Engineer</span>
        <span>At Augment</span>
      </h1>
      <div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[640px] border-r-[640px] border-l-transparent border-r-transparent border-b-[130px] border-b-black">
          <div className="w-[450px] h-[1px] -translate-x-1/2 bg-black opacity-50" />
          <div className="w-[1px] h-[225px] -translate-x-1/2 -translate-y-[100%] bg-black opacity-50" />
          <div className="w-[1px] h-[225px] -translate-x-1/2 -translate-y-[200%] origin-bottom rotate-45 bg-black opacity-50" />
          <div className="w-[1px] h-[225px] -translate-x-1/2 -translate-y-[300%] origin-bottom -rotate-45 bg-black opacity-50" />
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/arulvalanantos"
            className="font-DMSans text-base font-normal text-black opacity-50 absolute bottom-[295px] left-1/2 -translate-x-48 hover:underline underline-offset-4 hover:opacity-100 transition duration-300"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/arulvalananto"
            className="font-DMSans text-base font-normal text-black opacity-50 absolute top-1/2 -translate-x-1/2 left-1/2 hover:underline underline-offset-4 hover:opacity-100 transition duration-300"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@arulvalananto"
            className="font-DMSans text-base font-normal text-black opacity-50 absolute bottom-[295px] left-1/2 translate-x-32 hover:underline underline-offset-4 hover:opacity-100 transition duration-300"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Medium
          </a>
          <p className="absolute bottom-[110px] left-1/2 -translate-x-72 flex flex-col font-DMSans items-center transition duration-300 hover:scale-110">
            <span className="font-bold text-2xl">10+</span>
            <span className="font-normal text-xs opacity-50">Projects</span>
          </p>
          <p className="absolute bottom-[100px] left-1/2 translate-x-60 flex flex-col font-DMSans items-center transition duration-300 hover:scale-110">
            <span className="font-bold text-2xl">4+</span>
            <span className="font-normal text-xs opacity-50">Years of</span>
            <span className="font-normal text-xs opacity-50">Experience</span>
          </p>
        </div>
        <div>
          <a
            download
            href="/Arul_Valan_Anto_Resume.pdf"
            className="transition duration-300 absolute top-1/2 -translate-y-16 right-20 w-[80px] h-[80px] text-center rounded-full flex items-center justify-center bg-[#22E183] border-2 border-black uppercase font-poppins font-normal text-[10px] -rotate-[15deg] hover:scale-95"
          >
            Download CV
          </a>
          <Image
            src="/home_hero_title_expression.svg"
            alt="stars"
            width={32}
            height={15}
            className="animate-wiggle absolute top-10 right-40"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute top-20 left-12"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute top-28 right-32"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute bottom-48 right-16"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute bottom-40 left-40"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute top-1/3 left-1/4"
          />
        </div>
      </div>
    </div>
    <Marquee pauseOnHover speed={40} delay={1}>
      <div className="py-4 flex flex-row gap-4">
        {[...skills.primary, ...skills.secondary].map((skill) => (
          <SkillBadge key={skill.alt} {...skill} />
        ))}
      </div>
    </Marquee>
    <div className="w-full h-[500px] flex flex-col items-center justify-center gap-2 relative">
      <div className="flex flex-col items-center justify-center">
        <p className="font-poppins text-[40px] font-bold flex flex-row items-center gap-3">
          <span>&quot;Focused on Empowering</span>
          <Image
            src="/home_agenda_vision.svg"
            alt="Vision"
            width={34}
            height={31}
          />
          <span>Visions</span>
        </p>
        <p className="font-poppins text-[40px] font-bold flex flex-row items-center gap-3">
          <span>Crafting Realities</span>
          <Image
            src="/home_agenda_reality.svg"
            alt="Vision"
            width={37}
            height={27}
          />
          <span>where Dreams Ignite,</span>
        </p>
        <p className="font-poppins text-[40px] font-bold flex flex-row items-center gap-3">
          <span>Flourish into Fulfilling</span>
          <Image
            src="/home_agenda_outcome.svg"
            alt="Vision"
            width={24}
            height={35}
          />
          <span>Outcomes&quot;</span>
        </p>
      </div>
      <div className="flex flex-row items-center">
        {experienceArea.map((area) => (
          <SkillBadge key={area.alt} {...area} />
        ))}
      </div>
      <div>
        <Image
          src="/home_agenda_shape_1.svg"
          alt="Vision"
          width={208}
          height={261}
          className="absolute top-[25px] -left-24"
        />
        <Image
          src="/home_agenda_shape_2.svg"
          alt="Vision"
          width={114}
          height={146}
          className="absolute top-[180px] -right-6"
        />
      </div>
    </div>
  </main>
);

export default Home;
