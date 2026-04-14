import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

import type { Project } from "./types";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import Portfolio_Cover from "../../assets/images/Portfolio_Cover.webp";
import Certificate_Cover from "../../assets/images/FE_Cover.webp";
import StudentPortal_Cover from "../../assets/images/StudentPortal_Cover.webp";
import Mlr_Cover from "../../assets/images/MLR_Cover.webp";

import Portfolio_File from "../../assets/pdfs/Portfolio.pdf";
import Frontend_Certificate from "../../assets/pdfs/Frontend_Certificate.pdf";

const Projects = [
  {
    id: 1,
    name: "Student Portal",
    description:
      "This is a React Student Portal App Project created using React + React Router and Tailwind for the styling.",
    tech: ["ReactJS", "React Router", "Tailwind CSS", "JSON-Server"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: StudentPortal_Cover,
    linkURL: "https://github.com/fedexid/student-portal",
  },
  {
    id: 2,
    name: "Coffee Shop Revenue Linear Regression Analysis",
    description:
      "This is a Multiple Linear Regression Project with the goal to make model predictions that accurately will predict revenue based on factors like time period, product category, location of the store, and the day of the week.",
    tech: ["Python", "Pandas", "Scikit Learn", "matplotlib"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: Mlr_Cover,
    linkURL: "https://github.com/fedexid/coffee-shop-mlr",
  },
  {
    id: 3,
    name: "Portfolio",
    description: "These are some of the projects that I've done",
    tech: [""],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: Portfolio_Cover,
    linkURL: Portfolio_File,
  },
  {
    id: 4,
    name: "Frontend Certificate",
    description:
      "This is a certificate in frontend engineering that I achieved",
    tech: ["Frontend Engineering"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: Certificate_Cover,
    linkURL: Frontend_Certificate,
  },
];

const MyProjects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <HorizontalScrollTrack onCardClick={setSelected} />

      <AnimatePresence>
        {selected && (
          <ProjectModal
            key={selected.id}
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

type HorizontalScrollTrackProps = {
  onCardClick: (project: Project) => void;
};

const HorizontalScrollTrack = ({ onCardClick }: HorizontalScrollTrackProps) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={trackRef} className="h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="relative z-10 flex gap-6 px-8">
          {Projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onCardClick(project)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
