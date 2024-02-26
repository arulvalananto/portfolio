import React from "react";
import Image from "next/image";

import SkillBadge from "../../skill-badge";
import { experienceArea } from "@/app/lib/common";

const AgendaSection = () => {
  return (
    <div className="w-full h-[300px] xl:h-[500px] flex flex-col items-center justify-center gap-5 md:gap-6 relative">
      <div className="flex flex-col items-center gap-2 xl:gap-5 text-xs xs:text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-[40px] font-poppins font-bold">
        <p className="flex flex-row items-center gap-1 xs:gap-3">
          <span>&quot;Focused on Empowering</span>
          <Image
            src="/home_agenda_vision.svg"
            alt="Vision"
            width={34}
            height={31}
            className="hidden xs:block"
          />
          <Image
            src="/home_agenda_vision.svg"
            alt="Vision"
            width={17}
            height={15}
            className="block xs:hidden"
          />
          <span>Visions</span>
        </p>
        <p className="flex flex-row items-center gap-1 xs:gap-3">
          <span>Crafting Realities</span>
          <Image
            src="/home_agenda_reality.svg"
            alt="Vision"
            width={37}
            height={27}
            className="hidden xs:block"
          />
          <Image
            src="/home_agenda_reality.svg"
            alt="Vision"
            width={15}
            height={10}
            className="block xs:hidden"
          />
          <span>where Dreams Ignite,</span>
        </p>
        <p className="flex flex-row items-center gap-1 xs:gap-3">
          <span>Flourish into Fulfilling</span>
          <Image
            src="/home_agenda_outcome.svg"
            alt="Vision"
            width={24}
            height={35}
            className="hidden xs:block"
          />
          <Image
            src="/home_agenda_outcome.svg"
            alt="Vision"
            width={12}
            height={17}
            className="block xs:hidden"
          />
          <span>Outcomes&quot;</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
        {experienceArea.map((area) => (
          <SkillBadge key={area.alt} {...area} />
        ))}
      </div>
      <div className="hidden xl:block">
        <Image
          src="/home_agenda_shape_1.svg"
          alt="Vision"
          width={208}
          height={261}
          className="absolute top-[125px] -left-24"
        />
        <Image
          src="/home_agenda_shape_2.svg"
          alt="Vision"
          width={114}
          height={146}
          className="absolute top-[180px] -right-9"
        />
      </div>
    </div>
  );
};

export default AgendaSection;
