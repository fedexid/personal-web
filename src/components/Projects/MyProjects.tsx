import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";

import type { Project } from "./types";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = [
  {
    id: "1",
    name: "Portfolio Card",
    description: "Lorem Ipsum",
    tech: ["React", "Typescript"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: "_blank",
    linkURL: "_blank",
  },
  {
    id: "1",
    name: "Portfolio Card",
    description: "Lorem Ipsum",
    tech: ["React", "Typescript"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: "_blank",
    linkURL: "_blank",
  },
  {
    id: "1",
    name: "Portfolio Card",
    description: "Lorem Ipsum",
    tech: ["React", "Typescript"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: "_blank",
    linkURL: "_blank",
  },
  {
    id: "1",
    name: "Portfolio Card",
    description: "Lorem Ipsum",
    tech: ["React", "Typescript"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: "_blank",
    linkURL: "_blank",
  },
  {
    id: "1",
    name: "Portfolio Card",
    description: "Lorem Ipsum",
    tech: ["React", "Typescript"],
    color: "from-teal-900/60 to-slate-900",
    accent: "var(--teal)",
    image: "_blank",
    linkURL: "_blank",
  },
];

// const Projects = [
//   {
//     id: 1,
//     image: portfolio_cover,
//     name: "Portfolio",
//     description: "These are some of the projects that I've done",
//     linkURL: portfolio,
//   },
//   {
//     id: 2,
//     image: ReactTodo,
//     name: "React Todo List",
//     description:
//       "This is a React Todo List with the uses of API for the task list",
//     linkURL: "https://github.com/fedexid/react-todolist",
//   },
//   {
//     id: 3,
//     image: StudentPortal,
//     name: "Student Portal",
//     description: "This is a Student Portal App with JSON Server as the data",
//     linkURL: "https://github.com/fedexid/student-portal",
//   },
//   {
//     id: 4,
//     image: HTMLTodoList,
//     name: "Simple Todo List Web Application",
//     description:
//       "This is a Simple Todo List created using HTML, CSS, and Javascript",
//     linkURL: "https://github.com/fedexid/html-css-js-todo-list",
//   },
//   {
//     id: 5,
//     image: CalculatorDesign,
//     name: "Calculator Web Design",
//     description: "This is a simple HTML CSS Calculator Design",
//     linkURL: "https://github.com/fedexid/html-css-calculator",
//   },
//   {
//     id: 6,
//     image: uiux_portfolio,
//     name: "UI/UX Portfolio",
//     description: "This is my UI/UX Related Work",
//     linkURL: uiux,
//   },
//   {
//     id: 7,
//     image: sertif_ss,
//     name: "Certificate",
//     description:
//       "This is a certificate in frontend engineering that I achieved",
//     linkURL: Certificate,
//   },
// ];

const MyProjects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [selected, setSelected] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="relative overflow-hidden bg-sky-500 py-32">
      {/* Parallax bg */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute top-0 right-1/4 h-96 w-96 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--violet), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      <div className="mx-auto mb-12 max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-3 text-xs font-light tracking-[0.4em] uppercase"
            style={{ color: "var(--violet)" }}
          >
            Selected Work
          </p>
          <h2 className="section-heading glow-violet text-[clamp(2.5rem,6vw,5rem)] leading-tight text-white">
            Projects
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="scroll-container flex gap-6 px-6 pb-6 md:px-[calc((100vw-1152px)/2+24px)]"
        style={{ paddingRight: "2rem" }}
      >
        {Projects.map((prj, i) => (
          <motion.div
            key={prj.id}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.2 + i * 0.1,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProjectCard project={prj} onClick={() => setSelected(prj)} />
          </motion.div>
        ))}
        {/* End padding */}
        <div className="w-6 shrink-0" />
      </motion.div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyProjects;
