'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Role {
  id: string;
  number: string;
  title: string;
  period: string;
  context?: string;
  description: string;
}

const selectedRoles: Role[] = [
  {
    id: 'frontend-developer',
    number: '01',
    title: 'Front-end Developer',
    period: '2024 — 2026',
    description:
      'Internal tools, dashboards, business applications and data-heavy interfaces built mainly with React, JavaScript and TypeScript.',
  },
  {
    id: 'technical-support-ewc',
    number: '02',
    title: 'Technical Support',
    period: '2026',
    context: 'Esports World Cup Paris',
    description:
      'On-site technical support for an interactive event application, handling troubleshooting, operations and live issues during the event.',
  },
];

export function ExperienceSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28"
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: prefersReduced ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative border-b border-white/[0.08] pb-10 pt-4 lg:pb-14"
      >
        <motion.span
          aria-hidden="true"
          initial={prefersReduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: prefersReduced ? 0.01 : 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-0 h-px origin-left bg-white/[0.14]"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">03 / Experience</p>
            <h2 id="experience-title" className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl">
              Selected roles
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="divide-y divide-white/[0.08]">
        {selectedRoles.map((role, index) => (
          <motion.article
            key={role.id}
            aria-labelledby={`role-${role.id}-title`}
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: prefersReduced ? 0.01 : 0.46,
              delay: prefersReduced ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="py-10 sm:py-12 lg:py-14"
          >
            <div className="grid grid-cols-[2.5rem_1fr] items-start gap-x-4 gap-y-3 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-8">
              <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-accent sm:pt-1">
                {role.number}
              </span>

              <div className="min-w-0">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3
                    id={`role-${role.id}-title`}
                    className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl lg:text-[2.2rem] lg:leading-[1.12]"
                  >
                    {role.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted sm:hidden">
                    {role.period}
                  </span>
                </div>

                {role.context && (
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {role.context}
                  </p>
                )}

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-muted sm:text-base">
                  {role.description}
                </p>
              </div>

              <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-primary-muted sm:block sm:pt-2 sm:text-right">
                {role.period}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
