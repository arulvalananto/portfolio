"use client";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { ImQuotesLeft } from "react-icons/im";
import { IoMailOutline } from "react-icons/io5";
import { PiArrowBendLeftDownThin, PiArrowBendLeftUpThin } from "react-icons/pi";

import { inter } from "../lib/fonts";
import ExternalLink from "../ui/external-link";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { recentArticles, skills, socialLinks } from "../lib/common";

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main
      className={`py-10 w-[1280px] max-w-[1280px] m-auto grid grid-cols-24 auto-rows-[50px] gap-5 h-full ${inter.variable} font-inter`}
    >
      <section
        id="bio"
        className={`col-span-9 ${
          showMore ? "row-span-11" : "row-span-6"
        } bg-layout2 p-5 rounded-2xl overflow-hidden transition duration-300 ease-in-out`}
      >
        <h1 className="text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[44px] xl:tracking-[-2px]">
          Arul Valan Anto
        </h1>
        <h6 className="pb-8">Full Stack Developer + Tech Blogger</h6>
        <div className="flex flex-col gap-4 mb-2">
          <p className="flex flex-col gap-2 text-sm">
            <span className="text-xs font-bold text-black uppercase">
              [WHO I AM]
            </span>
            <span>
              Hey, I am Arul Valan Anto — Full Stack Developer and tech blogger.
              I have more than 4 years of experience in coding under my belt. My
              playground? Crafting sleek and savvy web applications that make
              users go &ldquo;Wow!&rdquo;.
            </span>
          </p>
          <p className="flex flex-col gap-2 text-sm">
            <span className="text-xs font-bold text-black uppercase">
              [WHAT I DO NOW]
            </span>
            <span>
              Today I&apos;m a{" "}
              <span className="font-semibold">Senior Software Engineer</span> at{" "}
              <ExternalLink
                title="Augment Portal"
                href="https://www.goaugment.io"
              >
                <span className="font-semibold">Augment ↗</span>
              </ExternalLink>{" "}
              developing web applications. Previously, I was the{" "}
              <span className="font-semibold">Junior Software Developer</span>{" "}
              at{" "}
              <ExternalLink
                title="Coding Space India"
                href="https://www.linkedin.com/company/codingspaceindia/about/"
              >
                <span className="font-semibold">CodingSpaceIndia ↗</span>
              </ExternalLink>
              . I writing technical articles on Medium.
            </span>
          </p>
          {showMore && (
            <p className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-bold text-black uppercase">
                [WHERE I&apos;M At Now]
              </span>
              <span>
                Currently, I live in{" "}
                <span className="font-semibold">
                  Kanyakumari, Tamil Nadu, India
                </span>{" "}
                with my parents.
              </span>
            </p>
          )}
          {showMore && (
            <p className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-bold text-black uppercase">
                [WHAT I DO IN MY SPARE TIME]
              </span>
              <span>
                In my free time, I like playing video games and reading books.
                One of my favorite books is{" "}
                <span className="font-semibold">
                  &ldquo;The Alchemist.&rdquo;
                </span>{" "}
                I also enjoy writing technical articles, where I share what I
                know on platforms like Medium and Hackernoon.
              </span>
            </p>
          )}
          {showMore && (
            <p className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-bold text-black uppercase">
                [WHAT I&apos;M Learning Right Now]
              </span>
              <span>Next.js</span>
            </p>
          )}
          {showMore && (
            <p className="flex flex-col gap-2 text-sm">
              <span className="text-xs font-bold text-black uppercase">
                [WHAT I&apos;M LOOKING FOR]
              </span>
              <span>
                Impactful, purposeful work with a diverse team of talented
                people.
              </span>
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={handleShowMore}
          className="text-xs font-quicksand underline underline-offset-2 font-semibold italic flex flex-row gap-1 items-center"
        >
          <span>{!showMore ? "More about me" : "Less about me"}</span>
          {!showMore ? (
            <PiArrowBendLeftDownThin size={16} className="animate-bounce" />
          ) : (
            <PiArrowBendLeftUpThin size={16} className="animate-bounce" />
          )}
        </button>
      </section>
      <section
        id="skills"
        className="col-span-15 row-span-3 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 transition duration-300 ease-in-out"
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
        className="col-span-7 row-span-5 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 transition duration-300 ease-in-out"
      >
        <h1>AirDeck</h1>
      </section>
      <section
        id="my-recent-articles"
        className="col-span-8 row-span-8 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 group"
      >
        <div className="flex flex-row gap-1 items-center justify-between">
          <h1 className="font-semibold text-2xl text-black capitalize">
            My Recent Articles
          </h1>
          <ExternalLink
            href="https://medium.com/@arulvalananto"
            title="See All"
            className="group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out text-xs hover:underline hover:underline-offset-2"
          />
        </div>
        <div className="flex flex-col gap-5">
          {recentArticles.map((article, index) => (
            <ExternalLink
              key={index}
              title={article.title}
              href={article.href}
              className="shadow-sm h-[95px] min-h-[95px] max-h-[95px] flex flex-row gap-5 items-start border border-[rgba(0,0,0,0.1)] rounded-md p-2"
            >
              <div className="flex flex-col justify-between h-full">
                <h2 className="text-sm">{article.title}</h2>
                <p className="text-[12px]">{article.website}</p>
              </div>
              <div className="max-w-[114px] max-h-[76px] overflow-hidden rounded-md">
                <Image
                  src={article.imageURL}
                  alt={article.title}
                  width="250"
                  height="150"
                  className="rounded-md"
                />
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>
      {showMore && (
        <section
          id="filler"
          className="col-span-7 row-span-3 bg-layout2 p-5 rounded-2xl transition duration-300 ease-in-out"
        >
          <h1 className="font-semibold text-2xl text-black">Filler</h1>
        </section>
      )}
      <section
        id="social profiles"
        className="col-span-9 row-span-8 bg-layout2 p-5 rounded-2xl transition duration-300 ease-in-out flex flex-col gap-5"
      >
        <h1 className="font-semibold text-2xl text-black capitalize">
          Find me on
        </h1>
        <div className="w-full grid grid-cols-3 auto-rows-[50px] gap-5">
          {socialLinks.map((social, index) => (
            <ExternalLink
              key={index}
              title={social.title}
              href={social.href}
              className={`p-4 rounded-2xl group border border-[#F0F0F0] flex flex-col gap-3 shadow-sm transition-all duration-300 hover:-translate-y-1 ${social.bgClassName} ${social.layoutClassName}`}
            >
              <social.Icon size={32} className={`${social.iconClassName}`} />
              <div className="flex flex-col gap-1">
                <h5 className={`${social.textClassName} text-sm`}>
                  {social.name}
                </h5>
                <p className={`${social.textClassName} text-xs`}>
                  @{social.username}
                </p>
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>
      <section
        id="vidable-ai-project"
        className="col-span-7 row-span-5 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 transition duration-300 ease-in-out"
      >
        <h1>Vidable</h1>
      </section>
      <section
        id="quote"
        className="col-span-8 row-span-2 bg-layout2 p-5 rounded-2xl flex flex-col gap-2 transition duration-300 ease-in-out"
      >
        <ImQuotesLeft size={32} />
        <h6 className="font-medium text-2xl italic">
          What you seek is seeking you.
        </h6>
      </section>
      <section
        id="landgenius-project"
        className={`${
          showMore ? "col-span-8" : "col-span-7"
        } row-span-5 bg-layout2 p-5 rounded-2xl flex flex-col gap-5 transition duration-300 ease-in-out`}
      >
        <h1>LandGenius</h1>
      </section>
      <section
        id="location"
        className={`${
          showMore ? "col-span-7" : "col-span-8"
        } row-span-3 bg-layou2 overflow-hidden rounded-2xl relative transition duration-300 ease-in-out`}
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
        className="col-span-9 row-span-1 p-5 bg-black text-white rounded-xl flex items-center justify-center transition-all duration-[0.4s] ease-[cubic-bezier(0.19, 1, 0.22, 1)] hover:-translate-y-1 shadow-md"
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
};

export default AboutPage;
