import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function Navbar() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-white/10 dark:bg-black/10 backdrop-blur-md z-40 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-8"
    >
      <div className="font-bold text-xl tracking-tighter dark:text-white flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full inline-block animate-pulse" />
        P1_READY
      </div>

      <MagneticButton 
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 overflow-hidden relative"
      >
        <motion.div
          animate={{ y: isDark ? 0 : 30, opacity: isDark ? 1 : 0 }}
          className="absolute"
        >
          <Moon size={20} />
        </motion.div>
        <motion.div
          animate={{ y: isDark ? -30 : 0, opacity: isDark ? 0 : 1 }}
          className="absolute"
        >
          <Sun size={20} />
        </motion.div>

        {/* Eclipse animation */}
        {isDark && (
          <motion.div 
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="absolute right-1 top-1 w-3 h-3 bg-zinc-800 rounded-full"
          />
        )}
      </MagneticButton>
    </motion.nav>
  );
}
