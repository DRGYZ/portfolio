import type { Metadata } from 'next';
import { CaseStudyHeader } from '@/components/case-study/CaseStudyHeader';
import { OhMyFoodCaseStudy } from '@/components/case-study/ohmyfood/OhMyFoodCaseStudy';

export const metadata: Metadata = {
  title: 'OhMyFood — Case Study',
  description:
    'A preserved OpenClassrooms project rebuilt with React and TypeScript into a complete restaurant discovery, menu selection, reservation, and confirmation experience.',
  alternates: {
    canonical: '/work/ohmyfood/',
  },
  openGraph: {
    title: 'OhMyFood — Case Study — Yazan Khaled',
    description:
      'A preserved OpenClassrooms project rebuilt with React and TypeScript into a complete restaurant discovery and booking experience.',
    url: '/work/ohmyfood/',
    type: 'article',
    images: [
      {
        url: '/projects/ohmyfood.svg',
        width: 1200,
        height: 820,
        alt: 'OhMyFood Restaurant Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OhMyFood — Case Study — Yazan Khaled',
    description:
      'A preserved OpenClassrooms project rebuilt with React and TypeScript into a complete restaurant discovery and booking experience.',
    images: ['/projects/ohmyfood.svg'],
  },
};

export default function OhMyFoodCaseStudyPage() {
  return (
    <>
      <a
        href="#case-study-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <CaseStudyHeader
        projectNumber="03"
        projectTitle="OhMyFood"
        gitHubUrl="https://github.com/DRGYZ/OhMyFood/tree/ohmyfood-v2"
      />
      <main id="case-study-content" tabIndex={-1} className="focus:outline-none">
        <OhMyFoodCaseStudy />
      </main>
    </>
  );
}
