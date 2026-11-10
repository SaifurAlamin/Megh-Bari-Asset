# Megh Bari Frontend

React + Vite + Tailwind CSS 4 homepage starter for a bilingual premium real-estate website.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Setup
```bash
npm install
npm run dev
```
Open http://localhost:3002

## Build
```bash
npm run build
npm run preview
```

## Structure
```text
src/
  app/                 # Reserved for app-level configuration
  components/
    home/              # Homepage sections
    layout/            # Navbar and footer
  context/             # Shared app-level context providers
  data/                # Temporary project content
  features/            # Feature modules (calculator, booking, projects, etc.)
  hooks/               # Reusable React hooks (useLanguage, useScroll, useDebounce)
  pages/               # Route-level pages
  utils/               # Shared helpers, formatters and constants
  App.jsx
  index.css
  main.jsx
```

## Reusable code
- `hooks/useLanguage.js` exposes the shared language context hook from one consistent import location.
- `hooks/useScroll.js` tracks scroll position, direction and threshold state.
- `hooks/useDebounce.js` provides a reusable debounced value for search and filters.
- `utils/formatCurrency.js` formats BDT amounts by default; locale and currency can be overridden.
- `utils/formatNumber.js` formats numeric values with Bangladeshi grouping by default.
- `utils/constants.js` centralizes app name, language, currency, route and scroll constants.

Prefer reusing these helpers/components instead of repeating the same implementation. Add abstractions when they genuinely reduce duplication; avoid over-engineering one-off UI.

## Important implementation notes
- Homepage project text, imagery, social links, phone and email are starter placeholders and must be verified/replaced by Megh Bari before production.
- Project images currently use remote Unsplash URLs. Replace them with approved company photos, drone footage and project renders.
- Calculator CTA and site-visit CTA are visual entry points only in Phase 1. Calculator API and booking workflow are Phase 2/3.
- The homepage does not claim unverified approvals, legal status, returns or guaranteed investment appreciation.
- Language toggle currently switches the homepage between English and Bangla.
