import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ──────────────────────────────────────────────────────────────────────────
   HERO — Snap Section 1
   - Photo appears FIRST (delay 0.1s, scale 1.04→1)
   - "Thummeena" text reveals BEHIND person (delay 0.65s, mix-blend-mode:screen)
   - Mouse parallax PAUSES during scroll to prevent jank
────────────────────────────────────────────────────────────────────────────*/
export default function Hero() {
  const [ready, setReady] = useState(false);

  // ── Parallax values ──────────────────────────────────────────────────────
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  // Softer spring — higher damping = less twitchy = smoother
  const cfg = { stiffness: 38, damping: 28 };

  // Reduced intensity: ±1.5% bg, ±0.8% text, ±1% photo (inverse)
  const bgX = useSpring(useTransform(rawX, [0, 1], ["-1.5%", "1.5%"]), cfg);
  const bgY = useSpring(useTransform(rawY, [0, 1], ["-1.0%", "1.0%"]), cfg);
  const txtX = useSpring(useTransform(rawX, [0, 1], ["-0.8%", "0.8%"]), cfg);
  const txtY = useSpring(useTransform(rawY, [0, 1], ["-0.5%", "0.5%"]), cfg);
  const phX = useSpring(useTransform(rawX, [0, 1], ["1.0%", "-1.0%"]), cfg);
  const phY = useSpring(useTransform(rawY, [0, 1], ["0.8%", "-0.8%"]), cfg);

  // Track whether we are currently scroll-snapping (pause parallax)
  const isScrolling = useRef(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);

    // ── Pause parallax while scroll-snap is animating ──────────────────
    const main = document.getElementById("main-scroll");
    const onScroll = () => {
      isScrolling.current = true;
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        isScrolling.current = false;
      }, 250);
    };
    main?.addEventListener("scroll", onScroll, { passive: true });

    // ── Mouse parallax (only runs when NOT scroll-snapping) ────────────
    const onMove = (e: MouseEvent) => {
      if (isScrolling.current) return;
      rawX.set(e.clientX / window.innerWidth);
      rawY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      clearTimeout(t);
      clearTimeout(scrollTimer.current);
      main?.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, [rawX, rawY]);

  const scrollNext = () =>
    document
      .getElementById("main-scroll")
      ?.querySelector("#intro")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative w-full h-dvh overflow-hidden">
      {/* ── Layer 0: BG image with GPU-accelerated parallax ─────────────── */}
      <motion.div
        className="absolute inset-[-5%]"
        style={{ x: bgX, y: bgY, willChange: "transform" }}
      >
        <img
          src="/subaru-alone.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Layer 1: Gradient scrim ──────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,11,20,0.96) 0%, rgba(8,11,20,0.25) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,11,20,0.70) 0%, rgba(8,11,20,0.20) 50%, transparent 100%)",
        }}
      />

      {/* ── Layer 2: HUGE name BEHIND photo (z:20) ──────────────────────── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        style={{ x: txtX, y: txtY, willChange: "transform" }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.65, ease: "easeOut" }}
          className="text-[20vw] font-black leading-none tracking-tighter select-none text-center"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.15)",
            textShadow:
              "0 0 120px rgba(139,92,246,0.3), 0 0 40px rgba(234,88,12,0.18)",
          }}
        >
          Thumeena
        </motion.h1>
      </motion.div>

      {/* ── Layer 3: Person photo — CENTERED, mix-blend-mode:screen ────────
           mix-blend-mode:screen removes black background pixels.
           If using a PNG with transparent bg, change to 'normal'.
      ──────────────────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ x: phX, y: phY, willChange: "transform" }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
      >
        <img
          src="/me.png"
          alt="ธรรมีนา เป็งจ้าย"
          className="absolute bottom-0 right-0 max-h-dvh w-auto object-contain object-bottom"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </motion.div>

      {/* ── Layer 4: UI overlay (tagline + scroll cue) ─────────────────── */}
      <div className="absolute inset-0 z-40 flex flex-col justify-end pointer-events-none">
        <div className="p-8 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 1.1, ease: "easeOut" }}
            className="pointer-events-auto max-w-2xl"
          >
            <p
              className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "var(--primary)" }}
            >
              ✦ Thumeena Toto Pengchai
            </p>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-medium">
              Computer Engineering Student at PSU | Aspiring Full-stack Developer (Next.js & NestJS)<br/>
              <span className="text-white/80">Seeking 2026 Co-op Opportunities</span>
            </p>
          </motion.div>
        </div>

        {/* Bouncing scroll cue */}
        <motion.button
          onClick={scrollNext}
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-white/25 hover:text-white/55 transition-colors pointer-events-auto"
          aria-label="เลื่อนลง"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path
                d="M1 1.5l9 9 9-9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
