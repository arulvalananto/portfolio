import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";
const Contezo = () => (
  <CareerProjectCard
    href="/work/contezo"
    name="Contezo"
    oneliner="Gamified campaigns, contests, and customer engagement."
    colorClassName="bg-work-card-contezo"
    className="order-9 col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        src="/projects_contezo_reference.png"
        alt="Contezo gamified campaign dashboard"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default Contezo;
