import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function InteractiveAvatar() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const [scrollSection, setScrollSection] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.2) setScrollSection(0); // CV (Neutral)
      else if (latest < 0.4) setScrollSection(1); // About (Happy)
      else if (latest < 0.6) setScrollSection(2); // Skills (Surprised/Focus)
      else if (latest < 0.8) setScrollSection(3); // Projects (Thinking)
      else setScrollSection(4); // End (Super Happy)
    });
  }, [scrollYProgress]);

  // Calculate eye positions based on mouse position
  // simplified math to map screen coordinates to a small box
  const getEyeTranslate = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 };
    const maxOffset = 4;
    const x = (mousePosition.x / window.innerWidth - 0.5) * maxOffset * 2;
    const y = (mousePosition.y / window.innerHeight - 0.5) * maxOffset * 2;
    return { x, y };
  };

  const eyeOffset = getEyeTranslate();

  const mouths = [
    <div key="0" className="w-6 h-1 bg-zinc-900 rounded-full mt-1 transition-all duration-300" />,
    <div key="1" className="w-6 h-2 bg-zinc-900 rounded-b-full mt-1 transition-all duration-300" />,
    <div key="2" className="w-4 h-4 bg-zinc-900 rounded-full mt-1 transition-all duration-300" />,
    <div key="3" className="w-5 h-1 bg-zinc-900 rounded-full mt-1 translate-y-0.5 rotate-[15deg] transition-all duration-300" />,
    <div key="4" className="w-6 h-2.5 bg-zinc-900 rounded-b-full mt-1 flex justify-center overflow-hidden transition-all duration-300">
      <div className="w-4 h-1.5 bg-red-500 rounded-full mt-1.5" />
    </div>
  ];

  const antennaColors = [
    "bg-red-500 shadow-[0_0_8px_#ef4444]", 
    "bg-green-500 shadow-[0_0_8px_#22c55e]", 
    "bg-blue-500 shadow-[0_0_8px_#3b82f6]", 
    "bg-yellow-500 shadow-[0_0_8px_#eab308]", 
    "bg-purple-500 shadow-[0_0_8px_#a855f7]"
  ];

  return (
    <div className="fixed bottom-16 left-8 z-40 pointer-events-none drop-shadow-lg">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 bg-zinc-800 rounded-2xl border-2 border-zinc-600 relative overflow-hidden flex flex-col justify-center items-center gap-1"
      >
        {/* Antenna */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-zinc-600" />
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full animate-pulse transition-colors duration-500 ${antennaColors[scrollSection]}`} />

        {/* Eyes */}
        <div className="flex gap-2 w-full justify-center px-2 z-10">
          <div className="w-4 h-5 bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden border border-zinc-700">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_5px_#22d3ee]"
              animate={{ x: eyeOffset.x, y: eyeOffset.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>
          <div className="w-4 h-5 bg-zinc-900 rounded-full flex items-center justify-center overflow-hidden border border-zinc-700">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_5px_#22d3ee]"
              animate={{ x: eyeOffset.x, y: eyeOffset.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </div>
        </div>

        {/* Mouth */}
        {mouths[scrollSection]}
      </motion.div>
    </div>
  );
}
