import React from "react";
import Image from "next/image";

import SkillBadge from "../../skill-badge";
import { experienceArea } from "@/app/lib/common";

const AgendaSection = () => {
  return (
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
