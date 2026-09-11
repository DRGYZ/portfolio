'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PipelineStep {
  id: string;
  label: string;
  code: string;
  detail: string;
  badge: string;
}

const steps: PipelineStep[] = [
  {
    id: 'inputs',
    label: 'User Intent & View Parameters',
    code: 'Search, Store, Status, Sort, Page',
    detail: 'Debounced search query, store scope, lifecycle tab, multi-column sort, and page bounds.',
    badge: 'INTERACTION',
  },
  {
    id: 'validation',
    label: 'Sanitization & Debounce Intercept',
    code: '250ms window · Runtime whitelist',
    detail: 'Keystrokes debounced by 250ms; query params strictly validated against runtime whitelists.',
    badge: 'DEFENSE',
  },
  {
    id: 'sync',
    label: 'Two-Way URL State Synchronization',
    code: "useSearchParams({ replace: true })",
    detail: 'URL updates without page reload, keeping active operational filter sets shareable and persistent.',
    badge: 'ROUTING',
  },
  {
    id: 'service',
    label: 'Pure Service Query Calculation',
    code: 'orderService.getOrders(filterState)',
    detail: 'Performs filtering, search, sorting, and pagination, returning the matching slice and total count.',
    badge: 'COMPUTE',
  },
  {
    id: 'render',
    label: 'Synchronized Table & Status Counts',
    code: 'Table Rows · Status Counts · Pagination',
    detail: 'Table rows render with active filters; status tab counts and pagination controls reflect the resulting dataset.',
    badge: 'REACTIVE UI',
  },
];

export function StatePipelineFlow() {
  const prefersReduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <figure className="mt-8 border border-white/[0.08] bg-surface p-6 font-mono">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <figcaption className="text-[9px] uppercase tracking-[0.2em] text-accent">
          Architecture // Interactive State Pipeline
        </figcaption>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-primary-subtle hidden sm:inline">
          Hover stage to inspect data flow
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
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                onFocus={() => setActiveStep(step.id)}
                onBlur={() => setActiveStep(null)}
                className={`group w-full text-left p-3.5 transition-[background-color,border-color] duration-200 border rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? 'border-accent/50 bg-accent/[0.06]'
                    : 'border-white/[0.06] bg-background/40 hover:border-white/20 hover:bg-background/70'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        isSelected ? 'bg-accent' : 'bg-white/40 group-hover:bg-accent'
                      }`}
                    />
                    <span className="text-[11px] font-semibold text-primary">{step.label}</span>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] px-1.5 py-0.5 border border-white/10 text-primary-subtle group-hover:text-accent group-hover:border-accent/40 transition-colors">
                    {step.badge}
                  </span>
                </div>

                <div className="mt-2 pl-4 text-accent/90 text-[11px]">
                  <code>{step.code}</code>
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
