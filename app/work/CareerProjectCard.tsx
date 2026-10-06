import Link from "next/link";

type CareerProjectCardProps = {
  href: string;
  name: string;
  oneliner: string;
  timeline: string;
  colorClassName: string;
  className: string;
  textClassName?: string;
};

const CareerProjectCard = ({
  href,
  name,
  oneliner,
  timeline,
  colorClassName,
  className,
  textClassName = "text-white",
}: CareerProjectCardProps) => (
  <Link
    href={href}
    className={`custom-cursor-view-more ${className} ${colorClassName} ${textClassName} group relative overflow-hidden rounded-2xl border-4 border-black p-4 md:p-5 flex flex-col justify-between select-none`}
  >
    <div className="relative z-10 flex flex-col gap-2">
      <span className="w-fit rounded-full border border-current/40 bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase">
        {timeline}
      </span>
      <h3 className="font-leagueSpartan text-2xl font-semibold leading-none md:text-3xl">
        {name}
      </h3>
      <p className="max-w-62.5 font-quicksand text-sm leading-snug md:text-base">
        {oneliner}
      </p>
    </div>

    <div
      aria-label={`${name} placeholder preview`}
      className="relative mt-4 h-20 w-full overflow-hidden rounded-xl border-2 border-black/20 bg-white/85 p-2 shadow-[6px_6px_0_rgb(0_0_0_/_18%)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-1"
    >
      <div className="flex items-center gap-1 border-b border-black/10 pb-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        <span className="ml-2 h-1.5 w-20 rounded-full bg-black/10" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 pt-2">
        <span className="col-span-2 h-7 rounded bg-black/10" />
        <span className="h-7 rounded bg-black/15" />
        <span className="h-5 rounded bg-black/15" />
        <span className="h-5 rounded bg-black/10" />
        <span className="h-5 rounded bg-black/15" />
      </div>
      <span className="absolute bottom-1.5 right-2 font-mono text-[8px] font-bold tracking-wider text-black/45 uppercase">
        Preview placeholder
      </span>
    </div>

    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[18px] border-white/10 transition duration-500 group-hover:scale-125" />
  </Link>
);

export default CareerProjectCard;
