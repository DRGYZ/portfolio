---
name: Technical Editorial
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#393939'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#292a2a'
  surface-container-highest: '#343535'
  on-surface: '#e3e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e3e2e2'
  inverse-on-surface: '#303031'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#b9c3ff'
  on-tertiary: '#00228a'
  tertiary-container: '#00052b'
  on-tertiary-container: '#496bff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#001257'
  on-tertiary-fixed-variant: '#0033c0'
  background: '#121414'
  on-background: '#e3e2e2'
  surface-variant: '#343535'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-meta:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
  index-num:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: -0.02em
spacing:
  grid-margin-desktop: 3rem
  grid-margin-mobile: 1.25rem
  gutter-desktop: 1.5rem
  gutter-mobile: 0.75rem
  baseline-unit: 0.25rem
  space-xs: 0.5rem
  space-sm: 1rem
  space-md: 1.5rem
  space-lg: 3rem
  space-xl: 6rem
  space-2xl: 10rem
---

## Brand & Style

This design system establishes the visual presence of a front-end developer and creative technologist operating at the intersection of computational logic, browser performance, and avant-garde editorial typography. It balances the rigor of mid-century Swiss graphic design with the utilitarian clarity of terminal environments and contemporary Parisian digital art practice.

The emotional tone is intellectual, mathematically ordered, uncompromising, and deliberately quiet. It rejects consumer SaaS conventions—such as pill-shaped soft gradients, bouncy interactions, and saturated decorative accents—in favor of structural hierarchy, disciplined baseline alignment, micro-detail monospace annotation, and stark spatial economy.

## Colors

The palette operates primarily across an absolute monochrome continuum, interrupted solely by an energetic International Klein / Hyper-Electric Blue used for active states, terminal indicators, and deliberate points of interactive friction.

- **Base Void (`#0A0A0A`)**: Ground canvas; non-reflective carbon dark.
- **Surface Elevation (`#141414`, `#1D1D1D`)**: Strict structural paneling without ambient gradients.
- **Primary Type / Foreground (`#EEEEEE`)**: Raw off-white with 94% luminance to prevent optic burnout against true dark backgrounds.
- **Subordinate Metadata (`#767676`)**: Mid-tier neutral balanced for WCAG AA compliance against `#0A0A0A` for captions, coordinates, commit hashes, and spec tags.
- **Technical Blue (`#0047FF`)**: Used sparingly (<3% visual area) for focused states, real-time telemetry markers, code execution pulses, and selected indices.
- **Structural Boundary (`#262626`)**: Hairline 1px borders enforcing Swiss spatial divisions.

## Typography

Typography functions as the structural skeleton rather than decorative dressing. The hierarchy relies on sharp proportional shifts:

1. **Display & Headlines (`Space Grotesk`)**: Geometric, brutalist-tinged grotesque delivering immediate architectural weight. Tracked tight to emphasize glyph geometry and spatial compactness.
2. **Body Prose (`Geist`)**: Rationalized, neutral grotesque providing unhindered reading flow across project briefs, technical post-mortems, and creative manifestos.
3. **Metadata, Metrics & Code (`JetBrains Mono`)**: High-legibility monospaced font used for data labels, coordinates, execution benchmarks, file systems, and navigation anchors. All metadata uses tabular numerals and uppercase formatting for indexes.

## Layout & Spacing

The layout is built on a 12-column Swiss modular grid anchored by explicit horizontal and vertical coordinate lines.

- **Desktop (>= 1280px)**: 12-column grid, 3rem margins, 1.5rem gutters. Sections are divided by visible 1px hairline border rules.
- **Tablet (768px - 1279px)**: 8-column grid, 2rem margins, 1.25rem gutters. Secondary metadata columns collapse beneath primary artifacts.
- **Mobile (< 768px)**: 4-column grid, 1.25rem margins, 0.75rem gutters. Heavy asymmetry is resolved into a monolithic vertical index with edge-to-edge structural dividing lines.

Whitespace is rhythmically polarized: compressed metadata blocks paired with cavernous section margins (`space-xl` and `space-2xl`), generating intentional visual tension between dense informational panels and quiet spatial voids.

## Elevation & Depth

This system rejects physical drop shadows, blur radii, and floating layers. Depth is constructed exclusively through:

- **1px Crisp Hairline Dividers**: Surfaces intersect along explicit 1px `#262626` borders. Nested elements never bleed; they snap to column margins.
- **Tonal Stepping**: Layering is achieved via calibrated monochromatic surface fills: Base (`#0A0A0A`) → Canvas Panel (`#141414`) → Sub-component / Monospace Block (`#1D1D1D`).
- **Interactive Inversion**: Hover and focus states never rise on a Z-axis; instead, they trigger high-contrast inversions (e.g., `#EEEEEE` background with `#0A0A0A` foreground) or snap-reveal a 1px `#0047FF` contour.

## Shapes

The geometric rule is absolute: **0px border-radius across all elements.** 

Every card, button, tag, input field, modal overlay, and viewport frame possesses sharp, razor edges. This strict Euclidean geometry reinforces the technical, architectural character of the portfolio and echoes raw IDE/terminal viewports and printed Swiss editorial posters.

## Components

### Buttons
- **Primary**: Solid `#EEEEEE` background, `#0A0A0A` text, 0px radius, uppercase `JetBrains Mono` 12px label with `0.08em` tracking. Padding: `0.75rem 1.5rem`. On hover: immediate background shift to `#0047FF` with `#EEEEEE` text.
- **Secondary / Ghost**: `#0A0A0A` background, 1px solid `#262626` outline, `#EEEEEE` text. On hover: 1px solid `#EEEEEE`.
- **Command / Link**: Monospace inline label prefixed with dynamic index symbol (`-> [01] VIEW_EXPERIMENT`), underlined with a 1px solid rule offset by 4px.

### Metadata Chips & Tags
- Rectangular blocks with 1px border (`#262626`), zero radius, padding `0.25rem 0.5rem`.
- Set in `label-meta` (`JetBrains Mono` 11px).
- Active or focused filter tags invert to `#0047FF` text with `#0047FF` border.

### Project & Experiment Cards
- Contained within rigid 1px structural grid lines.
- Internal layout structured like a spec sheet:
  - Header band: Monospace project ID (`[001]`), date (`2025.Q1`), and status (`LIVE / ARCHIVED`).
  - Media container: Zero-radius canvas displaying interactive WebGL experiments or high-fidelity renders.
  - Footer band: Title in `Space Grotesk` 20px, description in `Geist` 14px, accompanied by a monospace tech stack registry (`GLSL`, `Three.js`, `React`, `WASM`).

### Input Fields & Terminal Prompts
- Background: `#141414`.
- Border: 1px solid `#262626`; on focus: 1px solid `#0047FF` with zero glow/box-shadow.
- Typography: `JetBrains Mono` 13px with an active blinking rectangular block cursor (`#0047FF`).

### Checkboxes & Toggle Switches
- Checkbox: Pure 14px × 14px square, 1px solid `#767676`, zero radius. Selected state fills with `#0047FF` with a central 6px × 6px black square (no rounded checkmarks).
- Toggle: Segmented binary block (`[ OFF | ON ]`), where the selected state is inverted to solid `#EEEEEE` fill on `#0A0A0A` text.

### Code Blocks & Spec Drawers
- Raw dark surface (`#111111`) with left-hand 1px rule.
- Line numbers set in `JetBrains Mono` muted neutral (`#767676`).
- Integrated status bar at bottom showing file weight, execution time in milliseconds, and Paris local timestamp (`CET / UTC+1`).