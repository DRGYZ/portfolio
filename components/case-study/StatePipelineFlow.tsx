'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PipelineStep {
  id: string;
  label: string;
  detail: string;
}

const steps: PipelineStep[] = [
  {
    id: 'inputs',
    label: 'INPUTS',
    detail: 'Search · Store · Status · Sort · Page',
  },
  {
    id: 'validation',
    label: 'VALIDATE & DEBOUNCE',
    detail: '250ms search delay · Invalid params fall back safely',
  },
  {
    id: 'sync',
    label: 'WRITE URL STATE',
    detail: 'Filters stay shareable and recoverable',
  },
  {
    id: 'service',
    label: 'QUERY ORDERS',
    detail: 'Filter · Sort · Paginate',
  },
  {
    id: 'render',
    label: 'RENDER RESULTS',
    detail: 'Rows · Status counts · Pagination',
  },
];

export function StatePipelineFlow() {
  const prefersReduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <figure className="mt-8 border border-white/[0.08] bg-surface p-6 font-mono">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <figcaption className="text-[9px] uppercase tracking-[0.2em] text-accent">
          Filter State Flow
        </figcaption>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary-subtle hidden sm:inline">
          Select a stage
        </span>
      </div>

      <ol className="mt-5 space-y-3 text-xs list-none p-0 m-0">
        {steps.map((step, idx) => {
          const isSelected = activeStep === step.id;

          return (
            <li key={step.id}>
              {idx > 0 && (
                <div className="pl-5 py-1 flex items-center gap-2 text-primary-subtle text-[10px]" aria-hidden="true">
                  <motion.span
                    initial={prefersReduced ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="inline-block h-3 w-px bg-white/20 origin-top"
                  />
                  <span>&darr;</span>
                </div>
              )}

              <button
                type="button"
                aria-pressed={isSelected}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                onFocus={() => setActiveStep(step.id)}
                onBlur={() => setActiveStep(null)}
                className={`group w-full text-left p-3.5 transition-[background-color,border-color] duration-200 border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? 'border-accent/50 bg-accent/[0.06]'
                    : 'border-white/[0.06] bg-background/40 hover:border-white/20 hover:bg-background/70'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 transition-colors ${
                        isSelected ? 'bg-accent' : 'bg-white/40 group-hover:bg-accent'
                      }`}
                    />
                    <span className="text-[11px] font-semibold text-primary">{step.label}</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] px-1.5 py-0.5 border border-white/10 text-primary-subtle group-hover:text-accent group-hover:border-accent/40 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {isSelected && (
                  <motion.p
                    initial={prefersReduced ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 pl-4 text-[11px] font-sans leading-relaxed text-primary-muted"
                  >
                    {step.detail}
                  </motion.p>
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
