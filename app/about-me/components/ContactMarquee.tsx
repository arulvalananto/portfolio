import Marquee from "react-fast-marquee";
import { IoMailOutline } from "react-icons/io5";

import { portfolio } from "@/app/data";
import ExternalLink from "@/app/ui/external-link";

export default function ContactMarquee() {
  const { callToAction } = portfolio.aboutMe;

  return (
    <section
      id="call-to-action"
      className="col-span-12 xl:col-span-9 row-span-1 p-5 bg-black text-white rounded-xl flex items-center justify-center transition-all duration-[0.4s] ease-[cubic-bezier(0.19, 1, 0.22, 1)] hover:-translate-y-1 shadow-md"
    >
      <ExternalLink
        href={callToAction.href}
        title={callToAction.title}
        className="flex flex-row items-center gap-5 w-full"
      >
        <Marquee
          speed={70}
          delay={1}
          gradientColor="black"
          gradient
          gradientWidth="50px"
        >
          <p className="pr-40 text-sm overflow-hidden flex flex-row gap-2">
            <span>{callToAction.prompt}</span>
            <span className="arrow-right">{callToAction.arrow}</span>
            <span className="bg-external-link underline underline-offset-2 text-white font-poppins px-2 capitalize">
              {callToAction.label}
            </span>{" "}
          </p>
        </Marquee>
        <div className="relative">
          <IoMailOutline size={20} />
          <span className="w-1.5 h-1.5 absolute top-0 -right-0.5 rounded-full bg-red-600 animate-pulse" />
        </div>
      </ExternalLink>
    </section>
  );
}
