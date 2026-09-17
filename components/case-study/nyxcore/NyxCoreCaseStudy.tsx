'use client';

import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from '../SeamDivider';

export function NyxCoreCaseStudy() {
  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-[#c4b5fd]/30 selection:text-primary">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ========================================================================= */}
      {/* HERO */}
      {/* ========================================================================= */}
      <header id="hero" className="relative mx-auto w-full max-w-[1500px] px-6 pb-20 pt-28 sm:pt-36 lg:px-16 lg:pb-28">
        <div className="space-y-8 lg:space-y-10">
          {/* Metadata line */}
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#c4b5fd] sm:text-[13px]">
            React · TypeScript · FastAPI · Python · local-first · experimental v0.3.0
          </p>

          {/* Title & Subtitle */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="font-display text-[clamp(3.5rem,10vw,8.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-primary">
              NYXCORE
            </h1>
            <p className="font-editorial text-2xl italic tracking-[-0.02em] text-[#c4b5fd] sm:text-3xl lg:text-4xl">
              A local tool for cleaning and organizing my music library.
            </p>
          </div>

          {/* Hero Body Copy */}
          <div className="max-w-3xl space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            <p>
              I started NyxCore because I wanted one place to deal with the annoying parts of managing a local music library: messy metadata, duplicate tracks, and useful information like BPM that wasn&apos;t really being used.
            </p>
            <p className="text-primary-subtle text-[15px] sm:text-[17px]">
              v0.3.0 is the first usable version. It can scan the library, find duplicates and metadata problems, let me review them, and keep the changes visible. The more interesting part is what I want to build on top of that.
            </p>
          </div>

          {/* Restrained Editorial Links */}
          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-[12px] sm:text-[13px]">
            <a
              href="https://github.com/DRGYZ/nyxcore-ai-audio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.03] px-5 py-2.5 uppercase tracking-wider text-primary transition-colors hover:border-[#c4b5fd] hover:text-[#c4b5fd]"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <a
              href="https://github.com/DRGYZ/nyxcore-ai-audio/releases/tag/v0.3.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-transparent px-2 py-2.5 uppercase tracking-wider text-primary-muted transition-colors hover:text-[#c4b5fd]"
            >
              <span>v0.3.0 Release</span>
              <span>↗</span>
            </a>
          </div>

          {/* Real Review Inbox Screenshot directly, very large */}
          <div className="pt-6 sm:pt-10">
            <figure className="relative overflow-hidden border border-white/[0.08] bg-[#111216]">
              <img
                src={getAssetPath('/case-studies/nyxcore/02_review_inbox_selected_1440.png')}
                alt="NyxCore Review Inbox workspace showing duplicate candidate inspection"
                width={1440}
                height={900}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </figure>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* SECTION 01 — WHY I STARTED IT */}
      {/* ========================================================================= */}
      <section id="why-i-started-it" className="relative mx-auto w-full max-w-[1500px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="01 / WHY I STARTED IT" className="mb-12" />

        <div className="max-w-4xl space-y-6">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            01 / Background
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            WHY I STARTED IT
          </h2>

          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            <p>
              I didn&apos;t start NyxCore because the world needed another duplicate remover.
            </p>
            <p>
              I had a local music library with the same problems coming back: incomplete metadata, duplicate files, and track information like BPM that I wasn&apos;t really using.
            </p>
            <p>
              My original idea was to build one tool that could clean that up, help repair metadata, and eventually use things like BPM to create playlists automatically.
            </p>
            <p className="font-editorial text-xl italic text-[#c4b5fd] sm:text-2xl pt-2">
              The current version solves the cleanup part first.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — WHAT IT DOES RIGHT NOW */}
      {/* ========================================================================= */}
      <section id="what-it-does-right-now" className="relative mx-auto w-full max-w-[1500px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="02 / WHAT IT DOES RIGHT NOW" className="mb-12" />

        <div className="space-y-4 max-w-4xl mb-12 sm:mb-16">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            02 / Current Product
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            WHAT IT DOES RIGHT NOW
          </h2>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            v0.3.0 focuses on finding problems, putting them into one review flow, and letting me decide what actually happens before any file changes.
          </p>
        </div>

        {/* Primary visual: Review Inbox dominates */}
        <div className="space-y-6 mb-16 sm:mb-20">
          <figure className="relative overflow-hidden border border-white/[0.08] bg-[#111216]">
            <img
              src={getAssetPath('/case-studies/nyxcore/02_review_inbox_selected_1440.png')}
              alt="Review Inbox interface"
              width={1440}
              height={900}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </figure>
          <div className="flex flex-col gap-2 border-l-2 border-[#c4b5fd]/50 pl-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-primary sm:text-2xl">
              Review Inbox
            </h3>
            <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-primary-muted sm:text-[17px]">
              Everything starts here. Duplicates and metadata issues end up in one place so I can decide what actually needs attention.
            </p>
          </div>
        </div>

        {/* Supporting surfaces: Duplicates & Library Health only */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Duplicates */}
          <div className="space-y-4 lg:col-span-6">
            <figure className="relative overflow-hidden border border-white/[0.08] bg-[#111216]">
              <img
                src={getAssetPath('/case-studies/nyxcore/03_duplicates_1440.png')}
                alt="Duplicates inspection interface"
                width={1440}
                height={900}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
            <div className="space-y-1.5 pt-1">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-primary sm:text-xl">
                Duplicates
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted sm:text-[16px]">
                Exact copies are separated from likely matches instead of pretending every similarity is certain.
              </p>
            </div>
          </div>

          {/* Library Health */}
          <div className="space-y-4 lg:col-span-6 lg:pt-8">
            <figure className="relative overflow-hidden border border-white/[0.08] bg-[#111216]">
              <img
                src={getAssetPath('/case-studies/nyxcore/04_library_health_1440.png')}
                alt="Library Health diagnostic screen"
                width={1440}
                height={900}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </figure>
            <div className="space-y-1.5 pt-1">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-primary sm:text-xl">
                Library Health
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted sm:text-[16px]">
                Missing metadata, artwork gaps and suspicious values are easier to spot across the whole collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — EXPERIENCE / WORKFLOW */}
      {/* ========================================================================= */}
      <section id="workflow" className="relative mx-auto w-full max-w-[1500px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="03 / WORKFLOW" className="mb-12" />

        <div className="max-w-4xl space-y-6 mb-12">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            03 / Interaction Model
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            NOTHING CHANGES BEFORE I SEE IT
          </h2>
          <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            <p>
              I don&apos;t want NyxCore disappearing into a folder and coming back with &ldquo;47 issues fixed.&rdquo;
            </p>
            <p>
              The workflow is deliberately simple.
            </p>
          </div>
        </div>

        {/* Restrained typographic flow */}
        <div className="my-10 border-y border-white/[0.08] py-8 sm:py-10">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-display text-2xl font-bold uppercase tracking-wider text-primary sm:text-3xl lg:text-4xl">
            <span className="text-white">SCAN</span>
            <span className="font-mono text-[#c4b5fd] text-xl sm:text-2xl">→</span>
            <span className="text-white">REVIEW</span>
            <span className="font-mono text-[#c4b5fd] text-xl sm:text-2xl">→</span>
            <span className="text-white">CHANGE</span>
            <span className="font-mono text-[#c4b5fd] text-xl sm:text-2xl">→</span>
            <span className="text-white">HISTORY</span>
          </div>
          <p className="mt-4 font-sans text-[15px] text-primary-muted sm:text-[17px]">
            Scan the library. See what NyxCore found. Decide what to do. Keep the result visible afterward.
          </p>
        </div>

        {/* One large Review Inbox screenshot */}
        <div className="pt-4">
          <figure className="relative overflow-hidden border border-white/[0.08] bg-[#111216]">
            <img
              src={getAssetPath('/case-studies/nyxcore/09_review_inbox_tablet_768.png')}
              alt="Review Inbox interface demonstrating the simple decision flow"
              width={768}
              height={900}
              className="w-full h-auto object-cover max-h-[720px]"
              loading="eager"
            />
          </figure>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — WHY I WAS CAREFUL WITH CHANGES */}
      {/* ========================================================================= */}
      <section id="careful-with-changes" className="relative mx-auto w-full max-w-[1500px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="04 / WHY I WAS CAREFUL WITH CHANGES" className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
              04 / Safe Changes
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-3xl lg:text-4xl leading-[1.08]">
              WHY I WAS CAREFUL WITH CHANGES
            </h2>
            <p className="font-sans text-[16px] leading-relaxed text-primary-muted sm:text-[18px]">
              Because NyxCore works with real files, I didn&apos;t want &ldquo;cleanup&rdquo; to mean deleting things immediately. Changes are planned first, duplicate files go to quarantine instead of being destroyed, and supported actions can be reversed when the file state still matches.
            </p>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#c4b5fd] pt-2">
              action plans · quarantine · history · guarded reversal
            </p>
          </div>

          <div className="lg:col-span-7">
            <figure className="relative overflow-hidden border border-white/[0.08] bg-[#111216] aspect-[16/11] sm:aspect-[16/10] flex items-center justify-center">
              <img
                src={getAssetPath('/case-studies/nyxcore/08_plan_modal_1440.png')}
                alt="NyxCore Action Plan dialog exposing planned operations before execution"
                width={1440}
                height={900}
                className="w-full h-auto object-cover scale-[1.34] transform origin-center"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — FUTURE DIRECTION */}
      {/* ========================================================================= */}
      <section id="future-direction" className="relative mx-auto w-full max-w-[1500px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="05 / WHAT'S NEXT" className="mb-12" />

        <div className="max-w-4xl space-y-6 mb-14">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            05 / Future Direction
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            THE PART I ACTUALLY WANT TO BUILD NEXT
          </h2>
          <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            <p>
              Removing duplicates isn&apos;t the interesting part. Plenty of tools already do that.
            </p>
            <p>
              What I want NyxCore to become is something that can use more of the information around a track to help repair metadata, organize the library better, and eventually build playlists from BPM and other track properties.
            </p>
          </div>
        </div>

        {/* Editorial progression using typography, rules, and spacing (NOT boxed dashboard cards) */}
        <div className="border-t border-white/[0.08] pt-10">
          <div className="grid gap-10 lg:grid-cols-11 lg:items-start">
            {/* Step 1: NOW */}
            <div className="space-y-4 lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
                  NOW
                </span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                Clean the library
              </h3>
              <ul className="space-y-2 font-sans text-[15px] text-primary-muted">
                <li>Duplicates</li>
                <li>Metadata problems</li>
                <li>Review before changes</li>
              </ul>
            </div>

            {/* Separator Arrow (Desktop) */}
            <div className="hidden lg:flex lg:col-span-1 lg:justify-center lg:pt-8 text-[#c4b5fd]/60 font-mono text-xl">
              →
            </div>

            {/* Step 2: NEXT */}
            <div className="space-y-4 lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-primary-subtle">
                  NEXT
                </span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                Fix metadata better
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
                Use more context from the track and library to suggest useful corrections.
              </p>
            </div>

            {/* Separator Arrow (Desktop) */}
            <div className="hidden lg:flex lg:col-span-1 lg:justify-center lg:pt-8 text-[#c4b5fd]/60 font-mono text-xl">
              →
            </div>

            {/* Step 3: LATER */}
            <div className="space-y-4 lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-primary-subtle">
                  LATER
                </span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                Build playlists
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
                Use BPM and other track information to create useful collections automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — WHAT SHIPPED IN v0.3.0 */}
      {/* ========================================================================= */}
      <section id="release-ending" className="relative mx-auto w-full max-w-[1500px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="06 / WHAT SHIPPED IN v0.3.0" className="mb-12" />

        <div className="max-w-4xl space-y-6 mb-10">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            06 / Status
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            WHAT SHIPPED IN v0.3.0
          </h2>
          <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            <p>
              The current release gives me a stable base to continue from: a usable local workflow, responsive UI, tests, CI, and a public release.
            </p>
            <p className="font-editorial text-xl italic text-[#c4b5fd]">
              It&apos;s still experimental. That&apos;s intentional.
            </p>
          </div>

          <p className="font-mono text-[13px] uppercase tracking-[0.16em] text-primary-subtle pt-2">
            142 backend tests · 12 frontend tests · CI · responsive UI
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 font-mono text-[13px]">
            <a
              href="https://github.com/DRGYZ/nyxcore-ai-audio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4b5fd] transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
            <span className="text-white/20">•</span>
            <a
              href="https://github.com/DRGYZ/nyxcore-ai-audio/releases/tag/v0.3.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-muted transition-colors hover:text-white"
            >
              v0.3.0 Release ↗
            </a>
          </div>
        </div>

        {/* Existing Next-Project Navigation (Cleaned) */}
        <div className="mt-20 border-t border-white/[0.08] pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center border border-[#c4b5fd]/40 bg-[#c4b5fd]/10 font-display text-lg font-bold text-[#c4b5fd]">
                N
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase text-primary sm:text-xl">
                  NyxCore v0.3.0
                </h3>
                <p className="font-sans text-[13px] text-primary-muted">
                  A local tool for cleaning and organizing my music library.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 font-mono text-[12px] sm:text-[13px]">
              <Link
                href="/#work"
                className="border border-white/20 bg-background px-5 py-3 uppercase tracking-wider text-primary transition-colors hover:border-white/40"
              >
                ← Selected Work
              </Link>
              <Link
                href="/work/miko"
                className="border border-[#c4b5fd]/40 bg-[#c4b5fd]/10 px-5 py-3 font-bold uppercase tracking-wider text-[#d8ceff] transition-colors hover:bg-[#c4b5fd]/20"
              >
                Next project → MIKO
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-8 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-subtle sm:flex-row sm:items-center">
          <span>Yazan Khaled — Front-end Developer</span>
          <span>Paris, France • 2026</span>
        </div>
      </section>
    </article>
  );
}
