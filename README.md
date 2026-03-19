<div align="center">

# 🌌 Thumeena's Cinematic Portfolio

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

A high-performance, immersive, and awe-inspiring developer portfolio crafted with Astro, React, and Framer Motion. Featuring full-view scroll snapping, cinematic Ken Burns background reveals, interactive Bento Box layouts, and a dynamic "Re:Zero" inspired aesthetic theme topology.

**[🌐 View Live Demo](#)** <!-- Replace with production link when deployed -->

</div>

---

## ✨ Key Features

- **🎭 Dynamic Theming (Re:Zero Inspired):** Flawless Light Mode (Subaru Orange) and Dark Mode (Emilia Purple) that seamlessly transforms the entire application's mood using single-source-of-truth CSS overrides.
- **📜 Full-View Scroll Snapping:** Sections snap perfectly into the viewport just like a presentation slide, delivering a focused and premium application-like experience.
- **🎬 Cinematic Animations:** Unprecedented scroll-reveals powered by `framer-motion`, utilizing Ken Burns background zooms, precise stagger children effects, and smooth depth-of-field blur unmasking.
- **🍱 Bento Box Grid Architectures:** Organizing complex data (Skills, Tech Stacks, and Trials) into manageable, beautiful, and fully responsive layouts.
- **🖱️ Magnetic Custom Cursor:** A sleek, inverted interactive cursor that smoothly follows user input, expanding and reacting to clickable elements.
- **⚡ Supercharged Performance:** Utilizing Astro's cutting-edge partial hydration (Islands architecture) heavily shipping zero JS by default and progressively rendering React interactive components only when necessary.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **UI Components:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Iconography:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have `Node.js` (v18+) and `pnpm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tophbeifong123/portfolio-cv.git
   cd portfolio-cv
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Explore the cosmos!**
   Navigate to `http://localhost:4321` in your browser to experience the portfolio.

## 📁 Project Structure

A quick overview of the essential workflow:

```text
/src
├── components/         # React Interactive Components (Bento boxes, Navbars, Hero)
│   ├── Hero.tsx
│   ├── SavePoints.tsx  # Timeline & Journey History
│   ├── CustomCursor.tsx
│   └── ...
├── layouts/            # Astro Layout wrapping the main document config
│   └── Layout.astro
├── pages/              # Astro routing and main application assembly
│   └── index.astro
├── styles/             # Global CSS variables, scroll-snap configs, and theme handlers
│   └── global.css
└── public/             # Static assets like fonts, icons, and background images
```

## 👨‍💻 Author

**Thumeena Toto Pengchai**  
Computer Engineering Student at PSU | Aspiring Full-stack Developer (Next.js & NestJS)

- **GitHub:** [@tophbeifong123](https://github.com/tophbeifong123)
- **LinkedIn:** [Thumeena Pengchai](https://www.linkedin.com/in/thumeena-pengchai-6babb5351/)

## 📄 License
This architecture is structured for personal portfolio showcasing. Feel free to draw deep inspiration from the code and techniques, but please do not directly clone and use personal asset data or the Re:Zero storytelling assets without heavy modifications.
