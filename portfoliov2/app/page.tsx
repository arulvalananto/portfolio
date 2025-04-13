import HeroSection from './ui/home/components/HeroSection';
import AgendaSection from './ui/home/components/AgendaSection';
import SkillsSection from './ui/home/components/SkillsSection';
import SelectedProjectsSection from './ui/home/components/SelectedProjectsSection';

const Home = () => (
    <main className="w-full h-full">
        <div className="px-5 xl:px-0 xl:w-[1280px] xl:max-w-[1280px] h-full m-auto mt-4 overflow-hidden xl:overflow-visible">
            <HeroSection />
            <SkillsSection />
            <AgendaSection />
            <SelectedProjectsSection />
        </div>
    </main>
);

export default Home;
