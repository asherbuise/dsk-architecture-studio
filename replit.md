# DSK Architecture Studio

## Overview
A digital architectural gallery for DSK, a Cape Town-based architecture studio. The site uses "negative space" (white) to highlight structural depth (dark grey #2F2F2F) and focal points (muted mustard #F4D03F).

## Architecture
- **Frontend**: React + Vite with Tailwind CSS, wouter routing, TanStack Query
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Database**: PostgreSQL with projects and contact_messages tables

## Design System
- **Background**: Pure White (#FFFFFF)
- **Structure**: Anthracite/Dark Charcoal (#2F2F2F) - footer, heavy typography, borders
- **Accent**: Muted Mustard (#F4D03F) - thin lines (1px), button borders, bullet points
- **Fonts**: Space Grotesk (sans), Playfair Display (serif), JetBrains Mono (mono)

## Key Features
- Floating hero with "DSK" title overlapping dark-framed image
- Vertical yellow accent line guiding scroll
- Broken grid project gallery with category filtering
- Project detail modals
- Contact form with database persistence
- Stats/about section
- Dark charcoal footer with social links

## File Structure
- `client/src/pages/home.tsx` - Main landing page
- `client/src/components/site-header.tsx` - Fixed header with smooth scroll nav
- `client/src/components/hero-section.tsx` - Floating hero with DSK overlap
- `client/src/components/project-grid.tsx` - Broken grid gallery with filters
- `client/src/components/project-modal.tsx` - Project detail overlay
- `client/src/components/about-section.tsx` - About section with stats
- `client/src/components/contact-section.tsx` - Contact form
- `client/src/components/site-footer.tsx` - Dark charcoal footer
- `shared/schema.ts` - Database schema (projects, contact_messages)
- `server/routes.ts` - API routes (/api/projects, /api/contact)
- `server/storage.ts` - Database storage layer
- `server/seed.ts` - Seed data (6 architectural projects)
- `server/db.ts` - Database connection

## Data Model
- **projects**: id, title, description, category, imageUrl, year, location, featured
- **contact_messages**: id, name, email, message
