'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ColumnDef {
  name: string;
  priority: 'primary' | 'secondary' | 'consolidated';
  mobileBehavior: string;
}

const desktopColumns: ColumnDef[] = [
  { name: 'Order ID', priority: 'primary', mobileBehavior: 'Retained as primary tap target' },
  { name: 'Store', priority: 'secondary', mobileBehavior: 'Collapsed at lg breakpoint' },
  { name: 'Customer & Account', priority: 'consolidated', mobileBehavior: 'Tucked inside mobile Order ID cell' },
  { name: 'Items Summary', priority: 'secondary', mobileBehavior: 'Collapsed at xl breakpoint' },
  { name: 'Order Date', priority: 'secondary', mobileBehavior: 'Collapsed at md breakpoint' },
  { name: 'Ship Before', priority: 'secondary', mobileBehavior: 'Collapsed at lg breakpoint' },
  { name: 'Total', priority: 'primary', mobileBehavior: 'Retained on mobile row right' },
  { name: 'Status', priority: 'primary', mobileBehavior: 'Retained as center status badge' },
  { name: 'Actions', priority: 'secondary', mobileBehavior: 'Cell collapsed; row tap triggers drawer' },
];

export function ResponsiveColumnPriority() {
  const prefersReduced = useReducedMotion();
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="mt-8 border border-white/[0.08] bg-surface p-5 sm:p-6 font-mono text-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-accent">Column Priority Breakdown</span>
          <p className="mt-0.5 text-[11px] font-sans text-primary-muted">
            Information tiering across responsive breakpoint transitions.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="inline-flex p-0.5 border border-white/10 bg-background/50">
          <button
            type="button"
            onClick={() => setViewMode('desktop')}
            className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
              viewMode === 'desktop' ? 'bg-accent text-background font-semibold' : 'text-primary-subtle hover:text-primary'
            }`}
          >
            Desktop (8 Fields + Actions)
          </button>
          <button
            type="button"
            onClick={() => setViewMode('mobile')}
            className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
              viewMode === 'mobile' ? 'bg-accent text-background font-semibold' : 'text-primary-subtle hover:text-primary'
            }`}
          >
            Mobile (3 Data Columns)
          </button>
        </div>
      </div>

      {/* Visual column stream */}
      <div className="mt-5">
        {viewMode === 'desktop' ? (
          <motion.div
            key="desktop-view"
            initial={prefersReduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          >
            {desktopColumns.map((col) => (
              <div
                key={col.name}
                className={`p-2.5 border ${
                  col.priority === 'primary'
                    ? 'border-accent/40 bg-accent/[0.06]'
                    : col.priority === 'consolidated'
                      ? 'border-accent/40 bg-accent/[0.08]'
                      : 'border-white/[0.06] bg-background/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary text-[11px]">{col.name}</span>
                  <span
                    className={`text-[8px] uppercase tracking-wider px-1 py-0.2 border ${
                      col.priority === 'primary'
                        ? 'text-accent border-accent/40'
                        : col.priority === 'consolidated'
                          ? 'text-accent border-accent/40'
                          : 'text-primary-subtle border-white/10'
                    }`}
                  >
                    {col.priority === 'primary' ? 'P1 Core' : col.priority === 'consolidated' ? 'Folded' : 'Tier 2'}
                  </span>
                </div>
                <p className="mt-1.5 text-[10px] font-sans text-primary-subtle leading-tight">
                  {col.mobileBehavior}
                </p>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="mobile-view"
            initial={prefersReduced ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            <div className="p-3 border border-accent/40 bg-accent/[0.08]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-accent text-[11px]">Cell 01 / Consolidated Order &amp; Identity</span>
                <span className="text-[8px] uppercase tracking-wider text-accent font-mono">Tuck Pattern</span>
              </div>
              <p className="mt-1 text-[11px] font-sans text-primary leading-relaxed">
                <strong>Order ID</strong> acts as primary heading with <strong>Customer</strong> and <strong>Company</strong> stacked underneath within the single tap boundary.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 border border-white/10 bg-background/50">
                <span className="text-[10px] uppercase text-primary-subtle font-mono">Cell 02 / Total</span>
                <p className="mt-1 font-semibold text-primary text-xs">€ Total</p>
                <span className="text-[9px] font-sans text-primary-subtle">Aligned right for rapid sum scanning</span>
              </div>

              <div className="p-3 border border-white/10 bg-background/50">
                <span className="text-[10px] uppercase text-primary-subtle font-mono">Cell 03 / Status</span>
                <p className="mt-1 font-semibold text-accent text-xs">Status Badge</p>
                <span className="text-[9px] font-sans text-primary-subtle">Color-coded high-contrast pill</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
