import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, GraduationCap, Users, BookOpen, Star } from 'lucide-react';

const POINTS = [
  {
    id: 'university',
    year: '2022 — ปัจจุบัน',
    tag: 'จุดบันทึกปัจจุบัน',
    title: 'วศ.บ. วิศวกรรมคอมพิวเตอร์',
    org: 'สถาบัน KMITL',
    desc: 'ชั้นปีที่ 3 มุ่งเน้น Full-Stack Web, Game Engine และสถิติประยุกต์ สร้างโปรเจกต์จริงควบคู่การเรียน',
    bullets: ['GPA: 3.XX (อัปเดต)', 'วิชาหลัก: ระบบเว็บ, โครงสร้างข้อมูล, Game Programming', 'Side Quest: Azure Cloud, R'],
    icon: <GraduationCap className="w-4 h-4" />,
    current: true,
  },
  {
    id: 'pupa',
    year: '2023 — ปัจจุบัน',
    tag: 'ภาระกิจชมรม',
    title: 'หัวหน้าฝ่ายสื่อสารและรับสมัคร — ชมรม PUPA',
    org: 'กิจกรรมนักศึกษา',
    desc: 'ดูแลระบบสื่อสารของชมรมและจัดแคมเปญรับสมัครสมาชิก เข้าถึงผู้สนใจกว่า 200 คนต่อรอบ',
    bullets: ['บริหาร Social Media และระบบประกาศภายใน', 'จัดแคมเปญรับสมัคร — เข้าถึง 200+ คนต่อรอบ', 'ประสานงานข้ามทีมกับฝ่ายดีไซน์และอีเวนต์'],
    icon: <Users className="w-4 h-4" />,
    current: false,
  },
  {
    id: 'self',
    year: '2021 — 2022',
    tag: 'ฝึกก่อนเข้ามหาวิทยาลัย',
    title: 'เรียนด้วยตัวเอง — Web & Game Dev',
    org: 'Online Courses / Open Source',
    desc: 'ศึกษา React, Unity และ C++ ผ่านแพลตฟอร์มออนไลน์ สร้างเกม 3 ตัวและ Portfolio แรกก่อนเข้าเรียน',
    bullets: ['Unity ขั้นพื้นฐานและ C# scripting', 'React + JavaScript front-end', 'Git และ Open-source'],
    icon: <BookOpen className="w-4 h-4" />,
    current: false,
  },
  {
    id: 'highschool',
    year: '2019 — 2022',
    tag: 'Origin Story',
    title: 'มัธยมศึกษาตอนปลาย — สายวิทย์-คณิต',
    org: 'โรงเรียนมัธยม กรุงเทพฯ',
    desc: 'เรียนสายวิทย์-คณิต เขียนโค้ดครั้งแรกในวิชา Computer Science — นั่นคือจุดเริ่มต้นของทุกอย่าง',
    bullets: ['สำเร็จด้วยเกียรตินิยม', 'โค้ดแรก: Python พื้นฐาน'],
    icon: <Star className="w-4 h-4" />,
    current: false,
  },
];

const Entry = ({ pt, isLast }: { pt: typeof POINTS[0]; isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="flex gap-6">
      {/* Left: dot + line */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: 'spring', stiffness: 380, damping: 20, delay: 0.1 }}
          className="z-10 flex items-center justify-center w-9 h-9 rounded-full relative"
          style={{
            background: pt.current ? 'var(--primary)' : 'var(--bg-card)',
            border: '2px solid var(--primary)',
            color: pt.current ? '#fff' : 'var(--primary)',
          }}
        >
          {pt.icon}
          {pt.current && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: '2px solid var(--primary)' }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          )}
        </motion.div>
        {!isLast && (
          <div className="flex-1 w-px mt-1" style={{ background: 'var(--border-color)' }}>
            <motion.div
              className="w-full origin-top"
              style={{ background: 'var(--primary)' }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        )}
      </div>

      {/* Right: content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`pb-10 ${isLast ? 'pb-0' : ''}`}
      >
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full"
            style={{ background: 'var(--bg-card)', color: 'var(--primary)', border: '1px solid var(--border-color)' }}>
            {pt.tag}
          </span>
          <span className="text-xs" style={{ color: 'var(--fg-main)', opacity: 0.45 }}>{pt.year}</span>
          {pt.current && (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full animate-pulse"
              style={{ color: 'var(--success)', border: '1px solid var(--success)', opacity: 0.8 }}>
              ● กำลังดำเนินการ
            </span>
          )}
        </div>
        <h3 className="text-base font-bold leading-tight" style={{ color: 'var(--fg-main)' }}>{pt.title}</h3>
        <p className="text-xs mt-0.5 mb-2" style={{ color: 'var(--primary)' }}>{pt.org}</p>
        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--fg-main)', opacity: 0.6 }}>{pt.desc}</p>
        <ul className="space-y-1.5">
          {pt.bullets.map((b, i) => (
            <motion.li key={i} className="flex items-start gap-2 text-xs"
              style={{ color: 'var(--fg-main)', opacity: 0.65 }}
              initial={{ opacity: 0, x: 8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}>
              <Code2 className="w-3 h-3 shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
              {b}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default function SavePoints() {
  return (
    <div className="section-inner">
      <div className="mb-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--primary)' }}>
          Section VI · ประสบการณ์และการศึกษา
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-black tracking-tighter" style={{ color: 'var(--fg-main)' }}>
          Save <span className="gradient-text">Points</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-sm max-w-sm" style={{ color: 'var(--fg-main)', opacity: 0.5 }}>
          ทุกฮีโร่ต้องการจุดบันทึก — นี่คือช่วงเวลาที่หล่อหลอมทุกอย่างขึ้นมา
        </motion.p>
      </div>

      <div>
        {POINTS.map((pt, i) => (
          <Entry key={pt.id} pt={pt} isLast={i === POINTS.length - 1} />
        ))}
      </div>
    </div>
  );
}
