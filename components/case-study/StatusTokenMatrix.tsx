'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StatusToken {
  id: string;
  label: string;
  bgHex: string;
  textHex: string;
  borderHex: string;
  dotHex: string;
  contrast: string;
  role: string;
  operationalEffect: string;
}

const statusTokens: StatusToken[] = [
  {
    id: 'pending',
    label: 'Pending',
    bgHex: '#fffbeb',
    textHex: '#92400e',
    borderHex: '#fde68a',
    dotHex: '#f59e0b',
    contrast: '6.8:1 (AA)',
    role: 'Pending Review',
    operationalEffect: 'Awaiting an operations decision before fulfillment proceeds.',
  },
  {
    id: 'unshipped',
    label: 'Unshipped',
    bgHex: '#f0f9ff',
    textHex: '#0369a1',
    borderHex: '#bae6fd',
    dotHex: '#0ea5e9',
    contrast: '5.6:1 (AA)',
    role: 'Fulfillment Queue',
    operationalEffect: 'Order is active and awaiting fulfillment work.',
  },
  {
    id: 'shipped',
    label: 'Shipped',
    bgHex: '#ecfdf5',
    textHex: '#047857',
    borderHex: '#a7f3d0',
    dotHex: '#10b981',
    contrast: '5.2:1 (AA)',
    role: 'Carrier Hand-off',
    operationalEffect: 'Dispatched with tracking assigned; shipped count increments and fulfillment rate rises.',
  },
  {
    id: 'canceled',
    label: 'Canceled',
    bgHex: '#fff1f2',
    textHex: '#be123c',
    borderHex: '#fecdd3',
    dotHex: '#f43f5e',
    contrast: '5.7:1 (AA)',
    role: 'Canceled',
    operationalEffect: 'Marked canceled and excluded from active revenue calculations.',
  },
];

export function StatusTokenMatrix() {
  const prefersReduced = useReducedMotion();
  const [activeId, setActiveId] = useState<string>('shipped');

  return (
    <div className="relative border border-white/[0.08] bg-surface p-6 sm:p-8 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
          Design System / Status Token Matrix
        </span>
        <span className="text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
          WCAG 1.4.1 Dual-Channel Encoding
        </span>
      </div>

      <p className="mt-4 font-editorial text-2xl italic tracking-tight text-primary sm:text-3xl max-w-xl">
        High-density operational tools require instantaneous visual identification without sacrificing accessibility standards.
      </p>

      {/* Grid of the 4 status pills */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {statusTokens.map((token) => {
          const isSelected = activeId === token.id;

          return (
            <button
              key={token.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setActiveId(token.id)}
              onMouseEnter={() => setActiveId(token.id)}
              className={`text-left p-3 border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? 'border-accent/60 bg-accent/[0.08] shadow-sm'
                  : 'border-white/[0.06] bg-background/40 hover:border-white/20'
              }`}
            >
              {/* Actual rendered pill preview */}
              <div
                style={{
                  backgroundColor: token.bgHex,
                  color: token.textHex,
                  borderColor: token.borderHex,
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold border"
              >
                <span
                  style={{ backgroundColor: token.dotHex }}
                  className="h-1.5 w-1.5 flex-shrink-0"
                />
                <span>{token.label}</span>
              </div>

              <div className="mt-3 space-y-1">
                <span className="block text-[10px] font-sans font-medium text-primary">
                  {token.role}
                </span>
                <span className="block text-[9px] text-primary-subtle">
                  Contrast: <strong className="text-accent">{token.contrast}</strong>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active token detail panel */}
      {(() => {
        const current = statusTokens.find((t) => t.id === activeId) ?? statusTokens[2];
        return (
          <motion.div
            key={current.id}
            initial={prefersReduced ? false : { opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-5 border border-white/[0.06] bg-background/50 p-3.5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                  {current.label} State Telemetry
                </span>
                <span className="text-white/20" aria-hidden="true">&bull;</span>
                <span className="text-[10px] text-primary-muted font-sans">
                  {current.operationalEffect}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[9px] text-primary-subtle">
                <code>{current.textHex}</code> on <code>{current.bgHex}</code>
              </div>
            </div>
          </motion.div>
        );
      })()}

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
        <span>Encoding: Paired Color Pill + Micro-Indicator + Typography</span>
        <span className="text-accent">Accessible Status Primitives</span>
      </div>
    </div>
  );
}
