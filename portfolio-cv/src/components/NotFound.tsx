import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Looping "Return by Death" text in Japanese / Thai / EN ─────────────
const LOOP_PHRASES = [
  { text: "死に戻り", lang: "JP" },
  { text: "Return by Death", lang: "EN" },
  { text: "ย้อนกลับด้วยความตาย", lang: "TH" },
];

// ── Particle — small floating orbs ─────────────────────────────────────
function Orb({
  x,
  y,
  size,
  duration,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
      }}
      animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── Witch's hand / death mark SVG ──────────────────────────────────────
function DeathMark() {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
      className="mx-auto mb-6"
    >
      {/* Heart (Return by Death mark on Subaru's chest) */}
      <motion.path
        d="M24 40 C24 40 6 28 6 17 C6 11 11 7 17 9 C20 10 22 13 24 16 C26 13 28 10 31 9 C37 7 42 11 42 17 C42 28 24 40 24 40Z"
        stroke="#8b5cf6"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 2, ease: "easeInOut" }}
      />
      {/* Inner glow */}
      <motion.path
        d="M24 36 C24 36 10 26 10 17.5 C10 13 14 10 18 11.5 C20.5 12.5 22.5 15 24 17.5 C25.5 15 27.5 12.5 30 11.5 C34 10 38 13 38 17.5 C38 26 24 36 24 36Z"
        fill="rgba(139,92,246,0.15)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.3] }}
        transition={{ delay: 1.8, duration: 1.5 }}
      />
      {/* Crack lines radiating from heart */}
      <motion.line
        x1="24"
        y1="40"
        x2="20"
        y2="46"
        stroke="#8b5cf6"
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      />
      <motion.line
        x1="24"
        y1="40"
        x2="28"
        y2="46"
        stroke="#8b5cf6"
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.6, duration: 0.5 }}
      />
      <motion.line
        x1="24"
        y1="40"
        x2="24"
        y2="47"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeOpacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
      />
    </motion.svg>
  );
}

export default function NotFound() {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setPhraseIdx((i) => (i + 1) % LOOP_PHRASES.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  const orbs = [
    { x: "8%", y: "15%", size: 140, duration: 8, delay: 0 },
    { x: "75%", y: "10%", size: 200, duration: 11, delay: 1.5 },
    { x: "60%", y: "65%", size: 160, duration: 9, delay: 0.8 },
    { x: "5%", y: "70%", size: 100, duration: 7, delay: 2 },
    { x: "85%", y: "50%", size: 80, duration: 6, delay: 1 },
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#080b14",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "'Outfit', 'Noto Sans Thai', sans-serif",
      }}
    >
      {/* ── Background: floating orbs ────────────────────────────────── */}
      {orbs.map((o, i) => (
        <Orb key={i} {...o} />
      ))}

      {/* ── Background: looping Re:Zero quote ────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={phraseIdx}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 0.045, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.15, y: -20 }}
            transition={{ duration: 1.2 }}
            style={{
              fontSize: "clamp(3rem, 12vw, 9rem)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            {LOOP_PHRASES[phraseIdx].text}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ── Thin horizontal rule (death slash) ─────────────────────── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          right: "-5%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(139,92,246,0.35) 30%, rgba(139,92,246,0.35) 70%, transparent)",
          transformOrigin: "left center",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: 680,
        }}
      >
        {/* Death mark icon */}
        <DeathMark />

        {/* Error label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 0.45, letterSpacing: "0.4em" }}
          transition={{ delay: 1, duration: 1 }}
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "#8b5cf6",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Timeline · Error 404
        </motion.p>

        {/* "Natsuki Subaru" big dramatic heading */}
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: 0,
            color: "#fff",
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ display: "block" }}
          >
            เส้นทางนี้
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ display: "block", color: "#8b5cf6" }}
          >
            ไม่มีอยู่จริง
          </motion.span>
        </h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            marginTop: "1.5rem",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: "#cbd5e1",
          }}
        >
          หน้าเว็บที่คุณตามหาถูกลบออกจากเส้นเวลาปัจจุบันแล้ว
          <br />
          หรืออาจไม่เคยมีอยู่ตั้งแต่แรก — เหมือนความทรงจำที่ถูกลบด้วย
          <span style={{ color: "#8b5cf6" }}> Great Witch</span>
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="/"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(139,92,246,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.8rem 2rem",
              background: "linear-gradient(135deg, #7c3aed, #a855f7)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "9999px",
              border: "1px solid rgba(168,85,247,0.5)",
            }}
          >
            {/* Loop / reset icon */}
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Return by Death
          </motion.a>
        </motion.div>

        {/* Loop counter Easter egg */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 3.5, duration: 1.5 }}
          style={{
            marginTop: "3rem",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "#8b5cf6",
            textTransform: "uppercase",
          }}
        >
          Loop #∞ — Subaru cannot die here
        </motion.p>
      </motion.div>
    </div>
  );
}
