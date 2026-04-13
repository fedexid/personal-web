import { motion } from "motion/react";

import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={onClick}
      className="scroll-item group relative w-80 shrink-0 cursor-pointer overflow-hidden rounded-2xl md:w-100"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
          layoutId={`img-${project.id}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#080e1f] via-transparent to-transparent" />
      </div>

      {/* Card bottom */}
      <div className="glass -mt-1 p-5">
        {/* <p
          className="mb-1 text-[10px] tracking-[0.3em] uppercase"
          style={{ color: project.accent }}
        >
          {project.tag}
        </p> */}
        <h3 className="text-tertiary font-['Cormorant_Garamond'] text-2xl font-light">
          {project.name}
        </h3>
        {/* This should be the button */}
        <p className="text-tertiary/30 mt-1 text-xs">Tap to explore →</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
