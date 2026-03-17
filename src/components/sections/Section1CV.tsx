import { motion } from "framer-motion";
import { useState } from "react";
import { Download } from "lucide-react";

export function Section1CV() {
  const [showGlasses, setShowGlasses] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-8">
      <div className="card w-full max-w-5xl bg-base-200 text-base-content shadow-2xl rounded-box p-8 md:p-16 lg:p-24 aspect-[1/1.4] md:aspect-auto relative overflow-hidden group transition-all duration-300 border border-base-300">
        
        {/* Subtle grid background for A4 feel */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
          
          {/* Profile Picture with Thug Life Easter Egg */}
          <div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-base-100 shadow-inner relative flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setShowGlasses(true)}
            onMouseLeave={() => setShowGlasses(false)}
            onClick={() => setShowGlasses(!showGlasses)}
          >
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thumeena" 
              alt="Profile" 
              className="w-full h-full object-cover bg-base-300"
            />
            
            {/* Thug Life Glasses */}
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={showGlasses ? { y: 65, opacity: 1, rotate: [-5, 0] } : { y: -200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="absolute top-0 left-0 w-full flex justify-center pointer-events-none drop-shadow-2xl"
            >
              <svg viewBox="0 0 100 30" className="w-40 md:w-52">
                <path d="M5 10 h30 v10 h-10 v5 h-10 v-5 h-10 z M65 10 h30 v10 h-10 v5 h-10 v-5 h-10 z" fill="black" />
                <path d="M35 15 h30 v5 h-30 z" fill="black" />
                <rect x="15" y="10" width="10" height="5" fill="white" opacity="0.8" />
                <rect x="75" y="10" width="10" height="5" fill="white" opacity="0.8" />
              </svg>
            </motion.div>
          </div>

          {/* Header Info */}
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
            >
              Thumeena<br/>Dev
            </motion.h1>
            
            <div className="h-2 w-24 bg-primary my-6 rounded-full" />

            <h2 className="text-2xl font-mono text-base-content/70 mb-8">
              Full-Stack Developer & Tech Enthusiast
            </h2>

            <p className="text-base-content/80 leading-relaxed max-w-2xl font-serif text-lg">
              Crafting digital experiences with clean code and minimalist design. 
              Bridging the gap between beautiful user interfaces and robust backend systems.
              Leveling up one line of code at a time.
            </p>

            <div className="mt-12 flex gap-4">
              <button className="btn btn-primary btn-lg group/btn rounded-full" data-cursor="hover">
                <Download size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                Download CV
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
