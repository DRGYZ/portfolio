'use client';

import { getAssetPath } from '@/lib/assetPath';
import { CaseStudyFrame } from '../CaseStudyFrame';
import { SeamDivider } from '../SeamDivider';

export function OhMyFoodCaseStudy() {
  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-[#421930] selection:text-[#F4EFE8]">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* CHAPTER 1 — OHMYFOOD, REVISITED (HERO) */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-28 sm:pt-36 lg:px-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Title & Overview */}
          <div className="space-y-6 lg:col-span-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9E472A]">
                01 / Case Study &bull; Rebuild &bull; 2026
              </span>
              <span className="border border-[#421930] bg-[#421930]/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#A65F78]">
                OpenClassrooms &rarr; V2
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-primary">
              OhMyFood,
              <br />
              <span className="font-editorial font-normal italic tracking-[-0.02em] text-[#A65F78]">
                revisited.
              </span>
            </h1>

            <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                OhMyFood started as one of my OpenClassrooms projects.
              </p>
              <p>
                The original version did what it needed to do for the course, but when I came back to it after gaining more front-end experience, it felt very different from the kind of work I wanted to show in my portfolio.
              </p>
              <p>
                Instead of replacing the original submission, I kept it intact and rebuilt the project separately as V2.
              </p>
              <p className="font-sans text-[16px] text-primary sm:text-[17px]">
                The goal wasn’t just to move it to React. I wanted to see what the same idea could become as a complete product.
              </p>
            </div>

            {/* Compact Metadata Strip */}
            <dl className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 font-mono text-[13px] sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Evolution</dt>
                <dd className="mt-1 font-semibold text-primary">OpenClassrooms project &rarr; 2026 rebuild</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Stack</dt>
                <dd className="mt-1 font-semibold text-[#A65F78]">React &bull; TypeScript &bull; Vite &bull; React Router</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Hero Screenshot */}
          <div className="lg:col-span-6">
            <CaseStudyFrame
              direction="up"
              className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 shadow-2xl"
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
                <span className="flex items-center gap-1.5 font-semibold text-[#A65F78]">
                  <span className="h-1.5 w-1.5 bg-[#9E472A]" aria-hidden="true" />
                  V2 Experience Proof // Discovery
                </span>
                <span>Paris Gastronomy</span>
              </div>

              <img
                src={getAssetPath('/case-studies/ohmyfood/discover-desktop.png')}
                alt="OhMyFood V2 restaurant discovery page featuring curated Paris dining venues, search filters, and an editorial hero layout"
                width="1440"
                height="900"
                loading="eager"
                decoding="async"
                className="w-full border border-white/[0.05] object-contain shadow-2xl"
              />
            </CaseStudyFrame>
          </div>
        </div>
      </section>

      {/* CHAPTER 2 — WHERE IT STARTED */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-14 sm:py-18 lg:px-16 lg:py-24">
        <SeamDivider className="mb-10" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 lg:col-span-5">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9E472A]">
              02 / The Original Project
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Where It Started
            </h2>

            <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                The first version was a static school project built around a predefined restaurant concept. It worked for the assignment, but there wasn’t much of a product journey beyond moving between pages.
              </p>
              <p>
                I didn’t want to erase that version. It represents the work I was able to do at the time, so the original submission is still preserved separately.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="border border-white/[0.08] bg-surface-low px-3.5 py-2 font-mono text-[12px] uppercase tracking-wider text-primary-subtle">
                HTML / CSS / Sass &rarr; React / TypeScript
              </div>
              <a
                href="https://drgyz.github.io/OhMyFood/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-[#A65F78] transition-colors hover:text-[#F4EFE8]"
              >
                <span>Original V1 Site</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <CaseStudyFrame
              direction="up"
              className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 shadow-xl"
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
                <span className="flex items-center gap-1.5 font-semibold text-primary-muted">
                  <span className="h-1.5 w-1.5 bg-primary-subtle" aria-hidden="true" />
                  Preserved V1 Submission // Baseline
                </span>
                <span>Static HTML / Sass (Preserved)</span>
              </div>

              <img
                src={getAssetPath('/case-studies/ohmyfood/v1-original.png')}
                alt="Original OhMyFood V1 OpenClassrooms student submission showing static layout and initial styling"
                width="1440"
                height="900"
                loading="lazy"
                decoding="async"
                className="w-full border border-white/[0.05] object-contain opacity-90 transition-opacity hover:opacity-100"
              />
            </CaseStudyFrame>
          </div>
        </div>
      </section>

      {/* CHAPTER 3 — MORE THAN A REACT MIGRATION */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-14 sm:py-18 lg:px-16 lg:py-24">
        <SeamDivider className="mb-10" />

        <div className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9E472A]">
              03 / Product Architecture
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
              More than a React migration
            </h2>

            {/* Journey Flow Strip */}
            <div className="flex flex-wrap items-center gap-2 py-2 font-mono text-[12px] font-semibold uppercase tracking-wider text-[#A65F78] sm:text-[13px]">
              <span>Discover</span>
              <span className="text-white/30">&rarr;</span>
              <span>Restaurant</span>
              <span className="text-white/30">&rarr;</span>
              <span>Menu selection</span>
              <span className="text-white/30">&rarr;</span>
              <span>Reservation</span>
              <span className="text-white/30">&rarr;</span>
              <span>Confirmation</span>
            </div>

            <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                Once I decided to rebuild it, I didn’t want to stop at replacing HTML and Sass with React components.
              </p>
              <p>
                I connected the experience from discovery to confirmation: restaurant filters live in the URL, menu choices persist while you browse, switching restaurants is handled deliberately, availability behaves asynchronously, and the final booking state carries through to a proper confirmation screen.
              </p>
              <p className="text-primary">
                The restaurant data is illustrative and availability is simulated, but the front-end behaves like one connected product instead of a collection of pages.
              </p>
            </div>

            {/* Compact Technical Strip */}
            <div className="border-t border-white/[0.08] pt-4">
              <p className="font-mono text-[12px] uppercase tracking-wider text-primary-subtle">
                URL-driven filters &bull; useReducer + localStorage &bull; simulated async availability &bull; sessionStorage confirmation &bull; 30 tests
              </p>
            </div>
          </div>

          {/* Featured Proof: Restaurant Selection & Menu Tray */}
          <CaseStudyFrame
            direction="up"
            className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 shadow-2xl"
          >
            <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
              <span className="flex items-center gap-1.5 font-semibold text-[#A65F78]">
                <span className="h-1.5 w-1.5 bg-[#9E472A]" aria-hidden="true" />
                V2 Menu Experience // Selection &amp; Tray
              </span>
              <span>Stateful Order Tray &bull; URL Sync</span>
            </div>

            <img
              src={getAssetPath('/case-studies/ohmyfood/restaurant-selection-desktop.png')}
              alt="OhMyFood V2 restaurant menu view showing dish selection, dietary indicators, real-time total, and active reservation tray"
              width="1440"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full border border-white/[0.05] object-contain shadow-2xl"
            />
          </CaseStudyFrame>
        </div>
      </section>

      {/* CHAPTER 4 — IT WORKED. IT STILL LOOKED OLD. */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-14 sm:py-18 lg:px-16 lg:py-24">
        <SeamDivider className="mb-10" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 lg:col-span-5">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9E472A]">
              04 / Visual Realization
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
              It worked.
              <br />
              <span className="font-editorial font-normal italic tracking-[-0.02em] text-[#A65F78]">
                It still looked old.
              </span>
            </h2>

            <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                Once the V2 flow was working, I thought the project was almost finished.
              </p>
              <p>
                Then I looked at it properly.
              </p>
              <p>
                It was cleaner and much more capable than V1, but visually it still felt like an upgraded school project: too many boxes, thin borders, small labels and not enough personality.
              </p>
              <p>
                So I went back again, this time focusing almost entirely on art direction, typography, photography, interaction and motion.
              </p>
              <p>
                The final direction became much more editorial: warm parchment surfaces, deep wine contrast, larger typography, stronger photography and motion that supports interaction instead of decorating it.
              </p>
              <p className="font-mono text-[13px] text-primary-subtle">
                I kept keyboard navigation, route focus, reduced motion, form errors and responsive behavior in the same design pass.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <CaseStudyFrame
              direction="up"
              className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 shadow-2xl"
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
                <span className="flex items-center gap-1.5 font-semibold text-[#A65F78]">
                  <span className="h-1.5 w-1.5 bg-[#9E472A]" aria-hidden="true" />
                  Editorial Reservation Flow // Guided Availability
                </span>
                <span>Parchment Surface &bull; Form Validation</span>
              </div>

              <img
                src={getAssetPath('/case-studies/ohmyfood/reservation-desktop.png')}
                alt="OhMyFood V2 guided reservation page showing guest count, date selection, time slot availability, and booking summary"
                width="1440"
                height="900"
                loading="lazy"
                decoding="async"
                className="w-full border border-white/[0.05] object-contain shadow-2xl"
              />
            </CaseStudyFrame>
          </div>
        </div>
      </section>

      {/* CHAPTER 5 — WHAT ACTUALLY CHANGED */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-14 sm:py-18 lg:px-16 lg:py-24">
        <SeamDivider className="mb-10" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 lg:col-span-5">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#9E472A]">
              05 / Reflection
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
              What actually changed
            </h2>

            <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                The biggest difference between the original project and V2 isn’t React.
              </p>
              <p>
                In the first version, I was mostly thinking about implementing screens correctly.
              </p>
              <p>
                This time I was thinking about the whole experience: what belongs in the URL, what should persist, where focus goes after an interaction, what happens on a small screen, how motion gives feedback, and whether the interface actually has a point of view.
              </p>
              <p className="font-semibold text-primary">
                That change in how I think about front-end work is the part of V2 I care about most.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <CaseStudyFrame
              direction="up"
              className="relative overflow-hidden border border-white/[0.08] bg-surface p-2 sm:p-4 shadow-2xl"
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.06] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-subtle">
                <span className="flex items-center gap-1.5 font-semibold text-[#A65F78]">
                  <span className="h-1.5 w-1.5 bg-[#9E472A]" aria-hidden="true" />
                  Reservation Confirmation // Verifiable Record
                </span>
                <span>Booking Reference &bull; Print &bull; Summary</span>
              </div>

              <img
                src={getAssetPath('/case-studies/ohmyfood/confirmation-desktop.png')}
                alt="OhMyFood V2 booking confirmation page with booking reference code, date and time details, guest count, and selected menu items"
                width="1440"
                height="900"
                loading="lazy"
                decoding="async"
                className="w-full border border-white/[0.05] object-contain shadow-2xl"
              />
            </CaseStudyFrame>
          </div>
        </div>
      </section>

      {/* CLOSING ACTIONS */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-20">
        <SeamDivider className="mb-8" />

        <div className="border border-white/[0.08] bg-surface p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-[#421930] bg-[#421930]/60 font-display text-xl font-bold text-[#A65F78]">
                O
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary sm:text-2xl">
                  OhMyFood V2
                </h3>
                <p className="font-sans text-[13.5px] text-primary-muted sm:text-sm">
                  An OpenClassrooms coursework project rebuilt into a stateful dining experience.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 font-mono text-[13px]">
              <a
                href="https://github.com/DRGYZ/OhMyFood/tree/ohmyfood-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#421930] bg-[#421930] px-5 py-3 font-bold uppercase tracking-wider text-[#F4EFE8] transition-colors hover:border-[#6b284e] hover:bg-[#57203f]"
              >
                GitHub ↗
              </a>
              <a
                href="https://drgyz.github.io/OhMyFood/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 bg-background px-5 py-3 uppercase tracking-wider text-primary transition-colors hover:border-white/40"
              >
                Original V1 ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
