import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function XPBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [level, setLevel] = useState(1);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setLevel(Math.floor(latest * 99) + 1);
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center bg-base-300 border-t-2 border-base-200 p-2 text-xs font-mono select-none">
      <div className="px-4 text-success font-bold w-20">LVL {level}</div>
      <div className="flex-1 h-3 bg-base-100 rounded-full overflow-hidden border border-base-300 relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-success origin-left"
          style={{ scaleX }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-[10px] text-base-content/50 mix-blend-difference z-10">
          XP / 100
        </div>
      </div>
      <div className="px-4 text-base-content/50 w-24 text-right">HP 100/100</div>
    </div>
  );
}
