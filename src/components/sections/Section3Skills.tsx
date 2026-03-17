import { motion } from "framer-motion";
import { Server, Monitor, Wrench } from "lucide-react";

export function Section3Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 max-w-6xl mx-auto text-base-content">
      <h2 className="text-4xl font-bold mb-16 flex items-center gap-4 uppercase tracking-wider">
        <span className="text-base-content/40 font-mono text-lg">03.</span> Skill Tree
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Frontend Tree */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-l-2 border-base-300 pl-8 relative"
        >
          <div className="absolute top-0 -left-6 w-12 h-12 bg-base-100 border-2 border-base-300 rounded-full flex items-center justify-center text-info">
            <Monitor size={20} />
          </div>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-base-content/50 mt-2">Frontend</h3>
          
          <div className="space-y-6">
            {["React / Next.js", "Astro", "Tailwind CSS", "Framer Motion", "TypeScript"].map((skill) => (
              <motion.div key={skill} variants={itemVariants} className="relative group">
                <div className="absolute top-3 -left-[35px] w-6 h-[2px] bg-base-300 group-hover:bg-info transition-colors" />
                <div className="bg-base-200 p-4 rounded-box border border-transparent group-hover:border-info transition-colors cursor-default shadow-sm">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Tree */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-l-2 border-base-300 pl-8 relative"
        >
          <div className="absolute top-0 -left-6 w-12 h-12 bg-base-100 border-2 border-base-300 rounded-full flex items-center justify-center text-success">
            <Server size={20} />
          </div>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-base-content/50 mt-2">Backend</h3>
          
          <div className="space-y-6">
            {["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"].map((skill) => (
              <motion.div key={skill} variants={itemVariants} className="relative group">
                <div className="absolute top-3 -left-[35px] w-6 h-[2px] bg-base-300 group-hover:bg-success transition-colors" />
                <div className="bg-base-200 p-4 rounded-box border border-transparent group-hover:border-success transition-colors cursor-default shadow-sm">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Tree */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-l-2 border-base-300 pl-8 relative"
        >
          <div className="absolute top-0 -left-6 w-12 h-12 bg-base-100 border-2 border-base-300 rounded-full flex items-center justify-center text-warning">
            <Wrench size={20} />
          </div>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-base-content/50 mt-2">Tools</h3>
          
          <div className="space-y-6">
            {["Git & GitHub", "Docker", "VS Code", "Figma", "Vite"].map((skill) => (
              <motion.div key={skill} variants={itemVariants} className="relative group">
                <div className="absolute top-3 -left-[35px] w-6 h-[2px] bg-base-300 group-hover:bg-warning transition-colors" />
                <div className="bg-base-200 p-4 rounded-box border border-transparent group-hover:border-warning transition-colors cursor-default shadow-sm">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
