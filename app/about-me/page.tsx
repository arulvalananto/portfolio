"use client";

import { useState } from "react";
import posthog from "posthog-js";

import { portfolio } from "@/app/data";
import { inter } from "@/app/lib/fonts";
import QuoteCard from "./components/QuoteCard";
import FillerCard from "./components/FillerCard";
import BioSection from "./components/BioSection";
import LocationCard from "./components/LocationCard";
import SkillsSection from "./components/SkillsSection";
import { formatExperienceYears } from "@/app/lib/utils";
import ContactMarquee from "./components/ContactMarquee";
import VidableProjectCard from "./components/VidableProjectCard";
import AirdeckProjectCard from "./components/AirdeckProjectCard";
import SocialProfilesSection from "./components/SocialProfilesSection";
import RecentArticlesSection from "./components/RecentArticlesSection";
import LandGeniusProjectCard from "./components/LandGeniusProjectCard";

export default function AboutPage() {
  const [showMore, setShowMore] = useState(false);
  const experienceYears = formatExperienceYears(
    portfolio.person.careerStartDate,
  );

  const handleShowMore = () => {
    if (!showMore) {
      posthog.capture("about_details_expanded");
    }

    setShowMore(!showMore);
  };

  return (
    <main
      className={`px-5 py-10 md:p-10 xl:py-10 w-full xl:w-7xl xl:max-w-7xl xl:m-auto grid grid-cols-12 xl:grid-cols-24 auto-rows-12.5 gap-5 h-full ${inter.variable} font-inter`}
    >
      <BioSection
        experienceYears={experienceYears}
        showMore={showMore}
        onToggle={handleShowMore}
      />
      <SkillsSection />
      <AirdeckProjectCard />
      <RecentArticlesSection />
      {showMore && <FillerCard />}
      <SocialProfilesSection />
      <VidableProjectCard />
      <QuoteCard />
      <LandGeniusProjectCard showMore={showMore} />
      <LocationCard showMore={showMore} />
      <ContactMarquee />
    </main>
  );
}
