import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ShieldCheck, Trophy, Code2, Cloud, Gamepad2, BarChart3 } from 'lucide-react';

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

function useTilt(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
      el.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
    };
    const leave = () => { el.style.transform = 'perspective(600px) rotateX(0) rotateY(0) scale(1)'; };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, [enabled]);
  return ref;
}

const CERTS = [
  { id: 'azure', icon: <Cloud className="w-5 h-5" />, title: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', date: '2024', desc: 'Cloud concepts, core Azure services, security และ pricing', tag: 'Cloud', url: '#' },
  { id: 'cf', icon: <Code2 className="w-5 h-5" />, title: 'Competitive Programming', issuer: 'Codeforces', date: 'ต่อเนื่อง', desc: 'คะแนนสูงสุด 1400 (Specialist) — Top 25%', tag: 'C++ / Algorithms', url: '#' },
  { id: 'unity', icon: <Gamepad2 className="w-5 h-5" />, title: 'Unity Certified Associate', issuer: 'Unity Technologies', date: '2023', desc: 'Unity Engine, C# scripting และ Game systems design', tag: 'Game Dev', url: '#' },
  { id: 'stats', icon: <BarChart3 className="w-5 h-5" />, title: 'Applied Statistics with R', issuer: 'Coursera / KMITL', date: '2024', desc: 'การวิเคราะห์สถิติ, Hypothesis testing และ Data visualisation', tag: 'Data / R', url: '#' },
  { id: 'github', icon: <ShieldCheck className="w-5 h-5" />, title: 'GitHub Foundations', issuer: 'GitHub', date: '2024', desc: 'Git, Pull Requests, GitHub Actions CI/CD', tag: 'DevOps', url: '#' },
  { id: 'hack', icon: <Trophy className="w-5 h-5" />, title: 'Hackathon — Top 8 Finalist', issuer: 'Thailand National Hackathon', date: '2023', desc: 'สร้าง Real-time collaboration tool ใน 48 ชั่วโมง จาก 60+ ทีม', tag: 'Achievement', url: '#' },
];

const CertCard = ({ cert, index }: { cert: typeof CERTS[0]; index: number }) => {
  const isDark = useDarkMode();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [hovered, setHovered] = useState(false);
  const tiltRef = useTilt(!isDark);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div ref={tiltRef} style={{ transition: 'transform 0.2s ease' }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div
          className="h-full p-5 rounded-2xl flex flex-col gap-3 transition-all duration-300"
          style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'var(--bg-card)',
            border: hovered
              ? `1px solid var(--primary)`
              : `1px solid var(--border-color)`,
            backdropFilter: isDark ? 'blur(10px)' : undefined,
            boxShadow: isDark && hovered
              ? '0 0 28px rgba(139,92,246,0.2)'
              : hovered && !isDark
              ? '0 4px 20px rgba(234,88,12,0.12)'
              : undefined,
          }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between">
            <motion.div
              className="p-2.5 rounded-xl"
              initial={!isDark ? { scale: 2.5, opacity: 0 } : { opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={!isDark
                ? { type: 'spring', stiffness: 400, damping: 16, delay: 0.2 + index * 0.05 }
                : { duration: 0.7, delay: 0.25 + index * 0.05 }}
              style={{
                filter: isDark && hovered ? 'drop-shadow(0 0 8px var(--primary))' : undefined,
                background: 'var(--bg-main)',
                color: 'var(--primary)',
              } as React.CSSProperties}
            >
              {cert.icon}
            </motion.div>
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
              style={{ color: 'var(--primary)', border: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
              {cert.tag}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-sm font-bold leading-tight" style={{ color: 'var(--fg-main)' }}>{cert.title}</h3>
            <p className="text-xs mt-1 mb-2" style={{ color: 'var(--fg-main)', opacity: 0.45 }}>
              {cert.issuer} · {cert.date}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-main)', opacity: 0.6 }}>{cert.desc}</p>
          </div>

          {/* Verify link */}
          <motion.a
            href={cert.url} target="_blank" rel="noopener noreferrer"
            className="self-start flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
            style={{ color: 'var(--primary)', border: '1px solid var(--border-color)' }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          >
            <ExternalLink className="w-3 h-3" />
            {isDark ? 'ยืนยันตรา' : 'ยืนยันหลักฐาน'}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Trials() {
  return (
    <div className="section-inner">
      <div className="mb-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--primary)' }}>
          Section V · บททดสอบที่ผ่านมา
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-black tracking-tighter" style={{ color: 'var(--fg-main)' }}>
          Trials <span className="gradient-text">Overcome</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-sm max-w-md" style={{ color: 'var(--fg-main)', opacity: 0.5 }}>
          ทุกใบ Certificate คือแผลที่เย็บไว้ ทุก Achievement คือลูปที่รอดมาได้
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTS.map((cert, i) => <CertCard key={cert.id} cert={cert} index={i} />)}
      </div>
    </div>
  );
}
