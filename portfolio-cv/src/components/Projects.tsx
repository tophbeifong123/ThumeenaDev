import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Repeat2, CheckCircle2 } from "lucide-react";

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
            style={{ top: `${top}%`, height: 2, background: "#EA580C" }}
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
    id: "archives-bia",
    questNumber: "เควส I",
    title: "Archives-BIA",
    subtitle: "ระบบจัดการเอกสารระดับองค์กร",
    role: "Full-Stack Developer (Team of 4)",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=900&auto=format&fit=crop",
    // ตัวอย่างการใส่วิดีโอ: หากมีวิดีโอให้ใส่ URL ตรงนี้
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Azure"],
    loop: "โครงสร้างโฟลเดอร์ลึกทำให้เกิด N+1 query ดึง DB ซ้ำซ้อนจนระบบช้า",
    overcome:
      "ใช้ Recursive CTE ดึงทั้งต้นไม้ทีเดียว + Cache เวลาตอบสนองลดลงจาก 3วิ เหลือ 180ms",
    github: "https://github.com/tophbeifong123",
    demo: "https://bia-archive.psu.ac.th/",
  },
  {
    id: "towerdefense",
    questNumber: "เควส II",
    title: "Tower Defense RPG",
    subtitle: "เกมวางกลยุทธ์ Real-time",
    role: "Lead Gameplay Programmer",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=900&auto=format&fit=crop",
    video: null,
    tech: ["Unity", "C#", "NavMesh", "Photon"],
    loop: "การวางหอคอยทำให้ NavMesh คำนวณใหม่ทุกเฟรม FPS ดิ่งหนักเมื่อศัตรูเยอะ",
    overcome:
      "ใช้ Dirty-Flag Pattern ให้คำนวณเฉพาะตอน Grid เปลี่ยน บังคับรันบน Job System ค้าง 60fps",
    github: "https://github.com/fiat222/The-Great-Commander",
    demo: "https://drive.google.com/drive/u/0/folders/1yeGL-YXCsYSZVRt1Jowd-7FqPO7YaQlO?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExakprSllraU1RYnhhakR5a3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4AjUd-PLCWz7HLF-fJuL-455UTtmR18effvkwn8A6In3TMa7-niMCafZJC7A_aem_fAaGWesTRRjI1sYoXw2wgA",
  },
  {
    id: "portfolio",
    questNumber: "เควส III",
    title: "Portfolio CV",
    subtitle: "เว็บพอร์ตโฟลิโอส่วนตัว",
    role: "Solo Developer / Designer",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=900&auto=format&fit=crop",
    video: null,
    tech: ["Astro", "React", "Framer Motion", "Tailwind"],
    loop: "สลับ Light/Dark ธีม หน้าจอกระพริบขาว (FOUC) ทุกครั้งที่ Refresh",
    overcome:
      "ใส่ Inline Script บังคับอ่าน Theme ก่อน Paint แรก ทำให้โหลดแบบ Seamless ไร้รอยต่อ",
    github: "https://github.com/tophbeifong123/ThumeenaDev",
    demo: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // once: false allows the projects to elegantly animate every single time they enter the screen
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const isReversed = index % 2 === 1;

  // ควบคุมการเล่นวิดีโออัตโนมัติเมื่อโฮเวอร์ (Best Practice สำหรับ Portfolio)
  useEffect(() => {
    if (project.video && videoRef.current) {
      if (hovered) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {}); // catch เอาไว้กันเบราว์เซอร์บล็อก Autoplay
      } else {
        videoRef.current.pause();
      }
    }
  }, [hovered, project.video]);

  return (
    <section
      id={index === 0 ? "projects" : `project-${project.id}`}
      className="snap-section w-full theme-even"
    >
      <div className="section-inner h-full flex flex-col justify-center py-20">
        {" "}
        {/* เพิ่ม White Space ด้านบน/ล่าง */}
        {/* Title rendered only on the first project to anchor the section */}
        {index === 0 && (
          <div
            className="mb-16 border-l-4 pl-5 ml-4 lg:ml-0"
            style={{ borderColor: "#EA580C" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2"
              style={{ color: "#EA580C" }}
            >
              Section III · บันทึกสนามรบ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase"
              style={{ color: "var(--fg-main)" }}
            >
              The Chronicles
            </motion.h2>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center px-4 md:px-8 lg:px-0 group`}
        >
          {/* ── Image/Video Side ─────────────────── */}
          <div className="w-full lg:w-[55%] shrink-0 relative">
            {/* Ambient Shadow / Glow */}
            <div
              className={`absolute -inset-4 bg-[#EA580C] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl ${isReversed ? "translate-x-4" : "-translate-x-4"}`}
            />

            <div
              className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-4/3 cursor-crosshair shadow-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* ภาพ Thumbnail จะจางลงถ้าวิดีโอถูกเล่น */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-10"
                animate={{
                  scale: hovered ? 1.05 : 1,
                  opacity: hovered && project.video ? 0 : 1,
                  filter: hovered
                    ? "grayscale(0.3) contrast(1.2)"
                    : "grayscale(0) contrast(1)",
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Video Player (ซ่อนอยู่ใต้ภาพ จะโชว์ขึ้นมาเมื่อโฮเวอร์) */}
              {project.video && (
                <video
                  ref={videoRef}
                  src={project.video}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              )}

              <GlitchOverlay active={hovered} />

              {/* Overlay Actions */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm z-30"
                animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.github}
                  className="px-6 py-3 rounded-full font-bold border-none flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                  style={{ background: "#1C1917", color: "#fff" }}
                >
                  <Github className="w-4 h-4" /> โค้ด
                </a>
                <a
                  href={project.demo}
                  className="px-6 py-3 rounded-full font-bold text-white border-none flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_rgba(234,88,12,0.4)]"
                  style={{ background: "#EA580C" }}
                >
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </motion.div>

              <span
                className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-black tracking-widest uppercase rounded-[6px] shadow-lg z-40"
                style={{ background: "#EA580C", color: "#fff" }}
              >
                {project.questNumber}
              </span>
            </div>
          </div>

          {/* ── Text Side ────────────────────────────────────────────── */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-8 lg:space-y-10">
            <div>
              <h3
                className="text-4xl lg:text-5xl font-black tracking-tight leading-tight"
                style={{ color: "var(--fg-main)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-base font-bold mt-2 uppercase tracking-wider"
                style={{ color: "#EA580C" }}
              >
                {project.subtitle}
              </p>

              {/* Role Display */}
              <div
                className="inline-block mt-4 px-3 py-1.5 rounded-lg border text-xs font-bold"
                style={{
                  background: "var(--bg-alt)",
                  color: "var(--fg-main)",
                  borderColor: "var(--border-color)",
                }}
              >
                Role: <span style={{ color: "#EA580C" }}>{project.role}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-bold px-3 py-1.5 rounded-full uppercase"
                  style={{
                    background: "var(--bg-main)",
                    color: "var(--fg-main)",
                    border: "1px solid var(--border-color)",
                    opacity: 0.8,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* เพิ่ม White Space โดยใช้ gap-4 ระหว่างกล่องปัญหาและกล่องทางแก้ */}
            <div className="space-y-4">
              <div
                className="relative overflow-hidden rounded-2xl p-5 lg:p-6 transition-all duration-300 group-hover:bg-[#EF4444]/5 group-hover:shadow-[0_4px_20px_rgba(239,68,68,0.05)] hover:-translate-y-1"
                style={{
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-card)",
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#EF4444] opacity-70" />
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#EF4444] mb-2.5">
                  <Repeat2 className="w-4 h-4" /> จุดพัง (The Loop)
                </div>
                <p
                  className="text-sm leading-relaxed font-medium"
                  style={{ color: "var(--fg-main)", opacity: 0.7 }}
                >
                  {project.loop}
                </p>
              </div>

              <div
                className="relative overflow-hidden rounded-2xl p-5 lg:p-6 transition-all duration-300 group-hover:bg-[#EA580C]/5 group-hover:shadow-[0_4px_20px_rgba(234,88,12,0.05)] hover:-translate-y-1"
                style={{
                  border: "1px solid var(--border-color)",
                  background: "var(--bg-card)",
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#EA580C]" />
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#EA580C] mb-2.5">
                  <CheckCircle2 className="w-4 h-4" /> จุดพลิก (The Overcome)
                </div>
                <p
                  className="text-sm leading-relaxed font-medium"
                  style={{ color: "var(--fg-main)", opacity: 0.7 }}
                >
                  {project.overcome}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Projects() {
  return (
    <>
      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </>
  );
}
