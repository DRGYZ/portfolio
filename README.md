# Yazan Khaled — Personal Portfolio Prototype

Interactive portfolio prototype for Yazan Khaled (Front-end Developer & Creative Technologist, Paris, France).

Built with Next.js App Router, TypeScript, Tailwind CSS, and Motion (`framer-motion`), translating technical editorial design principles into an expressive, interactive web experience.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Fonts**: Space Grotesk, Newsreader (Italic Editorial Serif), Inter, JetBrains Mono

## Architecture

```
├── app/
│   ├── layout.tsx              # Google font variables & root metadata
│   ├── page.tsx                # Single-page interactive composition
│   └── globals.css             # 0px Euclidean geometry, dark charcoal background
├── components/
│   ├── navigation/
│   │   └── NavBar.tsx          # Minimal sticky navigation
│   ├── hero/
│   │   ├── HeroSection.tsx     # Expressive hero with scroll transitions
│   │   └── MonogramYK.tsx      # Typographic YK vector with pointer parallax & scroll scaling
│   ├── selected-work/
│   │   ├── SelectedWorkSection.tsx # Split 7/5 editorial archive & preview layout
│   │   └── ProjectRow.tsx      # Project row with hover italic transition & inactive dimming
│   ├── project-preview/
│   │   └── ProjectPreview.tsx  # Floating visual preview with AnimatePresence transitions
│   ├── about/
│   │   └── AboutSection.tsx    # Concise craft & engineering statement
│   ├── experience/
│   │   └── ExperienceSection.tsx # Chronology placeholder
│   └── contact/
│       └── ContactSection.tsx  # Bold typographic CTA with direct channels
├── data/
│   └── projects.ts             # Strongly-typed project dataset
├── hooks/
│   ├── usePointerPosition.ts   # rAF-throttled normalized pointer tracking
│   └── useReducedMotion.ts     # prefers-reduced-motion detection
└── types/
    └── project.ts              # TypeScript project & motion interfaces
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the prototype.

## Production Build

```bash
npm run build
npm run start
```
