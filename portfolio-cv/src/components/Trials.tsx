import React from "react";
import { motion } from "framer-motion";
import { Code2, ShieldAlert, Trophy } from "lucide-react";

/* ── Data ────────────────────────────────────────────────────────────────── */
const TRIALS_DATA = [
  {
    id: 1,
    category: "Competitive",
    icon: <Trophy className="w-5 h-5" />,
    title: "ICPC Asia Bangkok 2025",
    detail:
      "เข้าร่วมการแข่งขันเขียนโปรแกรมระดับภูมิภาคเอเชีย (Regional Contest)",
    date: "พ.ย. 2025",
    color: "#8B5CF6",
  },
  {
    id: 2,
    category: "Cybersecurity",
    icon: <ShieldAlert className="w-5 h-5" />,
    title: "CTF BOOT CAMP รุ่นที่ 2",
    detail:
      "ผ่านการอบรมเชิงปฏิบัติการโดยสถาบันวิชาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (NCSA)",
    date: "ก.ค. 2025",
    color: "#EF4444",
  },
  {
    id: 3,
    category: "Cybersecurity",
    icon: <ShieldAlert className="w-5 h-5" />,
    title: "PSU Cyber & Data Privacy #2",
    detail:
      'ผ่านการอบรมเชิงปฏิบัติการ "Cybersecurity and AI" โดย ม.สงขลานครินทร์',
    date: "มิ.ย. 2025",
    color: "#10B981",
  },
  {
    id: 4,
    category: "Web Dev",
    icon: <Trophy className="w-5 h-5" />,
    title: "PSU Open API Contest",
    detail:
      "ได้รับรางวัลรองชนะเลิศอันดับ 1 การแข่งขันพัฒนาแอปพลิเคชันระดับนักศึกษา",
    date: "มิ.ย. 2025",
    color: "#F59E0B",
  },
  {
    id: 5,
    category: "Algorithm",
    icon: <Code2 className="w-5 h-5" />,
    title: "Codeforces Rating 800+",
    detail: "แก้ปัญหาอัลกอริทึมมากกว่า 300 ข้อบนแพลตฟอร์มแข่งขันระดับโลก",
    date: "2022-2025",
    color: "#EA580C",
  },
  {
    id: 6,
    category: "Cybersecurity",
    icon: <ShieldAlert className="w-5 h-5" />,
    title: "Cisco Ethical Hacker",
    detail:
      "หลักสูตร Penetration Testing & Ethical Hacking (Cisco)",
    date: "2026",
    color: "#3B82F6",
  },
  {
    id: 7,
    category: "Project",
    icon: <Code2 className="w-5 h-5" />,
    title: "NSC Thailand 2026",
    detail: "เข้าร่วมนำเสนอโครงงานซอฟต์แวร์แห่งชาติ รอบระดับประเทศ (ภาคใต้)",
    date: "2026",
    color: "#06B6D4",
  },
];

// Combine into 3 distinct rows for visual variety
const ROW1 = [...TRIALS_DATA];
const ROW2 = [...TRIALS_DATA.slice(2), ...TRIALS_DATA.slice(0, 2)];
const ROW3 = [...TRIALS_DATA.slice(4), ...TRIALS_DATA.slice(0, 4)];

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.45 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase mt-1"
          style={{ color: "var(--primary)" }}
        >
          — ทุกบททดสอบคือหนทางสู่รอบใหม่ —
        </motion.p>

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
                className="shrink-0 w-[280px] sm:w-[350px] rounded-2xl p-6 cursor-pointer relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--bg-card)",
                  border: `1px solid color-mix(in srgb, ${item.color} 18%, var(--border-color))`,
                }}
              >
                {/* Colored gradient top line */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, ${item.color}, transparent)`,
                  }}
                />
                {/* Hover shimmer sweep */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 20% 20%, color-mix(in srgb, ${item.color} 8%, transparent) 0%, transparent 60%)`,
                  }}
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
