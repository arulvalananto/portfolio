import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";

const Raven = () => (
  <CareerProjectCard
    href="/work/raven"
    name="Raven"
    oneliner="A unified enterprise ERP and CRM system."
    colorClassName="bg-work-card-raven"
    className="order-6 col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-4 xl:row-span-7"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        src="/projects_raven_reference.png"
        alt="Raven customer management interface"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default Raven;
