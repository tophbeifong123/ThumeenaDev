import { motion } from "framer-motion";
import { Code2, Music, Coffee, Flame } from "lucide-react";

export function Section2About() {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4 uppercase tracking-wider">
        <span className="text-base-content/40 font-mono text-lg">02.</span> Visual Story
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[200px]">
        {/* About Box - Spans 2 cols, 2 rows */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="card md:col-span-2 md:row-span-2 bg-base-200 border border-base-300 p-8 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 right-0 p-8 text-base-300 pointer-events-none">
            <Code2 size={120} />
          </div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">About Me</h3>
          <p className="text-base-content/70 relative z-10">
            I'm a developer who loves building things for the web. 
            My journey started when I tried to hack an old arcade game, 
            and I've been coding ever since. I enjoy turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
        </motion.div>

        {/* Coding Stats Box */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="card bg-base-200 border border-base-300 p-8 flex flex-col justify-between shadow-sm"
        >
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-base-content/50">Lines of Code</h3>
            <Flame className="text-warning" />
          </div>
          <div className="text-4xl font-black font-mono">1M+</div>
        </motion.div>

        {/* Music Box */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="card bg-base-200 border border-base-300 p-8 flex flex-col justify-between overflow-hidden relative shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent pointer-events-none" />
          <div className="flex justify-between items-start relative z-10">
            <h3 className="font-bold text-base-content/50">Now Playing</h3>
            <Music className="text-success animate-pulse" />
          </div>
          <div className="relative z-10">
            <div className="font-bold truncate">Lo-Fi Beats to Code To</div>
            <div className="text-sm text-base-content/50">ChilledCow</div>
            <progress className="progress progress-success w-full mt-4" value="33" max="100"></progress>
          </div>
        </motion.div>

        {/* Coffee Box */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="card md:col-span-2 bg-base-200 border border-base-300 p-8 flex flex-row items-center justify-between shadow-sm"
        >
          <div>
            <h3 className="font-bold text-base-content/50 mb-2">Fuel Consumed</h3>
            <div className="text-3xl font-black font-mono flex items-baseline gap-2">
              9,001 <span className="text-sm text-base-content/50 font-sans font-normal">Cups of Coffee</span>
            </div>
          </div>
          <Coffee size={48} className="text-amber-700/50" />
        </motion.div>
      </div>
    </section>
  );
}
