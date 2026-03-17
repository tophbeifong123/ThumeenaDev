import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

export function AchievementPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled near bottom
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.body.offsetHeight - 50;

      if (scrollPosition >= bottomPosition && !show) {
        setShow(true);
        // Hide after 5 seconds
        setTimeout(() => setShow(false), 5000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -50, x: 50 }}
          className="fixed top-20 right-8 z-50 bg-zinc-900 text-white p-4 rounded-xl border-2 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center gap-4 min-w-[300px]"
        >
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
            <Trophy size={24} />
          </div>
          <div>
            <div className="text-yellow-500 text-xs font-bold tracking-widest uppercase mb-1">Achievement Unlocked</div>
            <div className="font-medium">ยินดีด้วย! คุณรู้จักฉันมากขึ้นแล้ว</div>
            <div className="text-zinc-400 text-xs">You've reached the bottom of the page.</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
