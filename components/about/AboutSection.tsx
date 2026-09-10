'use client';

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-28 px-6 lg:px-16 max-w-[1440px] mx-auto">
      <div className="w-full pb-8 mb-12 border-b border-white/[0.08]">
        <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-primary tracking-tight">
          About
        </h2>
      </div>

      <div className="max-w-3xl">
        <p className="font-sans text-xl sm:text-2xl text-primary-muted leading-relaxed mb-6 font-light">
          Yazan Khaled is a front-end developer and creative technologist based in Paris, France.
          Focusing on the craft of modern digital interfaces, robust component systems, and controlled, expressive interaction.
        </p>
        <p className="font-sans text-base text-primary-subtle leading-relaxed">
          Operating at the intersection of visual precision and modern web engineering.
        </p>
      </div>
    </section>
  );
}
