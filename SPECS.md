# 📋 BeautyAura — Technical & Architecture Specifications

## 1. Executive Summary

**BeautyAura** is a premier digital flagship for a luxury aesthetic retreat and wellness clinic. Built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS**, it pairs editorial "quiet luxury" visual identity with high-performance digital engineering.

The system incorporates an intelligent **24/7 Live AI Aesthetic Concierge ("Aura")** with zero-downtime hybrid architecture (instant local knowledge inference + optional LLM integration), full-funnel appointment reservations, dynamic educational journals, and responsive glassmorphic interfaces.

---

## 2. Tech Stack & Engineering Standards

| Layer | Technology | Specification / Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2.4 (App Router) | High-speed server rendering, Turbopack builds, SSG & dynamic routing |
| **Runtime** | React 19.0.0 | Concurrent features, modern hooks, automatic JSX runtime |
| **Language** | TypeScript 5.8 | End-to-end static typing across models, routes, and components |
| **Styling** | Tailwind CSS 3.4 & PostCSS | Custom luxury tokens, radial glow meshes, glassmorphism |
| **Motion** | Framer Motion 12.11 | Gesture interactions, drawer transitions, and micro-delights |
| **Icons** | Lucide React | Minimalist clinical and wellness iconography |
| **AI Concierge Engine** | Hybrid Local + API Engine | 24/7 deterministic knowledge retrieval + optional Gemini/OpenAI API fallback |

---

## 3. System Architecture & Directory Structure

```plaintext
Beaty_Aura_spa/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts             # Dynamic POST endpoint for AI concierge
│   ├── about/page.tsx               # Clinic history, team & ethos
│   ├── blog/
│   │   ├── [slug]/page.tsx          # SSG individual article reader
│   │   └── page.tsx                 # Clinical journal index
│   ├── booking/page.tsx             # Interactive consultation reservation engine
│   ├── contact/page.tsx             # Location, operating hours, direct contact & FAQ
│   ├── gallery/page.tsx             # Visual portfolio of clinic spaces & results
│   ├── philosophy/page.tsx          # Medical restraint & aesthetic harmony manifesto
│   ├── pricing/page.tsx             # Transparent pricing matrix & VIP packages
│   ├── testimonials/page.tsx        # Client case studies & verified feedback
│   ├── treatments/
│   │   ├── [slug routes]/           # Dedicated deep dives (HIFU, Laser, Fillers, Skin)
│   │   └── page.tsx                 # Master treatment catalog
│   ├── globals.css                  # Custom typography, glass panels, smooth scrollbar
│   ├── layout.tsx                   # Universal RootLayout (Navbar + Footer + ChatBot)
│   └── page.tsx                     # Flagship homepage
├── components/
│   ├── BookingForm.tsx              # Interactive booking form with state feedback
│   ├── ChatBot.tsx                  # 24/7 Live AI Spa Concierge & Booking Assistant
│   ├── FAQAccordion.tsx             # Expandable clinical Q&A accordion
│   ├── Footer.tsx                   # Brand footer with newsletter & legal navigation
│   ├── Hero.tsx                     # Editorial hero banner with split CTA
│   ├── Navbar.tsx                   # Dynamic floating glass navigation bar
│   ├── ServiceCard.tsx              # Interactive treatment preview cards
│   ├── ServiceDetailPage.tsx        # Structured treatment template
│   └── TestimonialCard.tsx          # Guest review card component
├── lib/
│   ├── blog.ts                      # Journal articles data store
│   ├── knowledgeBase.ts             # 24/7 AI Clinic intelligence base & query matcher
│   └── services.ts                  # Treatment catalog data & type definitions
├── public/images/                   # Clinic photography and vector graphics
├── SPECS.md                         # Detailed project specification (this document)
├── README.md                        # Portfolio showcase & developer manual
├── package.json                     # Project scripts and dependencies
├── tailwind.config.ts               # Custom design system tokens
└── tsconfig.json                    # Strict TypeScript configuration
```

---

## 4. 24/7 Live AI Aesthetic Concierge ("Aura")

### 4.1 Hybrid Architecture
The chatbot operates on a **fail-safe dual-mode architecture**:
1. **Instant Client-Side Intelligence (`lib/knowledgeBase.ts`)**:
   - Zero API latency (< 20ms response time).
   - Zero third-party API costs or quota limits.
   - Comprehensive offline clinic data (all treatments, pricing, duration, benefits, recovery times, operating hours, locations, and booking rules).
2. **Dynamic API Route (`app/api/chat/route.ts`)**:
   - Accepts POST requests with user queries.
   - Seamlessly leverages `GEMINI_API_KEY` or `OPENAI_API_KEY` when configured in `.env.local`.
   - Auto-falls back to the internal knowledge engine if external networks are unavailable.

### 4.2 Interactive Capabilities
- **Direct Navigation Links**: Emits interactive action buttons (e.g., direct jump to `/booking` or `/treatments/natural-lift-hifu`).
- **Prompt Chips**: Frequently asked questions appear as quick-tap pills for instant inquiry.
- **Session Memory**: Preserves conversation continuity across page navigation using `sessionStorage`.
- **Live Indicator**: Visual heartbeat animation with 24/7 status badge to assure users of continuous availability.

---

## 5. Design System & Aesthetic Tokens

### 5.1 Color Palette
- **Sand (`#F6F1EA`)**: Warm, calming foundational background reminiscent of stone and fine paper.
- **Charcoal (`#2B2623`)**: Deep espresso tint providing contrast without the harshness of pure black.
- **Sage (`#8FAF9A`)**: Biophilic herbal green symbolising cellular renewal and clinical serenity.
- **Bloom (`#E9D8C8`)**: Soft peachy undertone adding warmth and radial luminosity.

### 5.2 Typography
- **Heading Font**: `Playfair Display` (Serif) — confers timeless editorial elegance.
- **Body Font**: `Inter` (Sans-Serif) — ensures optimal readability across mobile, tablet, and retina displays.

### 5.3 Glassmorphic Elements
- `border border-white/40 bg-white/45 backdrop-blur-xl shadow-glass` creates dimensional layering, evoking clinical purity and modern minimalism.

---

## 6. Performance, SEO & Accessibility (a11y)

- **Static Site Generation (SSG)**: Core informational pages and blog articles are pre-rendered at build time for sub-100ms First Contentful Paint (FCP).
- **Turbopack Build Optimization**: Lightning-fast incremental compilation and package import deduplication (`lucide-react`).
- **SEO Ready**: OpenGraph metadata, descriptive alt attributes, semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), and accessible ARIA attributes across all toggles and buttons.

---

## 7. Deployment & Environment Setup

### Environment Variables (Optional)
```bash
# Optional: Connect live Gemini or OpenAI model for expanded conversational reasoning
GEMINI_API_KEY=your_gemini_api_key_here
```
*Note: If no API key is provided, the 24/7 AI Concierge operates automatically using the embedded knowledge engine.*

### Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Compile optimized production build
npm run build

# Start production server
npm start
```
