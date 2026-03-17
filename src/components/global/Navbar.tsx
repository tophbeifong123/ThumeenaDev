import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Stages", href: "#projects" },
  { name: "Path", href: "#experience" },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [activeHash, setActiveHash] = useState("#top");

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveHash(href);
    
    // Handle special case for 'top'
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="pointer-events-auto bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-full px-4 py-2 flex items-center gap-2 md:gap-6 shadow-lg shadow-black/5"
      >
        
        {/* Brand / Logo */}
        <a 
          href="#top" 
          onClick={(e) => scrollTo(e, "#top")}
          className="font-bold text-sm tracking-tighter dark:text-white flex items-center gap-2 mr-2 md:mr-4 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full inline-block animate-pulse" />
          <span>Thumeena.dev</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer group"
              data-cursor="hover"
            >
              <span className={cn(
                "relative z-10 transition-colors",
                activeHash === link.href ? "text-zinc-900 dark:text-black" : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200"
              )}>
                {link.name}
              </span>
              
              {activeHash === link.href && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white dark:bg-white rounded-full -z-0 shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="pl-2 border-l border-zinc-300 dark:border-zinc-700">
          <MagneticButton 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-white/50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-800 dark:text-zinc-200 overflow-hidden relative hover:bg-white dark:hover:bg-zinc-700 transition-colors"
          >
            <motion.div
              animate={{ y: isDark ? 0 : 30, opacity: isDark ? 1 : 0 }}
              className="absolute"
            >
              <Moon size={14} />
            </motion.div>
            <motion.div
              animate={{ y: isDark ? -30 : 0, opacity: isDark ? 0 : 1 }}
              className="absolute"
            >
              <Sun size={14} />
            </motion.div>
          </MagneticButton>
        </div>

      </motion.nav>
    </div>
  );
}
