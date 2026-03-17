import { motion } from "framer-motion";

const CERTS = [
  { id: 1, title: "AWS Solutions Architect", org: "Amazon" },
  { id: 2, title: "React Developer", org: "Meta" },
  { id: 3, title: "Google Cloud Engineer", org: "Google" },
  { id: 4, title: "UI/UX Masterclass", org: "DesignCo" },
  { id: 5, title: "Backend Scaling", org: "SystemDesign" },
  { id: 6, title: "Advanced Typescript", org: "FrontendMasters" },
];

export function Section6Achievements() {
  return (
    <section className="py-32 overflow-hidden bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-4xl font-bold flex items-center gap-4 uppercase tracking-wider">
          <span className="text-base-content/50 font-mono text-lg">06.</span> Achievements
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 - Slides Left */}
        <motion.div 
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-6 w-[200%] pl-4"
        >
          {[...CERTS.slice(0, 3), ...CERTS.slice(0, 3)].map((cert, i) => (
            <div key={i} className="flex-1 min-w-[300px] h-[160px] bg-base-100 border border-base-300 rounded-box p-6 flex flex-col justify-center relative overflow-hidden group shadow-sm">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-warning/10 rounded-full blur-2xl group-hover:bg-warning/20 transition-colors" />
              <h3 className="text-xl font-bold mb-2 relative z-10">{cert.title}</h3>
              <p className="text-base-content/60 font-mono text-sm relative z-10">{cert.org}</p>
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Slides Right */}
        <motion.div 
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-6 w-[200%] pl-4"
        >
          {[...CERTS.slice(3, 6), ...CERTS.slice(3, 6)].map((cert, i) => (
            <div key={i} className="flex-1 min-w-[300px] h-[160px] bg-base-100 border border-base-300 rounded-box p-6 flex flex-col justify-center relative overflow-hidden group shadow-sm">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-info/10 rounded-full blur-2xl group-hover:bg-info/20 transition-colors" />
              <h3 className="text-xl font-bold mb-2 relative z-10">{cert.title}</h3>
              <p className="text-base-content/60 font-mono text-sm relative z-10">{cert.org}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
