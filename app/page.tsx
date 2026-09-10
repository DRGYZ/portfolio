import { NavBar } from '@/components/navigation/NavBar';
import { HeroSection } from '@/components/hero/HeroSection';
import { SelectedWorkSection } from '@/components/selected-work/SelectedWorkSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { GridLines } from '@/components/ui/GridLines';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-background">
      <GridLines />
      <NavBar />
      <div className="relative z-10">
        <HeroSection />
        <SelectedWorkSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
