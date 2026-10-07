import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";

const LookSuite = () => (
  <CareerProjectCard
    href="/work/looksuite"
    name="LookSuite"
    oneliner="Present, stream, and record with a polished virtual presence."
    colorClassName="bg-work-card-looksuite"
    className="order-1 col-span-12 md:col-span-12 xl:col-span-7 row-span-3 md:row-span-8 xl:row-span-12"
  >
    <div className="relative h-full rounded-lg">
      <Image
        src="/projects_looksuite_team.svg"
        alt="LookSuite team collaboration workspace"
        fill
        sizes="(max-width: 1279px) 100vw, 58vw"
        className="object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default LookSuite;
