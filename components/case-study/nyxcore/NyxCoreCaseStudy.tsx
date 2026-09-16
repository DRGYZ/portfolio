"use client";

import { useState } from "react";
import Link from "next/link";
import { getAssetPath } from "@/lib/assetPath";
import { SeamDivider } from "../SeamDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const workflowSteps = [
  {
    step: "01",
    name: "SCAN",
    subtitle: "Look through the local collection",
    detail: "Read files and metadata from the selected library.",
    findingLabel: "Source",
    findingText: "Target directory indexing",
    evidenceLabel: "Context",
    evidenceText: "Audio containers, ID3/Vorbis tags, bitrates",
    actionLabel: "Output",
    actionText: "Populates uncommitted analysis cache",
  },
  {
    step: "02",
    name: "DETECT",
    subtitle: "Turn problems into findings",
    detail: "Duplicates, missing information, suspicious values, and health issues become reviewable items.",
    findingLabel: "Finding",
    findingText: "Potential duplicate: 2 tracks with matching audio tags",
    evidenceLabel: "Evidence",
    evidenceText: "Exact duration match, similar bitrate, differing paths",
    actionLabel: "Next",
    actionText: "Surfaces into Review Inbox queue",
  },
  {
    step: "03",
    name: "REVIEW",
    subtitle: "See the evidence",
    detail: "Inspect the finding, affected tracks, paths, and relevant context.",
    findingLabel: "Finding",
    findingText: "Track comparison side-by-side",
    evidenceLabel: "Evidence",
    evidenceText: "FLAC 24-bit 96kHz vs MP3 320kbps in Archives",
    actionLabel: "Decision",
    actionText: "Clear view of quality, path, and tag discrepancies",
  },
  {
    step: "04",
    name: "DECIDE",
    subtitle: "Choose what should happen",
    detail: "Ignore it, postpone it, or generate an action.",
    findingLabel: "Finding",
    findingText: "Selected duplicate resolution",
    evidenceLabel: "Evidence",
    evidenceText: "Keep higher-fidelity FLAC, relocate redundant MP3",
    actionLabel: "Action",
    actionText: "Stage action plan without mutating filesystem yet",
  },
  {
    step: "05",
    name: "APPLY",
    subtitle: "Run only the selected operation",
    detail: "No background cleanup mode deciding everything on the user’s behalf.",
    findingLabel: "Execution",
    findingText: "Action plan execution modal",
    evidenceLabel: "Safety",
    evidenceText: "Non-destructive quarantine move with safety verification",
    actionLabel: "Commit",
    actionText: "Atomic batch commit with journal record",
  },
  {
    step: "06",
    name: "HISTORY",
    subtitle: "Keep the result visible",
    detail: "Applied operations remain inspectable afterward.",
    findingLabel: "Log",
    findingText: "Batch #08 applied at 14:32",
    evidenceLabel: "Audit",
    evidenceText: "1 file quarantined, destination hash verified",
    actionLabel: "Reversal",
    actionText: "One-click safe reversal available if file untouched",
  },
];

