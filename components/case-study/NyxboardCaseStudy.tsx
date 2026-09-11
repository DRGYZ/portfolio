'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getAssetPath } from '@/lib/assetPath';

export function NyxboardCaseStudy() {
  const prefersReduced = useReducedMotion();

  const fadeIn = prefersReduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-background">
      {/* Editorial Grid Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ACT 1: EDITORIAL OPENING */}
      <header className="relative mx-auto w-full max-w-[1600px] px-6 pt-32 pb-16 lg:px-16 lg:pt-40 lg:pb-24">
        {/* Subtle decorative top seam */}
        <div aria-hidden="true" className="pointer-events-none mb-10 flex items-center gap-6">
          <span className="h-px w-20 bg-accent/50" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
            05 / Selected Work &mdash; Case Study
          </span>
          <span className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-[clamp(2.8rem,7.5vw,7.8rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em] text-primary">
              Nyxboard
            </h1>
            <p className="mt-6 font-editorial text-[clamp(1.6rem,3.2vw,3rem)] italic leading-[1.12] tracking-[-0.03em] text-accent">
              Commerce operations, without losing context.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-muted sm:text-lg">
              Nyxboard is a multi-store commerce operations dashboard built with React and TypeScript.
              It focuses on how dense order workflows can remain fast, clear, and actionable as an operator
              moves from top-level channel monitoring to granular filtering, line-item inspection, and status mutations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
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
            </div>
          </div>

          {/* Opening Metadata */}
          <aside className="border-t border-white/[0.09] pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pl-10">
            <dl className="grid grid-cols-2 gap-y-6 gap-x-4 font-mono sm:grid-cols-2">
              <div>
                <dt className="text-[9px] uppercase tracking-[0.2em] text-primary-subtle">Year</dt>
                <dd className="mt-1 text-sm font-semibold tracking-wide text-primary">2026</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.2em] text-primary-subtle">Type</dt>
                <dd className="mt-1 text-sm font-semibold tracking-wide text-primary">Personal Project</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.2em] text-primary-subtle">Core Stack</dt>
                <dd className="mt-1 text-sm font-semibold tracking-wide text-primary">React + TypeScript</dd>
              </div>
              <div>
                <dt className="text-[9px] uppercase tracking-[0.2em] text-primary-subtle">Focus</dt>
                <dd className="mt-1 text-sm font-semibold tracking-wide text-primary">Data-Heavy UI & Architecture</dd>
              </div>
            </dl>
          </aside>
        </div>

        {/* Authored Project Poster Artwork */}
        <motion.div
          {...fadeIn}
          className="relative mt-16 overflow-hidden border border-white/[0.08] bg-[#111218] p-3 sm:p-6 lg:mt-24"
        >
          <div className="relative aspect-[1200/680] w-full overflow-hidden bg-surface-low">
            <img
              src={getAssetPath('/projects/nyxboard.svg?v=2')}
              alt="Nyxboard visual poster showing architectural typography, operations nodes, and diagonal seam cut"
              width="1200"
              height="820"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-center"
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
        <div className="border-t border-white/[0.08] pt-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">01 // Problem</span>
              <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl">
                The Interface Challenge
              </h2>
            </div>

            <div className="max-w-3xl lg:col-span-8">
              <blockquote className="font-editorial text-[clamp(1.75rem,3.4vw,2.75rem)] italic leading-[1.2] tracking-[-0.03em] text-primary">
                &ldquo;High information density is useful only if hierarchy survives it.&rdquo;
              </blockquote>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-primary-muted sm:text-lg">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 3: SCAN — THE OVERVIEW */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02 // Scan</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
                The Operations Overview
              </h2>
            </div>
            <p className="max-w-md font-mono text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
              Scanning order: Summary KPIs &rarr; 14-Day Trajectory &rarr; Status Distribution &rarr; Channel Breakdown
            </p>
          </div>

          {/* Full-width Overview Screenshot */}
          <motion.div
            {...fadeIn}
            className="relative overflow-hidden border border-white/[0.08] bg-[#0d0f14] p-2 sm:p-4 lg:p-6"
          >
            <img
              src={getAssetPath('/case-studies/nyxboard/overview-desktop.png')}
              alt="Nyxboard Operations Overview desktop interface showing KPI summary cards, sales volume trajectory, and status distribution"
              width="1440"
              height="900"
              loading="lazy"
              className="w-full border border-white/[0.05] object-contain shadow-2xl"
            />
          </motion.div>

          {/* Overview Implementation Callouts */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">01 / Channel Scope</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Store Filtering</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                A top-level store selector toggles between consolidated multi-brand performance (Apex Goods, Solaria, Veloce)
                and individual storefront channels, instantly narrowing all charts and metrics.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">02 / KPI Hierarchy</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Key Metrics</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                5 core operational cards display Total Revenue, Active Orders, Unshipped Queue, Fulfillment Rate,
                and Average Order Value with directional trend indicators.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">03 / Dual Trajectories</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Recharts Dynamics</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                An area trajectory chart plots 14-day daily volume trends alongside an interactive status distribution donut,
                built with responsive Recharts primitives.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">04 / Live Sync</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Reactive Updates</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                When orders are shipped or canceled anywhere in the app, the overview metrics, chart data points,
                and recent order queues recalculate immediately without full-page reloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 4: FILTER — THE ORDERS WORKSPACE */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03 // Filter</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
                The Orders Workspace
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-muted">
                The Orders table is where the operational work happens. Rather than relying on rigid backend roundtrips,
                the interface maintains URL-synchronized filter state that allows rapid slicing across storefronts,
                lifecycle stages, debounced search queries, sorting preferences, and pagination bounds.
              </p>

              {/* State Flow Diagram */}
              <div className="mt-8 border border-white/[0.08] bg-surface p-6 font-mono">
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent">Architecture // State Pipeline</span>
                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex items-center gap-3 text-primary-muted">
                    <span className="h-1.5 w-1.5 bg-accent" />
                    <span>User inputs (Search, Store, Status, Sort, Page)</span>
                  </div>
                  <div className="pl-4 text-primary-subtle text-[11px]">&darr; 250ms debounce &amp; parameter validation</div>
                  <div className="border-l border-accent/40 pl-4 py-1 text-accent">
                    <code>useSearchParams({'{ replace: true }'})</code>
                  </div>
                  <div className="pl-4 text-primary-subtle text-[11px]">&darr; URL as single source of truth</div>
                  <div className="border-l border-white/20 pl-4 py-1 text-primary">
                    <code>orderService.getOrders(filterState)</code>
                  </div>
                  <div className="pl-4 text-primary-subtle text-[11px]">&darr; pure query calculation</div>
                  <div className="flex items-center gap-3 text-primary font-semibold">
                    <span className="h-1.5 w-1.5 bg-white" />
                    <span>Synchronized Orders Table &amp; Tab Badges</span>
                  </div>
                </div>
              </div>

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
                  <strong>Defensive Parameter Parsing:</strong> URL search parameters are strictly validated against runtime
                  whitelists; invalid status values or non-numeric pages gracefully fall back to safe defaults.
                </p>
              </div>
            </div>

            {/* Orders Desktop Screenshot */}
            <div className="lg:col-span-7">
              <motion.div
                {...fadeIn}
                className="relative overflow-hidden border border-white/[0.08] bg-[#0d0f14] p-2 sm:p-4"
              >
                <img
                  src={getAssetPath('/case-studies/nyxboard/orders-desktop.png')}
                  alt="Nyxboard Orders workspace table view showing faceted status tabs, debounced search bar, and multi-column sorting"
                  width="1440"
                  height="900"
                  loading="lazy"
                  className="w-full border border-white/[0.05] object-contain shadow-2xl"
                />
              </motion.div>
              <span className="mt-3 block text-right font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
                Orders Workspace // Desktop Table View
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 5: INSPECT / ACT — DETAIL WITHOUT LOSING CONTEXT */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="mb-10 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">04 // Inspect &amp; Act</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Detail in Place
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-muted sm:text-lg">
              Navigating away to an isolated order page is disruptive: it discards active filter states, loses scroll position,
              and prevents rapid sequential comparisons. Nyxboard inspects orders inside a slide-over drawer that keeps the table visible
              behind the inspection plane.
            </p>
          </div>

          <motion.div
            {...fadeIn}
            className="relative overflow-hidden border border-white/[0.08] bg-[#0d0f14] p-2 sm:p-4 lg:p-6"
          >
            <img
              src={getAssetPath('/case-studies/nyxboard/order-drawer.png')}
              alt="Nyxboard Order Detail Drawer open over the orders table displaying line items, shipping address, financial totals, and status actions"
              width="1440"
              height="900"
              loading="lazy"
              className="w-full border border-white/[0.05] object-contain shadow-2xl"
            />
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">01 / Full Order Anatomy</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Line Items &amp; SKUs</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                Each product item shows thumbnail previews, SKU codes, unit prices, ordered quantities, customer delivery address,
                and tax/shipping fee calculations.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">02 / Direct Mutation</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Mark as Shipped</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                Triggering &ldquo;Mark as Shipped&rdquo; initiates an asynchronous mutation with an inline button loading state,
                advancing the lifecycle without requiring modal form overhead.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] font-semibold text-accent">03 / Guarded Actions</span>
              <h3 className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">Accessible Confirmation</h3>
              <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                Destructive actions like order cancellation require explicit confirmation through an accessible modal dialog
                with layered keyboard focus protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 6: RESPONSIVE INFORMATION PRIORITIZATION */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">05 // Responsive</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
                Responsive Prioritization
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-muted">
                On narrow viewports, the interface does not throw away the table structure or convert it into generic card stacks.
                Instead, it remains a semantic <code className="text-accent">&lt;table&gt;</code> that progressively prioritizes information:
              </p>

              <ul className="mt-6 space-y-4 border-l border-white/[0.12] pl-5 font-mono text-xs text-primary-subtle">
                <li>
                  <strong className="text-primary font-sans font-semibold">Column Tiering:</strong> Secondary columns
                  like Store, Ship Before date, and separate Customer columns collapse at <code className="text-accent">sm</code> and <code className="text-accent">md</code> breakpoints.
                </li>
                <li>
                  <strong className="text-primary font-sans font-semibold">Cell Consolidation:</strong> Customer name and company
                  information are tucked directly into the mobile Order ID cell, preserving critical context in a single scan.
                </li>
                <li>
                  <strong className="text-primary font-sans font-semibold">Full Touch Target:</strong> Each row remains an expansive tap
                  target that opens the slide-over detail drawer, retaining the identical inspection flow across devices.
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:col-span-7">
              <motion.div
                {...fadeIn}
                className="max-w-[360px] overflow-hidden border border-white/[0.1] bg-[#0d0f14] p-3 shadow-2xl"
              >
                <img
                  src={getAssetPath('/case-studies/nyxboard/mobile-orders.png')}
                  alt="Nyxboard mobile orders view demonstrating condensed table layout and progressive column prioritization"
                  width="390"
                  height="844"
                  loading="lazy"
                  className="w-full border border-white/[0.06] object-contain"
                />
                <span className="mt-2 block text-center font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
                  Mobile Orders // Viewport 390px
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 7: UNDER THE SURFACE — ARCHITECTURE */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="mb-10 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">06 // Architecture</span>
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
            <div className="border border-white/[0.08] bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">System Layers</h3>
              <div className="mt-6 space-y-4">
                <div className="border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-[10px] text-accent">01 / Routing &amp; URL Synchronization</span>
                  <h4 className="text-sm font-semibold text-primary">React Router 7</h4>
                  <p className="mt-1 text-xs text-primary-muted">
                    URL query parameters (<code className="text-accent">q, store, status, sortBy, sortOrder, page</code>) act as the single source of truth for view state, making every filter combination shareable.
                  </p>
                </div>

                <div className="border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-[10px] text-accent">02 / Reactive Context &amp; Invalidation</span>
                  <h4 className="text-sm font-semibold text-primary">OrdersContext</h4>
                  <p className="mt-1 text-xs text-primary-muted">
                    Coordinates state across Overview, Orders, Stores, and Sidebar. Utilizes a lightweight version ticker as an invalidation mechanism to trigger re-memoization of filtered views when mutations happen.
                  </p>
                </div>

                <div className="border-b border-white/[0.06] pb-4">
                  <span className="font-mono text-[10px] text-accent">03 / Service Layer</span>
                  <h4 className="text-sm font-semibold text-primary">orderService.ts</h4>
                  <p className="mt-1 text-xs text-primary-muted">
                    Encapsulates pure data query operations: debounced multi-field searching, multi-column sorting, pagination offset calculations, and KPI metric aggregations.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-accent">04 / Storage &amp; Code Splitting</span>
                  <h4 className="text-sm font-semibold text-primary">localStorage + React.lazy</h4>
                  <p className="mt-1 text-xs text-primary-muted">
                    Persists order mutations across sessions with a 1-click Reset Demo action. Heavy route modules and charting visualizations are loaded on demand via <code className="text-accent">React.lazy</code> and <code className="text-accent">Suspense</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Reactive Mutation Flow */}
            <div className="border border-white/[0.08] bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Reactive Mutation Flow</h3>
              <div className="mt-6 space-y-6 font-mono text-xs">
                <div className="border border-white/[0.08] bg-background/50 p-4">
                  <span className="text-[10px] text-accent">EVENT</span>
                  <p className="mt-1 text-primary font-semibold">User triggers &ldquo;Mark as Shipped&rdquo; in Drawer</p>
                </div>

                <div className="pl-6 text-primary-subtle text-[11px]">&darr; calls context method</div>

                <div className="border border-white/[0.08] bg-background/50 p-4">
                  <span className="text-[10px] text-accent">MUTATION &amp; VERSION TICK</span>
                  <p className="mt-1 text-primary font-semibold">orderService.markAsShipped(id) &rarr; bumpVersion()</p>
                  <p className="mt-1 text-[11px] text-primary-muted font-sans">
                    Updates persistent storage and increments internal version counter.
                  </p>
                </div>

                <div className="pl-6 text-primary-subtle text-[11px]">&darr; triggers reactive re-memoization</div>

                <div className="border border-accent/30 bg-accent/[0.04] p-4 text-primary">
                  <span className="text-[10px] text-accent">BROADCAST UPDATES</span>
                  <ul className="mt-2 space-y-1.5 text-[11px] font-sans text-primary-muted">
                    <li>&bull; Table row reflects &ldquo;Shipped&rdquo; status badge and active action</li>
                    <li>&bull; Status tab counts (&ldquo;Unshipped&rdquo; &darr;, &ldquo;Shipped&rdquo; &uarr;) update reactively</li>
                    <li>&bull; Sidebar unfulfilled order counter decrements</li>
                    <li>&bull; Overview KPI cards and sales charts update without page reload</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 8: ACCESSIBILITY AS INTERACTION LOGIC */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">07 // Accessibility</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
                Accessibility as Interaction Logic
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-muted">
                Accessibility in Nyxboard is not treated as a post-implementation compliance pass, but as fundamental interaction architecture.
                When complex slide-overs and confirmation dialogs enter the screen, focus management must be exact to prevent keyboard loss.
              </p>

              <div className="mt-8 border border-white/[0.08] bg-surface p-5 font-mono text-xs">
                <span className="text-[9px] uppercase tracking-[0.2em] text-accent">Focus Lifecycle Hook (`useFocusTrap`)</span>
                <div className="mt-3 space-y-2 text-primary-muted text-[11px]">
                  <div>1. <strong>Capture:</strong> Stores <code className="text-primary">document.activeElement</code> on trigger.</div>
                  <div>2. <strong>Focus Move:</strong> Moves focus to the first interactive element inside drawer.</div>
                  <div>3. <strong>Cycle Trap:</strong> Intercepts <code className="text-primary">Tab</code> and <code className="text-primary">Shift+Tab</code> to constrain focus within container.</div>
                  <div>4. <strong>Escape Dismiss:</strong> Global keydown listener dismisses open dialogs.</div>
                  <div>5. <strong>Restore:</strong> Automatically returns focus to original trigger on close.</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <div className="border border-white/[0.08] bg-surface p-6">
                <span className="font-mono text-[10px] text-accent">01 / Focus Restoration</span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">Zero Context Drift</h3>
                <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                  When an operator closes the order drawer, focus reliably returns to the exact table row they were examining,
                  preventing the browser viewport from resetting to the top.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-6">
                <span className="font-mono text-[10px] text-accent">02 / Semantic Modals</span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">Dialog Semantics</h3>
                <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                  Drawers and modals implement <code className="text-accent">role=&quot;dialog&quot;</code>, <code className="text-accent">aria-modal=&quot;true&quot;</code>,
                  and proper <code className="text-accent">aria-labelledby</code> titles for assistive software.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-6">
                <span className="font-mono text-[10px] text-accent">03 / Keyboard Control</span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">Escape &amp; Enter</h3>
                <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                  All interactive controls are operable via standard keyboard patterns, including Escape key dismissal
                  and Space/Enter row activation.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-6">
                <span className="font-mono text-[10px] text-accent">04 / Reduced Motion</span>
                <h3 className="mt-2 text-sm font-bold uppercase tracking-wider text-primary">prefers-reduced-motion</h3>
                <p className="mt-2 text-xs leading-relaxed text-primary-muted">
                  Drawers, metric counters, and chart transitions strictly honor the user&apos;s OS accessibility settings,
                  falling back to instantaneous static state changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 9: VISUAL SYSTEM */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">08 // Visual System</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
                Ink, Violet, and Seams
              </h2>
              <p className="mt-6 text-base leading-relaxed text-primary-muted">
                Nyxboard&apos;s visual design establishes a purposeful operational environment rather than copying standard generic dashboard styling:
              </p>

              <div className="mt-8 space-y-4 font-mono text-xs">
                <div className="flex items-center gap-4">
                  <div className="h-7 w-7 border border-white/20 bg-[#11121a]" />
                  <div>
                    <span className="text-primary font-semibold">Nyx Ink (`#11121a`)</span>
                    <span className="block text-[10px] text-primary-subtle">Quiet, high-contrast operational foundation</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-7 w-7 border border-white/20 bg-[#6d5dfc]" />
                  <div>
                    <span className="text-primary font-semibold">Nyx Violet (`#6d5dfc`)</span>
                    <span className="block text-[10px] text-primary-subtle">Primary interactive accents and diagonal seam cuts</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-7 w-7 border border-white/20 bg-[#35b9c8]" />
                  <div>
                    <span className="text-primary font-semibold">Nyx Cyan (`#35b9c8`)</span>
                    <span className="block text-[10px] text-primary-subtle">Telemetry indicators and live chart trajectory highlights</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden border border-white/[0.08] bg-[#111218] p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Visual Motif Connection</span>
                <p className="mt-3 font-editorial text-2xl italic tracking-tight text-primary">
                  The diagonal seam cuts in Nyxboard share an intentional geometric dialogue with this portfolio&apos;s architectural angular language.
                </p>
                <div className="mt-6 flex h-16 w-full items-center">
                  <svg className="h-full w-full text-accent" viewBox="0 0 400 40" preserveAspectRatio="none">
                    <path d="M0 20 L160 20 L200 5 L400 5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
                  </svg>
                </div>
                <span className="block text-right font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
                  Seam Angle / 18&deg; Transition
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 10: REFLECTION & FUTURE WORK */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <div className="border-t border-white/[0.08] pt-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">09 // Reflection</span>
              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl">
                Implementation Takeaways
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-primary-muted sm:text-lg lg:col-span-8">
              <p>
                Building Nyxboard demonstrated that dense operational tools do not need to choose between speed, visual clarity,
                and accessibility. By keeping view parameters strictly synchronized with the URL, UI state remains transparent,
                shareable, and immune to accidental resets during everyday operations.
              </p>
              <p>
                The slide-over drawer pattern confirmed that keeping the underlying data table visible preserves orientation far better
                than separate routing paths, while the focused service layer kept state mutations decoupled from presentation components.
              </p>

              {/* Clearly labeled future production directions */}
              <div className="mt-10 border border-white/[0.08] bg-surface p-6 sm:p-8 font-sans">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Future Production Directions (Clearly Labeled)
                </span>
                <p className="mt-2 text-xs text-primary-subtle">
                  Were this system moved into an enterprise production environment, the following engineering extensions would naturally follow:
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs text-primary-muted">
                  <div className="border-l border-white/20 pl-3">
                    <strong className="text-primary block font-medium">Real Backend &amp; API Integration</strong>
                    <span>Replacing the in-memory <code className="text-accent">orderService</code> with typed REST or GraphQL endpoints.</span>
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <strong className="text-primary block font-medium">Server-Side Data Layer</strong>
                    <span>Implementing cursor-based pagination and database-level indexing for high-volume catalogs.</span>
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <strong className="text-primary block font-medium">Authentication &amp; Permissions</strong>
                    <span>Adding role-based access control (RBAC) to restrict order status mutations and export privileges.</span>
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <strong className="text-primary block font-medium">Carrier Webhooks</strong>
                    <span>Automated real-time tracking feeds replacing local shipping state toggles.</span>
                  </div>
                </div>
              </div>
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
                <span className="transition-transform duration-300 group-hover:-translate-x-2">&larr;</span>
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
