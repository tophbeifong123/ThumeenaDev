import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Gamepad2 } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiCode() {
  const [input, setInput] = useState<string[]>([]);
  const [isHackerMode, setIsHackerMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => {
        const nextInput = [...prev, e.key].slice(-KONAMI_CODE.length);
        
        if (nextInput.join(",") === KONAMI_CODE.join(",")) {
          activateHackerMode();
        }
        return nextInput;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activateHackerMode = () => {
    setIsHackerMode(true);
    
    // Fireworks
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
    
    // Auto-disable hacker mode after 10s
    setTimeout(() => {
      setIsHackerMode(false);
    }, 10000);
  };

  return (
    <>
      {isHackerMode && (
        <div className="fixed inset-0 pointer-events-none z-[9999] bg-green-500/10 mix-blend-color-burn">
          <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,#000_120%)] pointer-events-none" />
          <div className="text-green-500 font-mono text-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center drop-shadow-[0_0_10px_#22c55e]">
            <h1>HACKER MODE ACTIVATED</h1>
            <p className="text-sm opacity-80 mt-2">SYSTEM BREACHED</p>
          </div>
        </div>
      )}
      
      {/* Visual Button for mobile/clickers */}
      <button 
        onClick={activateHackerMode}
        className="fixed bottom-16 right-8 z-40 w-12 h-12 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-colors border border-zinc-700"
        title="Konami Code"
      >
        <Gamepad2 size={20} />
      </button>
    </>
  );
}
