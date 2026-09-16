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
        className="fixed left-1/2 top-4 z-[100] -translate-x-1/2 -translate-y-24 border border-background bg-accent px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-background shadow-lg transition-transform duration-200 focus:translate-y-0"
      >
        Skip to content
      </a>
      <NavBar />
      <main
        id="content"
        tabIndex={-1}
        className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-background focus:outline-none"
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
