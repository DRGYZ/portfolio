'use client';

import { getProjectUrl, Project } from '@/types/project';

interface ProjectRowProps {
  project: Project;
  isActive: boolean;
  isEngaged: boolean;
  onActivate: () => void;
}

export function ProjectRow({
  project,
  isActive,
  isEngaged,
  onActivate,
}: ProjectRowProps) {
  const isDimmed = isEngaged && !isActive;
  const hasProjectLink = Boolean(getProjectUrl(project));

  return (
    <article className="relative border-b border-white/[0.075] first:border-t">
      <button
        type="button"
        aria-pressed={isActive}
        aria-label={`Show preview for ${project.title}${project.category ? `, ${project.category}` : ''}${project.year ? `, ${project.year}` : ''}`}
        onPointerEnter={onActivate}
        onFocus={onActivate}
        onClick={onActivate}
        className={`group relative block w-full py-7 text-left transition-[opacity,transform] duration-300 sm:py-9 lg:py-11 ${
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
            isActive ? 'w-[64%] opacity-100 lg:w-[84%]' : 'w-0 opacity-0'
          }`}
        />

        <span className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 gap-y-3 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-5">
          <span
            className={`font-mono text-[11px] font-semibold tracking-[0.08em] transition-colors ${
              isActive ? 'text-accent' : 'text-primary-subtle'
            }`}
          >
            {project.id}
          </span>

          <span className="min-w-0">
            <span
              role="heading"
              aria-level={3}
              className={`inline-block font-display text-[clamp(2.15rem,5.6vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-[-0.055em] transition-[color,transform] duration-300 ${
                isActive
                  ? 'translate-x-2 font-editorial font-normal italic tracking-[-0.035em] text-accent'
                  : 'text-primary'
              }`}
            >
              {project.title}
            </span>
          </span>

          <span className="col-start-2 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-subtle sm:col-start-3 sm:row-start-1 sm:justify-self-end">
            {project.category && (
              <span className={isActive ? 'text-primary-muted' : undefined}>
                {project.category}
              </span>
            )}
            {project.year && <span>{project.year}</span>}
          </span>

          <span
            className={`col-start-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-[opacity,transform] duration-300 sm:col-start-2 ${
              isActive ? 'translate-x-0 text-accent opacity-100' : '-translate-x-2 opacity-0'
            }`}
          >
            {hasProjectLink ? 'View project ↗' : 'Preview selected →'}
          </span>
        </span>
      </button>
    </article>
  );
}
