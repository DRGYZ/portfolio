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
│   └── globals.css             # Global palette, focus, and reduced-motion fallbacks
├── components/
│   ├── navigation/
│   │   └── NavBar.tsx          # Minimal sticky navigation
│   ├── hero/
│   │   ├── HeroSection.tsx     # Expressive hero with scroll transitions
│   │   └── MonogramYK.tsx      # Typographic YK vector with pointer parallax & scroll scaling
│   ├── selected-work/
│   │   ├── SelectedWorkSection.tsx # Overlapping editorial index and media stage
│   │   └── ProjectRow.tsx      # Shared hover, focus, and touch project state
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
│   └── useReducedMotion.ts     # Framer Motion preference wrapper
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
```

The project uses `output: 'export'`, so the production result is the static `out/`
directory. Serve that directory with any static file server when previewing locally.

Run the TypeScript check independently with:

```bash
npm run check
```
