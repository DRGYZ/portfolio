import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0e0f',
        surface: {
          DEFAULT: '#141517',
          low: '#18191b',
          mid: '#1f2022',
          high: '#26282a',
        },
        border: {
          DEFAULT: '#262626',
          muted: '#1e1f21',
          bright: '#3d4043',
        },
        primary: {
          DEFAULT: '#eeeeee',
          muted: '#a2a5a8',
          subtle: '#686b6e',
        },
        accent: {
          DEFAULT: '#b9c3ff',
          muted: 'rgba(185, 195, 255, 0.15)',
          glow: 'rgba(185, 195, 255, 0.35)',
          dark: '#00228a',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        editorial: ['var(--font-newsreader)', 'serif'],
        sans: ['var(--font-geist)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      spacing: {
        'grid-desktop': '3rem',
        'grid-mobile': '1.25rem',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
      },
    },
  },
  plugins: [],
};

export default config;
