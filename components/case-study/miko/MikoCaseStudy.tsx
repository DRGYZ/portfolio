'use client';

import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from '../SeamDivider';
import { MikoContextLab } from './MikoContextLab';
import { MikoMoodShowcase } from './MikoMoodShowcase';
import { MikoSensorMatrix } from './MikoSensorMatrix';
import { MikoPersonaStudioShowcase } from './MikoPersonaStudioShowcase';

export function MikoCaseStudy() {
  return (
    <article className="relative min-h-screen bg-background text-primary selection:bg-[#f09acb] selection:text-background">
      {/* Subtle Background Ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#0d0e0f]"
      />

      {/* ACT 1: HERO */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-28 sm:pt-36 lg:px-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Title & Overview */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
                Experimental &bull; Windows &bull; Local-First &bull; 2026
              </span>
              <span className="border border-[#f09acb]/30 bg-[#f09acb]/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-[#ffadd8]">
                Active Prototype
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,8vw,7.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-primary">
              MIKO
            </h1>

            <p className="font-editorial text-2xl italic tracking-[-0.02em] text-[#f09acb] sm:text-3xl lg:text-4xl">
              A desktop companion that responds to context, not just prompts.
            </p>

            <p className="max-w-2xl font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
              MIKO started as an experiment: could a desktop companion feel present without constantly asking for attention? It watches a small set of local context signals and responds through posture, motion, and short reactions.
            </p>

            <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-primary-subtle sm:text-[17px] sm:leading-relaxed">
              This is an early snapshot of the project. MIKO is still in active development while I keep refining its behaviour, interaction model, and Windows integration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-[13px]">
              <a
                href="#context-lab"
                className="group flex items-center gap-2 border border-[#f09acb] bg-[#f09acb] px-6 py-3.5 font-bold uppercase tracking-wider text-background transition-all hover:bg-[#ffadd8] hover:border-[#ffadd8]"
              >
                <span>Try Context Lab</span>
                <span className="transition-transform group-hover:translate-y-0.5">&darr;</span>
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-2 border border-white/20 bg-surface px-6 py-3.5 uppercase tracking-wider text-primary transition-colors hover:border-white/40 hover:text-white"
              >
                <span>Local by Design</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Metadata Definition List */}
            <dl className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 font-mono text-[13px] sm:grid-cols-4">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Role</dt>
                <dd className="mt-1 font-semibold text-primary">Concept &bull; Interaction &bull; Engineering</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Platform</dt>
                <dd className="mt-1 font-semibold text-primary">Windows</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Runtime</dt>
                <dd className="mt-1 font-semibold text-primary">WPF + Python Sidecar</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-primary-subtle">Status</dt>
                <dd className="mt-1 font-semibold text-[#f09acb]">Active Prototype</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="relative border border-white/[0.08] bg-surface p-6 lg:col-span-5 sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary-subtle">
                <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                <span>Persona Studio &bull; Context Snapshot</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#ffadd8]">
                127.0.0.1:50558
              </span>
            </div>

            <div className="relative my-6 flex flex-col items-center justify-center border border-white/[0.06] bg-[#0c0d10] p-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#f09acb]/[0.03] opacity-60"
              />
              <img
                src={getAssetPath('/case-studies/miko/frames/coding/02.png')}
                alt="MIKO companion in focused code review posture"
                width={192}
                height={208}
                className="relative z-10 h-36 w-auto object-contain [image-rendering:pixelated]"
              />
              <div className="relative z-10 mt-3 border border-[#f09acb]/40 bg-background/90 px-3 py-1 text-center font-mono text-[13px] font-semibold text-primary">
                &ldquo;checking the logic&rdquo;
              </div>
            </div>

            <div className="space-y-2.5 border-t border-white/[0.06] pt-4 font-mono text-[13px] text-primary-muted">
              <div className="flex justify-between">
                <span className="text-primary-subtle">Primary Hook:</span>
                <span className="font-semibold text-primary">Foreground Window Process</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-subtle">Audio State:</span>
                <span className="text-accent">Qualitative Active / Silent Detection</span>
              </div>
              <div className="flex justify-between">
                <span className="text-primary-subtle">Interruption Mode:</span>
                <span className="text-[#f09acb]">Normal &bull; Cooldown Guarded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 01: THE IDEA */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              01 / The Idea
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Designing for the Periphery
            </h2>
            <p className="font-editorial text-xl italic leading-snug text-primary-muted sm:text-2xl">
              I didn’t want MIKO to become another app I had to stop and talk to. She should be there when useful, and easy to ignore when she isn’t.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="border border-[#f09acb]/30 bg-[#f09acb]/[0.05] px-6 py-5 sm:px-8 sm:py-6">
              <p className="font-display text-xl font-semibold uppercase tracking-tight text-primary sm:text-2xl">
                A companion should fit into your workflow, not fight for your attention.
              </p>
              <span className="mt-3 block font-mono text-[11px] uppercase tracking-widest text-[#f09acb]">
                Core Design Principle
              </span>
            </div>

            <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
              Most assistants expect you to open a chat and ask for something. MIKO works differently: she stays on the desktop, watches a small amount of local context, and reacts through animation, mood changes, or short comments. The goal was simple: make her feel present without making her another interruption.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 02: PERSONALITY AS INTERFACE */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            02 / Personality as Interface
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            A Companion Has Moods
          </h2>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
            MIKO’s personality comes through in how she moves. Different desktop contexts switch her into different poses, reactions, and short lines instead of leaving the sprite as decoration.
          </p>
        </div>

        <MikoMoodShowcase />
      </section>

      {/* CHAPTER 03: LOCAL SENSORS */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            03 / From Context to Reaction
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Local Context, Real Reactions
          </h2>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
            MIKO watches a small set of local signals: what app is in front, whether media is playing, what kind of browser context is active, and whether I’ve gone idle. Those signals are weighed against each other before she decides whether to react at all.
          </p>
        </div>

        <MikoSensorMatrix />
      </section>

      {/* CHAPTER 04: CONTEXT LAB */}
      <section id="context-lab" className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            04 / Context Lab
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Context Lab
          </h2>
          <p className="font-editorial text-xl italic text-primary-muted sm:text-2xl">
            Try the same desktop context under different reaction rules and see when MIKO responds, stays quiet, or changes posture.
          </p>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
            MIKO reads a few local signals: the active app, media and audio state, and how long I’ve been idle. When several signals overlap, priority and cooldown rules decide which one matters before she reacts.
          </p>
        </div>

        {/* Interactive Simulation */}
        <MikoContextLab />
      </section>

      {/* CHAPTER 05: ARCHITECTURE & PRIVACY */}
      <section id="architecture" className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            05 / Architecture &amp; Privacy
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Designed for Your Machine
          </h2>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
            MIKO was built to keep context close to the machine. Desktop sensing, preferences, memory, and communication between the app and sidecar happen locally by default.
          </p>
        </div>

        {/* Three Core Pillars */}
        <div className="grid gap-6 sm:grid-cols-3 font-mono">
          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#f09acb]">
              01 / Local-First Core
            </span>
            <h3 className="font-sans text-[17px] font-bold text-primary">
              127.0.0.1 Loopback
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
              The WPF client and Python sidecar talk over 127.0.0.1, so their communication stays on the machine. MIKO doesn’t need a remote service for its core desktop behavior.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              02 / Local Context
            </span>
            <h3 className="font-sans text-[17px] font-bold text-primary">
              Strict Privacy Boundaries
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
              MIKO reads window titles and media metadata just long enough to understand the current context. She doesn’t read keystrokes, clipboard contents, or source files.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#ffadd8]">
              03 / User-Configured Endpoints
            </span>
            <h3 className="font-sans text-[17px] font-bold text-primary">
              Optional AI Integrations
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
              MIKO doesn’t depend on a hosted LLM. If I enable model-backed features, I choose the OpenAI-compatible endpoint, including local options such as LM Studio.
            </p>
          </div>
        </div>

        {/* Focused Persona Studio Showcase Frame */}
        <div className="mt-10">
          <MikoPersonaStudioShowcase />
        </div>
      </section>

      {/* CHAPTER 06: PROTOTYPE STATUS */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              06 / Prototype Status
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Where MIKO Is Today
            </h2>
            <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-lg sm:leading-relaxed">
              MIKO is still experimental. The Windows 11 runtime works today, but packaging, multi-monitor behavior, interaction timing, and parts of the app/sidecar architecture are still being worked on.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 font-mono text-[13.5px]">
            <div className="border border-white/[0.08] bg-surface p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                <span className="font-mono text-[13px] font-bold uppercase tracking-wider text-[#f09acb]">
                  What Works Today
                </span>
              </div>
              <ul className="space-y-3 text-primary-muted leading-relaxed">
                <li>&bull; Windows desktop companion runtime</li>
                <li>&bull; Context awareness + reaction rules</li>
                <li>&bull; Custom mood animations</li>
                <li>&bull; Editable local memory + Persona Studio</li>
                <li>&bull; Quiet and Focus modes</li>
                <li>&bull; Local voice + optional user-configured model endpoint</li>
              </ul>
            </div>

            <div className="border border-white/[0.08] bg-surface p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-[13px] font-bold uppercase tracking-wider text-accent">
                  Still Exploring
                </span>
              </div>
              <ul className="space-y-3 text-primary-muted leading-relaxed">
                <li>&bull; Standalone packaging + easier installation</li>
                <li>&bull; Multi-monitor and high-DPI edge cases</li>
                <li>&bull; Simplifying the app / sidecar split</li>
                <li>&bull; Interaction timing, voice quality, and response tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-16 lg:px-16 lg:py-20">
        <SeamDivider className="mb-8" />

        <div className="border border-white/[0.08] bg-surface p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-[#f09acb]/40 bg-[#f09acb]/10">
                <span className="font-display text-xl font-bold text-[#f09acb]">M</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-primary sm:text-2xl">
                  Context-aware. Locally yours.
                </h3>
                <p className="font-sans text-[13.5px] text-primary-muted sm:text-sm">
                  An ongoing exploration into calm, peripheral desktop computing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-[13px] sm:text-sm">
              <Link
                href="/#work"
                className="border border-white/20 bg-background px-5 py-3 uppercase tracking-wider text-primary transition-colors hover:border-white/40"
              >
                &larr; Selected Work
              </Link>
              <Link
                href="/work/nyxboard"
                className="border border-[#f09acb]/40 bg-[#f09acb]/10 px-5 py-3 uppercase tracking-wider text-[#ffadd8] transition-colors hover:bg-[#f09acb]/20"
              >
                Nyxboard &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
