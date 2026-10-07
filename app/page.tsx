import { getCareerSkills } from "./data/career-skills";
import HeroSection from "./ui/home/components/HeroSection";
import AgendaSection from "./ui/home/components/AgendaSection";
import SkillsSection from "./ui/home/components/SkillsSection";
import SelectedProjectsSection from "./ui/home/components/SelectedProjectsSection";

const Home = async () => {
  const skills = await getCareerSkills();

  return (
    <main className="w-full h-full">
      <div className="px-5 xl:px-0 xl:w-7xl xl:max-w-7xl h-full m-auto mt-4 overflow-hidden xl:overflow-visible">
        <HeroSection />
        <SkillsSection skills={skills} />
        <AgendaSection />
        <SelectedProjectsSection />
      </div>
    </main>
  );
};

export default Home;
