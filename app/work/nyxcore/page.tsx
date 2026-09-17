import type { Metadata } from 'next';
import { CaseStudyHeader } from '@/components/case-study/CaseStudyHeader';
import { NyxCoreCaseStudy } from '@/components/case-study/nyxcore/NyxCoreCaseStudy';

export const metadata: Metadata = {
  title: 'NyxCore — Case Study',
  description:
    'A local tool for cleaning and organizing my music library.',
  alternates: {
    canonical: '/work/nyxcore/',
  },
  openGraph: {
    title: 'NyxCore — Case Study — Yazan Khaled',
    description:
      'A local tool for cleaning and organizing my music library.',
    url: '/work/nyxcore/',
    type: 'article',
    images: [
      {
        url: '/case-studies/nyxcore/02_review_inbox_selected_1440.png',
        width: 1440,
        height: 900,
        alt: 'NyxCore Review Inbox',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NyxCore — Case Study — Yazan Khaled',
    description:
      'A local tool for cleaning and organizing my music library.',
    images: ['/case-studies/nyxcore/02_review_inbox_selected_1440.png'],
  },
};

export default function NyxCoreCaseStudyPage() {
  return (
    <>
      <a
        href="#case-study-content"
        className="fixed left-4 top-4 z-[100] -translate-y-[200%] bg-accent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-background transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to content
      </a>
      <CaseStudyHeader
        projectNumber="02"
        projectTitle="NyxCore"
        gitHubUrl="https://github.com/DRGYZ/nyxcore-ai-audio"
      />
      <main id="case-study-content" tabIndex={-1} className="focus:outline-none">
        <NyxCoreCaseStudy />
      </main>
    </>
  );
}
