import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Gamepad2 } from "lucide-react";

const PROJECTS = [
  { id: 1, title: "E-Commerce V2", type: "Full Stack", img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop" },
  { id: 2, title: "Crypto Dashboard", type: "Frontend", img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&h=300&fit=crop" },
  { id: 3, title: "Social API", type: "Backend", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop" },
  { id: 4, title: "AI Image Gen", type: "Web3", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop" },
];

export function Section4Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="h-[300vh] relative bg-zinc-900 text-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-20 px-4 md:px-8">
        
        <div className="max-w-6xl mx-auto w-full mb-8">
          <h2 className="text-4xl font-bold flex items-center gap-4 uppercase tracking-wider text-white">
            <span className="text-zinc-500 font-mono text-lg">04.</span> Stages (Projects)
          </h2>
          <p className="text-zinc-400 font-mono mt-2 flex items-center gap-2">
            <Gamepad2 size={16} /> Scroll down to explore levels
          </p>
        </div>

        {/* Arcade Cabinet Frame Outline effect */}
        <div className="w-full h-[60vh] max-w-6xl mx-auto border-4 border-zinc-700 rounded-2xl relative overflow-hidden bg-zinc-950 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
          
          {/* Scanlines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />

          {/* Horizontal Scrolling Area */}
          <motion.div style={{ x }} className="flex h-full w-[400%] relative z-0 items-center px-12 gap-12">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className="w-1/4 h-[70%] flex flex-col gap-4 group cursor-pointer">
                <div className="flex-1 overflow-hidden rounded-xl border-2 border-zinc-800 group-hover:border-red-500 transition-colors relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Overlay UI */}
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-red-500 border border-red-900/50 rounded">
                    STAGE 0{index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 font-mono">{project.type}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Arcade Cabinet Bottom Details */}
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center mt-4 text-zinc-600 font-mono text-sm px-4">
          <div>P1 SCORE: 99942</div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center bg-red-500/10">A</div>
            <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10">B</div>
          </div>
        </div>

      </div>
    </section>
  );
}
