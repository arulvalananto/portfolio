import type { Metadata } from "next";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Arul Valan Anto :: Work",
};

const ProjectsPage = () => (
  <main className="w-full h-full space-y-5 mb-5">
    <div className="max-w-[1280px] m-auto pt-4">
      <div className="grid grid-cols-12 auto-rows-[50px] bg-gray-50 gap-y-0.5">
        <div className="col-span-12 row-span-5 grid grid-cols-12 auto-rows-[50px] gap-x-3">
          <div className="col-span-3 row-span-5 bg-[#2563EB] bg-[url('/projects_sprinkle_effect.png')] rounded-2xl border-4 border-black p-3 flex flex-col gap-3 relative overflow-hidden">
            <div className="bg-radial-gradient absolute -bottom-36 -right-36 w-80 h-80 rounded-full filter blur-xl"></div>
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
          <div className="col-span-5 row-span-5 bg-[#7412D7] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-4 row-span-5 bg-[#0F172A] rounded-2xl border-4 border-black p-3"></div>
        </div>
        <div className="col-span-12 row-span-8 grid grid-cols-3 auto-rows-[50px] gap-x-3">
          <div className="col-span-1 row-span-8 bg-[#FFCB3B] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-2 row-span-8 bg-[#6C56F9] rounded-2xl border-4 border-black p-3"></div>
        </div>
        <div className="col-span-12 row-span-12 grid grid-cols-2 auto-rows-[50px] gap-x-3">
          <div className="col-span-1 row-span-12 bg-[#A5B4FC] rounded-2xl border-4 border-black p-3"></div>
          <div className="col-span-1 row-span-12 w-full h-full flex flex-col items-center gap-4">
            <div className="w-full h-[200px] flex flex-row items-center gap-4">
              <div className="bg-[#EC753A] w-[200px] h-full rounded-2xl border-4 border-black p-3"></div>
              <div className="bg-[#FFEFD6] flex-1 w-full h-full rounded-2xl border-4 border-black p-3"></div>
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
