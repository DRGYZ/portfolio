import type { Metadata } from 'next';
import { CaseStudyHeader } from '@/components/case-study/CaseStudyHeader';
import { NyxboardCaseStudy } from '@/components/case-study/NyxboardCaseStudy';

export const metadata: Metadata = {
  title: 'Nyxboard — Case Study',
  description:
    'An expressive, accessible multi-store commerce operations dashboard built with React and TypeScript, exploring information density, context preservation, and state architecture.',
  alternates: {
    canonical: '/work/nyxboard/',
  },
  openGraph: {
    title: 'Nyxboard — Case Study — Yazan Khaled',
    description:
      'An expressive, accessible multi-store commerce operations dashboard built with React and TypeScript.',
    url: '/work/nyxboard/',
    type: 'article',
    images: [
      {
        url: '/projects/nyxboard.svg',
        width: 1200,
        height: 820,
        alt: 'Nyxboard Commerce Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nyxboard — Case Study — Yazan Khaled',
    description:
      'An expressive, accessible multi-store commerce operations dashboard built with React and TypeScript.',
    images: ['/projects/nyxboard.svg'],
  },
};

export default function NyxboardCaseStudyPage() {
  return (
    <>
      <a
        href="#case-study-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-accent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <CaseStudyHeader
        projectNumber="01"
        projectTitle="Nyxboard"
        liveDemoUrl="https://drgyz.github.io/nyxboard-commerce-dashboard/"
        gitHubUrl="https://github.com/DRGYZ/nyxboard-commerce-dashboard"
      />
      <main id="case-study-content" tabIndex={-1} className="focus:outline-none">
        <NyxboardCaseStudy />
      </main>
    </>
  );
}
