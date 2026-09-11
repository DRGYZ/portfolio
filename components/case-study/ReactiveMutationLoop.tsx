'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TargetItem {
  id: string;
  name: string;
  effect: string;
  layer: string;
}

const targets: TargetItem[] = [
  {
    id: 'table',
    name: 'Orders Table Row',
    effect: 'Status badge flips to "Shipped"; action button updates instantly.',
    layer: 'Orders Page View',
  },
  {
    id: 'tabs',
    name: 'Status Tabs',
    effect: 'Unshipped counter decrements (-1), Shipped counter increments (+1).',
    layer: 'Filter Navigation',
  },
  {
    id: 'sidebar',
    name: 'Sidebar Queue Telemetry',
    effect: 'Orders queue badge decrements across active storefront channel (reflecting pending + unshipped queue).',
    layer: 'App Layout Navigation',
  },
  {
    id: 'overview',
    name: 'Overview Fulfillment & Distribution',
    effect: 'Fulfillment rate and status distribution update; 14-day revenue trajectory remains unchanged (revenue unaffected by shipping status; only cancellation excludes revenue).',
    layer: 'Executive Analytics View',
  },
];

export function ReactiveMutationLoop() {
  const prefersReduced = useReducedMotion();
  const [activeTarget, setActiveTarget] = useState<string | null>(null);

  return (
    <div className="border border-white/[0.08] bg-surface p-6 sm:p-8 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <h4 className="text-xs uppercase tracking-[0.2em] text-accent">Reactive Mutation Loop</h4>
        <span className="text-[9px] uppercase tracking-[0.14em] text-primary-subtle hidden sm:inline">
          Version Invalidation Engine
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {/* Step 1: User Event */}
        <div className="border border-white/[0.08] bg-background/50 p-4 transition-colors hover:border-white/20">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-accent">01 / Event Trigger</span>
            <span className="text-[9px] text-primary-subtle">User Action</span>
          </div>
          <p className="mt-1.5 text-primary font-semibold text-xs">User triggers &ldquo;Mark as Shipped&rdquo; in Drawer</p>
          <p className="mt-1 text-[11px] font-sans text-primary-muted">
            Initiates asynchronous mutation with inline button spinner state.
          </p>
        </div>

        {/* Connecting pulse line */}
        <div className="pl-6 text-primary-subtle text-[11px] flex items-center gap-2" aria-hidden="true">
          <motion.span
            initial={prefersReduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-block h-3 w-px bg-accent/60 origin-top"
          />
          <span>&darr; calls context method</span>
        </div>

        {/* Step 2: Mutation & Version Tick */}
        <div className="border border-white/[0.08] bg-background/50 p-4 transition-colors hover:border-accent/40">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-accent">02 / Mutation &amp; Invalidation</span>
            <span className="text-[9px] text-accent font-semibold">bumpVersion()</span>
          </div>
          <p className="mt-1.5 text-primary font-semibold text-xs">orderService.markAsShipped(id) &rarr; version++</p>
          <p className="mt-1 text-[11px] font-sans text-primary-muted">
            Updates persistent storage and increments internal version counter to invalidate cached selectors.
          </p>
        </div>

        {/* Connecting pulse line */}
        <div className="pl-6 text-primary-subtle text-[11px] flex items-center gap-2" aria-hidden="true">
          <motion.span
            initial={prefersReduced ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="inline-block h-3 w-px bg-accent/60 origin-top"
          />
          <span>&darr; triggers reactive re-memoization</span>
        </div>

        {/* Step 3: Broadcast Updates */}
        <div className="border border-accent/30 bg-accent/[0.04] p-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.18em] text-accent">03 / Broadcast Updates</span>
            <span className="text-[9px] text-primary-subtle">Zero Reload Broadcast</span>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {targets.map((t) => {
              const isHovered = activeTarget === t.id;

              return (
                <div
                  key={t.id}
                  onMouseEnter={() => setActiveTarget(t.id)}
                  onMouseLeave={() => setActiveTarget(null)}
                  className={`p-2.5 border transition-all cursor-default ${
                    isHovered
                      ? 'border-accent/60 bg-accent/[0.08] shadow-sm'
                      : 'border-white/[0.06] bg-background/40 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-primary">{t.name}</span>
                    <span className="text-[8px] uppercase tracking-wider text-accent">{t.layer}</span>
                  </div>
                  <p className="mt-1 text-[10px] font-sans leading-normal text-primary-muted">
                    {t.effect}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
