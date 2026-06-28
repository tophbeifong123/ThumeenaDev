import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Repeat2, CheckCircle2, X } from "lucide-react";

/* ── Subaru Glitch Overlay ────────────────────────────────────────────────── */
const GlitchOverlay = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <>
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: "rgba(234,88,12,0.15)",
            mixBlendMode: "overlay",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0, 0.5, 0] }}
          transition={{ duration: 0.35, times: [0, 0.1, 0.35, 0.55, 1] }}
        />
        {[10, 30, 60, 85].map((top, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 pointer-events-none z-20"
            style={{ top: `${top}%`, height: 2, background: "var(--primary)" }}
            initial={{ x: "-100%", opacity: 0.9 }}
            animate={{ x: "100%", opacity: 0 }}
            transition={{
              duration: 0.25,
              delay: i * 0.05 + Math.random() * 0.1,
            }}
          />
        ))}
      </>
    )}
  </AnimatePresence>
);

const PROJECTS = [
  {
    id: "towerdefense",
    questNumber: "เควส I",
    title: "The-Great-Commander",
    subtitle: "Tower Defense Game",
    role: "Lead Gameplay Programmer",
    date: "Feb 2026",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900&auto=format&fit=crop",
    video: null,
    tech: ["Unity", "C#", "NavMesh", "Photon"],
    loop: "การวางหอคอยทำให้ NavMesh คำนวณใหม่ทุกเฟรม FPS ดิ่งหนักเมื่อศัตรูเยอะ",
    overcome:
      "ใช้ Dirty-Flag Pattern ให้คำนวณเฉพาะตอน Grid เปลี่ยน บังคับรันบน Job System ค้าง 60fps",
    github: "https://github.com/fiat222/The-Great-Commander",
    demo: "https://drive.google.com/drive/u/0/folders/1yeGL-YXCsYSZVRt1Jowd-7FqPO7YaQlO?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExakprSllraU1RYnhhakR5a3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4AjUd-PLCWz7HLF-fJuL-455UTtmR18effvkwn8A6In3TMa7-niMCafZJC7A_aem_fAaGWesTRRjI1sYoXw2wgA",
    contributions: [
      "Architected a 1vs1 strategy game using Unity and C#, focusing on game mechanics and unit AI.",
      "Managed physics-based interactions and game state logic for smooth gameplay."
    ]
  },
  {
    id: "archives-bia",
    questNumber: "เควส II",
    title: "Archives-BIA",
    subtitle: "Metadata Management Web Application",
    role: "Full-Stack Developer",
    date: "Nov 2025 – Present",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=900&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Azure"],
    loop: "โครงสร้างโฟลเดอร์ลึกทำให้เกิด N+1 query ดึง DB ซ้ำซ้อนจนระบบช้า",
    overcome:
      "ใช้ Recursive CTE ดึงทั้งต้นไม้ทีเดียว + Cache เวลาตอบสนองลดลงจาก 3วิ เหลือ 180ms",
    github: null,
    demo: "https://bia-archive.psu.ac.th/",
    contributions: [
      "Designed a robust one-to-many database relationship mapping between Context Areas and their associated metadata entries, ensuring historical data integrity and structural accuracy.",
      "Built an intuitive and accessible frontend interface that allows archivists to input, filter, and manage complex contextual datasets with real-time field validation."
    ]
  },
  {
    id: "lifelong-learning",
    questNumber: "เควส III",
    title: "PSU Lifelong Learning",
    subtitle: "Lifelong Learning Platform",
    role: "Frontend Developer",
    date: "April 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    video: null,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    loop: "การค้นหาหลักสูตรที่ซับซ้อนและการกรองข้อมูลขนาดใหญ่ทำให้หน้าเว็บกระตุกและโหลดช้า",
    overcome:
      "นำระบบ Debounce และ Client-side Caching มาใช้ ร่วมกับการจัดทำดัชนีฝั่งเซิร์ฟเวอร์ กรองลื่นไหล",
    github: null,
    demo: "https://lifelong.psu.ac.th/",
    contributions: [
      "Architected an Advanced Search & Filtering System, implementing complex multi-conditional UI logic that enables users to effortlessly filter and navigate extensive course catalogs.",
      "Crafted a dynamic Course Detail View with a clean, responsive layout, optimized to fetch and render dynamic course metadata while ensuring readability across all devices."
    ]
  },
  {
    id: "edu-fair",
    questNumber: "เควส IV",
    title: "PSU Edu Fair App",
    subtitle: "Education Fair Web Application",
    role: "Full-Stack Developer",
    date: "March 2025",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
    video: null,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    loop: "ระบบจองพื้นที่บูธในงานมีผู้ใช้งานเข้าพร้อมกันจนทำให้เกิด Race Condition บูธจองซ้ำซ้อน",
    overcome:
      "ใช้ Database Transaction ร่วมกับ Optimistic Locking ป้องกันการจองซ้ำ และใช้ WebSockets อัปเดตแบบเรียลไทม์",
    github: null,
    demo: "https://edufair.psu.ac.th/login",
    contributions: [
      "Designed and developed a secure Authentication UI, implementing robust user registration and login flows with strict client-side data validation for a seamless onboarding experience.",
      "Built a comprehensive Admin Dashboard for back-office management, featuring interactive layouts to display attendee statistics, system analytics, and automated reports.",
      "Developed a live Booking Status Visualizer, creating an intuitive and responsive interface that tracks and reflects real-time reservation updates for users."
    ]
  }
];

