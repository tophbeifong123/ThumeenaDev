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
          className="toast toast-top toast-end z-50 mt-16"
        >
          <div className="alert alert-success shadow-lg text-success-content border border-success/30 bg-success/10 backdrop-blur-md">
            <Trophy size={28} className="text-success" />
            <div>
              <div className="text-success text-xs font-bold tracking-widest uppercase mb-1">Achievement Unlocked</div>
              <div className="font-medium">ยินดีด้วย! คุณรู้จักฉันมากขึ้นแล้ว</div>
              <div className="text-xs opacity-70">You've reached the bottom of the page.</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
