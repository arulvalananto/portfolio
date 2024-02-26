import { SkillInfo } from "@/app/about-me/types";

type SkillBadgeProps = SkillInfo;

const SkillBadge: React.FC<SkillBadgeProps> = ({ alt, color, width }) => {
  return (
    <div className="flex flex-row items-center gap-2 select-none">
      <span
        className={`w-2 md:w-3 h-2 md:h-3 border border-black rounded-xl ${color}`}
      />
      <a
        href={`https://www.google.com/search?q=${alt.toLowerCase()}`}
        className={`flex-1 font-poppins font-medium text-black text-[10px] md:text-xs`}
        target="_blank"
        rel="noopener norefferer nofollow"
      >
        {alt}
      </a>
    </div>
  );
};

export default SkillBadge;