export function NyxCoreCaseStudy() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const prefersReduced = useReducedMotion();
  const activeStep = workflowSteps[activeStepIndex];

  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-[#c4b5fd]/30 selection:text-primary">
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ========================================================================= */}
      {/* ACT 1: HERO */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-28 sm:pt-36 lg:px-16 lg:pb-24">
        <div className="space-y-8 lg:space-y-10">
          {/* Metadata line */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd] sm:text-[13px]">
              EXPERIMENTAL • LOCAL-FIRST • v0.3.0 • 2026
            </span>
            <span className="border border-[#c4b5fd]/30 bg-[#c4b5fd]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#c4b5fd] sm:text-[11px]">
              Public Release
            </span>
          </div>

          {/* Primary Heading & Editorial Statement */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-primary">
              NYXCORE
            </h1>
            <p className="font-editorial text-2xl italic tracking-[-0.02em] text-[#c4b5fd] sm:text-3xl lg:text-4xl">
              A local toolkit for cleaning, understanding, and curating a music library.
            </p>
          </div>

          {/* Body Copy */}
          <div className="grid gap-6 max-w-4xl font-sans text-[16px] leading-relaxed text-primary-muted sm:text-[18px]">
            <p>
              NyxCore started from a very ordinary problem: a music collection that had slowly accumulated duplicate files, inconsistent metadata, and useful information that was doing almost nothing.
            </p>
            <p className="text-primary-subtle text-[15px] sm:text-[17px]">
              The current release brings those maintenance problems into one local review workflow. The longer-term idea is broader: use the information inside the collection to help repair it, understand it, and create better ways to navigate it.
            </p>
          </div>

          {/* CTAs & Metadata Bar */}
          <div className="flex flex-col gap-8 border-t border-white/[0.08] pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4 font-mono text-[12px] sm:text-[13px]">
              <a
                href="https://github.com/DRGYZ/nyxcore-ai-audio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border border-[#c4b5fd] bg-[#c4b5fd] px-6 py-3.5 font-bold uppercase tracking-wider text-background transition-all hover:bg-[#d8ceff] hover:border-[#d8ceff]"
              >
                <span>View source</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a
                href="https://github.com/DRGYZ/nyxcore-ai-audio/releases/tag/v0.3.0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 bg-surface px-6 py-3.5 uppercase tracking-wider text-primary transition-colors hover:border-white/40 hover:text-white"
              >
                <span>v0.3.0 release</span>
                <span>↗</span>
              </a>
            </div>

            {/* Metadata Definition List */}
            <dl className="grid grid-cols-2 gap-4 font-mono text-[12px] sm:grid-cols-4 sm:text-[13px]">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle sm:text-[11px]">Role</dt>
                <dd className="mt-1 font-semibold text-primary">Product • Front-end • Engineering</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle sm:text-[11px]">Stack</dt>
                <dd className="mt-1 font-semibold text-primary">React • TypeScript • FastAPI • Python</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle sm:text-[11px]">Model</dt>
                <dd className="mt-1 font-semibold text-primary">Local-first</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle sm:text-[11px]">Status</dt>
                <dd className="mt-1 font-semibold text-[#c4b5fd]">Experimental • v0.3.0</dd>
              </div>
            </dl>
          </div>

          {/* Hero Screenshot — Large, visually prominent presentation */}
          <div className="pt-4 sm:pt-6">
            <div className="group relative border border-white/[0.09] bg-[#111218] p-2 sm:p-4 transition-colors hover:border-[#c4b5fd]/30">
              <div className="mb-3 flex items-center justify-between border-b border-white/[0.06] pb-3 px-2 font-mono text-[11px] text-primary-subtle">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#c4b5fd]" />
                  <span className="uppercase tracking-widest text-[#c4b5fd]">Primary Workspace</span>
                  <span className="text-white/20">•</span>
                  <span>Review Inbox</span>
                </div>
                <span className="hidden sm:inline uppercase tracking-widest text-primary-subtle">1440 × 900</span>
              </div>
              <img
                src={getAssetPath("/case-studies/nyxcore/02_review_inbox_selected_1440.png")}
                alt="NyxCore Review Inbox workspace showing duplicate candidate side-by-side inspection"
                width={1440}
                height={900}
                className="w-full h-auto object-cover border border-white/[0.04]"
                loading="eager"
              />
            </div>
            <p className="mt-3 font-mono text-[12px] text-primary-subtle">
              Review Inbox — findings stay inspectable before they become actions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 01 — THE IDEA */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="01 / THE IDEA" className="mb-10" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left: Narrative */}
          <div className="space-y-6 lg:col-span-6">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
              01 / The Idea
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl leading-[1.02]">
              My library already contained useful information. It just wasn’t doing much with it.
            </h2>

            <div className="space-y-4 font-sans text-[16px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                NyxCore began as an experiment around three problems I kept running into with local music files.
              </p>
              <p>
                Metadata could be incomplete or inconsistent. Duplicate tracks accumulated over time. And information such as tempo could potentially make the collection much more useful than a folder tree and a search box.
              </p>
              <p>
                The first idea was simple: build something that could help clean metadata, detect duplicates, and eventually create playlists from properties such as BPM.
              </p>
            </div>

            {/* Highlighted Editorial Statement */}
            <div className="border-l-2 border-[#c4b5fd] bg-[#c4b5fd]/[0.04] p-6">
              <p className="font-editorial text-xl italic leading-snug text-primary sm:text-2xl">
                The bigger idea became less about “cleaning files” and more about understanding the collection well enough to help curate it.
              </p>
            </div>

            <p className="font-sans text-[15px] leading-relaxed text-primary-subtle sm:text-[16px]">
              That broader direction is still in progress. v0.3.0 focuses on the foundation: finding problems, reviewing them clearly, and making controlled changes without turning automation loose on the library.
            </p>
          </div>

          {/* Right: Restrained 3-Stage Editorial Concept */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="space-y-4 border border-white/[0.08] bg-surface p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-subtle">
                  Curatorial Evolution
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#c4b5fd]">
                  3 Architectural Phases
                </span>
              </div>

              {/* Stage 1: CLEAN (Strongest emphasis) */}
              <div className="relative border border-[#c4b5fd]/50 bg-[#c4b5fd]/[0.07] p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
                    <span className="h-2 w-2 bg-[#c4b5fd]" />
                    CLEAN
                  </span>
                  <span className="border border-[#c4b5fd]/40 bg-[#c4b5fd]/20 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#d8ceff]">
                    v0.3.0 • Shipped
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                  Metadata • Duplicates
                </h3>
                <p className="mt-2 font-sans text-[14px] text-primary-muted leading-relaxed">
                  Establish an inspectable review inbox. Surface exact and likely duplicates, diagnose tag health anomalies, and execute controlled quarantine actions with full history.
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center py-1 text-[#c4b5fd]/40 font-mono text-xs">
                ↓
              </div>

              {/* Stage 2: UNDERSTAND (Medium emphasis / quieter) */}
              <div className="relative border border-white/[0.12] bg-[#111218]/80 p-6 opacity-75 transition-opacity hover:opacity-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary-muted">
                    <span className="h-2 w-2 border border-white/40" />
                    UNDERSTAND
                  </span>
                  <span className="border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                    Next Horizon
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-primary-muted">
                  Tempo • Track Characteristics
                </h3>
                <p className="mt-2 font-sans text-[14px] text-primary-subtle leading-relaxed">
                  Move beyond surface tags toward musical attributes: tempo (BPM), key, and acoustic profile. Move from spotting gaps to suggesting high-confidence metadata repair.
                </p>
              </div>

              {/* Connector */}
              <div className="flex items-center justify-center py-1 text-white/20 font-mono text-xs">
                ↓
              </div>

              {/* Stage 3: CURATE (Quietest / future-facing) */}
              <div className="relative border border-white/[0.07] bg-[#0c0d10] p-6 opacity-50 transition-opacity hover:opacity-85">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-primary-subtle">
                    <span className="h-2 w-2 border border-white/20" />
                    CURATE
                  </span>
                  <span className="border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                    Direction
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-primary-subtle">
                  Playlists • Collections
                </h3>
                <p className="mt-2 font-sans text-[14px] text-primary-subtle leading-relaxed">
                  Create fluid musical collections based on energy curves and acoustic relationships, turning static directories into an expressive, interactive archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — TODAY */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="02 / TODAY" className="mb-10" />

        <div className="space-y-6 max-w-4xl mb-16">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            02 / Today
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            What NyxCore can do now
          </h2>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            The current release turns library maintenance into one connected workflow instead of a collection of unrelated scripts.
          </p>
        </div>

        {/* Editorial Composition: Alternating Visual Rhythm */}
        <div className="space-y-20 lg:space-y-28">
          {/* Surface 1: Duplicates (Large visual + story) */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-2 border border-[#c4b5fd]/30 bg-[#c4b5fd]/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#c4b5fd]">
                Core Surface • 01
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary sm:text-3xl">
                Duplicates
              </h3>
              <p className="font-editorial text-xl italic text-[#c4b5fd]/90">
                Separates exact copies from likely matches.
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted sm:text-[16px]">
                Instead of treating every similarity as certainty, NyxCore isolates exact bit-for-bit or tag duplicates from fuzzy, likely matches. The comparison remains fully visible before any file is touched.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-white/[0.08] bg-[#111218] p-2 sm:p-3">
                <img
                  src={getAssetPath("/case-studies/nyxcore/03_duplicates_1440.png")}
                  alt="NyxCore Duplicates screen showing side by side track comparison"
                  width={1440}
                  height={900}
                  className="w-full h-auto object-cover border border-white/[0.04]"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 font-mono text-[11px] text-primary-subtle">
                Duplicates — comparison remains visible across bitrates, file formats, and paths.
              </p>
            </div>
          </div>

          {/* Surface 2: Library Health (Large visual + story, reversed) */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="border border-white/[0.08] bg-[#111218] p-2 sm:p-3">
                <img
                  src={getAssetPath("/case-studies/nyxcore/04_library_health_1440.png")}
                  alt="NyxCore Library Health screen with tag breakdown, suspicious values, and artwork gaps"
                  width={1440}
                  height={900}
                  className="w-full h-auto object-cover border border-white/[0.04]"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 font-mono text-[11px] text-primary-subtle">
                Library Health — diagnostic overview of metadata anomalies across the collection.
              </p>
            </div>

            <div className="order-1 lg:order-2 space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-2 border border-[#c4b5fd]/30 bg-[#c4b5fd]/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#c4b5fd]">
                Core Surface • 02
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary sm:text-3xl">
                Library Health
              </h3>
              <p className="font-editorial text-xl italic text-[#c4b5fd]/90">
                Surfaces missing metadata and suspicious values.
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted sm:text-[16px]">
                A collection-wide audit identifies missing tags, suspicious values, artwork gaps, and encoding anomalies without altering the underlying audio files.
              </p>
            </div>
          </div>

          {/* Surface 3 & 4: Archive Search & History (Side by side composition) */}
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Archive Search (Smaller supporting visual) */}
            <div className="space-y-4 lg:col-span-6 border border-white/[0.08] bg-surface p-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#c4b5fd]">
                  Core Surface • 03
                </span>
                <span className="font-mono text-[11px] text-primary-subtle">Read-only</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                Archive Search
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
                Searches filenames, metadata, genres, and folder paths without changing the underlying library. Fast multi-field query matching enables rapid discovery.
              </p>
              <div className="border border-white/[0.06] bg-[#0d0e0f] p-2">
                <img
                  src={getAssetPath("/case-studies/nyxcore/06_archive_search_1440.png")}
                  alt="NyxCore Archive Search screen querying track tags and file paths"
                  width={1440}
                  height={900}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* History (Audit and reversal) */}
            <div className="space-y-4 lg:col-span-6 border border-white/[0.08] bg-surface p-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#c4b5fd]">
                  Core Surface • 04
                </span>
                <span className="font-mono text-[11px] text-primary-subtle">Audit Trail</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-primary">
                History
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
                Keeps applied operations visible afterward, including the actions that can still be safely reversed. The journal preserves operation parameters and target verification.
              </p>
              <div className="border border-white/[0.06] bg-[#0d0e0f] p-2">
                <img
                  src={getAssetPath("/case-studies/nyxcore/05_history_1440.png")}
                  alt="NyxCore History screen showing applied batches and reversal state"
                  width={1440}
                  height={900}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — THE EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="03 / FROM LIBRARY TO DECISION" className="mb-10" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-12">
          <div className="space-y-6 lg:col-span-7">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
              03 / From Library to Decision
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl leading-[1.02]">
              The useful part isn’t detecting a problem. It’s knowing what to do next.
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                I didn’t want NyxCore to behave like a one-click cleanup utility that disappears into a folder and returns with a suspiciously cheerful “47 issues fixed.”
              </p>
              <p className="text-primary-subtle">
                The interface turns analysis into a sequence of understandable decisions. Every finding exposes the raw evidence before generating an action plan.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <div className="border border-[#c4b5fd]/30 bg-[#c4b5fd]/[0.05] p-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c4b5fd]">
                Core Interaction Pattern
              </span>
              <p className="mt-2 font-editorial text-lg italic text-primary sm:text-xl">
                “Finding → Evidence → Action” keeps agency in human hands rather than hidden in background scripts.
              </p>
            </div>
          </div>
        </div>

        {/* The 6-Step Visual Workflow */}
        <div className="border border-white/[0.08] bg-surface p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#c4b5fd]">
              Decision Pipeline • 6 Progressive Stages
            </span>
            <span className="font-mono text-[11px] text-primary-subtle">
              Click any stage to inspect context
            </span>
          </div>

          {/* Workflow Stage Buttons */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {workflowSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.name}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative text-left p-4 transition-all ${
                    isActive
                      ? "border border-[#c4b5fd] bg-[#c4b5fd]/15 text-primary shadow-sm"
                      : "border border-white/[0.08] bg-[#111218] text-primary-muted hover:border-white/20 hover:text-primary"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[11px] font-bold ${isActive ? "text-[#c4b5fd]" : "text-primary-subtle"}`}>
                      {step.step}
                    </span>
                    {isActive && <span className="h-1.5 w-1.5 bg-[#c4b5fd]" />}
                  </div>
                  <div className="font-display text-base font-bold uppercase tracking-wider">
                    {step.name}
                  </div>
                  <div className="mt-1 text-[12px] font-sans line-clamp-2 text-primary-subtle">
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage Detail Panel & Finding/Evidence/Action Breakdown */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center border-t border-white/[0.08] pt-8">
            <div className="space-y-6 lg:col-span-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c4b5fd]">
                  Stage {activeStep.step} • {activeStep.name}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold uppercase text-primary">
                  {activeStep.subtitle}
                </h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-primary-muted">
                  {activeStep.detail}
                </p>
              </div>

              {/* 3-Pillar Annotation: Finding / Evidence / Action */}
              <div className="space-y-3 font-mono text-[12px]">
                <div className="border-l-2 border-[#c4b5fd] bg-[#111218] px-3.5 py-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#c4b5fd] block">
                    {activeStep.findingLabel}
                  </span>
                  <span className="text-primary mt-0.5 block">{activeStep.findingText}</span>
                </div>
                <div className="border-l-2 border-white/30 bg-[#111218] px-3.5 py-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-primary-subtle block">
                    {activeStep.evidenceLabel}
                  </span>
                  <span className="text-primary-muted mt-0.5 block">{activeStep.evidenceText}</span>
                </div>
                <div className="border-l-2 border-accent/40 bg-[#111218] px-3.5 py-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-accent block">
                    {activeStep.actionLabel}
                  </span>
                  <span className="text-primary-muted mt-0.5 block">{activeStep.actionText}</span>
                </div>
              </div>
            </div>

            {/* Supporting Screenshot Crop (Tablet Review Inbox view) */}
            <div className="lg:col-span-7">
              <div className="border border-white/[0.08] bg-[#0c0d10] p-2 sm:p-3">
                <img
                  src={getAssetPath("/case-studies/nyxcore/09_review_inbox_tablet_768.png")}
                  alt="Review Inbox tablet interface illustrating contextual findings, evidence sidebars, and explicit actions"
                  width={768}
                  height={900}
                  className="w-full h-auto object-cover border border-white/[0.04]"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-primary-subtle">
                <span>Review Inbox — structured decision surface</span>
                <span className="uppercase tracking-wider text-[#c4b5fd]">Tablet 768px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — TRUST */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="04 / BUILT TO BE TRUSTED" className="mb-10" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start mb-12">
          <div className="space-y-6 lg:col-span-6">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
              04 / Built to be Trusted
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl leading-[1.02]">
              Automation should not become permission.
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                NyxCore works directly with local files, so the interface can’t promise control while the implementation behaves recklessly underneath.
              </p>
              <p>
                I kept a few rules consistent between the product experience and the filesystem layer.
              </p>
            </div>

            {/* The 4 Principles */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="border border-white/[0.08] bg-surface p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd] block mb-1">
                  01 • Plan before changing
                </span>
                <p className="font-sans text-[14px] text-primary-muted leading-relaxed">
                  Supported mutations are represented as explicit operations before they run.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd] block mb-1">
                  02 • Quarantine before deletion
                </span>
                <p className="font-sans text-[14px] text-primary-muted leading-relaxed">
                  Duplicate cleanup relocates files instead of immediately destroying them.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd] block mb-1">
                  03 • Record what happened
                </span>
                <p className="font-sans text-[14px] text-primary-muted leading-relaxed">
                  Applied batches remain available in history instead of vanishing behind a success message.
                </p>
              </div>

              <div className="border border-white/[0.08] bg-surface p-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#c4b5fd] block mb-1">
                  04 • Reverse only when safe
                </span>
                <p className="font-sans text-[14px] text-primary-muted leading-relaxed">
                  Supported reversals verify that the underlying file still matches the state NyxCore expects.
                </p>
              </div>
            </div>

            {/* Technical Footer Line */}
            <div className="border-t border-white/[0.08] pt-4">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#c4b5fd]">
                Action plans • no-clobber moves • local journal • fingerprint-checked reversal
              </p>
            </div>
          </div>

          {/* Right: Plan Modal Screenshot */}
          <div className="lg:col-span-6">
            <div className="border border-white/[0.08] bg-[#111218] p-2 sm:p-3">
              <div className="mb-2 flex items-center justify-between border-b border-white/[0.06] pb-2 px-2 font-mono text-[11px] text-primary-subtle">
                <span className="uppercase tracking-widest text-[#c4b5fd]">Action Plan Dialog</span>
                <span>Verification Stage</span>
              </div>
              <img
                src={getAssetPath("/case-studies/nyxcore/08_plan_modal_1440.png")}
                alt="Action plans expose the intended operations before execution"
                width={1440}
                height={900}
                className="w-full h-auto object-cover border border-white/[0.04]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-mono text-[12px] text-primary-subtle">
              Action plans expose the intended operations before execution.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — DIRECTION */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="05 / WHERE IT GOES NEXT" className="mb-10" />

        <div className="space-y-6 max-w-4xl mb-14">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
            05 / Where It Goes Next
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl">
            Clean → Understand → Curate
          </h2>
          <div className="space-y-4 font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px]">
            <p>
              Duplicate detection and metadata diagnostics already exist in plenty of tools. I don’t want NyxCore’s final identity to be “another duplicate remover.”
            </p>
            <p className="text-primary-subtle text-[16px] sm:text-[17px]">
              v0.3.0 establishes the review and cleanup foundation. The next work is about extracting more value from the information already present in the music itself.
            </p>
          </div>
        </div>

        {/* Visually Distinctive 3-Phase Horizon Progression */}
        <div className="relative border border-white/[0.08] bg-surface p-6 sm:p-10">
          {/* Subtle connecting architectural line across columns */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 right-10 top-20 hidden h-px bg-gradient-to-r from-[#c4b5fd]/60 via-white/20 to-white/5 lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Horizon 1: CLEAN (Strongest contrast) */}
            <div className="relative flex flex-col justify-between border border-[#c4b5fd] bg-[#c4b5fd]/[0.08] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#c4b5fd]/30 pb-3">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
                    CLEAN
                  </span>
                  <span className="border border-[#c4b5fd]/40 bg-[#c4b5fd]/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#d8ceff]">
                    NOW • v0.3.0
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                      Duplicate review
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-muted">
                      Exact and likely matches.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                      Metadata health
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-muted">
                      Missing and suspicious information.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary">
                      Controlled changes
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-muted">
                      Review, apply, history, reversal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#c4b5fd]/30 pt-4 font-mono text-[11px] text-[#c4b5fd] leading-relaxed">
                Build a reliable picture of what needs attention before trying to become clever about fixing it.
              </div>
            </div>

            {/* Horizon 2: UNDERSTAND (Medium emphasis) */}
            <div className="relative flex flex-col justify-between border border-white/[0.15] bg-[#111218] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-primary-muted">
                    UNDERSTAND
                  </span>
                  <span className="border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                    NEXT
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary-muted">
                      Metadata repair
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-subtle">
                      Move from simply detecting bad metadata toward suggesting better values using information available around the track and collection.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary-muted">
                      Tempo &amp; audio characteristics
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-subtle">
                      Make properties such as BPM useful inside the library rather than treating them as isolated technical metadata.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary-muted">
                      Better relationships
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-subtle">
                      Start understanding which tracks belong together based on more than filenames or folders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-4 font-mono text-[11px] text-primary-subtle leading-relaxed">
                Future horizon: contextual repair and acoustic properties.
              </div>
            </div>

            {/* Horizon 3: CURATE (Quieter treatment / future direction) */}
            <div className="relative flex flex-col justify-between border border-white/[0.08] bg-[#0c0d10] p-6 sm:p-8 opacity-80 transition-opacity hover:opacity-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-primary-subtle">
                    CURATE
                  </span>
                  <span className="border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                    DIRECTION
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary-subtle">
                      Playlist building
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-subtle">
                      Create collections from musical characteristics such as BPM ranges and eventually richer combinations of track properties.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary-subtle">
                      Library exploration
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-subtle">
                      Give the collection useful views that emerge from the music itself rather than requiring everything to be manually categorized first.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[13px] font-bold uppercase tracking-wider text-primary-subtle">
                      Smarter review
                    </h4>
                    <p className="mt-1 font-sans text-[14px] text-primary-subtle">
                      Improve suggestions while keeping the final decision visible and under the user’s control.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-4 font-mono text-[11px] text-primary-subtle/70 leading-relaxed">
                Future horizon: curation workflows emerging from audio understanding.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — RELEASE */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-24">
        <SeamDivider label="06 / v0.3.0" className="mb-10" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-6">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-[#c4b5fd]">
              06 / v0.3.0
            </span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl lg:text-5xl leading-[1.02]">
              A foundation I can keep building on
            </h2>
            <div className="space-y-4 font-sans text-[16px] leading-relaxed text-primary-muted sm:text-[18px]">
              <p>
                I chose to ship the current stage as an explicit experimental release rather than hide unfinished ideas behind a polished interface.
              </p>
              <p>
                v0.3.0 establishes the local workflow, review experience, responsive interface, testing, and release process I need before pushing further into metadata repair and audio-aware organization.
              </p>
              <p className="text-primary-subtle text-[15px] sm:text-[16px]">
                The project is intentionally still marked experimental. The interesting work now is not adding more cleanup screens. It’s building the Understand and Curate sides without losing the control established in the first release.
              </p>
            </div>

            {/* Release Links */}
            <div className="flex flex-wrap items-center gap-5 pt-2 font-mono text-[12px] sm:text-[13px]">
              <a
                href="https://github.com/DRGYZ/nyxcore-ai-audio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c4b5fd] transition-colors hover:text-white"
              >
                View GitHub ↗
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

          {/* Right: 4 Release Facts Metrics Grid */}
          <div className="lg:col-span-6">
            <div className="border border-white/[0.08] bg-surface p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-b border-r border-white/[0.06] pb-6 pr-6">
                  <div className="font-display text-4xl font-bold text-[#c4b5fd] sm:text-5xl">
                    142
                  </div>
                  <div className="mt-2 font-mono text-[12px] uppercase tracking-wider text-primary-muted">
                    Backend tests
                  </div>
                </div>

                <div className="border-b border-white/[0.06] pb-6 pl-2">
                  <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
                    12
                  </div>
                  <div className="mt-2 font-mono text-[12px] uppercase tracking-wider text-primary-muted">
                    Frontend interaction tests
                  </div>
                </div>

                <div className="border-r border-white/[0.06] pt-6 pr-6">
                  <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
                    6
                  </div>
                  <div className="mt-2 font-mono text-[12px] uppercase tracking-wider text-primary-muted">
                    Core product surfaces
                  </div>
                </div>

                <div className="pt-6 pl-2">
                  <div className="font-display text-3xl font-bold text-[#c4b5fd] sm:text-4xl">
                    v0.3.0
                  </div>
                  <div className="mt-2 font-mono text-[12px] uppercase tracking-wider text-primary-muted">
                    Public experimental release
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-subtle">
                Python 3.11 CI • TypeScript build • desktop / tablet / mobile
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEXT PROJECT & CALM FOOTER */}
      {/* ========================================================================= */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-20">
        <SeamDivider className="mb-8" />

        <div className="border border-white/[0.08] bg-surface p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-[#c4b5fd]/40 bg-[#c4b5fd]/10 font-display text-xl font-bold text-[#c4b5fd]">
                N
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary sm:text-2xl">
                  NyxCore v0.3.0
                </h3>
                <p className="font-sans text-[13.5px] text-primary-muted sm:text-sm">
                  A local foundation for reviewing and curating a music archive.
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
          <span>Yazan Khaled — Front-end Developer &amp; Creative Technologist</span>
          <span>Paris, France • 2026</span>
        </div>
      </section>
    </article>
  );
}
