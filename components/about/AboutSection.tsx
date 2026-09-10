export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative mx-auto grid w-full max-w-[1600px] gap-10 px-6 py-24 lg:grid-cols-12 lg:px-16 lg:py-32"
    >
      <div className="lg:col-span-3">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">02 / About</p>
        <h2 id="about-title" className="font-display text-3xl font-bold uppercase tracking-[-0.04em] text-primary sm:text-5xl">
          A little context
        </h2>
      </div>

      <div className="max-w-4xl lg:col-span-8 lg:col-start-5">
        <p className="font-display text-2xl font-medium leading-[1.25] tracking-[-0.035em] text-primary sm:text-4xl lg:text-5xl">
          I&apos;m Yazan, a front-end developer and creative technologist based in Paris.
          I care about the point where clear systems, careful typography, and useful
          interaction meet.
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-muted sm:text-lg">
          The work is still being assembled. This space will grow with the projects,
          while the site itself remains the first demonstration of the craft behind them.
        </p>
      </div>

      <ul
        aria-label="Design priorities"
        className="col-span-full mt-8 grid border-y border-white/[0.08] sm:grid-cols-3 lg:mt-14"
      >
        {[
          ['01', 'Clear systems'],
          ['02', 'Careful typography'],
          ['03', 'Useful interaction'],
        ].map(([number, label], index) => (
          <li
            key={number}
            className={`flex items-baseline gap-5 py-6 sm:px-6 lg:py-8 ${
              index > 0 ? 'border-t border-white/[0.08] sm:border-l sm:border-t-0' : ''
            }`}
          >
            <span className="font-mono text-[9px] tracking-[0.16em] text-accent">{number}</span>
            <span className="font-editorial text-2xl italic tracking-[-0.025em] text-primary sm:text-xl lg:text-3xl">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
