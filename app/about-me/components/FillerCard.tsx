import Image from "next/image";

import { portfolio } from "@/app/data";

export default function FillerCard() {
  return (
    <section
      id="filler"
      className="col-span-12 xl:col-span-7 row-span-3 bg-portfolio-blue p-5 rounded-2xl transition duration-300 ease-in-out flex items-center justify-center hover:-translate-y-1"
    >
      <Image
        src={portfolio.aboutMe.fillerImage.src}
        alt={portfolio.aboutMe.fillerImage.alt}
        width={150}
        height={100}
        className="fade-in-5s"
        unoptimized
      />
    </section>
  );
}
