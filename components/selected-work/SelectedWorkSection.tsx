'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectRow } from './ProjectRow';
import { ProjectPreview } from '../project-preview/ProjectPreview';
import { Project } from '@/types/project';

export function SelectedWorkSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    if (project.liveDemoUrl && project.liveDemoUrl !== '#') {
      window.open(project.liveDemoUrl, '_blank');
    }
  };

  return (
    <section id="work" className="relative w-full py-28 px-6 lg:px-16 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="w-full pb-8 mb-4 flex justify-between items-baseline border-b border-white/[0.08]">
        <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-primary tracking-tight">
          Selected Work
        </h2>
        <span className="font-mono text-xs text-primary-subtle uppercase tracking-wider">
          2023 — 2025
        </span>
      </div>

      {/* Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Expressive Project List (7 Cols) */}
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="lg:col-span-7 flex flex-col"
        >
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isActive={activeProject.id === project.id}
              isAnyActive={isHovering}
              onHover={() => setActiveProject(project)}
              onLeave={() => {}}
              onSelect={() => handleSelectProject(project)}
            />
          ))}
        </div>

        {/* Right Column: Floating Visual Preview (5 Cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex items-center justify-center pt-6 lg:pt-0">
          <ProjectPreview project={activeProject} />
        </div>
      </div>
    </section>
  );
}
