import { NavBar } from '@/components/navigation/NavBar';
import { HeroSection } from '@/components/hero/HeroSection';
import { SelectedWorkSection } from '@/components/selected-work/SelectedWorkSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <NavBar />
      <main
        id="content"
        className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-background"
      >
        <HeroSection />
        <SelectedWorkSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
