import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Users,
  BookOpen,
  Star,
  Trophy,
  Medal,
} from "lucide-react";

const POINTS = [
  {
    id: "psu_edu",
    year: "มิ.ย. 2023 — มี.ค. 2026",
    tag: "The Academy",
    title: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
    org: "มหาวิทยาลัยสงขลานครินทร์ (PSU)",
    desc: "นิสิตชั้นปีที่ 3 หลงใหลในการพัฒนา Web Application การออกแบบเว็บ และระบบเครือข่าย",
    bullets: ["ทักษะหลัก: Web / Game Development", "กิจกรรมพิเศษ: Esports"],
    icon: <GraduationCap className="w-4 h-4" />,
    current: true,
    bgImage: "/Psu.jpg",
  },
  {
    id: "bonmek",
    year: "ม.ค. 2025 — ปัจจุบัน",
    tag: "จุดบันทึกปัจจุบัน",
    title: "Frontend Web Developer (การฝึกงาน)",
    org: "Bonmek",
    desc: "มีส่วนร่วมพัฒนา Wise Review Platform ปฏิบัติงานแบบผสม (Hybrid) ในเขตจังหวัดสงขลา",
    bullets: [
      "Programming (Modern Web Tech)",
      "Team Management & Collaboration",
    ],
    icon: <Code2 className="w-4 h-4" />,
    current: true,
    bgImage: "/Hybrid.jpg",
  },
  {
    id: "icpc_2025",
    year: "พ.ย. 2025",
    tag: "Achievement Unlocked",
    title: "The 2025 ICPC Asia Bangkok Regional Contest",
    org: "ICPC - International Collegiate Programming Contest",
    desc: "เข้าร่วมการแข่งขันเขียนโปรแกรมระดับนานาชาติ (Regional) ประจำปี 2025 ได้อันดับที่ 36 (Thirty-sixth Place)",
    bullets: [
      "Competitive Programming",
      "Algorithms & Problem Solving และอีก +4 ทักษะ",
    ],
    icon: <Trophy className="w-4 h-4" />,
    current: false,
    bgImage: "/ICPP.jpg",
  },
  {
    id: "cert_ctf",
    year: "ก.ค. 2025",
    tag: "Quest Completed",
    title: "กิจกรรม CTF BOOT CAMP รุ่นที่ 2",
    org: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ",
    desc: "สถาบันวิชาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ ได้ผ่านการอบรมเชิงปฏิบัติการ",
    bullets: ["Cybersecurity (ความปลอดภัยทางไซเบอร์)"],
    icon: <Star className="w-4 h-4" />,
    current: false,
    bgImage: "/ncsa-ctf.jpg",
  },
  {
    id: "cert_ai",
    year: "มิ.ย. 2025",
    tag: "Quest Completed",
    title: "PSU Cybersecurity and Data Privacy Days ครั้งที่ 2",
    org: "สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ ม.สงขลานครินทร์",
    desc: "เข้าร่วมกิจกรรม 'Cybersecurity and AI'",
    bullets: ["Cybersecurity", "Artificial Intelligence Awareness"],
    icon: <BookOpen className="w-4 h-4" />,
    current: false,
  },
  {
    id: "psu_openapi",
    year: "มิ.ย. 2024",
    tag: "Achievement Unlocked",
    title: "แข่งขันพัฒนาแอปพลิเคชันผ่าน PSU Open API",
    org: "สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ มหาวิทยาลัยสงขลานครินทร์",
    desc: "โครงการแข่งขันพัฒนาแอปพลิเคชันด้วยการเชื่อมโยงข้อมูลผ่าน PSU Open API (ประเภทนักศึกษา) — ได้รับรางวัลรองชนะเลิศอันดับ 1 🥈",
    bullets: [
      "การพัฒนาเว็บ (Web Development)",
      "API Integration & Data Connectivity",
    ],
    icon: <Medal className="w-4 h-4" />,
    current: false,
    bgImage: "/OpenApi.jpg",
  },
];

