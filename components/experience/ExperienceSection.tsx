export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-[1600px] px-6 py-20 lg:px-16 lg:py-28"
    >
      <div className="grid gap-8 border-y border-white/[0.08] py-10 sm:grid-cols-[1fr_auto] sm:items-end lg:py-14">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">03 / Experience</p>
          <h2 id="experience-title" className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl">
            Selected roles
          </h2>
        </div>
        <p className="max-w-sm font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-primary-subtle sm:text-right">
          Timeline and final CV content coming soon
        </p>
      </div>
    </section>
  );
}
