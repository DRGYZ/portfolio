'use client';

import { Fragment, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectRow } from './ProjectRow';
import { ProjectPreview } from '../project-preview/ProjectPreview';
import { Project } from '@/types/project';
import { usePointerPosition } from '@/hooks/usePointerPosition';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function SelectedWorkSection() {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [isEngaged, setIsEngaged] = useState(false);
  const [previewDirection, setPreviewDirection] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const pointer = usePointerPosition(stageRef, prefersReduced);

  const { scrollYProgress: entranceProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start 35%'],
  });

  const headerY = useTransform(entranceProgress, [0, 1], [44, 0]);
  const headerOpacity = useTransform(entranceProgress, [0, 0.32, 1], [0, 0.25, 1]);
  const ruleScale = useTransform(entranceProgress, [0.12, 0.88], [0, 1]);
  const surfaceClip = useTransform(
    entranceProgress,
    [0, 0.6, 1],
    [
      'polygon(0 14%, 100% 4%, 100% 95%, 69% 100%, 0 97%)',
      'polygon(0 7%, 100% 1.5%, 100% 95%, 69% 100%, 0 97%)',
      'polygon(0 3%, 100% 0, 100% 95%, 69% 100%, 0 97%)',
    ]
  );
  const surfaceOpacity = useTransform(entranceProgress, [0, 0.24, 1], [0.55, 0.82, 1]);
  const seamScale = useTransform(entranceProgress, [0.08, 0.88], [0, 1]);
  const seamClip = useTransform(
    entranceProgress,
    [0, 0.6, 1],
    [
      'polygon(0 13.92%, 100% 3.92%, 100% 4.08%, 0 14.08%)',
      'polygon(0 6.92%, 100% 1.42%, 100% 1.58%, 0 7.08%)',
      'polygon(0 2.92%, 100% 0, 100% 0.16%, 0 3.08%)',
    ]
  );

  const activeIndex = projects.findIndex((project) => project.id === activeProject.id);
  const previewOffsets = [-92, -30, 32, 94];

  const activateProject = (project: Project) => {
    const nextIndex = projects.findIndex((item) => item.id === project.id);

    if (nextIndex !== activeIndex) {
      setPreviewDirection(nextIndex > activeIndex ? 1 : -1);
    }

    setActiveProject(project);
    setIsEngaged(true);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-labelledby="selected-work-title"
      className="relative z-20 -mt-[18svh] w-full px-6 pb-24 pt-24 lg:-mt-[32svh] lg:px-16 lg:pb-28 lg:pt-28"
    >
      <motion.div
        aria-hidden="true"
        style={{
          clipPath: prefersReduced
            ? 'polygon(0 3%, 100% 0, 100% 95%, 69% 100%, 0 97%)'
            : surfaceClip,
          opacity: prefersReduced ? 1 : surfaceOpacity,
        }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[#101113]"
      />
      <motion.div
        aria-hidden="true"
        style={{
          clipPath: prefersReduced
            ? 'polygon(0 2.92%, 100% 0, 100% 0.16%, 0 3.08%)'
            : seamClip,
          scaleX: prefersReduced ? 1 : seamScale,
        }}
        className="pointer-events-none absolute inset-0 z-0 origin-left bg-accent/45"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <motion.div
          style={{
            y: prefersReduced ? 0 : headerY,
            opacity: prefersReduced ? 1 : headerOpacity,
          }}
          className="relative mb-10 flex items-end justify-between gap-6 pb-6 lg:mb-14"
        >
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Portfolio index / 01—04
            </p>
            <motion.h2
              id="selected-work-title"
              className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl"
            >
              Selected Work
            </motion.h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-primary-subtle sm:block">
            Browse by hover or focus
          </span>
          <motion.span
            aria-hidden="true"
            style={{ scaleX: prefersReduced ? 1 : ruleScale }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-white/[0.12]"
          />
        </motion.div>

        <div ref={stageRef} className="relative lg:min-h-[740px]">
          <div
            className="relative lg:w-[74%]"
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
                          <ProjectPreview
                            project={project}
                            direction={previewDirection}
                            compact
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Fragment>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[55%] items-center lg:flex">
            <motion.div
              animate={{
                y: previewOffsets[activeIndex] ?? 0,
                scale: isEngaged ? 1.01 : 1,
              }}
              transition={
                prefersReduced
                  ? { duration: 0.01 }
                  : {
                      y: { type: 'spring', stiffness: 250, damping: 31, mass: 0.72 },
                      scale: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              className="w-full"
            >
              <ProjectPreview
                project={activeProject}
                pointerX={pointer.normalizedX}
                pointerY={pointer.normalizedY}
                direction={previewDirection}
              />
            </motion.div>
          </div>

          <p className="sr-only" aria-live="polite">
            Showing preview for {activeProject.title}
          </p>
        </div>
      </div>

      <motion.svg
        aria-hidden="true"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[5%] w-full text-accent"
      >
        <motion.path
          d="M0 5.5 L55 7.2 M68.5 7.8 L100 4"
          initial={prefersReduced ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.18"
          vectorEffect="non-scaling-stroke"
        />
      </motion.svg>
    </section>
  );
}
