import Link from 'next/link';

interface CaseStudyHeaderProps {
  projectNumber?: string;
  projectTitle?: string;
  liveDemoUrl?: string;
  gitHubUrl?: string;
}

export function CaseStudyHeader({
  projectNumber = '01',
  projectTitle = 'Case Study',
  liveDemoUrl,
  gitHubUrl,
}: CaseStudyHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/[0.92] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-16">
        <Link
          href="/#work"
          className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary transition-colors hover:text-accent"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transform-none">←</span>
          <span>Back to Selected Work</span>
        </Link>

        <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-subtle md:flex">
          <span className="text-accent">{projectNumber}</span>
          <span className="opacity-40">/</span>
          <span>{projectTitle}</span>
        </div>

        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-muted">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-[color,transform] duration-200 hover:-translate-y-0.5 motion-reduce:transform-none hover:text-primary"
            >
              Live demo ↗
            </a>
          )}
          {gitHubUrl && (
            <a
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden transition-[color,transform] duration-200 hover:-translate-y-0.5 motion-reduce:transform-none hover:text-primary sm:inline-block"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
