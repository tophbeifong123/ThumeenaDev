import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Snowflake / Ice crystal SVG icon (Emilia Mode) ───────────────────────────
const EmiliaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
  </svg>
);

// ── Convenience store bag SVG icon (Subaru Mode) ─────────────────────────────
const SubaruIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 L4 6 H20 L18 2 Z" />
    <path d="M4 6 Q3 22 12 22 Q21 22 20 6" />
    <path d="M9 2 Q9 5 12 5 Q15 5 15 2" />
  </svg>
);

// ── Frost / ice burst particles ───────────────────────────────────────────────
const IceBurstPortal = () => {
  const particles = Array.from({ length: 32 });
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center">
      {/* Full-screen frost flash */}
      <motion.div
        className="absolute inset-0 bg-purple-300/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 0.6 }}
      />
      {/* Radial ice shards */}
      {particles.map((_, i) => {
        const angle = (i / particles.length) * 360;
        const dist = 120 + Math.random() * 240;
        const size = 3 + Math.random() * 9;
        const delay = Math.random() * 0.2;
        return (
          <motion.div
            key={i}
            className="absolute bg-purple-200/90 shadow-[0_0_10px_3px_rgba(168,85,247,0.7)]"
            style={{
              width: size,
              height: size * 2.5,
              borderRadius: 99,
              rotate: angle,
            }}
            initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0.4],
              opacity: [1, 0.8, 0],
              x: Math.cos((angle * Math.PI) / 180) * dist,
              y: Math.sin((angle * Math.PI) / 180) * dist,
            }}
            transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          />
        );
      })}
    </div>
  );
};

// ── Theme Toggle ──────────────────────────────────────────────────────────────
const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    if (transitioning) return;
    setTransitioning(true);

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Transition effect lasts 800ms
    setTimeout(() => setTransitioning(false), 900);
  };

  const isLight = theme === 'light';

  return (
    <>
      {/* Ice burst particles on switch */}
      <AnimatePresence>{transitioning && <IceBurstPortal />}</AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.88 }}
        onClick={toggle}
        aria-label={isLight ? 'Switch to Emilia Mode (Dark)' : 'Switch to Subaru Mode (Light)'}
        title={isLight ? '🌙 Switch to Emilia Mode' : '☀️ Switch to Subaru Mode'}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide
          border transition-all duration-400
          ${isLight
            ? 'bg-orange-50 border-orange-300 text-orange-600 hover:bg-orange-100'
            : 'bg-indigo-950/60 border-purple-500/50 text-purple-300 hover:bg-indigo-900/60 shadow-[0_0_12px_2px_rgba(168,85,247,0.25)]'
          }
        `}
      >
        {/* Icon */}
        <motion.span
          key={theme} // remount = re-animate on every switch
          initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 30, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.35 }}
        >
          {isLight ? <SubaruIcon /> : <EmiliaIcon />}
        </motion.span>

        {/* Label */}
        <motion.span
          key={`label-${theme}`}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className="hidden sm:block whitespace-nowrap"
        >
          {isLight ? 'Subaru Mode' : 'Emilia Mode'}
        </motion.span>
      </motion.button>
    </>
  );
};

export default ThemeToggle;
