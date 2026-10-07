import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";

const StadiumRover = () => (
  <CareerProjectCard
    href="/work/stadiumrover"
    name="Stadium Rover"
    oneliner="Fan experiences and AI-assisted sports travel planning."
    colorClassName="bg-work-card-stadium-rover"
    textClassName="text-black"
    className="order-4 col-span-12 md:col-span-6 xl:col-span-4 row-span-3 md:row-span-4 xl:row-span-7"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl p-2">
      <Image
        src="/projects_stadium_rover_reference.png"
        alt="Stadium Rover game-day mobile experience"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  </CareerProjectCard>
);
export default StadiumRover;
