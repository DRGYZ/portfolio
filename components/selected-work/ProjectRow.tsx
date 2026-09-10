'use client';

import { Project } from '@/types/project';

interface ProjectRowProps {
  project: Project;
  isActive: boolean;
  isAnyActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}

export function ProjectRow({
  project,
  isActive,
  isAnyActive,
  onHover,
  onLeave,
  onSelect,
}: ProjectRowProps) {
  const isDimmed = isAnyActive && !isActive;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`${project.title}, ${project.category}, ${project.year}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onKeyDown={handleKeyDown}
      onClick={onSelect}
      className={`group relative w-full py-8 sm:py-10 lg:py-12 border-b border-white/[0.06] transition-all duration-300 cursor-pointer outline-none ${
        isActive
          ? 'opacity-100 z-10'
          : isDimmed
          ? 'opacity-25 filter blur-[0.2px] hover:opacity-100 hover:filter-none'
          : 'opacity-85 hover:opacity-100'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-6">
        {/* Left: Index & Large Expressive Title */}
        <div className="flex items-baseline gap-6 sm:gap-10">
          <span
            className={`font-mono text-xs sm:text-sm font-medium tracking-wider transition-colors duration-200 ${
              isActive ? 'text-accent' : 'text-primary-subtle'
            }`}
          >
            {project.id}
          </span>

          <div className="flex items-baseline gap-4">
            <h2
              className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase transition-all duration-200 ${
                isActive
                  ? 'font-editorial italic font-normal text-accent'
                  : 'text-primary'
              }`}
            >
              {project.title}
            </h2>

            <span
              className={`text-2xl sm:text-4xl transition-all duration-200 ${
                isActive
                  ? 'text-accent opacity-100 translate-x-1 -translate-y-1'
                  : 'text-primary-subtle opacity-0'
              }`}
            >
              ↗
            </span>
          </div>
        </div>

        {/* Right: Category & Year */}
        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-primary-muted pl-10 md:pl-0">
          <span
            className={`transition-colors duration-200 ${
              isActive ? 'text-accent/90' : 'text-primary-muted'
            }`}
          >
            {project.category}
          </span>
          <span className="text-primary-subtle">{project.year}</span>
        </div>
      </div>
    </article>
  );
}