const Entry = ({
  pt,
  isLast,
  index,
}: {
  pt: (typeof POINTS)[0];
  isLast: boolean;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section
      ref={ref}
      id={index === 0 ? "about" : undefined}
      className="snap-section theme-even w-full min-h-dvh relative flex flex-col justify-center overflow-hidden py-32 lg:py-0"
    >
      {/* ── Premium Background Image ── */}
      {pt.bgImage && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(20px)",
            borderRadius: "20%",
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            borderRadius: "0%",
          }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.1 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* 
            ปรับปรุงความชัดของรูปได้ตรงนี้ครับ!
            - opacity-40 โหมด Light / dark:opacity-50 โหมดสว่าง
            - ลบ mix-blend ออกเพื่อให้สีรูป 100% Original 
          */}
          <img
            src={pt.bgImage}
            alt={pt.title}
            className="w-full h-full object-cover opacity-40 dark:opacity-50"
          />

          {/* Edge fading ลบรอยต่อแบบเข้มๆ ออก */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)] via-transparent to-[var(--bg-main)] opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-main)] via-transparent to-transparent opacity-80" />

          {/* เงาบางๆ ครอบรูปเพื่อไม่ให้แย่งความเด่นของตัวหนังสือ */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 0%, var(--bg-main) 100%)",
              opacity: 0.4,
            }}
          />
        </motion.div>
      )}

      {/* ── Global Section Title (Only on First Point) ── */}
      {index === 0 && (
        <div
          className="absolute top-24 lg:top-32 left-6 md:left-[10%] z-30 border-l-4 pl-5"
          style={{ borderColor: "var(--primary)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1"
            style={{ color: "var(--primary)" }}
          >
            Section VI · ประสบการณ์และการศึกษา
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase"
            style={{ color: "var(--fg-main)" }}
          >
            Save <span className="gradient-text">Points</span> (The Journey)
          </motion.h2>
        </div>
      )}

      {/* ── The Infinite Timeline Line connecting screens ── */}
      <div
        className="absolute top-0 bottom-0 left-8 md:left-[33.333%] w-px z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(234,88,12,0.3) 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* ── The Glowing Orb (Save Point) ── */}
      <motion.div
        className="absolute left-8 md:left-[33.333%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full border-[3px]"
        style={{
          background: pt.current ? "var(--primary)" : "var(--bg-main)",
          borderColor: "var(--primary)",
          boxShadow: pt.current
            ? "0 0 40px rgba(234,88,12,0.8)"
            : "0 0 15px rgba(234,88,12,0.2)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: pt.current ? "#fff" : "var(--primary)" }}
        />
      </motion.div>

      {/* ── Content Container (Split Grid) ── */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 relative z-20 px-4 md:px-0 items-center">
        {/* Left Area: Year & Tag (Desktop) */}
        <motion.div
          className="col-span-1 hidden md:flex flex-col items-end text-right pr-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="text-4xl lg:text-5xl font-black tracking-tighter mb-2"
            style={{ color: "var(--fg-main)", opacity: 0.85 }}
          >
            {pt.year.split(" ")[0]} <br />{" "}
            <span className="text-2xl opacity-60 font-bold">
              {pt.year.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <span
            className="text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: "color-mix(in srgb, var(--primary) 15%, transparent)",
              color: "var(--primary)",
            }}
          >
            {pt.tag}
          </span>
          {pt.current && (
            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 mt-3 text-green-400 animate-pulse">
              ● กำลังดำเนินการ
            </span>
          )}
        </motion.div>

        {/* Right Area: Detail Card */}
        <motion.div
          className="col-span-2 pl-16 md:pl-20 mt-16 md:mt-0"
          initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mobile Year & Tag inside right card directly to save space */}
          <div className="md:hidden flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-2xl font-black"
              style={{ color: "var(--fg-main)" }}
            >
              {pt.year}
            </span>
            <span
              className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded"
              style={{
                background:
                  "color-mix(in srgb, var(--primary) 15%, transparent)",
                color: "var(--primary)",
              }}
            >
              {pt.tag}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span
              className="flex items-center justify-center w-12 h-12 rounded-[14px]"
              style={{
                background:
                  "color-mix(in srgb, var(--primary) 12%, transparent)",
                color: "var(--primary)",
              }}
            >
              {pt.icon}
            </span>
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              {pt.org}
            </p>
          </div>

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter mb-6"
            style={{ color: "var(--fg-main)" }}
          >
            {pt.title}
          </h1>

          <p
            className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
            style={{ color: "var(--fg-main)", opacity: 0.65 }}
          >
            {pt.desc}
          </p>

          <ul className="space-y-3">
            {pt.bullets.map((b, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base font-medium max-w-lg"
                style={{ color: "var(--fg-main)", opacity: 0.8 }}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              >
                <Code2
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "var(--primary)" }}
                />
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default function SavePoints() {
  return (
    <>
      {POINTS.map((pt, i) => (
        <Entry key={pt.id} pt={pt} isLast={i === POINTS.length - 1} index={i} />
      ))}
    </>
  );
}
