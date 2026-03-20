import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Menu, X } from "lucide-react";

// ── Ice crystal SVG ───────────────────────────────────────────────────
const IceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
    <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const SubaruIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M6 2L3.5 7H20.5L18 2Z" />
    <path d="M3.5 7C3 22 21 22 20.5 7" />
    <path d="M9 2C9 5 15 5 15 2" />
  </svg>
);

// Ice burst particle effect on theme switch
const IceBurst = () => (
  <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden">
    {Array.from({ length: 18 }).map((_, i) => {
      const angle = (i / 18) * 360;
      const dist = 80 + Math.random() * 160;
      const size = 3 + Math.random() * 5;
      return (
        <motion.div
          key={i}
          className="absolute rounded-full left-1/2 top-1/2"
          style={{ width: size, height: size, background: "var(--primary)", marginLeft: -size / 2, marginTop: -size / 2 }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: Math.cos((angle * Math.PI) / 180) * dist, y: Math.sin((angle * Math.PI) / 180) * dist, opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.55, delay: Math.random() * 0.1, ease: "easeOut" }}
        />
      );
    })}
  </div>
);

const NAV_LINKS = [
  { label: "Hero",     href: "#hero" },
  { label: "ทักษะ",   href: "#skills" },
  { label: "ผลงาน",   href: "#projects" },
  { label: "Certs",   href: "#trials" },
  { label: "เกี่ยวกับ", href: "#about" },
];

const SOCIAL = [
  { icon: <Github  className="w-3.5 h-3.5" />, label: "GitHub",   href: "https://github.com/tophbeifong123" },
  { icon: <Linkedin className="w-3.5 h-3.5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/thumeena-pengchai-6babb5351/" },
  { icon: <Mail    className="w-3.5 h-3.5" />, label: "Email",    href: "mailto:thrrmunaphengchay@gmail.com" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [burst, setBurst] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Read saved theme
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const main = document.getElementById("main-scroll");
    if (!main) return;
    const sections = ["hero", "skills", "projects", "trials", "about"];
    const onScroll = () => {
      const scrollTop = main.scrollTop;
      const h = main.clientHeight;
      let cur = "hero";
      for (const id of sections) {
        const el = main.querySelector<HTMLElement>(`#${id}`);
        if (el && el.offsetTop <= scrollTop + h * 0.4) cur = id;
      }
      setActive(cur);
    };
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    const main = document.getElementById("main-scroll");
    main?.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggle = () => {
    if (burst) return;
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setBurst(true);
    setTimeout(() => setBurst(false), 650);
  };

  return (
    <>
      <AnimatePresence>{burst && <IceBurst />}</AnimatePresence>

      {/* ── Desktop Floating pill navbar ───────────────────────────── */}
      <motion.nav
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        style={{ whiteSpace: "nowrap" }}
      >
        {/* ── DESKTOP pill (md+) ─────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-1 px-3 py-2 rounded-full glass">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="text-sm font-black tracking-tighter mr-3 shrink-0"
            style={{ color: "var(--fg-main)" }}
          >
            THM<span style={{ color: "var(--primary)" }}>.</span>
          </button>

          {/* Nav links */}
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="relative px-3 py-1 rounded-full text-xs font-medium transition-colors"
              style={{
                color: active === l.href.slice(1) ? "var(--primary)" : "var(--fg-main)",
                opacity: active === l.href.slice(1) ? 1 : 0.55,
              }}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <motion.div
                  layoutId="nav-dot"
                  className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full"
                  style={{ background: "var(--primary)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
            </button>
          ))}

          {/* Divider */}
          <div className="w-px h-4 mx-1" style={{ background: "var(--border-color)" }} />

          {/* Social icon links */}
          {SOCIAL.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.88 }}
              aria-label={s.label}
              className="p-1.5 rounded-full transition-opacity hover:opacity-70"
              style={{ color: "var(--fg-main)", opacity: 0.5 }}
            >
              {s.icon}
            </motion.a>
          ))}

          {/* Divider */}
          <div className="w-px h-4 mx-1" style={{ background: "var(--border-color)" }} />

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            aria-label="สลับธีม"
            className="p-1.5 rounded-full transition-colors hover:opacity-70"
            style={{ color: "var(--primary)" }}
          >
            <motion.span key={theme} initial={{ rotate: -30, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.25 }} className="block">
              {theme === "light" ? <SubaruIcon /> : <IceIcon />}
            </motion.span>
          </motion.button>

          {/* Resume */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-1 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shrink-0"
            style={{ background: "var(--primary)" }}
          >
            CV
          </motion.a>
        </div>

        {/* ── MOBILE compact bar (< md) ──────────────────────────── */}
        <div className="flex md:hidden items-center gap-2 px-3 py-2 rounded-full glass">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="text-sm font-black tracking-tighter shrink-0"
            style={{ color: "var(--fg-main)" }}
          >
            THM<span style={{ color: "var(--primary)" }}>.</span>
          </button>

          <div className="flex-1" />

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.88 }}
            aria-label="สลับธีม"
            className="p-1.5 rounded-full"
            style={{ color: "var(--primary)" }}
          >
            <motion.span key={theme} initial={{ rotate: -30, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.25 }} className="block">
              {theme === "light" ? <SubaruIcon /> : <IceIcon />}
            </motion.span>
          </motion.button>

          {/* CV button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 rounded-full text-xs font-bold text-white shrink-0"
            style={{ background: "var(--primary)" }}
          >
            CV
          </motion.a>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.88 }}
            aria-label="เปิดเมนู"
            className="p-1.5 rounded-full"
            style={{ color: "var(--fg-main)" }}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Mobile Dropdown Menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-4 right-4 z-50 rounded-2xl p-4 flex flex-col gap-1 md:hidden"
            style={{
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Nav Links */}
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(l.href)}
                className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  color: active === l.href.slice(1) ? "var(--primary)" : "var(--fg-main)",
                  background: active === l.href.slice(1) ? "color-mix(in srgb, var(--primary) 10%, transparent)" : "transparent",
                }}
              >
                {active === l.href.slice(1) && <span className="mr-2" style={{ color: "var(--primary)" }}>▸</span>}
                {l.label}
              </motion.button>
            ))}

            {/* Divider */}
            <div className="h-px my-2 mx-2" style={{ background: "var(--border-color)" }} />

            {/* Social links */}
            <div className="flex items-center gap-3 px-4 py-2">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.88 }}
                  aria-label={s.label}
                  className="p-2 rounded-full"
                  style={{ color: "var(--fg-main)", opacity: 0.65, background: "var(--bg-alt)" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Backdrop to close menu on tap outside ────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
