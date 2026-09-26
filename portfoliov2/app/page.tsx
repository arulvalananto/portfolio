import HeroSection from './ui/home/components/HeroSection';
import AgendaSection from './ui/home/components/AgendaSection';
import SkillsSection from './ui/home/components/SkillsSection';
import SelectedProjectsSection from './ui/home/components/SelectedProjectsSection';

const Home = () => (
    <main className="w-full h-full">
        <div className="px-5 xl:px-0 xl:w-7xl xl:max-w-7xl h-full m-auto mt-4 overflow-hidden xl:overflow-visible">
            <HeroSection />
            <SkillsSection />
            <AgendaSection />
            <SelectedProjectsSection />
        </div>
    </main>
);

export default Home;
