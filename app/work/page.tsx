import type { Metadata } from "next";

import Filler from "./Filler";
import Annals from "./Annals";
import AirDeck from "./AirDeck";
import SynthUp from "./SynthUp";
import VidableAI from "./VidableAI";
import Highlight from "./Highlight";
import LandGenius from "./LandGenius";
import FrameWiseAI from "./FrameWiseAI";
import FutureReads from "./FutureReads";
import TheCrawlerMan from "./TheCrawlerMan";
import DressedToKill from "./DressedToKill";
import { leagueSpartan } from "../lib/fonts";
import ScafffolderCLI from "./ScafffolderCLI";
import { portfolio as constants } from "../data";
import CareerProjectCard from "./CareerProjectCard";

export const metadata: Metadata = {
  title: constants.work.metadataTitle,
};

const ProjectsPage = () => (
  <main className={`w-full h-full space-y-5 mb-5 ${leagueSpartan.variable}`}>
    <div className="max-w-7xl m-auto pt-4 px-4 xl:px-0">
      <h2 className="font-bold font-inter text-3xl md:text-5xl mb-5">
        {constants.work.heading}
      </h2>
      <div className="grid grid-cols-12 auto-rows-27.5 md:auto-rows-20 xl:auto-rows-12.5 gap-y-0.5">
        <div className="col-span-12 row-span-9 md:row-span-9 xl:row-span-5 grid grid-cols-12 auto-rows-25 md:auto-rows-13.75 xl:auto-rows-12.5 gap-x-3 gap-y-3 xl:gap-y-0">
          <SynthUp />
          <Highlight />
          <FutureReads />
        </div>
        <div className="col-span-12 row-span-7 md:row-span-6 xl:row-span-8 grid grid-cols-2 xl:grid-cols-3 auto-rows-30 md:auto-rows-12.5 gap-x-3 gap-y-3 xl:gap-y-0">
          <TheCrawlerMan />
          <AirDeck />
        </div>
        <div className="col-span-12 row-span-11 md:row-span-12 grid grid-cols-2 auto-rows-21.5 xl:auto-rows-12.5 gap-x-3 gap-y-4 md:gap-y-3 xl:gap-y-0">
          <LandGenius />
          <div className="col-span-2 xl:col-span-1 row-span-8 md:row-span-4 xl:row-span-12 w-full h-full flex flex-col md:flex-row xl:flex-col items-center gap-4">
            <div className="flex-1 xl:flex-auto w-full h-full xl:h-50 xl:max-h-50 flex flex-row items-center gap-4">
              <Filler />
              <DressedToKill />
            </div>
            <VidableAI />
          </div>
        </div>
        <div className="col-span-12 row-span-9 xl:row-span-6 grid grid-cols-12 auto-rows-39 md:auto-rows-20 xl:auto-rows-12.5 gap-x-3 gap-y-3 xl:gap-y-0">
          <ScafffolderCLI />
          <FrameWiseAI />
          <Annals />
        </div>
        <div className="col-span-12 row-span-22 md:row-span-18 xl:row-span-20 grid grid-cols-12 auto-rows-27.5 md:auto-rows-20 xl:auto-rows-12.5 gap-3 xl:gap-y-2">
          <CareerProjectCard
            href="/work/looksuite"
            name="LookSuite"
            oneliner="Present, stream, and record with a polished virtual presence."
            timeline="2025 — Present"
            colorClassName="bg-work-card-looksuite"
            className="col-span-12 md:col-span-6 xl:col-span-6 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/auggy"
            name="Auggy"
            oneliner="An AI-powered workplace assistant for everyday work."
            timeline="2024 — 2025"
            colorClassName="bg-work-card-auggy"
            className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/stadiumrover"
            name="Stadium Rover"
            oneliner="Fan experiences and AI-assisted sports travel planning."
            timeline="2024 — 2025"
            colorClassName="bg-work-card-stadium-rover"
            textClassName="text-black"
            className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/seedlinked"
            name="SeedLinked"
            oneliner="A seed discovery and comparison platform."
            timeline="2022 — 2025"
            colorClassName="bg-work-card-seedlinked"
            textClassName="text-black"
            className="col-span-12 md:col-span-6 xl:col-span-4 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/raven"
            name="Raven"
            oneliner="A unified enterprise ERP and CRM system."
            timeline="2023 — 2024"
            colorClassName="bg-work-card-raven"
            className="col-span-12 md:col-span-6 xl:col-span-4 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/paddyfield"
            name="PaddyField"
            oneliner="Time tracking and project management for teams."
            timeline="2023 — 2024"
            colorClassName="bg-work-card-paddyfield"
            className="col-span-12 md:col-span-6 xl:col-span-4 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/contezo"
            name="Contezo"
            oneliner="Gamified campaigns, contests, and customer engagement."
            timeline="2023"
            colorClassName="bg-work-card-contezo"
            className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/acat"
            name="ACAT"
            oneliner="Operational management and assessment for facilities."
            timeline="2022 — 2023"
            colorClassName="bg-work-card-acat"
            textClassName="text-black"
            className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/gtsagentassist"
            name="GTS Agent Assist"
            oneliner="An embeddable workspace for customer-service agents."
            timeline="2025"
            colorClassName="bg-work-card-gts-agent-assist"
            className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/jojopay"
            name="JoJoPay"
            oneliner="Payments, ticketing, and shared-expense management."
            timeline="2021 — 2022"
            colorClassName="bg-work-card-jojopay"
            textClassName="text-black"
            className="col-span-12 md:col-span-6 xl:col-span-3 row-span-2 md:row-span-3 xl:row-span-5"
          />
          <CareerProjectCard
            href="/work/ticketezy"
            name="TicketEzy"
            oneliner="A data-driven movie and theater booking experience."
            timeline="2021"
            colorClassName="bg-work-card-ticketezy"
            className="col-span-12 md:col-span-6 xl:col-span-6 row-span-2 md:row-span-3 xl:row-span-5"
          />
        </div>
      </div>
    </div>
  </main>
);

export default ProjectsPage;
