import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Github, ExternalLink, Repeat2, CheckCircle2 } from 'lucide-react';

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

// Subaru: glitch scan-lines
const GlitchOverlay = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <>
        <motion.div className="absolute inset-0 pointer-events-none z-20"
          style={{ background: 'rgba(234,88,12,0.13)', mixBlendMode: 'screen' }}
          initial={{ opacity: 0 }} animate={{ opacity:[0,0.6,0,0.4,0] }}
          transition={{ duration: 0.3, times:[0,0.1,0.35,0.55,1] }} />
        {[22,52,74].map((top, i) => (
          <motion.div key={i} className="absolute left-0 right-0 pointer-events-none z-20"
            style={{ top:`${top}%`, height:2, background:'var(--primary)' }}
            initial={{ x:'-100%', opacity:0.8 }} animate={{ x:'110%', opacity:0 }}
            transition={{ duration:0.24, delay:i*0.04 }} />
        ))}
      </>
    )}
  </AnimatePresence>
);

// Emilia: rising sparks
const EmiliaParticles = ({ active }: { active: boolean }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
    <AnimatePresence>
      {active && Array.from({length:12}).map((_,i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{
            width: 2+Math.random()*4, height: 2+Math.random()*4,
            left:`${15+Math.random()*70}%`, bottom:'8%',
            background:'var(--primary)'
          }}
          initial={{y:0,opacity:0.9}} animate={{y:-(50+Math.random()*90),opacity:0}}
          exit={{opacity:0}} transition={{duration:1+Math.random()*0.7,delay:Math.random()*0.4,ease:'easeOut'}} />
      ))}
    </AnimatePresence>
  </div>
);

const PROJECTS = [
  {
    id:'archives-bia', questNumber:'เควส I', title:'Archives-BIA',
    subtitle:'ระบบจัดการเอกสาร',
    image:'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=900&auto=format&fit=crop',
    tech:['Next.js','NestJS','PostgreSQL','Microsoft Azure'],
    loop:'โครงสร้างโฟลเดอร์แบบ Recursive ทำให้เกิด N+1 query — ทุกระดับดึง DB ใหม่ ระบบช้าเมื่อต้นไม้ลึกขึ้น',
    overcome:'ใช้ Recursive CTE ใน PostgreSQL ดึงทั้งต้นไม้ใน Query เดียว + Cache ด้วย NestJS interceptor เวลาตอบสนองลดจาก 3วิ → 180ms',
    github:'#', demo:'#',
  },
  {
    id:'towerdefense', questNumber:'เควส II', title:'Tower Defense RPG',
    subtitle:'เกมวางกลยุทธ์ Real-time',
    image:'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900&auto=format&fit=crop',
    tech:['Unity','C#','NavMesh','Photon'],
    loop:'ระบบ Pathfinding คำนวณ NavMesh ใหม่ทุกเฟรมเมื่อวางหอคอย ทำให้ FPS ดิ่งหนัก',
    overcome:'ใช้ Dirty-Flag Pattern — Pathfinding คำนวณเฉพาะเมื่อ Grid เปลี่ยนจริงๆ และ Batch ไปรัน Job System ของ Unity ค้างที่ 60fps',
    github:'#', demo:'#',
  },
  {
    id:'portfolio', questNumber:'เควส III', title:'Portfolio CV (เว็บนี้)',
    subtitle:'Astro + React + Framer Motion',
    image:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop',
    tech:['Astro','React','Tailwind CSS 4','Framer Motion'],
    loop:'การสลับ Light/Dark ธีมทำให้หน้าจอกระพริบขาวก่อนโหลด (FOUC) ทุก Page Load',
    overcome:'เพิ่ม Inline Script ใน <head> อ่าน localStorage ก่อน Paint แรก ตั้ง .dark class แบบ Synchronous — ไม่มีกระพริบอีก',
    github:'#', demo:'#',
  },
];

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const isDark = useDarkMode();
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin:'-60px' });
  const isReversed = index % 2 === 1;

  return (
    <motion.div ref={ref}
      initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:0.55,delay:index*0.08}}
      className={`flex flex-col ${isReversed?'md:flex-row-reverse':'md:flex-row'} gap-7 items-start`}>

      {/* Image */}
      <div className="w-full md:w-1/2 shrink-0">
        <div className="relative rounded-xl overflow-hidden aspect-video cursor-pointer"
          style={{border:'1px solid var(--border-color)'}}
          onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
          <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover"
            animate={hovered?{scale:1.05,filter:'brightness(0.6)'}:{scale:1,filter:'brightness(1)'}}
            transition={{duration:0.3}} />
          {!isDark && <GlitchOverlay active={hovered} />}
          {isDark && <EmiliaParticles active={hovered} />}
          <motion.div className="absolute inset-0 flex items-center justify-center gap-3"
            animate={hovered?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>
            <a href={project.github} className="btn btn-xs rounded-full font-semibold"
              style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)'}}>
              <Github className="w-3 h-3" /> โค้ด
            </a>
            <a href={project.demo} className="btn btn-xs rounded-full font-semibold text-white"
              style={{background:'var(--primary)',border:'none'}}>
              <ExternalLink className="w-3 h-3" /> Demo
            </a>
          </motion.div>
          <span className="absolute top-2.5 left-2.5 badge badge-sm font-bold"
            style={{background:'var(--bg-main)',color:'var(--primary)',border:'1px solid var(--border-color)'}}>
            {project.questNumber}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 space-y-3">
        <div>
          <h3 className="text-lg font-bold" style={{color:'var(--fg-main)'}}>{project.title}</h3>
          <p className="text-xs" style={{color:'var(--primary)'}}>{project.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t=>(
            <span key={t} className="badge badge-sm" style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)'}}>{t}</span>
          ))}
        </div>
        {/* Loop */}
        <div className="rounded-xl p-3.5 space-y-1" style={{background:'var(--bg-card)',border:'1px solid var(--border-color)'}}>
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide" style={{color:'var(--danger)'}}>
            <Repeat2 className="w-3 h-3" /> จุดพัง (The Loop)
          </div>
          <p className="text-xs leading-relaxed" style={{color:'var(--fg-main)',opacity:0.65}}>{project.loop}</p>
        </div>
        {/* Overcome */}
        <div className="rounded-xl p-3.5 space-y-1" style={{background:'var(--bg-card)',border:'1px solid var(--border-color)'}}>
          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide" style={{color:'var(--success)'}}>
            <CheckCircle2 className="w-3 h-3" /> จุดพลิก (The Overcome)
          </div>
          <p className="text-xs leading-relaxed" style={{color:'var(--fg-main)',opacity:0.65}}>{project.overcome}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="section-inner">
      <div className="mb-12">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{color:'var(--primary)'}}>
          Section III · บันทึกสนามรบ
        </motion.p>
        <motion.h2 initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06}}
          className="text-3xl sm:text-4xl font-black tracking-tighter">
          The <span className="gradient-text">Chronicles</span>
        </motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.14}}
          className="mt-2 text-sm" style={{color:'var(--fg-main)',opacity:0.5}}>
          ทุกลูปสอนบางอย่าง — เควสที่รอดมาได้ พร้อมจุดพังและจุดพลิก
        </motion.p>
      </div>
      <div className="space-y-16">
        {PROJECTS.map((p,i)=><ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </div>
  );
}
