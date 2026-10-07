import React from "react";
import Marquee from "react-fast-marquee";

import SkillBadge from "../../skill-badge";
import type { CareerSkill } from "@/app/data";

type SkillsSectionProps = {
  skills: CareerSkill[];
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <Marquee pauseOnHover speed={40} delay={1}>
      <div className="py-4 pr-4 flex flex-row gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill.title} {...skill} />
        ))}
      </div>
    </Marquee>
  );
};

export default SkillsSection;
