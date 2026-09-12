'use client';

export function MikoSensorMatrix() {
  return (
    <div className="space-y-6">
      {/* Visual Architecture Pipeline */}
      <div className="border border-white/[0.08] bg-surface p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary-subtle">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <span>Architecture Pipeline</span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-primary-subtle">
            Lightweight &bull; Local-First
          </span>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="mt-6 grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
          {/* Stage 1 */}
          <div className="relative border border-white/[0.08] bg-background/60 p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#f09acb]">
                01 / Signals
              </span>
              <span className="hidden lg:inline text-primary-subtle select-none font-mono">&rarr;</span>
            </div>
            <h3 className="font-display text-[17px] font-bold uppercase tracking-tight text-primary sm:text-lg">
              Desktop signals
            </h3>
            <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted sm:text-sm">
              Foreground app &bull; Media state &bull; Browser context &bull; Idle state
            </p>
          </div>

          {/* Stage 2 */}
          <div className="relative border border-white/[0.08] bg-background/60 p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#f09acb]">
                02 / Synthesis
              </span>
              <span className="hidden lg:inline text-primary-subtle select-none font-mono">&rarr;</span>
            </div>
            <h3 className="font-display text-[17px] font-bold uppercase tracking-tight text-primary sm:text-lg">
              Local interpretation
            </h3>
            <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted sm:text-sm">
              Normalizes activity into a small context model
            </p>
          </div>

          {/* Stage 3 */}
          <div className="relative border border-white/[0.08] bg-background/60 p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent">
                03 / Arbitration
              </span>
              <span className="hidden lg:inline text-primary-subtle select-none font-mono">&rarr;</span>
            </div>
            <h3 className="font-display text-[17px] font-bold uppercase tracking-tight text-primary sm:text-lg">
              Priority + cooldown
            </h3>
            <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted sm:text-sm">
              Resolves competing signals and suppresses reaction spam
            </p>
          </div>

          {/* Stage 4 */}
          <div className="relative border border-[#f09acb]/40 bg-[#f09acb]/[0.05] p-5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#ffadd8]">
                04 / Output
              </span>
              <span className="text-[#f09acb] text-xs font-mono">&bull;</span>
            </div>
            <h3 className="font-display text-[17px] font-bold uppercase tracking-tight text-primary sm:text-lg">
              MIKO reaction
            </h3>
            <p className="font-mono text-[13px] leading-relaxed text-[#ffadd8] sm:text-[13.5px]">
              Mood &bull; Animation &bull; Short response
            </p>
          </div>
        </div>
      </div>

      {/* 3 Behavioural Examples */}
      <div className="grid gap-4 sm:grid-cols-3 font-mono">
        <div className="border border-white/[0.08] bg-surface p-5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#f09acb]" />
            <h4 className="font-sans text-[15px] font-bold uppercase tracking-tight text-primary">
              Coding + music
            </h4>
          </div>
          <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted sm:text-sm">
            Coding takes priority while music remains background context.
          </p>
        </div>

        <div className="border border-white/[0.08] bg-surface p-5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-accent" />
            <h4 className="font-sans text-[15px] font-bold uppercase tracking-tight text-primary">
              Watching video
            </h4>
          </div>
          <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted sm:text-sm">
            Passive media context produces a quieter watching posture.
          </p>
        </div>

        <div className="border border-white/[0.08] bg-surface p-5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#ffadd8]" />
            <h4 className="font-sans text-[15px] font-bold uppercase tracking-tight text-primary">
              Idle / away
            </h4>
          </div>
          <p className="font-sans text-[13.5px] leading-relaxed text-primary-muted sm:text-sm">
            Extended inactivity shifts MIKO toward standby instead of demanding attention.
          </p>
        </div>
      </div>

      {/* Privacy Note */}
      <div className="border border-white/[0.08] bg-surface/50 p-4 sm:px-6 font-mono">
        <p className="font-sans text-[13.5px] text-primary-muted leading-relaxed sm:text-sm">
          Context is evaluated locally. MIKO’s sensors use lightweight operating-system and browser signals without capturing keystrokes, clipboard contents, or document contents.
        </p>
      </div>
    </div>
  );
}
