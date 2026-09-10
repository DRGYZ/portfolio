'use client';

import { Fragment, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectRow } from './ProjectRow';
import { ProjectPreview } from '../project-preview/ProjectPreview';
import { Project } from '@/types/project';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function SelectedWorkSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isEngaged, setIsEngaged] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPosition(stageRef, prefersReduced);

  const activateProject = (project: Project) => {
    setActiveProject(project);
    setIsEngaged(true);
  };

  return (
    <section
      id="work"
      aria-labelledby="selected-work-title"
      className="relative z-20 -mt-[9svh] w-full bg-background px-6 pb-28 pt-28 lg:px-16 lg:pb-40 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/[0.09] pb-6 lg:mb-14">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Portfolio index / 01—04
            </p>
            <h2
              id="selected-work-title"
              className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl"
            >
              Selected Work
            </h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-primary-subtle sm:block">
            Browse by hover or focus
          </span>
        </div>

        <div ref={stageRef} className="relative lg:min-h-[760px]">
          <div
            className="relative z-20 lg:w-[73%]"
            onPointerLeave={(event) => {
              if (!event.currentTarget.contains(document.activeElement)) {
                setIsEngaged(false);
              }
            }}
            onFocusCapture={() => setIsEngaged(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setIsEngaged(false);
              }
            }}
          >
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;

              return (
                <Fragment key={project.id}>
                  <ProjectRow
                    project={project}
                    isActive={isActive}
                    isEngaged={isEngaged}
                    onActivate={() => activateProject(project)}
                  />

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`mobile-preview-${project.id}`}
                        initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: prefersReduced ? 0.01 : 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-8 pt-4">
                          <ProjectPreview project={project} compact />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Fragment>
              );
            })}
          </div>

          <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden w-[59%] -translate-y-1/2 lg:block">
            <ProjectPreview
              project={activeProject}
              pointerX={pointer.normalizedX}
              pointerY={pointer.normalizedY}
            />
          </div>

          <p className="sr-only" aria-live="polite">
            Showing preview for {activeProject.title}
          </p>
        </div>
      </div>
    </section>
  );
}
