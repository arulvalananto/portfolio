import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";

const Acat = () => (
  <CareerProjectCard
    href="/work/acat"
    name="ACAT"
    oneliner="Operational management and assessment for facilities."
    colorClassName="bg-work-card-acat"
    textClassName="text-black"
    className="order-8 col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-4 xl:row-span-7"
  >
    <div className="relative h-full overflow-hidden rounded-xl">
      <Image
        src="/projects_acat_reference.png"
        alt="ACAT operational management dashboard"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default Acat;
