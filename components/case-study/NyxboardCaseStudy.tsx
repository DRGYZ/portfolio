'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from './SeamDivider';
import { ScanOrderTrack } from './ScanOrderTrack';
import { StatePipelineFlow } from './StatePipelineFlow';
import { ResponsiveColumnPriority } from './ResponsiveColumnPriority';
import { ReactiveMutationLoop } from './ReactiveMutationLoop';
import { StatusTokenMatrix } from './StatusTokenMatrix';
import { CaseStudyFrame } from './CaseStudyFrame';

export function NyxboardCaseStudy() {
  const prefersReduced = useReducedMotion();

  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-background">
      {/* Editorial Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ACT 1: EDITORIAL OPENING */}
      <header className="relative mx-auto w-full max-w-[1600px] px-6 pt-32 pb-16 lg:px-16 lg:pt-40 lg:pb-24">
        {/* Animated architectural top seam */}
        <SeamDivider label="05 / Selected Work — Case Study" className="mb-10" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="overflow-clip pb-1">
              <motion.h1
                initial={prefersReduced ? false : { y: '104%', opacity: 0.2 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[clamp(2.25rem,7.5vw,7.8rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em] text-primary origin-left"
              >
                Nyxboard
              </motion.h1>
            </div>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-editorial text-[clamp(1.6rem,3.2vw,3rem)] italic leading-[1.12] tracking-[-0.03em] text-accent"
            >
              Commerce operations, without losing context.
            </motion.p>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-primary-muted sm:text-lg"
            >
              Nyxboard is a multi-store commerce operations dashboard built with React and TypeScript.
              It focuses on how dense order workflows can remain fast, clear, and actionable as an operator
              moves from top-level channel monitoring to granular filtering, line-item inspection, and status mutations.
            </motion.p>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://drgyz.github.io/nyxboard-commerce-dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-background transition-colors hover:bg-primary focus-visible:bg-primary"
              >
                View Live Demo ↗
              </a>
              <a
                href="https://github.com/DRGYZ/nyxboard-commerce-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 bg-surface px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-primary transition-colors hover:border-accent hover:text-accent focus-visible:border-accent"
              >
                GitHub Repository ↗
              </a>
            </motion.div>
          </div>

          {/* Opening Metadata */}
          <aside className="border-t border-white/[0.09] pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-10">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono sm:grid-cols-2">
              {[
                { term: 'Year', val: '2026' },
                { term: 'Type', val: 'Personal Project' },
                { term: 'Core Stack', val: 'React + TypeScript' },
                { term: 'Focus', val: 'Data-Heavy UI & Architecture' },
              ].map((item, idx) => (
                <motion.div
                  key={item.term}
                  initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <dt className="text-[9px] uppercase tracking-[0.2em] text-primary-subtle">{item.term}</dt>
                  <dd className="mt-1 text-sm font-semibold tracking-wide text-primary">{item.val}</dd>
                </motion.div>
              ))}
            </dl>
          </aside>
        </div>

        {/* Authored Project Poster Artwork */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 overflow-hidden border border-white/[0.08] bg-[#111218] p-3 sm:p-6 lg:mt-24"
        >
          <div className="relative aspect-[1200/820] w-full overflow-hidden bg-surface-low border border-white/[0.04]">
            <img
              src={getAssetPath('/projects/nyxboard.svg?v=2')}
              alt="Nyxboard visual poster showing architectural typography, operations nodes, and diagonal seam cut"
              width="1200"
              height="820"
              loading="eager"
              decoding="async"
              className="h-full w-full object-contain object-center"
            />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-primary-subtle">
            <span>Visual System // Identity Poster</span>
            <span>Ink / Violet / Cyan Accent</span>
          </div>
        </motion.div>
      </header>

      {/* ACT 2: THE INTERFACE PROBLEM */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28">
        <SeamDivider className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">01 / Problem</span>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl">
              The Interface Challenge
            </h2>
          </div>

          <div className="max-w-3xl lg:col-span-8">
            <motion.blockquote
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-[clamp(1.75rem,3.4vw,2.75rem)] italic leading-[1.2] tracking-[-0.03em] text-primary"
            >
              &ldquo;High information density is useful only if hierarchy survives it.&rdquo;
            </motion.blockquote>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 space-y-5 text-base leading-relaxed text-primary-muted sm:text-lg"
            >
              <p>
                A commerce dashboard exists at the crossroads of multiple competing data layers:
                storefront channels, high-level revenue charts, live fulfillment queues, multi-parameter search filters,
                sort states, pagination offsets, order details, and mutation actions.
              </p>
              <p>
                The typical trap in data-intensive tools is either over-simplification (hiding critical data behind pagination and redirects)
                or overwhelming chaos (dumping unranked tables onto the screen). The design goal for Nyxboard was to maintain
                crisp situational awareness: allow the operator to inspect and mutate orders without ever sacrificing their active view context.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACT 3: SCAN — THE OVERVIEW */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02 / Scan</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              The Operations Overview
            </h2>
          </div>
          <ScanOrderTrack />
        </div>

        {/* Full-width Overview Screenshot Frame with Structural Reveal */}
        <CaseStudyFrame
          direction="up"
          className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 lg:p-6 shadow-2xl"
        >
          <img
            src={getAssetPath('/case-studies/nyxboard/overview-desktop.png')}
            alt="Nyxboard Operations Overview desktop interface showing KPI summary cards, sales volume trajectory, and status distribution"
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
            className="w-full border border-white/[0.05] object-contain shadow-2xl"
          />
        </CaseStudyFrame>
        <span className="mt-3 block text-right font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
          Operations Overview // Desktop View
        </span>

        {/* Overview Implementation Callouts with Staggered Expansion */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: '01 / Channel Scope',
              title: 'Store Filtering',
              desc: 'A top-level store selector toggles between consolidated multi-brand performance (Apex Goods, Solaria, Veloce) and individual storefront channels, updating selected-store metrics and primary charts while retaining a cross-store comparison view.',
            },
            {
              num: '02 / KPI Hierarchy',
              title: 'Key Metrics',
              desc: 'Five operational cards show Active Revenue, Total Orders, Pending Review, Fulfillment Queue, and Fulfillment Rate. Revenue and total-order cards include directional trends.',
            },
            {
              num: '03 / Dual Trajectories',
              title: 'Recharts Dynamics',
              desc: 'An area trajectory chart plots 14-day daily volume trends alongside an interactive status distribution donut, built with responsive Recharts primitives.',
            },
            {
              num: '04 / Live Sync',
              title: 'Reactive Updates',
              desc: 'Status changes update the affected queues and distribution immediately. Cancellations also remove the order from active revenue; shipping leaves revenue unchanged.',
            },
          ].map((card, idx) => (
            <motion.div
              key={card.num}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-white/[0.08] pt-5 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-[10px] font-semibold text-accent transition-colors group-hover:text-primary">
                {card.num}
              </span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">
                {card.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACT 4: FILTER — THE ORDERS WORKSPACE */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03 / Filter</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              The Orders Workspace
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-muted">
              The Orders table is where the operational work happens. Rather than relying on rigid backend roundtrips,
              the interface synchronizes shareable URL parameters with local React view state. A debounced search input keeps typing responsive while filters,
              sorting preferences, and canonical pagination stay aligned.
            </p>

            {/* Interactive Animated State Pipeline */}
            <StatePipelineFlow />

            <div className="mt-8 space-y-4 text-xs leading-relaxed text-primary-subtle">
              <p>
                <strong>Debounced Search:</strong> A 250ms debounce hook intercepts keystrokes across Order IDs, customer names,
                company titles, and line-item SKUs before querying.
              </p>
              <p>
                <strong>Faceted Status Tabs:</strong> Counts for All, Pending, Unshipped, Shipped, and Canceled dynamically
                reflect the currently selected store channel.
              </p>
              <p>
                <strong>Defensive Parameter Parsing:</strong> URL search parameters are checked against supported values;
                invalid statuses, stores, page sizes, and page numbers fall back to safe defaults.
              </p>
            </div>
          </div>

          {/* Orders Desktop Screenshot Frame */}
          <div className="lg:col-span-7">
            <CaseStudyFrame
              direction="right"
              className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 shadow-2xl"
            >
              <img
                src={getAssetPath('/case-studies/nyxboard/orders-desktop.png')}
                alt="Nyxboard Orders workspace table view showing faceted status tabs, debounced search bar, and sortable table columns"
                width="1440"
                height="900"
                loading="lazy"
                decoding="async"
                className="w-full border border-white/[0.05] object-contain shadow-2xl"
              />
            </CaseStudyFrame>
            <span className="mt-3 block text-right font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
              Orders Workspace // Desktop Table View
            </span>
          </div>
        </div>
      </section>

      {/* ACT 5: INSPECT / ACT — DETAIL WITHOUT LOSING CONTEXT */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">04 / Inspect &amp; Act</span>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Detail in Place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-muted sm:text-lg">
            Navigating away to an isolated order page is disruptive: it discards active filter states, loses scroll position,
            and prevents rapid sequential comparisons. Nyxboard inspects orders inside a slide-over drawer that keeps the table visible
            behind the inspection plane.
          </p>
        </div>

        {/* Slide-over Inspection Metaphor Screenshot Reveal */}
        <CaseStudyFrame
          direction="right"
          className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 lg:p-6 shadow-2xl"
        >
          <img
            src={getAssetPath('/case-studies/nyxboard/order-drawer.png')}
            alt="Nyxboard Order Detail Drawer open over the orders table displaying line items, shipping address, financial totals, and status actions"
            width="1440"
            height="900"
            loading="lazy"
            decoding="async"
            className="w-full border border-white/[0.05] object-contain shadow-2xl"
          />
        </CaseStudyFrame>
        <span className="mt-3 block text-right font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
          Order Inspection // Slide-Over Drawer
        </span>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            {
              num: '01 / Full Order Anatomy',
              title: 'Line Items & SKUs',
              desc: 'Each product row details product title, SKU code, ordered quantity, unit price, and extended line total alongside customer delivery information, complimentary freight shipping status, and order total due.',
            },
            {
              num: '02 / Direct Mutation',
              title: 'Mark as Shipped',
              desc: 'Triggering “Mark as Shipped” updates persistent local demo state. A brief inline loading state gives the action clear feedback without modal form overhead.',
            },
            {
              num: '03 / Guarded Actions',
              title: 'Accessible Confirmation',
              desc: 'Destructive actions like order cancellation require explicit confirmation through an accessible modal dialog with layered keyboard focus protection.',
            },
          ].map((card, idx) => (
            <motion.div
              key={card.num}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group border-t border-white/[0.08] pt-5 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-[10px] font-semibold text-accent transition-colors group-hover:text-primary">
                {card.num}
              </span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">
                {card.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ACT 6: RESPONSIVE INFORMATION PRIORITIZATION */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">05 / Responsive</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Responsive Prioritization
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-muted">
              On narrow viewports, the interface does not throw away the table structure or convert it into generic card stacks.
              Instead, it remains a semantic <code className="text-accent">&lt;table&gt;</code> that progressively prioritizes information:
            </p>

            {/* Interactive Column Priority Explorer */}
            <ResponsiveColumnPriority />

            <ul className="mt-6 space-y-3 border-l border-white/[0.12] pl-5 font-mono text-xs text-primary-subtle">
              <li>
                <strong className="text-primary font-sans font-semibold">Column Tiering:</strong> Secondary columns
                collapse gracefully across <code className="text-accent">sm</code>, <code className="text-accent">md</code>, and <code className="text-accent">lg</code> breakpoints.
              </li>
              <li>
                <strong className="text-primary font-sans font-semibold">Cell Consolidation:</strong> Customer name and company
                tuck directly into the mobile Order ID cell, preserving critical context in a single scan.
              </li>
              <li>
                <strong className="text-primary font-sans font-semibold">Primary Inspection Trigger:</strong> Each row keeps a native Order ID button available across screen sizes; pointer row clicks route focus to that trigger before opening the drawer.
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:col-span-6">
            <CaseStudyFrame
              direction="up"
              className="max-w-[360px] overflow-hidden border border-white/[0.1] bg-surface p-3 shadow-2xl transition-transform hover:scale-[1.01]"
            >
              <img
                src={getAssetPath('/case-studies/nyxboard/mobile-orders.png')}
                alt="Nyxboard mobile orders view demonstrating condensed table layout and progressive column prioritization"
                width="390"
                height="844"
                loading="lazy"
                decoding="async"
                className="w-full border border-white/[0.06] object-contain"
              />
              <span className="mt-2 block text-center font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
                Mobile Orders // Viewport 390px
              </span>
            </CaseStudyFrame>
          </div>
        </div>
      </section>

      {/* ACT 7: UNDER THE SURFACE — ARCHITECTURE */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">06 / Architecture</span>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Under the Surface
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-muted sm:text-lg">
            The architecture is organized around clear responsibility boundaries, ensuring UI components
            remain thin presentation layers while services and contexts manage state flow.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Architecture Stack */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/[0.08] bg-surface p-6 sm:p-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">System Layers</h3>
            <div className="mt-6 space-y-4">
              <div className="border-b border-white/[0.06] pb-4 transition-colors hover:border-accent/40">
                <span className="font-mono text-[10px] text-accent">01 / Routing &amp; URL Synchronization</span>
                <h4 className="text-sm font-semibold text-primary">React Router 7</h4>
                <p className="mt-1 text-xs text-primary-muted">
                  URL query parameters (<code className="text-accent">q, store, status, sortBy, sortOrder, page, pageSize</code>) synchronize with local React view state under defensive runtime validation, keeping supported filter combinations shareable.
                </p>
              </div>

              <div className="border-b border-white/[0.06] pb-4 transition-colors hover:border-accent/40">
                <span className="font-mono text-[10px] text-accent">02 / Reactive Context &amp; Invalidation</span>
                <h4 className="text-sm font-semibold text-primary">OrdersContext</h4>
                <p className="mt-1 text-xs text-primary-muted">
                  Coordinates state across Overview, Orders, Stores, and Sidebar. Utilizes a lightweight version ticker as an invalidation mechanism to trigger re-memoization of filtered views when mutations happen.
                </p>
              </div>

              <div className="border-b border-white/[0.06] pb-4 transition-colors hover:border-accent/40">
                <span className="font-mono text-[10px] text-accent">03 / Service Layer</span>
                <h4 className="text-sm font-semibold text-primary">orderService.ts</h4>
                <p className="mt-1 text-xs text-primary-muted">
                  Encapsulates localStorage-backed order queries and mutations: multi-field filtering, single-column sorting, pagination calculations, KPI aggregation, and CSV preparation. Input debouncing stays in the page layer.
                </p>
              </div>

              <div className="transition-colors hover:border-accent/40">
                <span className="font-mono text-[10px] text-accent">04 / Storage &amp; Code Splitting</span>
                <h4 className="text-sm font-semibold text-primary">localStorage + React.lazy</h4>
                <p className="mt-1 text-xs text-primary-muted">
                  Persists order mutations across sessions with a 1-click Reset Demo action. Heavy route modules and charting visualizations are loaded on demand via <code className="text-accent">React.lazy</code> and <code className="text-accent">Suspense</code>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Reactive Mutation Flow Component */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <ReactiveMutationLoop />
          </motion.div>
        </div>
      </section>

      {/* ACT 8: ACCESSIBILITY AS INTERACTION LOGIC */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">07 / Accessibility</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Accessibility as Interaction Logic
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-muted">
              Accessibility in Nyxboard is not treated as a post-implementation compliance pass, but as fundamental interaction architecture.
              When complex slide-overs and confirmation dialogs enter the screen, focus management must be exact to prevent keyboard loss.
            </p>

            <div className="mt-8 border border-white/[0.08] bg-surface p-5 font-mono text-xs">
              <span className="text-[9px] uppercase tracking-[0.2em] text-accent">Focus Lifecycle Hook (`useFocusTrap`)</span>
              <ol className="mt-3 space-y-2 text-primary-muted text-[11px] list-none p-0 m-0">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span><strong>Capture:</strong> Stores <code className="text-primary">document.activeElement</code> on trigger.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span><strong>Focus Move:</strong> Moves focus to the first interactive element inside drawer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span><strong>Cycle Trap:</strong> Intercepts <code className="text-primary">Tab</code> and <code className="text-primary">Shift+Tab</code> to constrain focus within container.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span><strong>Escape Dismiss:</strong> Global keydown listener dismisses open dialogs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">5.</span>
                  <span><strong>Restore:</strong> Returns focus to the initiating order trigger on close without viewport drift.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                num: '01 / Focus Restoration',
                title: 'Zero Context Drift',
                desc: 'When closing the order drawer, focus returns reliably to that specific row’s inspection trigger whether opened via keyboard, action button, or mouse row activation, eliminating viewport scroll drift.',
              },
              {
                num: '02 / Semantic Modals',
                title: 'Dialog Semantics',
                desc: 'Drawers and modals implement role="dialog", aria-modal="true", and proper aria-labelledby titles for assistive software.',
              },
              {
                num: '03 / Keyboard Control',
                title: 'Native Triggers & Escape',
                desc: 'The Orders table provides native focusable triggers with distinct focus rings and Enter/Space activation, paired with global Escape key dismissal in drawers and dialogs.',
              },
              {
                num: '04 / Reduced Motion',
                title: 'prefers-reduced-motion',
                desc: 'Drawers, metric value transitions, and chart transitions honor the user’s OS accessibility settings, falling back to static end states.',
              },
            ].map((card, idx) => (
              <motion.div
                key={card.num}
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-white/[0.08] bg-surface p-6 transition-all hover:border-accent/30"
              >
                <span className="font-mono text-[10px] text-accent transition-colors group-hover:text-primary">
                  {card.num}
                </span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT 9: VISUAL SYSTEM */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">08 / Visual System</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Ink, Violet, and Seams
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-muted">
              Nyxboard&apos;s visual design establishes a purposeful operational environment rather than copying standard generic dashboard styling:
            </p>

            <dl className="mt-8 space-y-4 font-mono text-xs">
              <div className="group flex items-center gap-4 p-2 border border-transparent transition-colors hover:border-white/10 hover:bg-surface">
                <dt className="h-8 w-8 border border-white/20 bg-[#11121a] flex-shrink-0 transition-transform group-hover:scale-105" aria-label="Color swatch: Nyx Ink" />
                <dd>
                  <span className="text-primary font-semibold">Nyx Ink (`#11121a`)</span>
                  <span className="block text-[10px] text-primary-subtle">Quiet, high-contrast operational foundation &bull; WCAG AAA 14:1</span>
                </dd>
              </div>

              <div className="group flex items-center gap-4 p-2 border border-transparent transition-colors hover:border-white/10 hover:bg-surface">
                <dt className="h-8 w-8 border border-white/20 bg-[#6d5dfc] flex-shrink-0 transition-transform group-hover:scale-105" aria-label="Color swatch: Nyx Violet" />
                <dd>
                  <span className="text-primary font-semibold">Nyx Violet (`#6d5dfc`)</span>
                  <span className="block text-[10px] text-primary-subtle">Primary interactive accents and diagonal seam cuts</span>
                </dd>
              </div>

              <div className="group flex items-center gap-4 p-2 border border-transparent transition-colors hover:border-white/10 hover:bg-surface">
                <dt className="h-8 w-8 border border-white/20 bg-[#35b9c8] flex-shrink-0 transition-transform group-hover:scale-105" aria-label="Color swatch: Nyx Cyan" />
                <dd>
                  <span className="text-primary font-semibold">Nyx Cyan (`#35b9c8`)</span>
                  <span className="block text-[10px] text-primary-subtle">Telemetry indicators and live chart trajectory highlights</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <StatusTokenMatrix />
          </div>
        </div>
      </section>

      {/* ACT 10: REFLECTION & FUTURE WORK */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">09 / Reflection</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl">
              Implementation Takeaways
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-primary-muted sm:text-lg lg:col-span-8">
            <p>
              Building Nyxboard demonstrated that dense operational tools do not need to choose between speed, visual clarity,
              and accessibility. By keeping view parameters validated and synchronized bidirectionally between the URL and local React state,
              UI state remains transparent, shareable, and resilient against accidental resets during everyday operations.
            </p>
            <p>
              The slide-over drawer keeps the underlying data table visible during inspection, supporting orientation while the focused
              service layer keeps state mutations decoupled from presentation components.
            </p>

            {/* Clearly labeled future production directions */}
            <div className="mt-10 border border-white/[0.08] bg-surface p-6 sm:p-8 font-sans">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Future Production Directions (Clearly Labeled)
              </span>
              <p className="mt-2 text-xs text-primary-subtle">
                Were this system moved into an enterprise production environment, the following engineering extensions would naturally follow:
              </p>

              <ul className="mt-5 grid gap-4 sm:grid-cols-2 text-xs text-primary-muted list-none p-0 m-0">
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Real Backend &amp; API Integration</strong>
                  <span>Replacing the localStorage-backed <code className="text-accent">orderService</code> with typed REST or GraphQL endpoints.</span>
                </li>
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Server-Side Data Layer</strong>
                  <span>Implementing cursor-based pagination and database-level indexing for high-volume catalogs.</span>
                </li>
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Authentication &amp; Permissions</strong>
                  <span>Adding role-based access control (RBAC) to restrict order status mutations and export privileges.</span>
                </li>
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Carrier Webhooks</strong>
                  <span>Automated real-time tracking feeds replacing local shipping state toggles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 11: CALM PROJECT FOOTER */}
      <footer className="relative mx-auto w-full max-w-[1600px] border-t border-white/[0.09] px-6 py-20 lg:px-16 lg:py-28">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Return</span>
            <div className="mt-3">
              <Link
                href="/#work"
                className="group inline-flex items-baseline gap-3 font-editorial text-[clamp(2rem,4.5vw,4.5rem)] italic leading-none tracking-[-0.035em] text-primary transition-colors hover:text-accent"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-2 motion-reduce:transform-none">&larr;</span>
                <span>Back to Selected Work</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em]">
            <a
              href="https://drgyz.github.io/nyxboard-commerce-dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-primary"
            >
              View live demo &nearr;
            </a>
            <a
              href="https://github.com/DRGYZ/nyxboard-commerce-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-muted transition-colors hover:text-primary"
            >
              GitHub repository &nearr;
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-subtle sm:flex-row sm:items-center">
          <span>Yazan Khaled &mdash; Front-end Developer &amp; Creative Technologist</span>
          <span>Paris, France &bull; 2026</span>
        </div>
      </footer>
    </article>
  );
}
