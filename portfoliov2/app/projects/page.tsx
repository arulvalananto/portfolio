import type { Metadata } from "next";

import Image from "next/image";
import { leagueSpartan } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Work",
};

const ProjectsPage = () => (
  <main className={`w-full h-full space-y-5 mb-5 ${leagueSpartan.variable}`}>
    <div className="max-w-[1280px] m-auto pt-4">
      <div className="grid grid-cols-12 auto-rows-[50px] bg-gray-50 gap-y-0.5">
        <div className="col-span-12 row-span-5 grid grid-cols-12 auto-rows-[50px] gap-x-3">
          <div className="col-span-3 row-span-5 bg-[#2563EB] bg-[url('/projects_sprinkle_effect.webp')] select-none rounded-2xl border-4 border-black p-3 flex flex-col gap-3 relative overflow-hidden group">
            <div className="bg-radial-gradient absolute -bottom-36 -right-36 w-80 h-80 rounded-full filter blur-xl cursor-pointer transition-all ease-in-out delay-150 duration-1000 group-hover:-bottom-32 group-hover:-right-32 group-hover:scale-105"></div>
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
          <div className="col-span-5 row-span-5 bg-[#7412D7] rounded-2xl border-4 border-black p-3 space-y-3 relative overflow-hidden group cursor-pointer">
            <div className="absolute -bottom-[350px] animate-loadIn-iframe motion-reduce:animate-none -right-36 transition-all duration-500 group-hover:-bottom-[320px] w-[500px] h-[500px] cursor-pointer rounded-xl">
              <iframe
                //src="https://highlightt.web.app/embed/zD2w4KaJrTju1iZhUqPN?p=0&bg=7412D7&f=12&ed=allow-me"
                src=""
                title="Hightlight: welcome_to_my_portfolio.js"
                width="100%"
                height="100%"
                allow="clipboard-write"
                className="rounded-[12px]"
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
            <div className="absolute bottom-[40px] animate-loadIn motion-reduce:animate-none flex items-center justify-center">
              <Image
                src="/projects_highlight_star1.svg"
                alt="Highlight Project"
                width={24}
                height={23}
                className="animate-shaker"
              />
            </div>
            <div className="absolute bottom-[15px] left-[75px] animate-loadIn-slow motion-reduce:animate-none flex items-center justify-center">
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
            <p className="font-leagueSpartan font-normal text-xl flex flex-col items-start text-white select-none">
              <span>Better Code</span>
              <span>Snippets!</span>
            </p>
          </div>
          <div className="col-span-4 row-span-5 bg-[#0F172A] rounded-2xl border-4 border-black p-3 flex flex-col items-center gap-[18px] overflow-hidden group cursor-pointer select-none">
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
        <div className="col-span-12 row-span-8 grid grid-cols-3 auto-rows-[50px] gap-x-3">
          <div className="col-span-1 row-span-8 bg-[#FFCB3B] rounded-2xl border-4 border-black p-3 overflow-hidden relative select-none cursor-pointer group">
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
          <div className="col-span-2 row-span-8 bg-[#6C56F9] bg-[url('/projects_sprinkle_effect.webp')] rounded-2xl border-4 border-black p-3 flex items-start justify-between group select-none cursor-pointer">
            <div className="flex flex-col gap-4 mt-16">
              <Image
                src="/projects_airdeck_logo.webp"
                alt="AirDeck Project"
                width={160}
                height={40}
                priority
              />
              <p className="text-2xl font-quicksand font-normal">
                Document Narration Platform
              </p>
            </div>
            <div className="w-[450px] h-96 flex items-center justify-center animate-sizeup-slow">
              <video
                preload="none"
                src="/projects_airdeck_demo_v2.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                poster="/projects_airdeck_demo_poster.webp"
                className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 row-span-12 grid grid-cols-2 auto-rows-[50px] gap-x-3">
          <div className="col-span-1 row-span-12 bg-[#A5B4FC] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-1 row-span-12 w-full h-full flex flex-col items-center gap-4">
            <div className="w-full h-[200px] max-h-[200px] flex flex-row items-center gap-4">
              <div className="bg-[#EC753A] w-[200px] h-full min-h-[187px] max-h-[187px] rounded-2xl border-4 border-black p-3 relative select-none group">
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
              <div className="bg-[#FFEFD6] flex-1 w-full h-full min-h-[187px] max-h-[187px] rounded-2xl border-4 border-black p-3 flex items-center justify-center group overflow-hidden cursor-pointer">
                <div className="animate-sizeup-moderate">
                  <Image
                    src="/projects_dressed_to_kill_logo.svg"
                    alt="Dressed-to-kill project"
                    width={243}
                    height={71}
                    className="group-hover:scale-110 group-hover:-translate-x-5 transition duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-full max-h-[400px] bg-[#77C686] rounded-2xl border-4 border-black p-3 flex items-start relative select-none overflow-hidden group cursor-pointer">
              <div className="flex flex-col gap-5 mt-10">
                <Image
                  src="/projects_vidable_logo.svg"
                  alt="Vidable Project"
                  width={160}
                  height={32}
                  className="max-h-[32px]"
                />
                <p className="flex flex-col text-black font-normal text-xl font-quicksand">
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
              <div className="transition-all duration-500 ease-in-out absolute top-0 -right-8 -rotate-90 -translate-y-20 translate-x-20 group-hover:translate-y-0 group-hover:translate-x-0">
                <Image
                  src="/projects_vidable_overlay_1.svg"
                  alt="Attract People"
                  width={133}
                  height={112}
                />
              </div>
              <div className="transition duration-500 absolute bottom-0 -left-8 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100">
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
        <div className="col-span-12 row-span-6 grid grid-cols-12 auto-rows-[50px] gap-x-3">
          <div className="col-span-5 row-span-6 bg-[#B6A1DC] rounded-2xl border-4 border-black p-4 pl-6 flex flex-col gap-2 overflow-hidden group cursor-pointer select-none">
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
            <div className="w-[500px] h-96 scale-90 flex items-center justify-center animate-sizeup-slow">
              <video
                preload="none"
                src="/projects_scaffolder_demo_v2.mp4"
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
          <div className="col-span-3 row-span-6 bg-[#403E4E] rounded-2xl border-4 border-black p-3 flex flex-col justify-between overflow-hidden select-none cursor-pointer group">
            <Image
              src="/projects_framewise_logo.svg"
              alt="Framewise Project"
              width={115}
              height={25}
            />
            <p className="flex flex-col text-white font-quicksand text-sm">
              <span>Read-later app with</span>
              <span>recommendation feature</span>
            </p>
            <div className="animate-sizeup-slow motion-reduce:animate-none min-h-[137px]">
              <Image
                src="/projects_framewise_look.png"
                alt="Framewise Project Overview"
                width={1600}
                height={900}
                className="aspect-auto scale-[1.4] translate-y-10 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 group-hover:border-[#C4FF59] rounded-md  group-hover:border-4"
              />
            </div>
          </div>
          <div className="col-span-4 row-span-6 bg-[#F0ABFC] rounded-2xl border-4 border-black relative group select-none overflow-hidden flex flex-col gap-6 p-5 cursor-pointer">
            <Image
              src="/projects_futurereads_logo.svg"
              alt="FutureReads Project"
              width={183}
              height={23}
            />
            <p className="flex flex-col text-black font-quicksand text-base">
              <span>Discover Every Detail</span>
              <span>Frame by Frame</span>
            </p>
            <div className="animate-bounce-right motion-reduce:animate-none">
              <Image
                src="/projects_futurereads_look.webp"
                alt="FutureReads Project Overview"
                width={1600}
                height={900}
                className="aspect-auto transition duration-300 translate-x-6 rounded-md group-hover:translate-x-10 group-hover:translate-y-10 group-hover:scale-150"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ProjectsPage;