const ProjectRow = ({
  project,
  index,
  isHovered,
  onHover,
  onClick,
}: {
  project: typeof PROJECTS[0];
  index: number;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}) => {
  return (
    <div
      className="border-b border-border py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-none relative group transition-all duration-300"
      style={{ borderColor: "var(--border-color)" }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onClick}
    >
      {/* Hover background highlight effect */}
      <div className="absolute inset-0 bg-[var(--primary)]/3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-4 px-4 rounded-2xl" />

      {/* Left: Quest number and Title */}
      <div className="flex items-baseline gap-4 relative z-10">
        <span className="font-mono text-xs opacity-40 font-black tracking-widest" style={{ color: "var(--fg-main)" }}>
          {project.questNumber}
        </span>
        <h3 className="text-xl sm:text-2xl font-black tracking-tight group-hover:text-primary transition-colors duration-300 flex items-center gap-2" style={{ color: "var(--fg-main)" }}>
          {project.title}
          {project.demo && project.demo !== "#" && (
            <span className="relative flex h-2 w-2" title="Live Site Available">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          )}
        </h3>
      </div>

      {/* Middle: Subtitle & Role */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:flex-grow md:justify-center relative z-10">
        <span className="text-xs font-bold opacity-60" style={{ color: "var(--fg-main)" }}>
          {project.subtitle}
        </span>
        <span
          className="text-[9px] px-2.5 py-0.5 rounded-full border font-black tracking-wider uppercase"
          style={{
            borderColor: isHovered ? "var(--primary)" : "var(--border-color)",
            color: isHovered ? "var(--primary)" : "var(--fg-main)",
            background: isHovered ? "color-mix(in srgb, var(--primary) 5%, transparent)" : "transparent",
            transition: "all 0.3s ease",
          }}
        >
          {project.role}
        </span>
      </div>

      {/* Right: Tech stack summary & Year */}
      <div className="flex items-center gap-4 justify-between md:justify-end relative z-10">
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase"
              style={{
                background: "var(--bg-main)",
                color: "var(--fg-main)",
                borderColor: "var(--border-color)",
                opacity: 0.85,
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full opacity-50" style={{ color: "var(--fg-main)" }}>
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <span className="text-xs font-mono opacity-40 font-black" style={{ color: "var(--fg-main)" }}>
          {project.date.split(" ").pop()}
        </span>
      </div>

      {/* Mobile inline preview image */}
      <div
        className="md:hidden w-full aspect-video rounded-2xl overflow-hidden border mt-2 opacity-80 z-10 animate-fade-in"
        style={{ borderColor: "var(--border-color)" }}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Lock background scroll when modal is open
  useEffect(() => {
    const main = document.getElementById("main-scroll");
    if (!main) return;
    if (selectedProject) {
      main.style.overflowY = "hidden";
    } else {
      main.style.overflowY = "scroll";
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="snap-section w-full theme-even relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="section-inner h-full flex flex-col justify-center py-12 sm:py-16 lg:py-20 px-4 lg:px-0">
        
        {/* Header (Section Title) */}
        <div
          className="mb-10 border-l-4 pl-5 ml-4 lg:ml-0"
          style={{ borderColor: "var(--primary)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1"
            style={{ color: "var(--primary)" }}
          >
            Section III · บันทึกสนามรบ
          </motion.p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase"
            style={{ color: "var(--fg-main)" }}
          >
            The Chronicles
          </h2>
          <p
            className="text-[10px] tracking-[0.3em] uppercase mt-1"
            style={{ color: "var(--primary)" }}
          >
            — ทุกเควส์คือบทเรียนรู้ที่ต้องแลกด้วยความตาย —
          </p>
        </div>

        {/* Project List */}
        <div className="relative border-t flex flex-col w-full" style={{ borderColor: "var(--border-color)" }}>
          {PROJECTS.map((project, idx) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={idx}
              isHovered={hoveredIdx === idx}
              onHover={(hovered) => setHoveredIdx(hovered ? idx : null)}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Floating Mouse Follower Image Preview (Desktop only) */}
        <div className="hidden md:block pointer-events-none absolute z-40" style={{ left: 0, top: 0 }}>
          <AnimatePresence>
            {hoveredIdx !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: mousePos.x + 30, // Offset to the right of the cursor
                  y: mousePos.y - 100, // Offset slightly above
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  mass: 0.5,
                }}
                className="w-[320px] aspect-video rounded-3xl overflow-hidden shadow-2xl border bg-black/20 backdrop-blur-sm"
                style={{ borderColor: "var(--primary)" }}
              >
                {/* Media inside follower */}
                {PROJECTS[hoveredIdx].video ? (
                  <video
                    src={PROJECTS[hoveredIdx].video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={PROJECTS[hoveredIdx].image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Glitch Overlay */}
                <GlitchOverlay active={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Quest Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card w-full max-w-2xl rounded-3xl border overflow-hidden relative shadow-2xl flex flex-col"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top border decoration */}
              <div
                className="w-full h-1"
                style={{ background: `linear-gradient(to right, var(--primary), var(--secondary))` }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border bg-card text-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-none z-10"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                  color: "var(--fg-main)",
                }}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto max-h-[85dvh] space-y-6">
                {/* Header */}
                <div>
                  <span
                    className="inline-block px-2.5 py-1 text-[9px] font-black tracking-widest uppercase rounded-[4px] mb-2"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    {selectedProject.questNumber}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ color: "var(--fg-main)" }}>
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-bold mt-1 uppercase tracking-wider" style={{ color: "var(--primary)" }}>
                    {selectedProject.subtitle}
                  </p>
                  
                  <div
                    className="inline-block mt-3 px-3 py-1 rounded-xl border text-xs font-bold"
                    style={{
                      background: "var(--bg-alt)",
                      color: "var(--fg-main)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    Role: <span style={{ color: "var(--primary)" }}>{selectedProject.role}</span>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold px-3 py-1 rounded-full uppercase"
                      style={{
                        background: "var(--bg-main)",
                        color: "var(--fg-main)",
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Contributions */}
                <div className="space-y-2 pt-2 border-t" style={{ borderColor: "var(--border-color)" }}>
                  <h4 className="text-[10px] font-black uppercase tracking-widest opacity-50">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2 list-disc pl-5 text-sm font-medium opacity-85 leading-relaxed" style={{ color: "var(--fg-main)" }}>
                    {selectedProject.contributions.map((bullet, idx) => (
                      <li key={idx} className="marker:text-primary">{bullet}</li>
                    ))}
                  </ul>
                </div>

                {/* The Battle Report (Loop & Overcome) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: "var(--border-color)" }}>
                  <div className="relative overflow-hidden rounded-2xl p-4 border border-border bg-card" style={{ borderColor: "var(--border-color)" }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EF4444] opacity-70" />
                    <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-[#EF4444] mb-2">
                      <Repeat2 className="w-3.5 h-3.5" /> จุดพัง (The Loop)
                    </div>
                    <p className="text-xs leading-relaxed font-medium opacity-70">
                      {selectedProject.loop}
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl p-4 border border-border bg-card" style={{ borderColor: "var(--border-color)" }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" style={{ backgroundColor: "var(--primary)" }} />
                    <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-primary mb-2" style={{ color: "var(--primary)" }}>
                      <CheckCircle2 className="w-3.5 h-3.5" /> จุดพลิก (The Overcome)
                    </div>
                    <p className="text-xs leading-relaxed font-medium opacity-70">
                      {selectedProject.overcome}
                    </p>
                  </div>
                </div>

                {/* Footer buttons (Github / Demo) */}
                <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform text-xs cursor-none"
                      style={{ background: "#1C1917", color: "#fff" }}
                    >
                      <Github className="w-4 h-4" /> ดูซอร์สโค้ด
                    </a>
                  )}
                  {selectedProject.demo && selectedProject.demo !== "#" && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl font-bold text-white flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform text-xs shadow-lg cursor-none"
                      style={{ background: "var(--primary)" }}
                    >
                      <ExternalLink className="w-4 h-4" /> เข้าใช้งานจริง
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
