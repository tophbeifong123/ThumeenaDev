import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.cursor === "hover"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
    >
      <div className="relative w-full h-full border-2 border-white rounded-full flex items-center justify-center transition-colors duration-200">
        <div className="w-1 h-1 bg-white rounded-full" />
        {/* Crosshair ticks */}
        <div className="absolute -top-1 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2" />
        <div className="absolute -bottom-1 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2" />
        <div className="absolute top-1/2 -left-1 w-2 h-0.5 bg-white -translate-y-1/2" />
        <div className="absolute top-1/2 -right-1 w-2 h-0.5 bg-white -translate-y-1/2" />
      </div>
    </motion.div>
  );
}
