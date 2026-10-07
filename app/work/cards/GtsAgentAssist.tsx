import Image from "next/image";

import CareerProjectCard from "../CareerProjectCard";
const GtsAgentAssist = () => (
  <CareerProjectCard
    href="/work/gtsagentassist"
    name="GTS Agent Assist"
    oneliner="An embeddable workspace for customer-service agents."
    colorClassName="bg-work-card-gts-agent-assist"
    className="order-2 col-span-12 md:col-span-12 xl:col-span-5 row-span-3 md:row-span-8 xl:row-span-12"
  >
    <div className="flex h-full items-center justify-center overflow-hidden rounded-xl">
      <Image
        src="/projects_agent_assist_reference.png"
        alt="GTS Agent Assist customer-service workspace"
        width={1536}
        height={1024}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
        quality={95}
        className="h-full w-full rounded-lg object-contain shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
      />
    </div>
  </CareerProjectCard>
);
export default GtsAgentAssist;
