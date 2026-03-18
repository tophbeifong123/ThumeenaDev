import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, GraduationCap, Users, BookOpen, Star } from "lucide-react";

const POINTS = [
  {
    id: "bonmek",
    year: "ม.ค. 2025 — ปัจจุบัน",
    tag: "จุดบันทึกปัจจุบัน",
    title: "Frontend Web Developer (การฝึกงาน)",
    org: "Bonmek",
    desc: "มีส่วนร่วมพัฒนา Wise Review Platform ปฏิบัติงานแบบผสม (Hybrid) ในเขตจังหวัดสงขลา",
    bullets: [
      "Programming (Modern Web Tech)",
      "Team Management & Collaboration"
    ],
    icon: <Code2 className="w-4 h-4" />,
    current: true,
  },
  {
    id: "psu_edu",
    year: "มิ.ย. 2022 — มี.ค. 2026",
    tag: "The Academy",
    title: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
    org: "มหาวิทยาลัยสงขลานครินทร์ (PSU)",
    desc: "นิสิตชั้นปีที่ 3 หลงใหลในการพัฒนา Web Application การออกแบบเว็บ และระบบเครือข่าย",
    bullets: [
      "ทักษะหลัก: Web / Game Development",
      "กิจกรรมพิเศษ: Esports"
    ],
    icon: <GraduationCap className="w-4 h-4" />,
    current: false,
  },
  {
    id: "cert_ctf",
    year: "ก.ค. 2025 (หรือ 2024)",
    tag: "Quest Completed",
    title: "กิจกรรม CTF BOOT CAMP รุ่นที่ 2",
    org: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ",
    desc: "สถาบันวิชาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ ได้ผ่านการอบรมเชิงปฏิบัติการ",
    bullets: [
      "Cybersecurity (ความปลอดภัยทางไซเบอร์)"
    ],
    icon: <Star className="w-4 h-4" />,
    current: false,
  },
  {
    id: "cert_ai",
    year: "มิ.ย. 2025 (หรือ 2024)",
    tag: "Quest Completed",
    title: "PSU Cybersecurity and Data Privacy Days ครั้งที่ 2",
    org: "สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ ม.สงขลานครินทร์",
    desc: "เข้าร่วมกิจกรรม 'Cybersecurity and AI'",
    bullets: [
      "Cybersecurity",
      "Artificial Intelligence Awareness"
    ],
    icon: <BookOpen className="w-4 h-4" />,
    current: false,
  },
];

const Entry = ({ pt, isLast }: { pt: (typeof POINTS)[0]; isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="flex gap-4 sm:gap-6 group">
      {/* ── Left: Timeline Node & Line ── */}
      <div className="flex flex-col items-center shrink-0 mt-2 sm:mt-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 20,
            delay: 0.1,
          }}
          className="z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full relative shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{
            background: pt.current ? "var(--primary)" : "var(--bg-card)",
            border: "2px solid var(--primary)",
            color: pt.current ? "#fff" : "var(--primary)",
          }}
        >
          {pt.icon}
          {pt.current && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid var(--primary)" }}
              animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          )}
        </motion.div>
        
        {!isLast && (
          <div className="flex-1 w-[2px] mt-2 mb-2 rounded-full overflow-hidden"
            style={{ background: "var(--border-color)" }}>
            <motion.div
              className="w-full h-full origin-top"
              style={{ background: "var(--primary)" }}
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        )}
      </div>

      {/* ── Right: Content Card ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`flex-1 pb-10 ${isLast ? "pb-0" : ""}`}
      >
        <div className="p-6 sm:p-8 rounded-3xl border transition-all duration-300 group-hover:-translate-y-1 shadow-sm group-hover:shadow-[0_10px_40px_rgba(234,88,12,0.1)] relative overflow-hidden"
             style={{ background: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
             
          {/* Subtle Ambient Glow on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
               style={{ background: 'linear-gradient(135deg, rgba(234,88,12,0.03) 0%, transparent 100%)' }} />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-[6px]"
                style={{
                  background: "var(--bg-card)",
                  color: "var(--primary)",
                  border: "1px solid var(--primary)",
                }}
              >
                {pt.tag}
              </span>
              <span
                className="text-xs font-bold"
                style={{ color: "var(--fg-main)", opacity: 0.45 }}
              >
                {pt.year}
              </span>
              {pt.current && (
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-[6px] animate-pulse"
                  style={{
                    color: "var(--success)",
                    border: "1px solid var(--success)",
                    background: "color-mix(in srgb, var(--success) 5%, transparent)",
                  }}
                >
                  ● กำลังดำเนินการ
                </span>
              )}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-black leading-tight mb-1" style={{ color: "var(--fg-main)" }}>
              {pt.title}
            </h3>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wide mb-4" style={{ color: "var(--primary)" }}>
              {pt.org}
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fg-main)", opacity: 0.65 }}>
              {pt.desc}
            </p>
            
            <ul className="space-y-2">
              {pt.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-xs sm:text-sm font-medium"
                  style={{ color: "var(--fg-main)", opacity: 0.75 }}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
                >
                  <Code2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                  {b}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function SavePoints() {
  return (
    <div className="section-inner">
      <div className="mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ color: "var(--primary)" }}
        >
          Section VI · ประสบการณ์และการศึกษา
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="text-3xl sm:text-4xl font-black tracking-tighter"
          style={{ color: "var(--fg-main)" }}
        >
          Save <span className="gradient-text">Points</span> (The Journey)
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-sm max-w-sm"
          style={{ color: "var(--fg-main)", opacity: 0.5 }}
        >
          ทุกฮีโร่ต้องการจุดบันทึก — นี่คือหน้าต่างเส้นทางที่หล่อหลอมทุกอย่างขึ้นมา
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
