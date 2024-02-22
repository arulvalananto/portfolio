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
          <div className="col-span-3 row-span-5 bg-[#2563EB] bg-[url('/projects_sprinkle_effect.png')] select-none rounded-2xl border-4 border-black p-3 flex flex-col gap-3 relative overflow-hidden group">
            <div className="bg-radial-gradient absolute -bottom-36 -right-36 w-80 h-80 rounded-full filter blur-xl cursor-pointer transition-all ease-in-out delay-150 duration-1000 group-hover:-bottom-32 group-hover:-right-32 group-hover:scale-105"></div>
            <Image
              src="/projects_synthup_logo.svg"
              alt="SynthUp Project"
              width={150}
              height={26}
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
            />
            <p className="font-quicksand text-xl text-white font-normal">
              All-in-one personal space
            </p>
            <div className="animate-loadIn-slow">
              <Image
                src="/projects_annals_look.png"
                alt="Highlight Project"
                width={275}
                height={150}
                unoptimized
                className="rounded-md transition duration-300 group-hover:scale-90 group-hover:rotate-3 group-hover:translate-x-2 group-hover:-translate-y-4 group-hover:border-4 group-hover:border-[#C4FF59]"
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 row-span-8 grid grid-cols-3 auto-rows-[50px] gap-x-3">
          <div className="col-span-1 row-span-8 bg-[#FFCB3B] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-2 row-span-8 bg-[#6C56F9] rounded-2xl border-4 border-black p-3"></div>
        </div>
        <div className="col-span-12 row-span-12 grid grid-cols-2 auto-rows-[50px] gap-x-3">
          <div className="col-span-1 row-span-12 bg-[#A5B4FC] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-1 row-span-12 w-full h-full flex flex-col items-center gap-4">
            <div className="w-full h-[200px] flex flex-row items-center gap-4">
              <div className="bg-[#EC753A] w-[200px] h-full rounded-2xl border-4 border-black p-3 relative">
                <div className="w-[100px] h-[100px] bg-[#6842EF] border-4 border-black rounded-full absolute top-1/2 -translate-y-1/2 z-50">
                  <Image
                    src="/projects_attract_people.svg"
                    alt="Attract People"
                    width={75}
                    height={75}
                    className="translate-x-1 hover:scale-75 transition duration-300 ease-in-out hover:translate-y-3 hover:translate-x-4"
                  />
                </div>
                <div className="w-[75px] h-[75px] bg-[#F1ADE2] border-4 border-black rounded-full absolute top-[70px] left-[90px] -translate-y-1/2 z-40">
                  <Image
                    src="/projects_brainstorm_ideas.svg"
                    alt="Brainstorm Ideas"
                    width={88}
                    height={84}
                    className="translate-x-[16px] -translate-y-[10px] hover:scale-150 hover:-translate-y-6 hover:rotate-12 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="w-[50px] h-[50px] bg-[#5BB1EC] border-4 border-black rounded-full absolute top-[100px] left-[106px] z-30 flex items-center justify-center">
                  <Image
                    src="/projects_rewards.svg"
                    alt="Collect Rewards"
                    width={28}
                    height={32}
                    className="translate-x-1 hover:scale-150 transition duration-300 ease-in-out hover:translate-y-5"
                  />
                </div>
              </div>
              <div className="bg-[#FFEFD6] flex-1 w-full h-full rounded-2xl border-4 border-black p-3 flex items-center justify-center group overflow-hidden cursor-pointer">
                <Image
                  src="/projects_dressed_to_kill_logo.svg"
                  alt="Dressed-to-kill project"
                  width={243}
                  height={71}
                  className="group-hover:scale-110 group-hover:-translate-x-5 transition duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="flex-1 w-full h-full bg-[#77C686] rounded-2xl border-4 border-black p-3"></div>
          </div>
        </div>
        <div className="col-span-12 row-span-6 grid grid-cols-12 auto-rows-[50px] gap-x-3">
          <div className="col-span-5 row-span-6 bg-[#B6A1DC] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-3 row-span-6 bg-[#403E4E] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-4 row-span-6 bg-[#F0ABFC] rounded-2xl border-4 border-black p-3"></div>
        </div>
      </div>
    </div>
  </main>
);

export default ProjectsPage;
