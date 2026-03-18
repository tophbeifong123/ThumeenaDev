import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Use motion values for better performance than state
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring config for a smooth drag effect on the outer ring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only mount on client side
    setIsMounted(true);

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define what elements trigger the hover state (grow cursor)
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, .card-hover, [className*="hover:"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Don't render cursor on server or on touch devices
  if (!isMounted || (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Ring (Spring-animated) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[var(--primary)] pointer-events-none mix-blend-exclusion"
        style={{
          width: 32,
          height: 32,
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: -16,
          y: -16,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Inner Dot (Instant track) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[var(--primary)] pointer-events-none mix-blend-exclusion shadow-[0_0_10px_var(--primary)]"
        style={{
          width: 8,
          height: 8,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 3.5 : 1,
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
    </div>
  );
}
