'use client';

import Link from 'next/link';
import { getAssetPath } from '@/lib/assetPath';
import { SeamDivider } from '../SeamDivider';
import { MikoContextLab } from './MikoContextLab';
import { MikoMoodShowcase } from './MikoMoodShowcase';

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
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
                Experimental &bull; Windows &bull; Local-First &bull; 2026
              </span>
              <span className="border border-[#f09acb]/30 bg-[#f09acb]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#ffadd8]">
                Active Prototype
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,8vw,7.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-primary">
              MIKO
            </h1>

            <p className="font-editorial text-2xl italic tracking-[-0.02em] text-[#f09acb] sm:text-3xl lg:text-4xl">
              A desktop companion that responds to context, not just prompts.
            </p>

            <p className="max-w-2xl font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
              MIKO explores a quieter kind of computing: a local-first character that notices the rhythm of a Windows workspace and responds through posture, motion, and short reactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
              <a
                href="#context-lab"
                className="group flex items-center gap-2 border border-[#f09acb] bg-[#f09acb] px-6 py-3.5 font-bold uppercase tracking-wider text-background transition-all hover:bg-[#ffadd8] hover:border-[#ffadd8]"
              >
                <span>Try Context Lab</span>
                <span className="transition-transform group-hover:translate-y-0.5">&darr;</span>
              </a>

              <a
                href="#local-by-design"
                className="flex items-center gap-2 border border-white/20 bg-surface px-6 py-3.5 uppercase tracking-wider text-primary transition-colors hover:border-white/40 hover:text-white"
              >
                <span>Local by Design</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Metadata Definition List */}
            <dl className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 font-mono text-xs sm:grid-cols-4">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Role</dt>
                <dd className="mt-1 font-semibold text-primary">Concept / Interaction / Engineering</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Platform</dt>
                <dd className="mt-1 font-semibold text-primary">Windows</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Runtime</dt>
                <dd className="mt-1 font-semibold text-primary">WPF + Python Sidecar</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-primary-subtle">Status</dt>
                <dd className="mt-1 font-semibold text-[#f09acb]">Active Prototype</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="relative border border-white/[0.08] bg-surface p-6 lg:col-span-5 sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-primary-subtle">
                <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                <span>Context Snapshot</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#ffadd8]">
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
              <div className="relative z-10 mt-3 border border-[#f09acb]/40 bg-background/90 px-3 py-1 text-center font-mono text-xs font-semibold text-primary">
                &ldquo;checking the logic&rdquo;
              </div>
            </div>

            <div className="space-y-2.5 border-t border-white/[0.06] pt-4 font-mono text-xs text-primary-muted">
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
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              01 / The Idea
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Designing for the Periphery
            </h2>
            <p className="font-editorial text-xl italic leading-snug text-primary-muted sm:text-2xl">
              Traditional assistants wait for prompts. MIKO remains quietly present, expressing only what the moment earns.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <div className="border border-[#f09acb]/30 bg-[#f09acb]/[0.05] p-6 sm:p-8">
              <p className="font-display text-xl font-semibold uppercase tracking-tight text-primary sm:text-2xl">
                A companion should fit into your workflow, not fight for your attention.
              </p>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-widest text-[#f09acb]">
                Core Design Principle
              </span>
            </div>

            <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
              Most digital assistants hijack the foreground with modal windows and voice interruptions. MIKO sits at the perimeter of the screen like a calm physical desktop toy. Rather than demanding conversational turns, she reflects the rhythm of your work through subtle posture changes, occasional idle animations, and brief thought bubbles that respect cognitive flow.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 02: PERSONALITY AS INTERFACE */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            02 / Personality as Interface
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            A Companion Has Moods
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO&apos;s personality lives in hand-authored pixel animation. Each posture is an expressive response to desktop context rather than a generic avatar skin.
          </p>
        </div>

        <MikoMoodShowcase />
      </section>

      {/* CHAPTER 03: FROM CONTEXT TO REACTION */}
      <section id="context-lab" className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            03 / From Context to Reaction
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Signal Arbitration &amp; Context Lab
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO evaluates operating system signals locally: active foreground window process, media playback state, audio activity, and user idle ticks. When multiple events coincide, priority arbitration resolves conflicts before a reaction is triggered.
          </p>
        </div>

        {/* Interactive Simulation */}
        <MikoContextLab />

        {/* Inline Explainability Note */}
        <div className="mt-8 border border-white/[0.08] bg-surface p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-primary sm:text-lg">
                Inspectable Runtime State
              </h3>
              <p className="mt-1 font-sans text-sm text-primary-muted">
                Persona Studio exposes runtime state and recent decisions for live debugging. Operators can trace which sensor signal won, which rule matched, and how cooldown gates suppress reaction spam during rapid window switches.
              </p>
            </div>
            <span className="flex-shrink-0 font-mono text-[10px] uppercase tracking-widest text-[#f09acb]">
              Transparent Diagnostics
            </span>
          </div>
        </div>
      </section>

      {/* CHAPTER 04: LOCAL BY DESIGN */}
      <section id="local-by-design" className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="mb-10 max-w-3xl space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
            04 / Local by Design
          </span>
          <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
            Architecture, Privacy &amp; Memory
          </h2>
          <p className="font-sans text-base leading-relaxed text-primary-muted sm:text-lg">
            MIKO operates entirely on your workstation. Context evaluation, preference retention, and animation scheduling run on local loopback without relying on external cloud services.
          </p>
        </div>

        {/* Three Core Pillars */}
        <div className="grid gap-6 sm:grid-cols-3 font-mono">
          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#f09acb]">
              01 / Local Context
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              On-Device Evaluation
            </h3>
            <p className="font-sans text-sm leading-relaxed text-primary-muted">
              Foreground application, media transport, and activity context are evaluated locally. MIKO&apos;s context sensors do not capture keystrokes, clipboard contents, or document/source-file contents.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
              02 / Inspectable Memory
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              Operator-Editable Facts
            </h3>
            <p className="font-sans text-sm leading-relaxed text-primary-muted">
              MIKO can retain gentle preferences and recurring habits in a local file. Stored facts are directly inspectable and editable by the operator through Persona Studio.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-surface p-6 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#ffadd8]">
              03 / Optional Models
            </span>
            <h3 className="font-sans text-base font-bold text-primary">
              User-Configured Endpoints
            </h3>
            <p className="font-sans text-sm leading-relaxed text-primary-muted">
              MIKO does not depend on hosted cloud LLMs. Optional model-backed features route exclusively to endpoints configured by the user (such as local Ollama or compatible local sidecars).
            </p>
          </div>
        </div>

        {/* Real Persona Studio Screenshots */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-6">
            <div className="border border-white/[0.08] bg-surface p-2">
              <img
                src={getAssetPath('/case-studies/miko/persona_studio_awareness.png')}
                alt="Persona Studio Awareness and Privacy Controls panel in the working Windows prototype"
                loading="lazy"
                width={800}
                height={520}
                className="w-full object-contain"
              />
            </div>
            <div className="flex justify-between font-mono text-xs text-primary-subtle">
              <span>Persona Studio &bull; Sensor Toggles &amp; Boundaries</span>
              <span className="text-[#f09acb]">Working Prototype UI</span>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-6">
            <div className="border border-white/[0.08] bg-surface p-2">
              <img
                src={getAssetPath('/case-studies/miko/persona_studio_memory_facts.png')}
                alt="Persona Studio Memory and Learned Facts inspection view showing local facts"
                loading="lazy"
                width={800}
                height={520}
                className="w-full object-contain"
              />
            </div>
            <div className="flex justify-between font-mono text-xs text-primary-subtle">
              <span>Persona Studio &bull; Inspectable Memory &amp; Context</span>
              <span className="text-[#f09acb]">Local File Storage</span>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 05: PROTOTYPE STATUS */}
      <section className="relative mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-16 lg:py-16">
        <SeamDivider className="mb-8" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f09acb]">
              05 / Prototype Status
            </span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary sm:text-4xl">
              Current Capabilities &amp; Evolution
            </h2>
            <p className="font-sans text-base leading-relaxed text-primary-muted">
              MIKO is an active experimental project. The runtime operates on Windows 11 today; its architecture, timing models, and packaging continue to evolve.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 font-mono text-xs">
            <div className="border border-white/[0.08] bg-surface p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#f09acb]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#f09acb]">
                  What Works Today
                </span>
              </div>
              <ul className="space-y-2.5 text-primary-muted leading-relaxed">
                <li>&bull; Windows companion runtime (WPF shell &amp; Python sidecar)</li>
                <li>&bull; Context awareness (window titles, media sessions, audio levels)</li>
                <li>&bull; Hand-authored mood animations &amp; reaction arbitration</li>
                <li>&bull; Local editable memory &amp; preference learning</li>
                <li>&bull; Persona Studio desktop management interface</li>
                <li>&bull; Quiet and focus interruption concentration modes</li>
                <li>&bull; Local voice synthesis (TTS) &amp; speech input prototype</li>
                <li>&bull; Optional user-configured local model endpoints</li>
              </ul>
            </div>

            <div className="border border-white/[0.08] bg-surface p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  Still Exploring
                </span>
              </div>
              <ul className="space-y-2.5 text-primary-muted leading-relaxed">
                <li>&bull; Standalone packaging &amp; simplified distribution</li>
                <li>&bull; Multi-monitor edge cases &amp; high-DPI scaling robustness</li>
                <li>&bull; Sidecar IPC &amp; runtime architecture cleanup</li>
                <li>&bull; Interaction timing, cadence &amp; cooldown tuning</li>
                <li>&bull; Voice quality, timing, and interaction tuning</li>
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
                <p className="font-sans text-xs text-primary-muted">
                  An ongoing exploration into calm, peripheral desktop computing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
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

