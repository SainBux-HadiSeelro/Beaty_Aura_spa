# 🌸 BeautyAura — Luxury Aesthetic Retreat & Wellness Clinic

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js%2016-Turbopack-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React%2019-00D8FF?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Status](https://img.shields.io/badge/Production-Ready-2ea44f?style=for-the-badge)

<br/>

**A serene, quiet-luxury digital retreat for aesthetic medicine, bespoke skin therapy, and holistic wellness.**  
*Engineered with modern web architecture and featuring **Aura**, a 24/7 Live AI Aesthetic Concierge.*

[✨ Live Features](#-flagship-features) • [🤖 24/7 AI Concierge](#-247-live-ai-concierge-aura) • [📐 Architecture & Specs](#-architecture--specifications) • [🚀 Quick Start](#-getting-started) • [🎨 Design System](#-design-system)

</div>

---

## 🌟 Overview

**BeautyAura** is an editorial-grade web application crafted for high-end aesthetic clinics and luxury medical retreats. Departing from stark, sterile clinical websites, BeautyAura embraces **"Quiet Luxury"** — an organic blend of warm earth tones, delicate serif typography, fluid glassmorphism, and unhurried user interactions.

Designed as a flagship portfolio piece, the codebase demonstrates production-level fullstack proficiency: modern React 19 component design, Next.js 16 App Router SSG/SSR patterns, robust TypeScript typings, and an interactive 24/7 AI agent that handles visitor inquiries and guides appointments in real time.

---

## ✨ Flagship Features

| Feature | Highlight |
| :--- | :--- |
| 🤖 **24/7 Live AI Concierge** | Intelligent aesthetic assistant with clinic knowledge, instant recommendations, and appointment guidance. |
| 💎 **Quiet Luxury Aesthetic** | Bespoke glassmorphism, warm stone textures (`#F6F1EA`), and editorial typography (`Playfair Display` + `Inter`). |
| ⚡ **Sub-Second Performance** | Turbopack compilation, pre-rendered static routes (SSG), and optimized asset pipeline. |
| 📅 **Interactive Booking Engine** | Seamless consultation scheduling workflow with real-time feedback and state management. |
| 🌿 **Treatment Deep-Dives** | Dedicated pages for HIFU Natural Lift, Laser Glow, Contour Fillers, and Skin Rejuvenation. |
| 📖 **Clinical Journal (Blog)** | Pre-rendered markdown/SSG articles exploring skincare intelligence and recovery advice. |
| 📱 **100% Responsive & Fluid** | Mobile-first drawer navigation, smooth custom scrollbars, and touch-optimized controls. |

---

## 🤖 24/7 Live AI Concierge: "Aura"

The application features **Aura**, a floating intelligent concierge available around the clock to assist prospective clients.

### Key Capabilities:
- **Comprehensive Clinic Intelligence**: Answers inquiries regarding treatment processes, pain levels, downtime, pricing, and aftercare.
- **Personalized Skin Diagnostic**: Recommends specific therapies based on user concerns (e.g., loss of firmness, dull tone, volume loss).
- **Hybrid Fail-Safe Architecture**:
  - **Instant Local Engine**: Client-side semantic matcher with zero latency (< 20ms) and zero quota limits.
  - **Dynamic API Bridge (`/api/chat`)**: Optionally connects to Gemini / LLMs via `.env.local` for expansive generative conversation.
- **Interactive Action Buttons**: Directly injects 1-click navigation cards to the booking engine or treatment catalog into the chat feed.
- **Session Continuity**: Preserves chat conversation across page changes using browser session storage.

---

## 🎨 Design System

BeautyAura features a curated organic color palette inspired by natural stone, botanicals, and soft sunlight:

```plaintext
• Sand     #F6F1EA  - Warm foundational canvas
• Charcoal #2B2623  - Rich espresso typographic contrast
• Sage     #8FAF9A  - Restorative biophilic green
• Bloom    #E9D8C8  - Radiant ambient glow
```

---

## 🛠️ Tech Stack & Tooling

- **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animation**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```bash
Beaty_Aura_spa/
├── app/
│   ├── api/chat/route.ts       # 24/7 AI Concierge dynamic endpoint
│   ├── about/                  # Clinic story & medical credentials
│   ├── blog/                   # Clinical journal & SSG articles
│   ├── booking/                # Consultation reservation system
│   ├── contact/                # Contact channels, maps & FAQ
│   ├── gallery/                # Aesthetic portfolio
│   ├── philosophy/             # Medical restraint ethos
│   ├── pricing/                # Transparent treatment rates
│   ├── testimonials/           # Client stories & verified reviews
│   ├── treatments/             # Individual treatment pages
│   ├── globals.css             # Glassmorphism & custom styling
│   └── layout.tsx              # RootLayout mounting Navbar, Footer & ChatBot
├── components/
│   ├── BookingForm.tsx         # Reservation input component
│   ├── ChatBot.tsx             # 24/7 Live AI Aesthetic Concierge widget
│   ├── FAQAccordion.tsx        # Interactive accordion
│   ├── Navbar.tsx              # Responsive floating glass header
│   └── ...                     # Reusable UI primitives
├── lib/
│   ├── knowledgeBase.ts        # 24/7 AI Concierge clinical knowledge base
│   ├── services.ts             # Treatment models & catalog data
│   └── blog.ts                 # Journal articles data
├── SPECS.md                    # Detailed architecture specifications
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SainBux-HadiSeelro/Beaty_Aura_spa.git
cd Beaty_Aura_spa
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 📄 Project Specifications

For complete technical specifications, component hierarchy, API contracts, and design tokens, review [SPECS.md](./SPECS.md).

---

## 👨‍💻 Developer & Portfolio

Developed with passion by **SainBux Hadi Seelro**.  
GitHub: [@SainBux-HadiSeelro](https://github.com/SainBux-HadiSeelro)  
Repository: [Beaty_Aura_spa](https://github.com/SainBux-HadiSeelro/Beaty_Aura_spa)

*Crafted to deliver a tranquil, high-converting digital experience.*
