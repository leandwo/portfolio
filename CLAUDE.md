# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npx astro check   # Type-check .astro files
```

## Architecture

Astro 5 portfolio site with Solid.js for interactive components and Tailwind CSS 4 for styling.

- **Pages** (`src/pages/`) — file-based routing; `index.astro` is the home page
- **Layouts** (`src/layouts/`) — `Layout.astro` wraps all pages (head, fonts, global styles)
- **Components** (`src/components/`) — Astro components (`.astro`) for static parts; Solid.js components (`.tsx`) for interactive parts
- **Styles** (`src/styles/tailwind.css`) — Tailwind entry point with `@import "tailwindcss"`
- **Public** (`public/`) — static assets served as-is (favicon, `InterVariable.woff2` font)

Tailwind is loaded via the Vite plugin (`@tailwindcss/vite`) configured in `astro.config.mjs`, not a PostCSS plugin. TypeScript strict mode is on; Solid.js is the JSX runtime (`"jsxImportSource": "solid-js"` in `tsconfig.json`).
