'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const sectionLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = 'hero' | (typeof sectionLinks)[number]['id'];

export function NavBar() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key === 'Tab') {
        const modal = document.getElementById('mobile-navigation');
        if (!modal) return;
        const focusable = [
          toggleButtonRef.current,
          ...Array.from(modal.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])'))
        ].filter(Boolean) as HTMLElement[];

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    let animationFrameId = 0;

    const updateNavigation = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.34, 240);
      let currentSection: SectionId = 'hero';

      for (const id of ['hero', ...sectionLinks.map(({ id }) => id)] as SectionId[]) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= marker) {
            currentSection = id;
          }
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
        menuOpen
          ? 'border-white/[0.07] bg-[#0d0e0f]'
          : scrolled
          ? 'border-white/[0.07] bg-[#0d0e0f]/95 backdrop-blur-md'
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

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 md:flex"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {sectionLinks.map((item) => {
            const isActive = activeSection === item.id;
            const isTarget = (hoveredSection ?? (activeSection === 'hero' ? null : activeSection)) === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                onMouseEnter={() => setHoveredSection(item.id)}
                className={`group relative py-1 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-primary-muted hover:text-primary'
                }`}
              >
                {item.label}
                {isTarget && (
                  <motion.span
                    layoutId="nav-caliper"
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px bg-accent"
                    transition={
                      prefersReduced
                        ? { duration: 0.01 }
                        : { type: 'spring', stiffness: 380, damping: 32 }
                    }
                  />
                )}
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
          ref={toggleButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation index' : 'Open navigation index'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center -mr-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted transition-colors hover:text-primary md:hidden"
        >
          {menuOpen ? 'Close' : 'Index'}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Index"
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 h-[calc(100dvh-5rem)] z-50 flex flex-col justify-between overflow-y-auto border-t border-white/[0.07] bg-[#0d0e0f] px-6 pb-12 pt-4 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {sectionLinks.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-baseline justify-between border-b border-white/[0.07] py-5 font-display text-3xl uppercase tracking-[-0.03em] transition-colors ${
                    activeSection === item.id ? 'font-editorial italic text-accent' : 'text-primary hover:text-accent'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[11px] not-italic tracking-[0.14em] text-primary-muted">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-8 flex gap-7 border-t border-white/[0.07] pt-6 font-mono text-xs uppercase tracking-[0.14em] text-primary-muted">
              <a href="https://github.com/DRGYZ" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/yazankhaled99/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">LinkedIn ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
