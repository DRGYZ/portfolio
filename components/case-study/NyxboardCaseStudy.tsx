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
      <header className="relative mx-auto w-full max-w-[1600px] px-6 pt-32 pb-12 lg:px-16 lg:pt-40 lg:pb-16">
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
              Nyxboard started with a simple problem: operational dashboards need a lot of information, but they stop
              working when that information gets in the way. I focused on fast filtering, in-place order inspection,
              and clear state changes across a multi-store workspace.
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
                { term: 'Focus', val: 'Operational UI & State Design' },
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

        {/* HERO PRODUCT EVIDENCE & IDENTITY COMPOSITION */}
        <div className="relative mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:items-stretch">
          {/* Primary Evidence: Real Product Interface */}
          <div className="lg:col-span-8 xl:col-span-9">
            <CaseStudyFrame
              direction="up"
              className="relative h-full overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 lg:p-5 shadow-2xl"
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
                <span className="flex items-center gap-1.5 font-semibold text-accent">
                  <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                  Primary Interface Proof // Desktop Operations
                </span>
                <span>Consolidated Multi-Store View</span>
              </div>

              <img
                src={getAssetPath('/case-studies/nyxboard/overview-desktop.png')}
                alt="Nyxboard multi-store commerce operations interface showing KPI summary cards, sales volume trajectory, status distribution, and store comparison"
                width="1440"
                height="900"
                loading="eager"
                decoding="async"
                className="w-full border border-white/[0.05] object-contain shadow-2xl"
              />
            </CaseStudyFrame>
          </div>

          {/* Secondary Editorial Accent: Compact Identity Plate */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between border border-white/[0.08] bg-[#111218] p-4 lg:col-span-4 lg:p-5 xl:col-span-3"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
                <span>Identity &amp; Motif</span>
                <span className="text-accent">2026</span>
              </div>

              <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden border border-white/[0.04] bg-surface-low lg:aspect-auto lg:h-52">
                <img
                  src={getAssetPath('/projects/nyxboard.svg?v=2')}
                  alt=""
                  aria-hidden="true"
                  width="1200"
                  height="820"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-contain object-center"
                />
              </div>

              <p className="mt-4 font-sans text-xs leading-relaxed text-primary-muted">
                Angular type and seam details carry the Nyxboard identity without competing with the interface.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-subtle">
              <span>Editorial Treatment</span>
              <span className="text-accent">Ink &bull; Violet &bull; Cyan</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ACT 2: THE INTERFACE PROBLEM */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 pt-12 pb-16 lg:px-16 lg:pt-20 lg:pb-20">
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
              &ldquo;The hard part wasn’t showing more data. It was keeping the operator oriented while they moved through it.&rdquo;
            </motion.blockquote>

            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 space-y-4 text-base leading-relaxed text-primary-muted sm:text-lg"
            >
              <p>
                Commerce tools can go wrong in two ways: hide too much behind extra clicks, or show everything at once and make the screen harder to use.
              </p>
              <p>
                For Nyxboard, I focused on keeping the operator anchored. Filtering, sorting, order inspection, and status changes all happen without throwing them out of the workspace they were already using.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACT 3: SCAN — THE OVERVIEW */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-20">
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
            loading="eager"
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
              num: '01 / Store Scope',
              title: 'Store Filtering',
              desc: 'Switching stores scopes the dashboard without breaking the comparison between them.',
            },
            {
              num: '02 / Metric Hierarchy',
              title: 'Fulfillment Health',
              desc: 'The top row keeps the numbers that need attention first: revenue, total orders, pending review, queue size, and fulfillment rate.',
            },
            {
              num: '03 / Visual Trajectory',
              title: 'Volume & Distribution',
              desc: 'The trend shows how order activity changes over two weeks, while the status split shows where the current queue sits.',
            },
            {
              num: '04 / State Sync',
              title: 'Synchronized Metrics',
              desc: 'Order changes feed back into the dashboard. Status counts update with the queue, and cancelled orders drop out of active revenue.',
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
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03 / Filter</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              The Orders Workspace
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-muted">
              This is where Nyxboard becomes more than a static dashboard. Search, store, status, sort, and page state live in the URL, so the workspace can be refreshed or shared without losing where you were.
            </p>

            {/* Interactive Filter State Flow */}
            <StatePipelineFlow />
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
                loading="eager"
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
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-20">
        <SeamDivider className="mb-12" />

        <div className="mb-10 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">04 / Inspect &amp; Act</span>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Detail in Place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-muted sm:text-lg">
            Opening a separate order page would throw away the exact filter and scroll position that got you there. Nyxboard keeps the list in place and opens the order in a drawer, so review and fulfillment happen without leaving the queue.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2 xl:gap-10">
          {[
            {
              num: '01',
              title: 'Filtered Context',
              desc: 'The Unshipped view narrows the list to orders that still need action, while the active filters stay in the URL.',
              image: 'workflow-01-filter.png',
              alt: 'Orders workspace filtered to nine Unshipped orders, including ORD-98420.',
            },
            {
              num: '02',
              title: 'Inspect in Place',
              desc: 'ORD-98420 opens in a drawer while the filtered list stays visible behind it.',
              image: 'workflow-02-inspect.png',
              alt: 'Order ORD-98420 open in a slide-over drawer over the filtered Unshipped list, with Mark as Shipped available.',
            },
            {
              num: '03',
              title: 'Updated State',
              desc: 'Marking the order shipped changes its status, adds a generated tracking reference, and updates the fulfillment counts from the same saved demo state.',
              image: 'workflow-03-recompute.png',
              alt: 'Order ORD-98420 marked Shipped with a generated carrier and tracking reference; the filtered Unshipped list remains behind the drawer.',
            },
          ].map((step, idx) => (
            <figure key={step.num} className={idx === 2 ? 'xl:col-span-2 xl:mx-auto xl:w-full xl:max-w-[900px]' : ''}>
              <figcaption className="mb-3 border-t border-white/[0.08] pt-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">{step.num} / {step.title}</span>
                <p className="mt-1 text-xs leading-relaxed text-primary-muted">{step.desc}</p>
              </figcaption>
              <CaseStudyFrame
                direction="up"
                className="overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-3 shadow-2xl"
              >
                <div className={`relative h-[400px] overflow-hidden border border-white/[0.05] sm:h-auto ${idx < 2 ? 'xl:h-[680px]' : ''}`}>
                  <img
                    src={getAssetPath(`/case-studies/nyxboard/${step.image}`)}
                    alt={step.alt}
                    width="2368"
                    height="1800"
                    loading="lazy"
                    decoding="async"
                    className={`absolute top-0 h-[400px] w-auto max-w-none sm:static sm:h-auto sm:w-full ${idx < 2 ? 'xl:absolute xl:top-0 xl:h-[680px] xl:w-auto xl:max-w-none' : ''} ${idx === 0 ? 'left-0' : 'right-0'}`}
                  />
                </div>
              </CaseStudyFrame>
            </figure>
          ))}
        </div>
      </section>

      {/* ACT 6: RESPONSIVE INFORMATION PRIORITIZATION */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">05 / Responsive</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Responsive Prioritization
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-muted">
              I kept the table on smaller screens instead of replacing every row with cards. Lower-priority columns disappear first, while the information needed to identify and act on an order stays visible.
            </p>

            {/* Interactive Column Priority Explorer */}
            <ResponsiveColumnPriority />

            <ul className="mt-6 space-y-3 border-l border-white/[0.12] pl-5 font-mono text-xs text-primary-subtle">
              <li>
                <strong className="text-primary font-sans font-semibold">Column Tiering:</strong> Less important columns disappear first. Total and status stay visible even at the narrowest layout.
              </li>
              <li>
                <strong className="text-primary font-sans font-semibold">Cell Consolidation:</strong> On compact screens, customer and company details fold into the Order ID cell instead of disappearing entirely.
              </li>
              <li>
                <strong className="text-primary font-sans font-semibold">Native Trigger:</strong> A row click hands focus to the real Order ID button before the drawer opens, so keyboard focus has somewhere predictable to return to.
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
                loading="eager"
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

      {/* SECTION 06: BUILT DELIBERATELY */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-12" />

        <div className="mb-12 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">06 / Engineering</span>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Built Deliberately
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-muted sm:text-lg">
            Most of the work here is invisible in a screenshot. Filters need to survive refreshes, order changes need to reach every view that depends on them, and the drawer has to return focus to the right place.
          </p>
        </div>

        {/* Technical Grid: Architecture & Mutation Flow */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Architecture Proof */}
          <div className="border border-white/[0.08] bg-surface p-6 sm:p-8 lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Architecture &amp; State Boundaries</h3>
            <div className="mt-6 space-y-4 font-sans text-xs">
              <div className="border-b border-white/[0.06] pb-3">
                <strong className="block text-primary font-medium">React + Strict TypeScript</strong>
                <span className="text-primary-muted">Keeps order, filter, and mutation shapes explicit across the app.</span>
              </div>
              <div className="border-b border-white/[0.06] pb-3">
                <strong className="block text-primary font-medium">URL-Backed Workspace State</strong>
                <span className="text-primary-muted">Search, store, status, sort, and page state live in the URL and are validated before use.</span>
              </div>
              <div className="border-b border-white/[0.06] pb-3">
                <strong className="block text-primary font-medium">Shared State &amp; Refresh</strong>
                <span className="text-primary-muted">After an order changes, <code className="text-accent">OrdersContext</code> refreshes the derived data used by the table, counts, sidebar, and overview.</span>
              </div>
              <div className="border-b border-white/[0.06] pb-3">
                <strong className="block text-primary font-medium">Service Layer</strong>
                <span className="text-primary-muted"><code className="text-accent">orderService.ts</code> owns filtering, sorting, pagination, KPI calculations, and local order mutations.</span>
              </div>
              <div>
                <strong className="block text-primary font-medium">Persistence &amp; Loading</strong>
                <span className="text-primary-muted"><code className="text-accent">localStorage</code> keeps demo changes between reloads, while routes and charts are loaded only when needed.</span>
              </div>
            </div>
          </div>

          {/* Mutation Flow Interactive Component */}
          <div className="lg:col-span-7">
            <ReactiveMutationLoop />
          </div>
        </div>

        {/* Accessibility & Status Matrix Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Accessibility Logic */}
          <div className="border border-white/[0.08] bg-surface p-6 sm:p-8 lg:col-span-5">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Accessibility Engineering</h3>
            <p className="mt-2 text-xs text-primary-muted">
              Keyboard interaction follows the same path as mouse interaction, including nested dialogs and focus restoration.
            </p>

            {/* Compact Focus Lifecycle Track */}
            <div className="mt-4 border border-white/[0.06] bg-background/50 p-3.5 font-mono text-[11px]">
              <span className="block text-[9px] uppercase tracking-[0.16em] text-accent">Focus Lifecycle (`useFocusTrap`)</span>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-primary-subtle">
                <span className="text-primary font-semibold">Trigger</span>
                <span className="text-accent">&rarr;</span>
                <span>Focus In</span>
                <span className="text-accent">&rarr;</span>
                <span>Trapped</span>
                <span className="text-accent">&rarr;</span>
                <span>Escape</span>
                <span className="text-accent">&rarr;</span>
                <span className="text-primary font-semibold">Restored</span>
              </div>
            </div>

            <ul className="mt-5 space-y-3 font-sans text-xs text-primary-muted list-none p-0 m-0">
              <li className="border-l border-white/20 pl-3">
                <strong className="text-primary block font-medium">Semantic Dialogs &amp; Tables</strong>
                <span>Native table structure and labelled dialog semantics stay intact instead of being rebuilt from generic divs.</span>
              </li>
              <li className="border-l border-white/20 pl-3">
                <strong className="text-primary block font-medium">Keyboard Navigation &amp; Skip Link</strong>
                <span>Orders can be opened without a mouse, Escape dismisses the active layer, and the app shell includes a skip link.</span>
              </li>
              <li className="border-l border-white/20 pl-3">
                <strong className="text-primary block font-medium">Focus Restoration</strong>
                <span>Closing the drawer returns focus to the order that opened it; closing the confirmation returns focus to its trigger.</span>
              </li>
              <li className="border-l border-white/20 pl-3">
                <strong className="text-primary block font-medium">Reduced Motion</strong>
                <span>Drawer transitions and charts respect <code className="text-accent">prefers-reduced-motion</code>.</span>
              </li>
              <li className="border-l border-white/20 pl-3">
                <strong className="text-primary block font-medium">Accessible Charts</strong>
                <span>Charts expose concise text summaries instead of relying only on SVG visuals.</span>
              </li>
            </ul>
          </div>

          {/* Status Token Matrix & Visual Distinction */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <StatusTokenMatrix />
            <div className="mt-3 px-1 font-mono text-[10px] text-primary-subtle">
              Nyxboard itself uses a light, high-contrast workspace. The dark ink, violet, and cyan treatment belongs to this case study, not the product UI.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: REFLECTION & PRODUCTION BOUNDARIES */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 pt-12 pb-8 lg:px-16 lg:pt-16 lg:pb-12">
        <SeamDivider className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">07 / Reflection</span>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl">
              What I’d Keep
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-primary-muted sm:text-lg lg:col-span-8">
            <p>
              The main lesson from Nyxboard was that dense interfaces don’t need to feel heavy if state and context stay predictable. URL-backed filters made the workspace recoverable, the drawer kept inspection local, and the service layer kept business rules out of the UI.
            </p>

            {/* Clearly labeled production boundaries */}
            <div className="border border-white/[0.08] bg-surface p-6 sm:p-8 font-sans">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Production Boundaries
              </span>
              <p className="mt-2 text-xs text-primary-subtle">
                Nyxboard is intentionally client-side: seeded data, browser persistence, and simulated auth. A production version would need real data ownership, permissions, and external integrations behind the interface.
              </p>

              <ul className="mt-5 grid gap-4 sm:grid-cols-2 text-xs text-primary-muted list-none p-0 m-0">
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Backend API</strong>
                  <span>Move order reads and mutations out of <code className="text-accent">orderService.ts</code> into authenticated endpoints.</span>
                </li>
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Server-Side Data</strong>
                  <span>Filter, sort, and paginate on the server once the dataset is too large to handle comfortably in the browser.</span>
                </li>
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Role-Based Access Control</strong>
                  <span>Enforce who can ship, cancel, and export orders instead of giving every user the same demo permissions.</span>
                </li>
                <li className="border-l border-white/20 pl-3">
                  <strong className="text-primary block font-medium">Carrier Webhooks</strong>
                  <span>Replace generated shipping state with real carrier or commerce events.</span>
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
