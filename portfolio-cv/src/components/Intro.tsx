import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   INTRO — Bento Box Layout (Snap Section 2)
────────────────────────────────────────────────────────────────────────────*/

const BENTO_CONTAINER: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const BENTO_ITEM: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Intro() {
  const scrollTo = (href: string) =>
    document
      .getElementById("main-scroll")
      ?.querySelector(href)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className="w-full min-h-dvh flex items-center justify-center relative py-20 lg:py-0 px-4 sm:px-8"
      style={{ background: "#0A0F1E" }}
    >
      {/* ── Background Gradients & White Space ── */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,11,20,0.8), transparent)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EA580C]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Bento Grid Container ── */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 z-10"
        variants={BENTO_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* 📦 Box 1: Main Bio (Span 2x2) */}
        <motion.div
          variants={BENTO_ITEM}
          className="md:col-span-2 md:row-span-2 rounded-4xl p-8 lg:p-12 relative overflow-hidden group border border-white/5 hover:border-[#EA580C]/30 transition-colors duration-500 flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Sparkles className="w-32 h-32 text-[#EA580C]" />
          </div>

          <div>
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase mb-5 flex items-center gap-2"
              style={{ color: "#EA580C" }}
            >
              <span className="w-6 h-px bg-[#EA580C]"></span> เกี่ยวกับฉัน
              (About)
            </p>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              ธรร<span style={{ color: "#EA580C" }}>มีนา</span>
            </h2>
            <p className="text-[15px] lg:text-base leading-relaxed text-white/70 max-w-md">
              นิสิตวิศวกรรมคอมพิวเตอร์ชั้นปีที่ 3 ม.สงขลานครินทร์ (PSU)
              ที่หลงใหลในการพัฒนา Web Application และแก้โจทย์อัลกอริทึม
              มีประสบการณ์ใช้ React & Next.js สร้างโปรเจกต์จริง <br />
              <br />
              ปัจจุบันกำลังมองหาโอกาสฝึกงาน (Co-op ปี 2026)
              เพื่อช่วยขับเคลื่อนธุรกิจ และยังคงเชื่อในสปิริตแบบ{" "}
              <strong className="text-white">Re:Zero</strong>{" "}
              ที่ว่าทุกความผิดพลาดคือจุดเซฟเพื่อพัฒนาตัวเองให้ดีกว่าเดิม
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3.5 rounded-full font-black text-white text-sm flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] group/btn"
              style={{ background: "#EA580C" }}
            >
              ดูผลงานทั้งหมด{" "}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* 📦 Box 2: Core Stack (Span 1x2) */}
        <motion.div
          variants={BENTO_ITEM}
          className="md:col-span-1 md:row-span-2 rounded-4xl p-8 flex flex-col items-center justify-center text-center group border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
            <Layers className="w-10 h-10 text-[#EA580C]" />
          </div>
          <h3 className="text-white font-black text-2xl tracking-tight mb-3">
            Full Stack
          </h3>
          <p className="text-xs text-white/50 mb-8 leading-relaxed">
            ผสาน Frontend ที่สวยงาม เข้ากับ Backend ที่ทรงพลัง
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "NestJS", "PostgreSQL", "Tailwind"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </motion.div>

        {/* 📦 Box 3: Social Links (Span 1x1) */}
        <motion.div
          variants={BENTO_ITEM}
          className="md:col-span-1 md:row-span-1 rounded-4xl p-6 flex flex-col justify-center border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
          }}
        >
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4 text-center">
            CONNECT
          </p>
          <div className="flex items-center justify-center gap-3">
            {[
              {
                icon: <Github className="w-5 h-5" />,
                href: "https://github.com/tophbeifong123",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                href: "https://www.linkedin.com/in/thumeena-pengchai-6babb5351/",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                href: "mailto:thrrmunaphengchay@gmail.com",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#EA580C] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* 📦 Box 4: Specialization (Span 1x1) */}
        <motion.div
          variants={BENTO_ITEM}
          className="md:col-span-1 md:row-span-1 rounded-4xl p-8 flex flex-col items-start justify-end group border border-white/5 hover:border-[#EA580C]/20 transition-all duration-300 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-[2] transition-transform duration-700 ease-in-out" />
          <Cpu className="w-8 h-8 text-white/30 mb-5 group-hover:text-[#EA580C] transition-colors duration-500 z-10" />
          <h3 className="text-white font-black text-xl mb-1 z-10">
            Architecture
          </h3>
          <p className="text-xs text-white/40 z-10 font-bold tracking-wider">
            CLEAN CODE & SCALABLE
          </p>
        </motion.div>

        {/* 📦 Box 5: Highlight Concept (Span 2x1) */}
        <motion.div
          variants={BENTO_ITEM}
          className="md:col-span-2 md:row-span-1 rounded-4xl p-8 flex items-center justify-between group border border-white/5 hover:border-[#EA580C]/20 transition-all duration-300 overflow-hidden relative cursor-crosshair"
          style={{
            background:
              "linear-gradient(to right, rgba(234,88,12,0.05), rgba(255,255,255,0.01))",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="absolute inset-0 bg-[#EA580C]/0 group-hover:bg-[#EA580C]/5 transition-colors duration-500" />

          <div className="z-10">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#EA580C] mb-3">
              The Concept
            </p>
            <h3 className="text-white font-black text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight">
              Return by <br className="hidden md:block" />
              <span className="text-[#EA580C] line-through opacity-70 hover:opacity-100 transition-opacity">
                Death
              </span>{" "}
              <span className="text-white">Debug</span>
            </h3>
          </div>

          <div className="text-[100px] leading-none font-black text-white/5 group-hover:text-[#EA580C]/20 group-hover:rotate-90 transition-all duration-700 z-10 origin-center">
            ∞
          </div>
        </motion.div>

        {/* 📦 Box 6: Stats (Span 2x1) */}
        <motion.div
          variants={BENTO_ITEM}
          className="md:col-span-2 md:row-span-1 rounded-4xl p-8 flex items-center justify-around border border-white/5 hover:border-white/10 transition-all duration-300"
          style={{
            background: "rgba(255,255,255,0.01)",
            backdropFilter: "blur(20px)",
          }}
        >
          {[
            { v: "ปี 3", l: "ระดับชั้น" },
            { v: "10+", l: "โปรเจกต์" },
            { v: "100%", l: "แพสชัน" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-default"
            >
              <span className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                {stat.v}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#EA580C] opacity-80 group-hover:opacity-100 transition-opacity">
                {stat.l}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
