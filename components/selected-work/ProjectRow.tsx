'use client';

import { useRouter } from 'next/navigation';
import { getProjectUrl, Project } from '@/types/project';

interface ProjectRowProps {
  project: Project;
  displayNumber?: string;
  isActive: boolean;
  isEngaged: boolean;
  onActivate: () => void;
}

export function ProjectRow({
  project,
  displayNumber,
  isActive,
  isEngaged,
  onActivate,
}: ProjectRowProps) {
  const router = useRouter();
  const isDimmed = isEngaged && !isActive;
  const hasProjectLink = Boolean(getProjectUrl(project));
  const visibleId = displayNumber ?? project.id;

  const handleRowClick = () => {
    if (isActive) {
      if (project.caseStudyUrl) {
        router.push(project.caseStudyUrl);
        return;
      }
      if (hasProjectLink) {
        const url = getProjectUrl(project);
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer');
          return;
        }
      }
    }
    onActivate();
  };

  return (
    <article className={`relative overflow-visible border-b border-white/[0.075] first:border-t ${isActive ? 'z-30' : 'z-0'}`}>
      <button
        type="button"
        aria-pressed={isActive}
        aria-label={
          isActive && project.caseStudyUrl
            ? `View ${project.title} case study`
            : isActive && hasProjectLink
              ? `Open ${project.title} project link in new tab`
              : `Show preview for ${project.title}${project.category ? `, ${project.category}` : ''}${project.year ? `, ${project.year}` : ''}`
        }
        onPointerEnter={onActivate}
        onFocus={onActivate}
        onClick={handleRowClick}
        className={`group relative block w-full overflow-visible py-7 text-left transition-[opacity,transform] duration-300 sm:py-9 lg:py-11 ${
          isDimmed
            ? 'opacity-20 hover:opacity-100 focus-visible:opacity-100'
            : isActive
              ? 'opacity-100'
              : 'opacity-70 hover:opacity-100 focus-visible:opacity-100'
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute bottom-0 left-0 h-px bg-accent transition-[width,opacity] duration-500 ${
            isActive ? 'w-[72%] opacity-100 lg:w-[132%]' : 'w-0 opacity-0'
          }`}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-[34%] top-1/2 hidden h-[78%] w-[42%] -translate-y-1/2 transition-[opacity,transform] duration-500 lg:block ${
            isActive ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <span className="absolute inset-0 bg-accent/[0.045] [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]" />
          <span className="absolute right-[8%] top-1/2 -translate-y-1/2 font-editorial text-[clamp(6rem,11vw,10.5rem)] italic leading-none tracking-[-0.08em] text-accent/[0.09]">
            {visibleId}
          </span>
          <span className="absolute -bottom-[1px] left-0 h-[9px] w-[9px] origin-bottom-left -rotate-[32deg] border-l border-accent" />
        </span>

        <span className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 gap-y-3 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-5">
          <span
            className={`font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors ${
              isActive ? 'text-accent' : 'text-primary-muted'
            }`}
          >
            {visibleId}
          </span>

          <span className="min-w-0">
            <span
              role="heading"
              aria-level={3}
              className={`relative z-20 inline-block font-display text-[clamp(2.15rem,5.6vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em] transition-[color,transform] duration-300 ${
                isActive
                  ? 'translate-x-2 font-editorial font-normal italic tracking-[-0.035em] text-accent lg:translate-x-4'
                  : 'text-primary'
              }`}
            >
              {project.title}
            </span>
          </span>

          <span className="col-start-2 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted transition-opacity duration-300 sm:col-start-3 sm:row-start-1 sm:justify-self-end lg:opacity-0">
            {project.category && (
              <span className={isActive ? 'text-primary' : undefined}>
                {project.category}
              </span>
            )}
            {project.year && <span>{project.year}</span>}
          </span>

          <span
            className={`col-start-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-[opacity,transform] duration-300 sm:col-start-2 ${
              isActive ? 'translate-x-0 text-accent opacity-100' : '-translate-x-2 opacity-0'
            }`}
          >
            {project.caseStudyUrl
              ? 'Case study →'
              : hasProjectLink
                ? 'View project ↗'
                : 'Preview selected →'}
          </span>
        </span>
      </button>
    </article>
  );
}
