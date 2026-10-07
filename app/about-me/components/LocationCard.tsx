import Image from "next/image";

import { portfolio } from "@/app/data";
import ExternalLink from "@/app/ui/external-link";

type LocationCardProps = { showMore: boolean };

export default function LocationCard({ showMore }: LocationCardProps) {
  return (
    <section
      id="location"
      className={`${
        showMore ? "col-span-7" : "col-span-8"
      } hidden xl:block row-span-3 overflow-hidden rounded-2xl relative transition duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1`}
    >
      <ExternalLink
        href={portfolio.aboutMe.location.href}
        title={portfolio.aboutMe.location.title}
      >
        <Image
          src={portfolio.aboutMe.location.image.src}
          alt={portfolio.aboutMe.location.image.alt}
          width="620"
          height="190"
          className="scale-150"
          unoptimized
        />
        <div className="absolute left-25.5 top-19 rounded-full bg-map-marker opacity-20 s-3 styles_marker-pulse__BxsPp" />
        <div className="absolute w-3 h-3 left-24 top-18 rounded-full bg-map-marker border-2 border-white shadow-md" />
        <p className="absolute bottom-0 right-0 font-normal text-xs px-2 py-1 m-2 bg-layout2 bg-opacity-50 rounded-md">
          {portfolio.aboutMe.location.label}
        </p>
      </ExternalLink>
    </section>
  );
}
