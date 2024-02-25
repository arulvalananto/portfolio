import { SkillInfo } from "@/app/about-me/types";

type SkillBadgeProps = SkillInfo;

const SkillBadge: React.FC<SkillBadgeProps> = ({ alt, color, width }) => {
  return (
    <div className="w-full h-full flex flex-row items-center gap-2 select-none">
      <span className={`w-3 h-3 border border-black rounded-xl ${color}`} />
      <a
        href={`https://www.google.com/search?q=${alt.toLowerCase()}`}
        className={`flex-1 h-full font-poppins font-medium text-black text-xs ${width}`}
        target="_blank"
        rel="noopener norefferer nofollow"
      >
        {alt}
      </a>
    </div>
  );
};

export default SkillBadge;
