import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";

const PaddyField = () => (
  <CareerProjectCard
    href="/work/paddyfield"
    name="PaddyField"
    oneliner="Time tracking and project management for teams."
    colorClassName="bg-work-card-paddyfield"
    className="order-7 col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-4 xl:row-span-7"
  >
    <div className="relative h-full overflow-hidden rounded-xl">
      <Image
        src="/projects_paddyfield_reference.png"
        alt="PaddyField time log dashboard"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default PaddyField;
