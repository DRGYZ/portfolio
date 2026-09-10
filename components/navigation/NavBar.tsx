'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('work');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'experience', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 font-mono text-xs tracking-wider uppercase text-primary hover:text-accent transition-colors"
        >
          <span className="w-1.5 h-1.5 bg-accent inline-block transition-transform group-hover:scale-125" />
          <span className="font-semibold tracking-widest">Yazan Khaled</span>
        </Link>

        {/* Primary Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-10">
          {[
            { id: 'work', label: 'Work' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-mono text-xs tracking-widest uppercase transition-colors py-1 relative ${
                  isActive
                    ? 'text-accent font-medium'
                    : 'text-primary-muted hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Utility Links */}
        <div className="flex items-center space-x-6 font-mono text-xs tracking-wider uppercase text-primary-muted">
          <a
            href="https://github.com/DRGYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={getAssetPath('/cv.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
