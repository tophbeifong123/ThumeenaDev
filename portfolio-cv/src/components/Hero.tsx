import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function useTypewriter(words: string[], speed = 85, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi];
    let t: ReturnType<typeof setTimeout>;
    if (!del && ci < word.length)
      t = setTimeout(() => {
        setDisplay(word.slice(0, ci + 1));
        setCi((c) => c + 1);
      }, speed);
    else if (!del && ci === word.length)
      t = setTimeout(() => setDel(true), pause);
    else if (del && ci > 0)
      t = setTimeout(() => {
        setDisplay(word.slice(0, ci - 1));
        setCi((c) => c - 1);
      }, speed / 2);
    else {
      setDel(false);
      setWi((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);
  return display;
}

const ROLES = [
  "นักพัฒนา Full-Stack",
  "นักศึกษาวิศวกรรมคอมฯ ปี 3",
  "คนชอบสร้าง Game Engine",
  "เริ่มต้นใหม่ทุกครั้ง — แบบ Re:Zero",
];
const STATS = [
  { v: "ปี 3", l: "ชั้นปี" },
  { v: "10+", l: "โปรเจกต์" },
  { v: "Full", l: "Stack" },
  { v: "∞", l: "ชีวิต" },
];

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const scrollTo = (id: string) =>
    document
      .getElementById("main-scroll")
      ?.querySelector(id)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="section-inner">
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-xs font-semibold tracking-[0.22em] uppercase mb-5"
        style={{ color: "var(--primary)" }}
      >
        ✦ ถูกเรียกมาเพื่อสร้าง
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-5"
      >
        สวัสดี
        <br />
        <span className="gradient-text">ธรรมีนา</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.18, duration: 0.45 }}
        className="flex items-center gap-2 text-lg sm:text-xl font-medium mb-7 min-h-8"
        style={{ color: "var(--fg-main)", opacity: 0.55 }}
      >
        <span>{typed}</span>
        <motion.span
          className="inline-block w-0.5 h-5 rounded-full"
          style={{ background: "var(--primary)" }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.26, duration: 0.45 }}
        className="text-sm sm:text-base leading-relaxed max-w-lg mb-10"
        style={{ color: "var(--fg-main)", opacity: 0.5 }}
      >
        นักศึกษาปี 3 สาขาวิศวกรรมคอมพิวเตอร์ หลงใหลในการพัฒนาเว็บและ Game Engine
        ทุกโปรเจกต์เริ่มจากศูนย์ — และนั่นโอเคมาก
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34, duration: 0.45 }}
        className="flex gap-3 mb-16"
      >
        <button
          className="btn btn-sm rounded-full font-semibold text-white"
          style={{ background: "var(--primary)", border: "none" }}
          onClick={() => scrollTo("#projects")}
        >
          ดูผลงาน →
        </button>
        <a
          href="mailto:thumeena@example.com"
          className="btn btn-sm btn-ghost rounded-full font-semibold border"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--fg-main)",
          }}
        >
          ติดต่อ
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42, duration: 0.45 }}
        className="flex gap-10"
      >
        {STATS.map(({ v, l }) => (
          <div key={l}>
            <p className="text-2xl font-black gradient-text leading-none">
              {v}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--fg-main)", opacity: 0.38 }}
            >
              {l}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
