import { SkillInfo } from "@/app/about-me/types";

import ExternalLink from "../external-link";

type SkillBadgeProps = SkillInfo;

const SkillBadge: React.FC<SkillBadgeProps> = ({ title, color }) => {
  return (
    <div className="flex flex-row items-center gap-2 select-none">
      <span
        className={`w-2 md:w-3 h-2 md:h-3 border border-black rounded-xl ${color}`}
      />
      <ExternalLink
        href={`https://www.google.com/search?q=${title.toLowerCase()}`}
        className={`flex-1 font-poppins font-medium text-black text-[10px] md:text-xs`}
        title={title}
      />
    </div>
  );
};

export default SkillBadge;
