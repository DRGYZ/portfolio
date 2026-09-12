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
              MIKO explores a quieter kind of computing: a local-first character that notices the rhythm of a Windows workspace and responds through posture, motion, and short reactions.
            </p>

            <p className="max-w-2xl font-sans text-[15px] leading-relaxed text-primary-subtle sm:text-[17px] sm:leading-relaxed">
              This case study captures an early working prototype. MIKO is still in active development as its behaviour, interaction model, and desktop integration continue to evolve.
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
              Traditional assistants wait for prompts. MIKO remains quietly present, reacting only when the moment calls for it.
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
              Most digital assistants pull interaction into the foreground through chat windows, prompts, or voice responses. MIKO stays at the edge of the workspace as an ambient desktop presence. Rather than demanding conversational turns, she reflects the rhythm of your work through subtle posture changes, occasional idle animations, and brief reactions designed to preserve cognitive flow.
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
            MIKO&apos;s personality is expressed through custom pixel animation. Each posture responds to desktop context rather than acting as a generic avatar skin.
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
            MIKO combines lightweight desktop, media, browser, and activity signals into a local context model. Competing signals are resolved through priority and cooldown rules before a mood or reaction is selected.
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
            Explore how the same desktop context changes under different interruption policies.
          </p>
          <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-[19px] sm:leading-relaxed">
            MIKO evaluates operating system signals locally: active foreground window process, media playback state, audio activity, and user idle ticks. When multiple events coincide, priority arbitration resolves conflicts before a reaction is triggered.
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
            No built-in remote telemetry. Context evaluation, preference memory, and sidecar communication run strictly on your workstation.
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
              The local WPF client and Python sidecar communicate over local loopback sockets. There is zero remote telemetry or background tracking.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
              02 / Transient In-Memory Hooks
            </span>
            <h3 className="font-sans text-[17px] font-bold text-primary">
              Strict Privacy Boundaries
            </h3>
            <p className="font-sans text-[15px] leading-relaxed text-primary-muted">
              Window titles and media metadata are read transiently in memory to infer context. Keystrokes, clipboard contents, and source files are never captured.
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
              MIKO does not depend on an external hosted LLM. Optional model-backed features use a user-configured OpenAI-compatible endpoint, such as LM Studio.
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
              Current Capabilities &amp; Evolution
            </h2>
            <p className="font-sans text-[17px] leading-relaxed text-primary-muted sm:text-lg sm:leading-relaxed">
              MIKO is an active experimental project. The runtime operates on Windows 11 today; its architecture, timing models, and packaging continue to evolve.
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
                <li>&bull; Windows companion runtime</li>
                <li>&bull; Context awareness &amp; reaction arbitration</li>
                <li>&bull; Custom mood animations</li>
                <li>&bull; Local editable memory + Persona Studio</li>
                <li>&bull; Quiet and Focus interruption modes</li>
                <li>&bull; Local voice + optional user-configured model integration</li>
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
                <li>&bull; Standalone packaging &amp; simpler distribution</li>
                <li>&bull; Multi-monitor / high-DPI robustness</li>
                <li>&bull; Runtime / sidecar architecture cleanup</li>
                <li>&bull; Interaction timing, voice quality &amp; response tuning</li>
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
