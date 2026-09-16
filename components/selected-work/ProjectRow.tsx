'use client';

import { useRouter } from 'next/navigation';
import { getProjectUrl, Project } from '@/types/project';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ProjectTitleShutter } from './ProjectTitleShutter';

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
  const prefersReduced = useReducedMotion();
  const isDimmed = isEngaged && !isActive;
  const hasProjectLink = Boolean(getProjectUrl(project));
  const visibleId = displayNumber ?? project.displayNumber ?? project.id;

  const handleRowClick = () => {
    if (!isActive) {
      onActivate();
      return;
    }

    // On fine pointer (desktop), clicking an already active row navigates
    const isFinePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
    if (isFinePointer) {
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
  };

  return (
    <article
      aria-labelledby={`project-heading-${project.id}`}
      className={`relative overflow-visible border-b border-white/[0.075] first:border-t ${isActive ? 'z-10' : 'z-0'}`}
    >
      <h3 id={`project-heading-${project.id}`} className="sr-only">
        {project.title}
      </h3>
      <button
        type="button"
        aria-expanded={isActive}
        aria-controls={`mobile-preview-${project.id}`}
        aria-label={
          isActive && project.caseStudyUrl
            ? `View ${project.title} case study`
            : isActive && hasProjectLink
              ? `Open ${project.title} project link in new tab`
              : `Show preview for ${project.title}${project.category ? `, ${project.category}` : ''}${project.year ? `, ${project.year}` : ''}`
        }
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') {
            onActivate();
          }
        }}
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
          className={`absolute bottom-0 left-0 h-px transition-[width,opacity,background-color] duration-500 ${
            isActive ? 'w-[72%] opacity-100 lg:w-full' : 'w-0 opacity-0'
          }`}
          style={{ backgroundColor: isActive ? project.accent : 'var(--accent)' }}
        />
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-2 top-1/2 -z-10 hidden h-[78%] w-[28%] -translate-y-1/2 transition-[opacity,transform] duration-500 lg:block ${
            isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}
        >
          <span
            className="absolute inset-0 transition-colors duration-500 [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]"
            style={{
              backgroundColor: isActive ? `${project.accent}14` : 'rgba(185, 195, 255, 0.045)',
            }}
          />
          <span
            className="absolute right-[8%] top-1/2 -translate-y-1/2 font-editorial text-[clamp(5rem,9vw,9.5rem)] italic leading-none tracking-[-0.08em] transition-colors duration-500"
            style={{
              color: isActive ? project.accent : 'var(--accent)',
              opacity: isActive ? 0.12 : 0.08,
            }}
          >
            {visibleId}
          </span>
          <span
            className="absolute -bottom-[1px] left-0 h-[9px] w-[9px] origin-bottom-left -rotate-[32deg] border-l transition-colors duration-500"
            style={{ borderColor: isActive ? project.accent : 'var(--accent)' }}
          />
        </span>

        <span className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 gap-y-3 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-5">
          <span
            className="font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors duration-300"
            style={{ color: isActive ? project.accent : undefined }}
          >
            {visibleId}
          </span>

          <span className="min-w-0">
            <ProjectTitleShutter
              title={project.title}
              isActive={isActive}
              accent={project.accent ?? '#b9c3ff'}
              prefersReduced={prefersReduced}
            />
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
            className={`col-start-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-[opacity,transform,color] duration-300 sm:col-start-2 ${
              isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
            }`}
            style={{ color: isActive ? project.accent : 'var(--accent)' }}
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
