import { getAssetPath } from '@/lib/assetPath';

export function ContactSection() {
  const email = 'contact@yazankhaled.com';

  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="relative mx-auto w-full max-w-[1600px] px-6 pb-12 pt-28 lg:px-16 lg:pt-44"
    >
      <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">04 / Contact</p>

      <h2 id="contact-title" className="max-w-[1300px] font-display text-[clamp(2.8rem,8vw,8.7rem)] font-bold uppercase leading-[0.86] tracking-[-0.065em] text-primary">
        Have something<br />interesting in mind?
      </h2>

      <a
        href={`mailto:${email}`}
        className="group mt-10 inline-flex items-baseline gap-3 font-editorial text-[clamp(2.5rem,6vw,6.5rem)] italic leading-none tracking-[-0.045em] text-accent transition-colors hover:text-primary sm:mt-14"
      >
        <span>Let&apos;s talk</span>
        <span aria-hidden="true" className="font-sans text-[0.55em] not-italic transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
      </a>

      <div className="mt-28 flex flex-col gap-7 border-t border-white/[0.08] pt-7 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-muted sm:flex-row sm:items-center sm:justify-between lg:mt-40">
        <div className="flex flex-wrap gap-7">
          <a href="https://github.com/DRGYZ" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">GitHub ↗</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">LinkedIn ↗</a>
          <a href={getAssetPath('/cv.pdf')} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">CV ↗</a>
        </div>
        <div className="flex gap-4 text-primary-subtle">
          <span>Yazan Khaled — Paris, France</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
