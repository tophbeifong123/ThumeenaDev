import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{color:'var(--primary)'}}>
          Section VII · ทำสัญญา
        </motion.p>
        <motion.h2 initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.06}}
          className="text-3xl sm:text-4xl font-black tracking-tighter">
          Make a <span className="gradient-text">Pact</span>
        </motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.14}}
          className="mt-2 text-sm" style={{color:'var(--fg-main)',opacity:0.5}}>
          มีโปรเจกต์ อยากร่วมงาน หรือแค่อยากคุย — ทิ้งข้อความไว้ได้เลย
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <motion.div initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5}}
          className="space-y-5">
          {[
            { icon:<Mail className="w-4 h-4"/>, text:'thumeena@example.com' },
            { icon:<MapPin className="w-4 h-4"/>, text:'กรุงเทพมหานคร ประเทศไทย' },
          ].map(({icon,text})=>(
            <div key={text} className="flex items-center gap-3 text-sm" style={{color:'var(--fg-main)'}}>
              <span style={{color:'var(--primary)'}}>{icon}</span>
              <span style={{opacity:0.6}}>{text}</span>
            </div>
          ))}

          <div className="flex gap-2 pt-1">
            {[{icon:<Github className="w-4 h-4"/>,label:'GitHub',href:'#'},{icon:<Linkedin className="w-4 h-4"/>,label:'LinkedIn',href:'#'}].map(s=>(
              <motion.a key={s.label} href={s.href} whileHover={{scale:1.1}} whileTap={{scale:0.92}}
                className="btn btn-sm btn-square rounded-xl"
                style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)'}}
                aria-label={s.label}>
                {s.icon}
              </motion.a>
            ))}
          </div>

          <div className="pt-2 border-t" style={{borderColor:'var(--border-color)'}}>
            <p className="text-xs mb-2" style={{color:'var(--fg-main)',opacity:0.35}}>สร้างด้วย</p>
            <div className="flex flex-wrap gap-1.5">
              {['Astro','React','Tailwind v4','Framer Motion','DaisyUI'].map(t=>(
                <span key={t} className="badge badge-sm"
                  style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)',opacity:0.7}}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form initial={{opacity:0,x:16}} whileInView={{opacity:1,x:0}} viewport={{once:true}}
          transition={{duration:0.5,delay:0.1}} onSubmit={handleSubmit} className="space-y-3.5">
          {[{id:'name',label:'ชื่อ',type:'text',ph:'ชื่อของคุณ'},{id:'email',label:'อีเมล',type:'email',ph:'email@example.com'}].map(f=>(
            <div key={f.id}>
              <label htmlFor={f.id} className="label label-text text-xs" style={{color:'var(--fg-main)',opacity:0.55}}>{f.label}</label>
              <input id={f.id} type={f.type} placeholder={f.ph} required
                className="input input-sm w-full rounded-xl"
                style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)'}}
                onFocus={e=>{e.currentTarget.style.outline=`2px solid var(--primary)`;e.currentTarget.style.outlineOffset='1px';}}
                onBlur={e=>{e.currentTarget.style.outline='none';}} />
            </div>
          ))}
          <div>
            <label htmlFor="msg" className="label label-text text-xs" style={{color:'var(--fg-main)',opacity:0.55}}>ข้อความ</label>
            <textarea id="msg" rows={4} placeholder="สวัสดี ฉันอยากคุยเรื่อง..." required
              className="textarea textarea-sm w-full rounded-xl resize-none"
              style={{background:'var(--bg-card)',color:'var(--fg-main)',border:'1px solid var(--border-color)'}}
              onFocus={e=>{e.currentTarget.style.outline=`2px solid var(--primary)`;e.currentTarget.style.outlineOffset='1px';}}
              onBlur={e=>{e.currentTarget.style.outline='none';}} />
          </div>
          <motion.button type="submit" whileHover={{scale:1.02}} whileTap={{scale:0.97}}
            className="btn btn-sm w-full rounded-xl font-semibold text-white"
            style={{background:sent?'var(--success)':'var(--primary)',border:'none',transition:'background 0.3s'}}>
            {sent ? '✓ ส่งสำเร็จ!' : <><Send className="w-3.5 h-3.5" /> ส่งข้อความ</>}
          </motion.button>
        </motion.form>
      </div>

      <p className="mt-10 text-center text-xs" style={{color:'var(--fg-main)',opacity:0.25}}>
        © {new Date().getFullYear()} ธรรมีนา · Start from Zero
      </p>
    </div>
  );
}
