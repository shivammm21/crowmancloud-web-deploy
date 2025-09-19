# crowmancloud

An animated Next.js 14 website inspired by the GitHub Copilot features page, with Tailwind CSS and Framer Motion.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
```

3. Open the app
- Visit http://localhost:3000

## Project Structure
- `app/` — App Router pages and global layout
- `components/` — UI components (Navbar, Hero, Features, LogoMarquee, ShowcaseSection, CTASection, Footer)
- `public/` — Static assets (logos, preview images, favicon)
- `tailwind.config.ts`, `postcss.config.mjs` — Tailwind setup
- `next.config.mjs` — Next.js configuration

## Customization
- Update brand colors in `tailwind.config.ts`
- Replace placeholder images in `public/`
- Edit content in `components/` and `app/page.tsx`

## Deployment
Build the app and serve:
```bash
npm run build
npm start
```
