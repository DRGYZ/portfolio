'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const sectionLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = 'hero' | (typeof sectionLinks)[number]['id'];

export function NavBar() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrameId = 0;

    const updateNavigation = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.34, 240);
      let currentSection: SectionId = 'hero';

      for (const id of ['hero', ...sectionLinks.map(({ id }) => id)] as SectionId[]) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          currentSection = id;
        }
      }

      setScrolled(window.scrollY > 24);
      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-white/[0.07] bg-background/[0.92] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-16">
        <Link
          href="#hero"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary transition-colors hover:text-accent"
        >
          <span className="h-1.5 w-1.5 bg-accent transition-transform group-hover:scale-125" />
          <span className="font-semibold">Yazan Khaled</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-10 md:flex">
          {sectionLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative py-1 font-mono text-[11px] uppercase tracking-[0.15em] transition-[color,letter-spacing] duration-300 hover:tracking-[0.18em] ${
                  isActive ? 'text-accent' : 'text-primary-muted hover:text-primary'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted md:flex">
          <a href="https://github.com/DRGYZ" target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yazankhaled99/" target="_blank" rel="noopener noreferrer" className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-primary">
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted transition-colors hover:text-primary md:hidden"
        >
          {menuOpen ? 'Close' : 'Index'}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/[0.07] bg-background px-6 pb-8 pt-3 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {sectionLinks.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex items-baseline justify-between border-b border-white/[0.07] py-4 font-display text-2xl uppercase tracking-[-0.03em] ${
                  activeSection === item.id ? 'font-editorial italic text-accent' : 'text-primary'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] not-italic tracking-[0.14em] text-primary-muted">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-6 flex gap-7 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted">
            <a href="https://github.com/DRGYZ" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/yazankhaled99/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      )}
    </header>
  );
}
