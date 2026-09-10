'use client';

export function ContactSection() {
  const email = 'contact@yazankhaled.com';

  return (
    <footer id="contact" className="relative w-full pt-28 pb-16 px-6 lg:px-16 max-w-[1440px] mx-auto">
      <div className="w-full pb-8 mb-16 border-b border-white/[0.08]">
        <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-primary tracking-tight">
          Contact
        </h2>
      </div>

      {/* Strong Visual CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-28">
        <div className="max-w-3xl">
          <p className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.05] uppercase mb-8">
            Have something <br />
            interesting in mind?
          </p>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 font-display text-3xl sm:text-5xl font-normal text-accent hover:text-primary transition-colors font-editorial italic"
          >
            <span>Let&apos;s talk</span>
            <span className="not-italic text-2xl sm:text-4xl font-sans">↗</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 sm:gap-12 font-mono text-xs uppercase tracking-wider text-primary-muted">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            CV ↗
          </a>
        </div>
      </div>

      {/* Simple Colophon */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-primary-subtle">
        <div>
          <span>Yazan Khaled</span>
          <span className="mx-2">—</span>
          <span>Paris, France</span>
        </div>
        <div>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
