import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";
const JoJoPay = () => (
  <CareerProjectCard
    href="/work/jojopay"
    name="JoJoPay"
    oneliner="Payments, ticketing, and shared-expense management."
    colorClassName="bg-work-card-jojopay"
    textClassName="text-black"
    className="order-10 col-span-12 md:col-span-6 xl:col-span-4 row-span-2 md:row-span-3 xl:row-span-5"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        src="/projects_jojopay_reference.png"
        alt="JoJoPay payment and expense-management interface"
        width={1312}
        height={1199}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default JoJoPay;
