import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, ShieldAlert, Trophy, Star, Server } from "lucide-react";

/* ── Data ────────────────────────────────────────────────────────────────── */
const TRIALS_DATA = [
  {
    id: 1,
    category: "Competitive",
    icon: <Code2 className="w-5 h-5" />,
    title: "ICPC Bangkok Regional",
    detail: "เข้าร่วมการแข่งขันเขียนโปรแกรมระดับประเทศ",
    date: "2023",
    color: "#8B5CF6",
  },
  {
    id: 2,
    category: "Algorithm",
    icon: <ShieldAlert className="w-5 h-5" />,
    title: "Codeforces Rating 1400+",
    detail: "แก้ปัญหามากกว่า 300 ข้อ",
    date: "2022-2025",
    color: "#EA580C",
  },
  {
    id: 3,
    category: "Cloud & System",
    icon: <Server className="w-5 h-5" />,
    title: "Microsoft Azure Fundamentals",
    detail: "AZ-900 Certification",
    date: "2024",
    color: "#10B981",
  },
  {
    id: 4,
    category: "Hackathon",
    icon: <Star className="w-5 h-5" />,
    title: "Global Game Jam (BKK)",
    detail: "สร้างเกมเสร็จภายใน 48 ชั่วโมง",
    date: "2023",
    color: "#F43F5E",
  },
  {
    id: 5,
    category: "Web Dev",
    icon: <Award className="w-5 h-5" />,
    title: "React Advanced Certification",
    detail: "Best Practices & Architecture",
    date: "2024",
    color: "#3B82F6",
  },
  {
    id: 6,
    category: "AI & Data",
    icon: <Trophy className="w-5 h-5" />,
    title: "SuperAI Engineer Season 3",
    detail: "ผ่านการทดสอบเข้าแคมป์ระดับประเทศ",
    date: "2023",
    color: "#EAB308",
  },
  {
    id: 7,
    category: "Project",
    icon: <Code2 className="w-5 h-5" />,
    title: "NSC Thailand",
    detail: "เข้าร่วมนำเสนอโครงงานซอฟต์แวร์แห่งชาติ",
    date: "2024",
    color: "#06B6D4",
  },
];

// Combine into 3 distinct rows for visual variety
const ROW1 = [
  TRIALS_DATA[0],
  TRIALS_DATA[1],
  TRIALS_DATA[2],
  TRIALS_DATA[3],
  TRIALS_DATA[4],
];
const ROW2 = [
  TRIALS_DATA[5],
  TRIALS_DATA[6],
  TRIALS_DATA[0],
  TRIALS_DATA[1],
  TRIALS_DATA[2],
];
const ROW3 = [
  TRIALS_DATA[3],
  TRIALS_DATA[4],
  TRIALS_DATA[5],
  TRIALS_DATA[6],
  TRIALS_DATA[0],
];

const MARQUEE_ROWS = [
  { id: "row1", speed: "40s", direction: "normal", items: [...ROW1, ...ROW1] },
  { id: "row2", speed: "55s", direction: "reverse", items: [...ROW2, ...ROW2] },
  { id: "row3", speed: "45s", direction: "normal", items: [...ROW3, ...ROW3] },
];

/* ── Component ───────────────────────────────────────────────────────────── */
export default function Trials() {
  return (
    <div className="w-full relative py-20 lg:py-32 overflow-hidden flex flex-col justify-center min-h-[100dvh]">
      {/* ── Heading ──────────────────────────────────────────────────────── */}
      <div
        className="w-full max-w-3xl mx-auto text-center px-4"
        style={{ paddingBottom: "3.5rem" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] font-black tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-3"
          style={{ color: "var(--primary)" }}
        >
          <span className="w-8 h-px bg-current opacity-40"></span>
          Section IV · บททดสอบที่ก้าวผ่าน
          <span className="w-8 h-px bg-current opacity-40"></span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="text-5xl sm:text-6xl font-black tracking-tighter uppercase mb-4"
          style={{ color: "var(--fg-main)" }}
        >
          Trials <span className="gradient-text">Overcome</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          style={{ color: "var(--fg-main)", opacity: 0.55 }}
        >
          หลักฐานและการรับรองที่ได้จากการแก้ปัญหาและเผชิญหน้ากับความท้าทาย
        </motion.p>
      </div>

      {/* ── Marquee Tracks (3 Rows) ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative w-full overflow-hidden mt-6 flex flex-col gap-6"
        style={{
          /* Mask edges to fade out left/right */
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {MARQUEE_ROWS.map((row) => (
          <div
            key={row.id}
            className="animate-marquee items-center gap-6 px-3"
            style={{
              animationDuration: row.speed,
              animationDirection: row.direction as any,
            }}
          >
            {row.items.map((item, idx) => (
              <div
                key={`${row.id}-${item.id}-${idx}`}
                className="shrink-0 w-[280px] sm:w-[350px] rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                }}
              >
                {/* Colored Line Accent on hover */}
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ background: item.color }}
                />

                <div className="flex items-start justify-between mb-8">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{
                      background: `color-mix(in srgb, ${item.color} 12%, transparent)`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-[4px]"
                    style={{
                      background: "var(--bg-main)",
                      color: "var(--fg-main)",
                      border: "1px solid var(--border-color)",
                      opacity: 0.8,
                    }}
                  >
                    {item.date}
                  </span>
                </div>

                <div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-wider mb-1"
                    style={{ color: item.color }}
                  >
                    {item.category}
                  </p>
                  <h3
                    className="text-xl font-black leading-tight mb-2"
                    style={{ color: "var(--fg-main)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--fg-main)", opacity: 0.55 }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
