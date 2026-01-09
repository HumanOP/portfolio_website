# Portfolio Website

A personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Next.js 16 (App Router) | Modern React with SSG, excellent DX |
| **Language** | TypeScript | Type safety, better DX |
| **Styling** | Tailwind CSS 4 | Utility-first, dark mode, responsive |
| **Animation** | Framer Motion | Declarative animations (to be added) |
| **Icons** | Lucide React | Tree-shakeable icon set (to be added) |
| **Deployment** | Vercel | Native Next.js support |

## Architecture

```
app/
├── src/
│   └── app/                    # App Router pages
│       ├── layout.tsx          # Root layout
│       ├── page.tsx            # Home page (single-page portfolio)
│       └── globals.css         # Global styles + Tailwind
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts          # (if needed for customization)
├── tsconfig.json
└── next.config.ts
```

### Routing

Single-page portfolio with hash-based section navigation:
- `/` → Main page
- `#about` → Hero section
- `#experience` → Work experience
- `#projects` → Projects
- `#skills` → Skills
- `#contact` → Contact

## Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm 9+

### Installation

```bash
cd app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

### Linting & Formatting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
npm run format      # Format with Prettier
```

## Design System

Design tokens and styling decisions are documented in `../analysis/design-tokens.md` (local only).

Key principles:
- Mobile-first responsive design
- Dark mode as default (tech audience)
- Minimal, clean aesthetic
- Semantic HTML + accessibility

## Project Status

See `../analysis/project-tracker.md` for current progress (local only).
