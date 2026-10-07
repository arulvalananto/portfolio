import type { Metadata } from "next";

import Filler from "./Filler";
import Annals from "./Annals";
import AirDeck from "./AirDeck";
import SynthUp from "./SynthUp";
import Acat from "./cards/Acat";
import Auggy from "./cards/Auggy";
import Raven from "./cards/Raven";
import VidableAI from "./VidableAI";
import Highlight from "./Highlight";
import LandGenius from "./LandGenius";
import Contezo from "./cards/Contezo";
import JoJoPay from "./cards/JoJoPay";
import FrameWiseAI from "./FrameWiseAI";
import FutureReads from "./FutureReads";
import LookSuite from "./cards/LookSuite";
import TicketEzy from "./cards/TicketEzy";
import TheCrawlerMan from "./TheCrawlerMan";
import DressedToKill from "./DressedToKill";
import PaddyField from "./cards/PaddyField";
import SeedLinked from "./cards/SeedLinked";
import { leagueSpartan } from "../lib/fonts";
import ScafffolderCLI from "./ScafffolderCLI";
import StadiumRover from "./cards/StadiumRover";
import { portfolio as constants } from "../data";
import ViewportReveal from "../ui/viewport-reveal";
import GtsAgentAssist from "./cards/GtsAgentAssist";

export const metadata: Metadata = {
  title: constants.work.metadataTitle,
};

const ProjectsPage = () => (
  <main className={`w-full h-full space-y-5 mb-5 ${leagueSpartan.variable}`}>
    <div className="max-w-7xl m-auto pt-4 px-4 xl:px-0">
      <ViewportReveal className="mb-5">
        <h2 className="font-bold font-inter text-3xl md:text-5xl">
          {constants.work.heading}
        </h2>
      </ViewportReveal>
      <div className="grid grid-cols-12 auto-rows-27.5 md:auto-rows-20 xl:auto-rows-12.5 gap-y-0.5">
        <ViewportReveal className="col-span-12 row-span-9 md:row-span-9 xl:row-span-5 grid grid-cols-12 auto-rows-25 md:auto-rows-13.75 xl:auto-rows-12.5 gap-x-3 gap-y-3 xl:gap-y-0">
          <SynthUp />
          <Highlight />
          <FutureReads />
        </ViewportReveal>
        <ViewportReveal className="col-span-12 row-span-7 md:row-span-6 xl:row-span-8 grid grid-cols-2 xl:grid-cols-3 auto-rows-30 md:auto-rows-12.5 gap-x-3 gap-y-3 xl:gap-y-0">
          <TheCrawlerMan />
          <AirDeck />
        </ViewportReveal>
        <ViewportReveal className="col-span-12 row-span-11 md:row-span-12 grid grid-cols-2 auto-rows-21.5 xl:auto-rows-12.5 gap-x-3 gap-y-4 md:gap-y-3 xl:gap-y-0">
          <LandGenius />
          <div className="col-span-2 xl:col-span-1 row-span-8 md:row-span-4 xl:row-span-12 w-full h-full flex flex-col md:flex-row xl:flex-col items-center gap-4">
            <div className="flex-1 xl:flex-auto w-full h-full xl:h-50 xl:max-h-50 flex flex-row items-center gap-4">
              <Filler />
              <DressedToKill />
            </div>
            <VidableAI />
          </div>
        </ViewportReveal>
        <ViewportReveal className="col-span-12 row-span-9 xl:row-span-6 grid grid-cols-12 auto-rows-39 md:auto-rows-20 xl:auto-rows-12.5 gap-x-3 gap-y-3 xl:gap-y-0">
          <ScafffolderCLI />
          <FrameWiseAI />
          <Annals />
        </ViewportReveal>
        <ViewportReveal className="col-span-12 row-span-30 md:row-span-34 xl:row-span-31 grid grid-cols-12 auto-rows-27.5 md:auto-rows-20 xl:auto-rows-12.5 gap-3 xl:gap-y-2">
          <LookSuite />
          <Auggy />
          <StadiumRover />
          <SeedLinked />
          <Raven />
          <PaddyField />
          <Contezo />
          <Acat />
          <GtsAgentAssist />
          <JoJoPay />
          <TicketEzy />
        </ViewportReveal>
      </div>
    </div>
  </main>
);

export default ProjectsPage;
