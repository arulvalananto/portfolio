import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";
const TicketEzy = () => (
  <CareerProjectCard
    href="/work/ticketezy"
    name="TicketEzy"
    oneliner="A data-driven movie and theater booking experience."
    colorClassName="bg-work-card-ticketezy"
    className="order-11 col-span-12 md:col-span-6 xl:col-span-5 row-span-2 md:row-span-3 xl:row-span-5"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        src="/projects_ticketezy_reference.png"
        alt="TicketEzy ticket booking and seat selection experience"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 41.667vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default TicketEzy;
