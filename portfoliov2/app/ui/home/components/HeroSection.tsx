import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="dashed-grid-paper w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] xl:h-[772px] border-4 px-10 xl:px-0 xl:pt-10 border-black rounded-md select-none flex items-center justify-center xl:block relative overflow-hidden animate-sizeup-fast">
      <h1 className="text-[8px] xs:text-xs sm:text-base md:text-2xl lg:text-3xl xl:text-[40px] font-bold font-DMSans flex flex-col gap-1 md:gap-3 items-center relative">
        <span>Hi, I’m Arul Valan Anto &ndash; Full Stack Developer</span>
        <span>Based In India, Currently Software Engineer</span>
        <span>At Augment</span>
        <Image
          src="/home_hero_title_expression.svg"
          alt="stars"
          width={32}
          height={15}
          className="animate-wiggle absolute top-0 hidden sm:block -right-10 xl:-top-1 xl:right-[140px]"
        />
        <Image
          src="/home_hero_title_expression.svg"
          alt="stars"
          width={16}
          height={7}
          className="animate-wiggle block sm:hidden absolute top-0 -right-5 xl:-top-1 xl:right-[140px]"
        />
      </h1>
      <div>
        <div className="hidden xl:block absolute bottom-0 left-0 w-0 h-0 border-l-[640px] border-r-[640px] border-l-transparent border-r-transparent border-b-[130px] border-b-black">
          <div className="w-[450px] h-[1px] -translate-x-1/2 bg-black opacity-50" />
          <div className="w-[1px] h-[225px] -translate-x-1/2 -translate-y-[100%] bg-black opacity-50" />
          <div className="w-[1px] h-[225px] -translate-x-1/2 -translate-y-[200%] origin-bottom rotate-45 bg-black opacity-50" />
          <div className="w-[1px] h-[225px] -translate-x-1/2 -translate-y-[300%] origin-bottom -rotate-45 bg-black opacity-50" />
        </div>
        <div className="hidden xl:block">
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
            className="hidden xl:flex transition duration-300 absolute top-1/2 -translate-y-16 right-20 w-[80px] h-[80px] text-center rounded-full items-center justify-center bg-[#22E183] border-2 border-black uppercase font-poppins font-normal text-[10px] -rotate-[15deg] hover:scale-95"
          >
            Download CV
          </a>
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute top-2 left-1.5 sm:top-20 sm:left-12"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute top-9 right-5 sm:top-28 sm:right-32"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute bottom-4 right-12 sm:bottom-48 sm:right-16"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute bottom-10 left-10 sm:bottom-40 sm:left-40"
          />
          <Image
            src="/stars_v2.svg"
            alt="stars"
            width={12}
            height={15}
            className="animate-wiggle absolute top-1/4 left-1/3 sm:top-1/3 sm:left-1/4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
