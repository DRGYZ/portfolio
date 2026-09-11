import { getAssetPath } from '@/lib/assetPath';

interface Mood {
  id: string;
  name: string;
  category: string;
  triggerCondition: string;
  dialoguePreview: string;
  assetFile: string;
}

const featuredMoods: Mood[] = [
  {
    id: 'coding',
    name: 'Coding',
    category: 'focus',
    triggerCondition: 'A code editor or terminal becomes the active workspace.',
    dialoguePreview: '“checking the logic”',
    assetFile: '/case-studies/miko/miko-coding-row.png',
  },
  {
    id: 'listening',
    name: 'Listening',
    category: 'rhythm',
    triggerCondition: 'A background music session remains audible.',
    dialoguePreview: '“tiny concert mode”',
    assetFile: '/case-studies/miko/miko-listening-row.png',
  },
  {
    id: 'watching',
    name: 'Watching',
    category: 'attention',
    triggerCondition: 'Video playback takes focus in a browser or local player.',
    dialoguePreview: '“I am watching too”',
    assetFile: '/case-studies/miko/miko-watching-row.png',
  },
  {
    id: 'annoyed',
    name: 'Annoyed',
    category: 'disruption',
    triggerCondition: 'MIKO is relocated away from the primary display.',
    dialoguePreview: '“bring me back”',
    assetFile: '/case-studies/miko/miko-annoyed-row.png',
  },
];

const secondaryMoods: Mood[] = [
  {
    id: 'curious',
    name: 'Curious',
    category: 'exploration',
    triggerCondition: 'Research, documentation, or exploratory browsing.',
    dialoguePreview: '“what are we reading?”',
    assetFile: '/case-studies/miko/miko-curious-row.png',
  },
  {
    id: 'sleepy',
    name: 'Sleepy',
    category: 'standby',
    triggerCondition: 'User inactivity passes the configured idle threshold.',
    dialoguePreview: '“still here”',
    assetFile: '/case-studies/miko/miko-sleepy-row.png',
  },
  {
    id: 'celebrating',
    name: 'Celebrating',
    category: 'reward',
    triggerCondition: 'An explicit positive or achievement state is triggered.',
    dialoguePreview: '“proud mode!”',
    assetFile: '/case-studies/miko/miko-celebrating-row.png',
  },
];

function MoodSpecimen({ mood, index }: { mood: Mood; index: number }) {
  return (
    <article className="group relative overflow-hidden border-t border-white/[0.11] py-6 sm:py-8">
      <div aria-hidden="true" className="absolute right-0 top-1 font-display text-6xl font-bold leading-none text-white/[0.025] sm:text-8xl">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative grid gap-5 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:items-center">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#f09acb]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-2xl font-bold uppercase tracking-[-0.035em] text-primary sm:text-3xl">
              {mood.name}
            </h3>
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-primary-subtle">{mood.category}</p>
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-primary-muted">{mood.triggerCondition}</p>
          <p className="mt-3 font-editorial text-lg italic text-[#ffadd8]">{mood.dialoguePreview}</p>
        </div>

        <div className="overflow-hidden border-y border-white/[0.07] bg-[#090a0c] px-3 py-4">
          <img
            src={getAssetPath(mood.assetFile)}
            alt={`${mood.name} six-frame animation sequence`}
            width={1152}
            height={208}
            loading="lazy"
            decoding="async"
            className="h-auto w-full select-none object-contain [image-rendering:pixelated] sm:h-20"
          />
        </div>
      </div>
    </article>
  );
}

export function MikoMoodShowcase() {
  return (
    <div>
      <p className="mb-8 max-w-3xl border-l border-[#f09acb]/65 pl-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-primary-subtle">
        Context can influence a mood; explicit user and internal companion states can too. The character remains authored, not generated on demand.
      </p>

      <div className="grid gap-x-10 lg:grid-cols-2">
        {featuredMoods.map((mood, index) => (
          <MoodSpecimen key={mood.id} mood={mood} index={index} />
        ))}
      </div>

      <details className="group mt-4 border-y border-white/[0.09] py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f09acb] [&::-webkit-details-marker]:hidden">
          <span>Explore secondary moods & locomotion</span>
          <span className="text-[#f09acb] transition-transform group-open:rotate-45">＋</span>
        </summary>

        <div className="grid gap-7 pt-8 sm:grid-cols-3">
          {secondaryMoods.map((mood) => (
            <article key={mood.id} className="border-t border-white/[0.08] pt-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold uppercase tracking-[-0.025em] text-primary">{mood.name}</h3>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#f09acb]">{mood.category}</span>
              </div>
              <div className="mt-4 overflow-hidden bg-[#090a0c] px-2 py-3">
                <img
                  src={getAssetPath(mood.assetFile)}
                  alt={`${mood.name} animation sequence`}
                  width={1152}
                  height={208}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full select-none object-contain [image-rendering:pixelated] sm:h-12"
                />
              </div>
              <p className="mt-4 font-sans text-xs leading-relaxed text-primary-muted">{mood.triggerCondition}</p>
              <p className="mt-2 font-editorial italic text-[#ffadd8]">{mood.dialoguePreview}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-7 border-t border-white/[0.08] pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#f09acb]">Movement atlas · 100 frames</p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[-0.03em] text-primary">A body for the desktop.</h3>
            <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-primary-muted">
              Walking, jumping, waving, crouching, and relocation tantrums let MIKO occupy the edge of the screen like a small physical presence.
            </p>
          </div>
          <div className="overflow-x-auto bg-[#090a0c] p-4">
            <img
              src={getAssetPath('/case-studies/miko/miko-spritesheet.png')}
              alt="MIKO locomotion sprite atlas"
              width={1920}
              height={1920}
              loading="lazy"
              decoding="async"
              className="mx-auto max-h-80 w-auto select-none object-contain opacity-90 [image-rendering:pixelated]"
            />
          </div>
        </div>
      </details>
    </div>
  );
}
