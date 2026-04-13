import { motion } from "motion/react";

import type { Project } from "./types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-end justify-center p-4 md:items-center md:p-8"
      style={{ background: "rgba(5,8,16,0.85)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        className="glass w-full max-w-lg overflow-hidden rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
            layoutId={`img-${project.id}`}
          />
          <div className={`absolute inset-0 bg-linear-to-t ${project.color}`} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-6">
            <p
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: project.accent }}
            >
              {project.tech}
            </p>
            <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-white">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="mb-5 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-widest text-white/40 uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <motion.a
            href={project.linkURL}
            className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-light tracking-[0.15em] text-white uppercase"
            style={{
              background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}11)`,
              border: `1px solid ${project.accent}44`,
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Project
            <span>→</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
