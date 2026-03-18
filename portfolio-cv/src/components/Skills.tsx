import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiBootstrap,
  SiNestjs, SiMysql, SiMongodb, SiGooglecloud, SiKubernetes, SiDocker, SiGo,
  SiUnity, SiGit, SiFigma,
  SiCplusplus, SiC, SiPython
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandCSharp } from 'react-icons/tb';

const CATS = [
  { id:'fe', lore:'ศิลปะแห่งวิญญาณ', tech:'Frontend Web',      
    skills:[
      { name: 'React', icon: <SiReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> }
    ] 
  },
  { id:'be', lore:'เวทมนตร์ยิน',     tech:'Backend & DevOps', 
    skills:[
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'Go', icon: <SiGo/> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> }
    ] 
  },
  { id:'cs', lore:'ตรรกะและภาษา',     tech:'Languages / Engine', 
    skills:[
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C#', icon: <TbBrandCSharp /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Unity', icon: <SiUnity /> }
    ] 
  },
  { id:'gm', lore:'คลังอาวุธ',       tech:'Tools',    
    skills:[
      { name: 'Git', icon: <SiGit /> },
      { name: 'VS Code', icon: <VscVscode /> },
      { name: 'Figma', icon: <SiFigma /> }
    ] 
  },
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {CATS.map((cat, ci) => (
          <motion.div key={cat.id}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.5, ease: "easeOut" }}
            className="group relative p-6 sm:p-8 rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{ 
              background: 'var(--bg-card)', 
              border: '1px solid var(--border-color)',
            }}>
            
            {/* Ambient Glow */}
            <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl z-0"
                 style={{ background: 'radial-gradient(circle at center, rgba(234,88,12,0.08) 0%, transparent 70%)' }} />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1">
                  <span className="text-xl sm:text-2xl font-black block leading-tight mb-1" style={{ color: 'var(--fg-main)' }}>
                    {cat.tech}
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
                    {cat.lore}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((sk, si) => (
                  <motion.span key={sk.name}
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    className="flex justify-center items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ 
                      background: 'color-mix(in srgb, var(--primary) 8%, transparent)', 
                      color: 'var(--fg-main)', 
                      border: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)' 
                    }}>
                    <span className="text-[14px]" style={{ color: 'var(--primary)' }}>{sk.icon}</span>
                    {sk.name}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                 style={{ background: 'radial-gradient(circle at top right, rgba(234,88,12,0.2) 0%, transparent 70%)' }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
