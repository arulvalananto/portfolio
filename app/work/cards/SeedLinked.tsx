import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";

const SeedLinked = () => (
  <CareerProjectCard
    href="/work/seedlinked"
    name="SeedLinked"
    oneliner="A seed discovery and comparison platform."
    colorClassName="bg-work-card-seedlinked"
    textClassName="text-black"
    className="order-5 col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-4 xl:row-span-7"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        src="/projects_seedlinked_reference.png"
        alt="SeedLinked seed discovery and comparison platform"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
      />
    </div>
  </CareerProjectCard>
);
export default SeedLinked;
