import { inter } from "@/app/lib/fonts";
import BioSection from "./components/BioSection";
import SkillsSection from "./components/SkillsSection";
import SocialProfilesSection from "./components/SocialProfilesSection";
import RecentArticlesSection from "./components/RecentArticlesSection";

export default function AboutPage() {
  return (
    <main
      className={`px-5 py-10 md:p-10 xl:py-10 w-full xl:w-7xl xl:max-w-7xl xl:m-auto grid grid-cols-12 xl:grid-cols-24 auto-rows-12.5 gap-5 h-full ${inter.variable} font-inter`}
    >
      <BioSection />
      <SkillsSection />
      <RecentArticlesSection />
      <SocialProfilesSection />
    </main>
  );
}
