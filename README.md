<div align="center">

# ✦ Thummeena · Portfolio CV

[![Live Demo](https://img.shields.io/badge/🌐_Live-thumeena.dev-EA580C?style=for-the-badge)](https://www.thumeena.dev)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/tophbeifong123/ThumeenaDev/azure-static-web-apps-ambitious-coast-03b85f800.yml?style=for-the-badge&label=Deploy&logo=microsoftazure)](https://github.com/tophbeifong123/ThumeenaDev/actions)
[![License](https://img.shields.io/badge/License-MIT-8B5CF6?style=for-the-badge)](LICENSE)

A **cinematic, Re:Zero-themed** developer portfolio built with Astro + React + Framer Motion.  
Features full-screen scroll-snapping, dual character themes, and immersive animations.

</div>

---

## 🎭 Theme System

| Theme | Character | Color | Activated |
|-------|-----------|-------|-----------|
| ☀️ **Light** | Subaru Natsuki | `#EA580C` Orange | Default |
| 🌙 **Dark** | Emilia | `#8B5CF6` Purple | Toggle button in Navbar |

Theme preference is persisted to `localStorage` (no flicker on reload via inline script).

---

## 🛠 Tech Stack

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Azure](https://img.shields.io/badge/Azure_Static_Web_Apps-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)

---

## ✨ Key Features

- **🎬 Cinematic Scroll Snapping** — Custom `requestAnimationFrame` scroll engine with `easeInOutCubic` easing (820ms), supports wheel, touch swipe, and keyboard navigation
- **🎭 Dual-Character Theme** — Seamless Light ↔ Dark switch with `IceBurst` particle animation
- **🖱️ Magnetic Custom Cursor** — Framer Motion cursor with magnetic hover on interactive elements
- **📜 Re:Zero Narrative Sections** — Each section named after Re:Zero story beats (Save Points, The Chronicle, Trials Overcome, Divine Protections)
- **⚡ Astro Islands Architecture** — Only interactive components hydrate on client (`client:load` / `client:visible`), maximising Lighthouse score
- **📱 Fully Responsive Navbar** — Full pill on desktop, hamburger dropdown on mobile
- **💀 Themed 404 Page** — Re:Zero "Timeline Not Found" death mark animation with floating orbs

---

## 📂 Project Structure

```
ThumeenaDev/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps-*.yml  # CI/CD — deploys on every push to main
└── portfolio-cv/                        # Astro project root
    ├── public/                          # Static assets (images, resume.pdf)
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.tsx               # Responsive floating nav
    │   │   ├── Hero.tsx                 # Full-screen parallax hero
    │   │   ├── Intro.tsx                # Dark intro / about section
    │   │   ├── Skills.tsx               # Divine Protections — skill grid
    │   │   ├── Projects.tsx             # The Chronicles — project cards
    │   │   ├── Trials.tsx               # Trials Overcome — marquee certs
    │   │   ├── SavePoints.tsx           # Save Points — timeline experience
    │   │   ├── NotFound.tsx             # Re:Zero 404 page
    │   │   └── CustomCursor.tsx         # Magnetic cursor
    │   ├── layouts/
    │   │   └── Layout.astro             # HTML shell + global fonts
    │   ├── pages/
    │   │   ├── index.astro              # Main page + scroll controller
    │   │   └── 404.astro                # 404 route
    │   └── styles/
    │       └── global.css               # Design tokens, scroll snap, utilities
    └── astro.config.mjs
```

---

## 🚀 Local Development

```bash
# 1. Clone the repo
git clone https://github.com/tophbeifong123/ThumeenaDev.git
cd ThumeenaDev/portfolio-cv

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:4321
```

---

## ☁️ Deployment (Azure Static Web Apps)

This project uses **Azure Static Web Apps** (Free tier) with **GitHub Actions CI/CD**.

Every `git push` to `main` triggers the workflow automatically:

```
git push → GitHub Actions → Oryx Build (npm run build) → Azure CDN
```

**Workflow config:** `.github/workflows/azure-static-web-apps-ambitious-coast-03b85f800.yml`

| Key | Value |
|-----|-------|
| `app_location` | `/portfolio-cv` |
| `output_location` | `dist` |
| Custom Domain | `www.thumeena.dev` |

---

## 📬 Contact

| Channel | Link |
|---------|------|
| 🌐 Portfolio | [www.thumeena.dev](https://www.thumeena.dev) |
| 📧 Email | [thrrmunaphengchay@gmail.com](mailto:thrrmunaphengchay@gmail.com) |
| 💼 LinkedIn | [Thumeena Pengchai](https://www.linkedin.com/in/thumeena-pengchai-6babb5351/) |
| 🐙 GitHub | [@tophbeifong123](https://github.com/tophbeifong123) |

---

<div align="center">

_"I don't know when I started. I don't know when it will end. But I'll keep going."_  
**— Natsuki Subaru, Re:Zero**

Made with 💜 by **Thummeena Toto Pengchai**

</div>
