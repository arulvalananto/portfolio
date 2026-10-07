import Link from "next/link";
import type { ReactNode } from "react";

type CareerProjectCardProps = {
  href: string;
  name: string;
  oneliner: string;
  colorClassName: string;
  className: string;
  children: ReactNode;
  textClassName?: string;
};

const CareerProjectCard = ({
  href,
  name,
  oneliner,
  colorClassName,
  className,
  children,
  textClassName = "text-white",
}: CareerProjectCardProps) => (
  <Link
    href={href}
    className={`custom-cursor-view-more ${className} ${colorClassName} ${textClassName} group relative flex flex-col gap-3 overflow-hidden rounded-2xl border-4 border-black p-3 transition-transform duration-300 hover:-translate-y-1`}
  >
    <div className="relative z-10">
      <h3 className="font-leagueSpartan text-xl font-semibold leading-none">
        {name}
      </h3>
      <p className="mt-1 max-w-62.5 font-quicksand text-[11px] font-medium leading-snug">
        {oneliner}
      </p>
    </div>
    <div className="relative z-10 min-h-0 flex-1 transition duration-300 group-hover:scale-[1.02]">
      {children}
    </div>
    <i className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full border-[14px] border-white/10 transition duration-500 group-hover:scale-125" />
  </Link>
);

export default CareerProjectCard;
