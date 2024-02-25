import type { Metadata } from "next";

import Image from "next/image";
import { leagueSpartan } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Work",
};

const ProjectsPage = () => (
  <main className={`w-full h-full space-y-5 mb-5 ${leagueSpartan.variable}`}>
    <div className="max-w-[1280px] m-auto pt-4 px-4 xl:px-0">
      <div className="grid grid-cols-12 auto-rows-[110px] md:auto-rows-[80px] xl:auto-rows-[50px] gap-y-0.5">
        <div className="col-span-12 row-span-9 md:row-span-9 xl:row-span-5 grid grid-cols-12 auto-rows-[100px] md:auto-rows-[55px] xl:auto-rows-[50px] gap-x-3 gap-y-3 xl:gap-y-0">
          <div className="col-span-12 md:col-span-6 xl:col-span-3 row-span-3 md:row-span-5 xl:row-span-5 order-2 xl:order-1 bg-[#2563EB] bg-[url('/projects_sprinkle_effect.webp')] select-none rounded-2xl border-4 border-black p-3 flex flex-col gap-3 relative overflow-hidden group">
            <div className="bg-radial-gradient absolute -bottom-36 -right-36 w-96 h-96 xl:w-80 xl:h-80 rounded-full filter blur-xl cursor-pointer transition-all ease-in-out delay-150 duration-1000 group-hover:-bottom-32 group-hover:-right-32 group-hover:scale-105"></div>
            <Image
              src="/projects_synthup_logo.svg"
              alt="SynthUp Project"
              width={150}
              height={26}
              priority
            />
            <p className="font-quicksand font-medium text-base flex flex-col items-start">
              <span>Time-Saving</span>
              <span>Video Summaries</span>
            </p>
            <p className="absolute right-3 bottom-2 text-[10px] font-normal font-quicksand">
              Coming Soon
            </p>
          </div>
          <div className="col-span-12 xl:col-span-5 row-span-3 md:row-span-6 xl:row-span-5 order-1 xl:order-2 bg-[#7412D7] rounded-2xl border-4 border-black p-3 space-y-3 relative overflow-hidden group cursor-pointer">
            <div className="w-[640px] sm:w-[700px] md:w-[800px] lg:w-[1000px] xl:w-[500px] h-72 md:h-96 xl:h-[500px] absolute bg-[#7412D7] -bottom-[100px] md:-bottom-[120px] md:-right-[300px] lg:-right-[200px] xl:-bottom-[350px] xl:-right-36 animate-loadIn-iframe motion-reduce:animate-none  transition-all duration-500 group-hover:-bottom-[80px] md:group-hover:-bottom-[100px]  xl:group-hover:-bottom-[320px] cursor-pointer rounded-xl">
              <iframe
                src="https://highlightt.web.app/embed/zD2w4KaJrTju1iZhUqPN?p=0&bg=7412D7&f=12&ed=allow-me"
                title="Hightlight: welcome_to_my_portfolio.js"
                width="100%"
                height="100%"
                allow="clipboard-write"
                className="rounded-[12px] bg-[#7412D7]"
              ></iframe>
            </div>
            <div className="absolute top-1 right-4 animate-loadIn motion-reduce:animate-none flex items-center justify-center">
              <Image
                src="/projects_highlight_star2.svg"
                alt="Highlight Project"
                width={14}
                height={14}
                className="animate-shaker-reverse-slow"
              />
            </div>
            <div className="hidden absolute bottom-[40px] animate-loadIn motion-reduce:animate-none md:flex items-center justify-center">
              <Image
                src="/projects_highlight_star1.svg"
                alt="Highlight Project"
                width={24}
                height={23}
                className="animate-shaker"
              />
            </div>
            <div className="hidden absolute bottom-[15px] left-[75px] animate-loadIn-slow motion-reduce:animate-none md:flex items-center justify-center">
              <Image
                src="/projects_highlight_star2.svg"
                alt="Highlight Project"
                width={34}
                height={32}
                className="animate-shaker-reverse"
              />
            </div>
            <Image
              src="/projects_highlight_logo.svg"
              alt="Highlight Project"
              width={176}
              height={36}
              priority
            />
            <p className="font-leagueSpartan font-normal text-xl flex flex-row md:flex-col gap-1.5 md:gap-0 items-start text-white select-none">
              <span>Better Code</span>
              <span>Snippets!</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-5 xl:row-span-5 order-2 xl:order-3 bg-[#0F172A] rounded-2xl border-4 border-black p-3 flex flex-col items-center gap-10 xl:gap-[18px] overflow-hidden group cursor-pointer select-none">
            <Image
              src="/projects_annals_logo.svg"
              alt="Highlight Project"
              width={126}
              height={31}
              priority
            />
            <p className="font-quicksand text-xl text-white font-normal">
              All-in-one personal space
            </p>
            <div className="animate-loadIn-slow">
              <Image
                src="/projects_annals_look.webp"
                alt="Highlight Project"
                width={275}
                height={150}
                priority
                className="rounded-md transition duration-300 group-hover:scale-90 group-hover:rotate-3 group-hover:translate-x-2 group-hover:-translate-y-4 group-hover:border-4 group-hover:border-white"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 row-span-7 md:row-span-6 xl:row-span-8 grid grid-cols-2 xl:grid-cols-3 auto-rows-[120px] md:auto-rows-[50px] gap-x-3 gap-y-3 xl:gap-y-0">
          <div className="col-span-2 md:col-span-1 xl:col-span-1 row-span-3 md:row-span-8 order-2 md:order-1 bg-[#FFCB3B] rounded-2xl border-4 border-black p-3 overflow-hidden relative select-none cursor-pointer group">
            <div className="flex items-center -translate-y-3 h-[99px]">
              <Image
                src="/projects_thecrawlerman_logo_animation.gif"
                alt="The crawlerman logo animation"
                width={99}
                height={71}
                className="-translate-y-2 -translate-x-6"
                priority
              />
              <Image
                src="/projects_thecrawlerman_logo.svg"
                alt="The crawlerman logo text"
                width={202}
                height={42}
                className="-translate-x-9"
                priority
              />
            </div>
            <p className="text-lg font-quicksand font-normal text-black flex flex-col">
              <span>pre-defined APIs</span>
              <span>explicitly designed for</span>
              <span className="text-white bg-black py-0 px-2 rounded-sm w-20 flex items-center justify-center mt-[2px]">
                scraping
              </span>
            </p>
            <div className="absolute bottom-10 right-3">
              <Image
                src="/projects_thecrawlerman_demo_animation.gif"
                alt=""
                width={268}
                height={213}
              />
            </div>
            <p className="absolute bottom-3 left-3 text-sm font-quicksand font-normal text-black transition-all duration-500 group-hover:text-white z-50 group-hover:bottom-[10px]">
              working in progress
            </p>
            <div className="bg-black box-wave absolute bottom-0 left-0 w-full h-[72px] z-40 duration-500 transition-all translate-y-[72px] group-hover:translate-y-0"></div>
          </div>
          <div className="col-span-2 md:col-span-1 xl:col-span-2 row-span-3 md:row-span-8 order-1 md:order-2 bg-[#6C56F9] rounded-2xl border-4 border-black p-3 flex flex-col xl:flex-row gap-1 md:gap-0 items-start justify-between group select-none cursor-pointer relative overflow-hidden grid-paper">
            <div className="flex flex-col gap-2 md:gap-4 mt-4 xl:mt-16">
              <Image
                src="/projects_airdeck_logo.webp"
                alt="AirDeck Project"
                width={160}
                height={40}
                priority
              />
              <p className="text-sm sm:text-2xl font-quicksand font-normal">
                Document Narration Platform
              </p>
            </div>
            <div className="w-96 sm:w-[450px] h-96 flex items-center justify-center animate-sizeup-slow z-50">
              <video
                preload="none"
                src="/projects_airdeck_demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                poster="/projects_airdeck_demo_poster.webp"
                className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
              />
            </div>
            <div className="transition-all duration-300 absolute -top-40 left-1/4 w-40 h-28 border-2 opacity-100 rounded-md group-hover:-top-10 group-hover:bg-white group-hover:border-black group-hover:border-4 group-hover:scale-50"></div>
            <div className="transition-all duration-300 absolute w-10 h-40 border-2 border-white opacity-40 -rotate-45 rounded-3xl -bottom-24 -right-10"></div>
            <div className="transition-all duration-300 absolute -bottom-48 -right-48 w-10 h-40 bg-white -rotate-45 rounded-3xl group-hover:-bottom-24 group-hover:-right-10 group-hover:border-2 group-hover:border-black"></div>
            <div className="transition-all duration-300 absolute top-1/2 left-7 w-10 h-20 rounded-3xl rotate-45 border-2 opacity-40"></div>
            <div className="transition-all duration-300 absolute top-1/2 left-7 w-10 h-20 rounded-3xl rotate-45 border-2 opacity-40 -translate-x-24 group-hover:opacity-100 group-hover:bg-white group-hover:border-black group-hover:translate-x-0"></div>
            <div className="transition-all duration-300 absolute top-5 left-1/2 w-10 h-10 border-2 opacity-40 rounded-md group-hover:opacity-100 group-hover:top-96 group-hover:rotate-45 group-hover:bg-white group-hover:border-black group-hover:scale-110 group-hover:rounded-none"></div>
            <div className="transition-all duration-300 absolute -top-10 right-0 w-16 h-16 border-2 rounded-full opacity-40 group-hover:opacity-100 group-hover:top-2 group-hover:right-3 group-hover:w-10 group-hover:h-10 group-hover:bg-white group-hover:border-black"></div>
          </div>
        </div>
        <div className="col-span-12 row-span-11 md:row-span-12 grid grid-cols-2 auto-rows-[86px] xl:auto-rows-[50px] gap-x-3 gap-y-4 md:gap-y-3 xl:gap-y-0">
          <div className="col-span-2 xl:col-span-1 row-span-4 md:row-span-6 xl:row-span-12 bg-[#A5B4FC] rounded-2xl border-4 border-black p-5 space-y-6 lg:space-y-12 cursor-pointer select-none overflow-hidden transition duration-1000 ease-out hover:bg-[length:40px_40px] hover:bg-minus-one hover:bg-dot">
            <Image
              src="/projects_landgenius_logo.svg"
              alt="LandGenius Project"
              width={191}
              height={41}
            />
            <p className="flex flex-col lg:items-end text-sm md:text-xl font-quicksand text-black font-normal">
              <span>Comprehensive</span>
              <span>environmental analysis</span>
            </p>
            <div className="flex flex-col lg:items-end">
              <Image
                src="/projects_landgenius_look.webp"
                alt="LandGenius Project"
                width={600}
                height={250}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="col-span-2 xl:col-span-1 row-span-8 md:row-span-4 xl:row-span-12 w-full h-full flex flex-col md:flex-row xl:flex-col items-center gap-4">
            <div className="flex-1 xl:flex-auto w-full h-full xl:h-[200px] xl:max-h-[200px] flex flex-row items-center gap-4">
              <div className="bg-[#EC753A] hidden xl:block w-[200px] h-full min-h-[187px] max-h-[187px] rounded-2xl border-4 border-black p-3 relative select-none group cursor-pointer">
                <div className="w-[100px] h-[100px] bg-[#6842EF] border-4 border-black rounded-full absolute top-1/2 -translate-y-1/2 z-50 group-hover:scale-105 transition duration-200">
                  <div className="animate-sizeup-slow">
                    <Image
                      src="/projects_attract_people.svg"
                      alt="Attract People"
                      width={75}
                      height={75}
                      className="translate-x-1 hover:scale-75 transition duration-300 ease-in-out hover:translate-y-3 hover:translate-x-4"
                    />
                  </div>
                </div>
                <div className="w-[75px] h-[75px] bg-[#F1ADE2] border-4 border-black rounded-full absolute top-[70px] left-[90px] -translate-y-1/2 z-40 group-hover:scale-105 transition duration-200">
                  <div className="animate-sizeup-moderate">
                    <Image
                      src="/projects_brainstorm_ideas.svg"
                      alt="Brainstorm Ideas"
                      width={88}
                      height={84}
                      className="translate-x-[16px] -translate-y-[10px] hover:scale-150 hover:-translate-y-6 hover:rotate-12 transition duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] bg-[#5BB1EC] border-4 border-black rounded-full absolute top-[100px] left-[106px] z-30 flex items-center justify-center group-hover:scale-105 transition duration-200">
                  <div className="animate-sizeup-fast">
                    <Image
                      src="/projects_rewards.svg"
                      alt="Collect Rewards"
                      width={28}
                      height={32}
                      className="translate-x-1 hover:scale-150 transition duration-300 ease-in-out hover:translate-y-5"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#FFEFD6] flex-1 w-full h-full xl:min-h-[187px] xl:max-h-[187px] rounded-2xl border-4 border-black p-3 flex items-center justify-center group overflow-hidden cursor-pointer relative">
                <div className="animate-sizeup-moderate z-50 flex flex-col items-center">
                  <Image
                    src="/projects_dressed_to_kill_logo.svg"
                    alt="Dressed-to-kill project"
                    width={243}
                    height={71}
                    className="md:  group-hover:scale-110 md:group-hover:-translate-x-5 transition duration-300 ease-in-out z-20"
                  />
                  <p className="text-sm font-quicksand transition duration-300 opacity-0 group-hover:opacity-100">
                    Dress. Slay. Repeat.
                  </p>
                </div>
                <div className="absolute top-50% left-50% animate-sizeup-slow">
                  <div className="bg-[#F2B950] w-10 h-10 rounded-full z-10 group-hover:opacity-100 group-hover:scale-[40] transition duration-500"></div>
                </div>
                <div className="absolute top-0 left-0 z-50 group-hover:animate-wiggle">
                  <Image
                    src="/projects_dressedtokill_comma.svg"
                    alt="Dressed-to-kill project"
                    width={60}
                    height={60}
                    className="-translate-y-20 group-hover:translate-y-0 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-50 group-hover:animate-wiggle">
                  <Image
                    src="/projects_dressedtokill_dot.svg"
                    alt="Dressed-to-kill project"
                    width={60}
                    height={60}
                    className="scale-0 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute bottom-0 left-0 z-50 group-hover:animate-wiggle">
                  <Image
                    src="/projects_dressedtokill_semicolon.svg"
                    alt="Dressed-to-kill project"
                    width={60}
                    height={60}
                    className="-translate-x-10 rotate-90 group-hover:rotate-0 group-hover:translate-x-0 transition duration-500 ease-in-out"
                  />
                </div>
                <div className="absolute top-0 right-0 z-50 group-hover:animate-wiggle">
                  <Image
                    src="/projects_dressedtokill_exclamatory.svg"
                    alt="Dressed-to-kill project"
                    width={60}
                    height={60}
                    className="scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-full xl:max-h-[400px] bg-[#77C686] rounded-2xl border-4 border-black p-3 flex flex-col lg:flex-row lg:items-start relative select-none overflow-hidden group cursor-pointer">
              <div className="flex flex-col gap-3 lg:gap-5 lg:mt-10">
                <Image
                  src="/projects_vidable_logo.svg"
                  alt="Vidable Project"
                  width={160}
                  height={32}
                  className="max-h-[32px]"
                />
                <p className="flex flex-row xl:hidden text-black font-normal text-base font-quicksand">
                  turns video libraries into dynamic assets
                </p>
                <p className="hidden xl:flex flex-col text-black font-normal text-xl font-quicksand">
                  <span>turns video libraries into</span>
                  <span>dynamic assets</span>
                </p>
              </div>
              <div className="max-h-[400px] animate-sizeup-slow">
                <Image
                  src="/projects_vidable_look.svg"
                  alt="Vidable Project Overview"
                  width={366}
                  height={400}
                />
              </div>
              <div className="hidden md:block transition-all duration-500 ease-in-out absolute top-0 -right-8 -rotate-90 -translate-y-20 translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0">
                <Image
                  src="/projects_vidable_overlay_1.svg"
                  alt="Attract People"
                  width={133}
                  height={112}
                />
              </div>
              <div className="hidden md:block transition duration-500 absolute bottom-0 -left-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                <Image
                  src="/projects_vidable_overlay_2.svg"
                  alt="Attract People"
                  width={133}
                  height={112}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 row-span-9 xl:row-span-6 grid grid-cols-12 auto-rows-[156px] md:auto-rows-[80px] xl:auto-rows-[50px] gap-x-3 gap-y-3 xl:gap-y-0">
          <div className="col-span-12 xl:col-span-5 row-span-2 md:row-span-4 xl:row-span-6 bg-[#B6A1DC] rounded-2xl border-4 border-black p-4 pl-6 flex flex-col gap-2 overflow-hidden group cursor-pointer select-none">
            <Image
              src="/projects_scaffolder_logo.svg"
              alt="Framewise Project"
              width={201}
              height={41}
            />
            <p className="text-black font-quicksand text-base transition-all duration-300 flex flex-row gap-1 group-hover:gap-2">
              <span>Instant</span>
              <span>Scaffold</span>
              <span>CLI</span>
            </p>
            <div className="w-[500px] md:w-[700px] xl:w-[500px] h-96 scale-90 flex items-center justify-center animate-sizeup-slow">
              <video
                preload="none"
                src="/projects_scaffolder_demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                poster="/projects_scaffolder_demo_poster.webp"
                className="rounded-md transition duration-300 ease-in-out group-hover:-translate-y-2"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-4 xl:row-span-6 bg-[#403E4E] rounded-2xl border-4 border-black p-3 flex flex-col gap-4 md:gap-0 md:justify-between overflow-hidden select-none cursor-pointer group">
            <Image
              src="/projects_framewise_logo.svg"
              alt="Framewise Project"
              width={115}
              height={25}
            />
            <p className="flex flex-row gap-1.5 lg:gap-0 lg:flex-col text-white font-quicksand text-xs md:text-sm">
              <span>Read-later app with</span>
              <span>recommendation feature</span>
            </p>
            <div className="animate-sizeup-slow motion-reduce:animate-none min-h-[137px]">
              <Image
                src="/projects_framewise_look.webp"
                alt="Framewise Project Overview"
                width={1600}
                height={900}
                className="rounded-md border-none transition-all duration-300 lg:scale-100 xl:scale-[1.4] lg:translate-y-10 lg:group-hover:scale-100 lg:group-hover:translate-y-0 lg:group-hover:border-[#C4FF59] lg:group-hover:border-4"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4 row-span-2 md:row-span-4 xl:row-span-6 bg-[#F0ABFC] rounded-2xl border-4 border-black relative group select-none overflow-hidden flex flex-col gap-2 md:gap-6 p-5 cursor-pointer">
            <Image
              src="/projects_futurereads_logo.svg"
              alt="FutureReads Project"
              width={183}
              height={23}
            />
            <p className="flex flex-row gap-1.5 md:gap-0 md:flex-col text-black font-quicksand text-base">
              <span>Discover Every Detail</span>
              <span>Frame by Frame</span>
            </p>
            <div className="animate-bounce-right motion-reduce:animate-none">
              <Image
                src="/projects_futurereads_look.webp"
                alt="FutureReads Project Overview"
                width={1600}
                height={900}
                className="transition duration-300 md:translate-x-6 rounded-md group-hover:translate-x-10 group-hover:translate-y-10 md:group-hover:scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ProjectsPage;
