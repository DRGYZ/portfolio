import type { Metadata } from 'next';
import { Space_Grotesk, Newsreader, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drgyz.github.io/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yazan Khaled — Front-end Developer',
    template: '%s — Yazan Khaled',
  },
  description:
    'I build polished interfaces and interactive products that make complex systems feel simple. Based in Paris, France.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yazan Khaled — Front-end Developer',
    description:
      'I build polished interfaces and interactive products that make complex systems feel simple. Based in Paris, France.',
    url: '/',
    siteName: 'Yazan Khaled Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/projects/nyxboard.svg',
        width: 1200,
        height: 820,
        alt: 'Yazan Khaled — Front-end Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yazan Khaled — Front-end Developer',
    description:
      'I build polished interfaces and interactive products that make complex systems feel simple. Based in Paris, France.',
    images: ['/projects/nyxboard.svg'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-primary font-sans antialiased selection:bg-accent selection:text-background min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
