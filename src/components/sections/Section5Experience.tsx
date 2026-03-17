import { motion } from "framer-motion";

const CAREER = [
  { year: "2024", title: "Senior Developer", company: "TechCorp", desc: "Leading a team of 5 developers to rebuild the core platform architecture." },
  { year: "2022", title: "Full Stack Dev", company: "StartupX", desc: "Built scalable APIs and dynamic frontends for thousands of users." },
  { year: "2020", title: "Junior Dev", company: "WebAgency", desc: "Developed responsive landing pages and maintained legacy codebases." },
];

export function Section5Experience() {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 max-w-4xl mx-auto text-zinc-900 dark:text-zinc-100">
      <h2 className="text-4xl font-bold mb-20 flex items-center gap-4 uppercase tracking-wider text-center justify-center">
        <span className="text-zinc-400 font-mono text-lg">05.</span> Career Path
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

        <div className="space-y-24">
          {CAREER.map((job, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black dark:bg-white rounded-full -translate-x-1/2 border-4 border-white dark:border-zinc-950 z-10 shadow-[0_0_0_4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />

                {/* Content */}
                <div className={`w-full pl-12 md:pl-0 md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="font-mono text-sm text-zinc-500 mb-2">{job.year}</div>
                  <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                  <div className="text-zinc-600 dark:text-zinc-400 mb-4 font-medium">{job.company}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{job.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
