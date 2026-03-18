import React from 'react';
import { motion } from 'framer-motion';

const CATS = [
  { id:'fe', lore:'ศิลปะแห่งวิญญาณ', tech:'Frontend',      skills:['React','Next.js','Astro','Tailwind CSS','TypeScript'] },
  { id:'be', lore:'เวทมนตร์ยิน',     tech:'Backend & Cloud', skills:['NestJS','PostgreSQL','MongoDB','Azure','REST / GraphQL'] },
  { id:'gm', lore:'คลังอาวุธ',       tech:'Game & Tools',    skills:['Unity','C#','Git','Blender','Docker'] },
  { id:'cs', lore:'ตรรกะต่อสู้',     tech:'Problem Solving', skills:['C++','Python','R / สถิติ','Algorithms','Codeforces'] },
];

export default function Skills() {
  return (
    <div className="section-inner">
      <div className="mb-12">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{color:'var(--primary)'}}>
          Section II · พรจากเหล่าวิญญาณ
        </motion.p>
        <motion.h2 initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06}}
          className="text-3xl sm:text-5xl font-black tracking-tighter">
          Divine <span className="gradient-text">Protections</span>
        </motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.14}}
          className="mt-2 text-sm" style={{color:'var(--fg-main)',opacity:0.48}}>
          ทุกตัวละครมีพรจากเหล่าวิญญาณ — นี่คือของฉัน จัดกลุ่มตามสาขา
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-10">
        {CATS.map((cat, ci) => (
          <motion.div key={cat.id}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{delay:ci*0.07,duration:0.45}}>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-sm font-bold" style={{color:'var(--fg-main)'}}>{cat.lore}</span>
              <span className="text-[10px] font-bold tracking-widest uppercase" style={{color:'var(--primary)'}}>{cat.tech}</span>
              <div className="flex-1 h-px" style={{background:'var(--border-color)'}}/>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((sk,si)=>(
                <motion.span key={sk}
                  initial={{opacity:0,scale:0.88}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
                  transition={{delay:ci*0.05+si*0.04}}
                  whileHover={{scale:1.07}}
                  className="badge badge-sm font-medium py-3 px-3 rounded-full cursor-default card-hover"
                  style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)'}}>
                  {sk}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
