import React from "react";
import Image from "next/image";

const Filler = () => {
  return (
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
  );
};

export default Filler;
