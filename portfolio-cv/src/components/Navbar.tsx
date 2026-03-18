import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

// ── Ice crystal SVG ───────────────────────────────────────────────────
const IceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
    <line x1="5.5" y1="5.5" x2="18.5" y2="18.5"/><line x1="18.5" y1="5.5" x2="5.5" y2="18.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
  </svg>
);

// Subaru bag
const SubaruIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M6 2L3.5 7H20.5L18 2Z"/>
    <path d="M3.5 7C3 22 21 22 20.5 7"/>
    <path d="M9 2C9 5 15 5 15 2"/>
  </svg>
);

// Ice burst particle effect on theme switch
const IceBurst = () => (
  <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
    {Array.from({length:18}).map((_,i) => {
      const angle = (i/18)*360;
      const dist  = 80 + Math.random()*160;
      const size  = 3 + Math.random()*5;
      return (
        <motion.div key={i} className="absolute rounded-full left-1/2 top-1/2"
          style={{width:size, height:size, background:'var(--primary)', marginLeft:-size/2, marginTop:-size/2}}
          initial={{x:0,y:0,opacity:1}}
          animate={{x:Math.cos(angle*Math.PI/180)*dist, y:Math.sin(angle*Math.PI/180)*dist, opacity:0, scale:0.2}}
          transition={{duration:0.55, delay:Math.random()*0.1, ease:'easeOut'}}/>
      );
    })}
  </div>
);

const NAV_LINKS = [
  {label:'Hero',   href:'#hero'},
  {label:'ทักษะ',  href:'#skills'},
  {label:'ผลงาน', href:'#projects'},
  {label:'Certs',  href:'#trials'},
  {label:'เกี่ยวกับ',href:'#about'},
];

const SOCIAL = [
  {icon:<Github className="w-3.5 h-3.5"/>,   label:'GitHub',   href:'https://github.com/'},
  {icon:<Linkedin className="w-3.5 h-3.5"/>, label:'LinkedIn', href:'https://linkedin.com/'},
  {icon:<Mail className="w-3.5 h-3.5"/>,     label:'Email',    href:'mailto:thumeena@example.com'},
];

export default function Navbar() {
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  const [burst, setBurst] = useState(false);
  const [active, setActive] = useState('hero');

  // Read saved theme
  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const main = document.getElementById('main-scroll');
    if (!main) return;
    const sections = ['hero','skills','projects','trials','about'];
    const onScroll = () => {
      const scrollTop = main.scrollTop;
      const h = main.clientHeight;
      let cur = 'hero';
      for (const id of sections) {
        const el = main.querySelector<HTMLElement>(`#${id}`);
        if (el && el.offsetTop <= scrollTop + h * 0.4) cur = id;
      }
      setActive(cur);
    };
    main.addEventListener('scroll', onScroll, {passive:true});
    return () => main.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const main = document.getElementById('main-scroll');
    main?.querySelector(href)?.scrollIntoView({behavior:'smooth'});
  };

  const toggle = () => {
    if (burst) return;
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
    setBurst(true);
    setTimeout(() => setBurst(false), 650);
  };

  return (
    <>
      <AnimatePresence>{burst && <IceBurst />}</AnimatePresence>

      {/* ── Floating pill navbar ──────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-3 py-2 rounded-full glass"
        style={{ whiteSpace: 'nowrap' }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('#hero')}
          className="text-sm font-black tracking-tighter mr-3 shrink-0"
          style={{ color: 'var(--fg-main)' }}>
          THM<span style={{ color: 'var(--primary)' }}>.</span>
        </button>

        {/* Nav links */}
        {NAV_LINKS.map(l => (
          <button key={l.href}
            onClick={() => scrollTo(l.href)}
            className="relative px-3 py-1 rounded-full text-xs font-medium transition-colors"
            style={{ color: active === l.href.slice(1) ? 'var(--primary)' : 'var(--fg-main)', opacity: active === l.href.slice(1) ? 1 : 0.55 }}>
            {l.label}
            {active === l.href.slice(1) && (
              <motion.div layoutId="nav-dot" className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full"
                style={{ background: 'var(--primary)' }} transition={{ type:'spring', stiffness:380, damping:28 }} />
            )}
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-4 mx-1" style={{ background: 'var(--border-color)' }} />

        {/* Social icon links */}
        {SOCIAL.map(s => (
          <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.88 }}
            aria-label={s.label}
            className="p-1.5 rounded-full transition-opacity hover:opacity-70"
            style={{ color: 'var(--fg-main)', opacity: 0.5 }}>
            {s.icon}
          </motion.a>
        ))}

        {/* Divider */}
        <div className="w-px h-4 mx-1" style={{ background: 'var(--border-color)' }} />

        {/* Theme toggle */}
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.88 }}
          aria-label="สลับธีม"
          className="p-1.5 rounded-full transition-colors hover:opacity-70"
          style={{ color: 'var(--primary)' }}>
          <motion.span key={theme} initial={{ rotate: -30, scale: 0.6 }} animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.25 }} className="block">
            {theme === 'light' ? <SubaruIcon /> : <IceIcon />}
          </motion.span>
        </motion.button>

        {/* Resume */}
        <motion.a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="ml-1 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shrink-0"
          style={{ background: 'var(--primary)' }}>
          CV
        </motion.a>
      </motion.nav>
    </>
  );
}
