import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Chip from "./Chip";

import React_Logo from "../../assets/images/React_logo.svg";
import JS_Logo from "../../assets/images/Js_Logo.svg";
import SQL_Logo from "../../assets/images/SQL_Logo.svg";
import Python_Logo from "../../assets/images/Python_Logo.svg";
import Git_Logo from "../../assets/images/Git_Logo.svg";
import Claude_Logo from "../../assets/images/Claude_Logo.svg";
import Stats_Logo from "../../assets/images/Stats_Logo.svg";
import Security_Logo from "../../assets/images/Security_Logo.svg";

import Figma_Logo from "../../assets/images/Figma_Logo.svg";
import Vscode_Logo from "../../assets/images/Vscode_Logo.svg";
import Terminal_Logo from "../../assets/images/Terminal_Logo.svg";
import Office_Logo from "../../assets/images/Office_Logo.svg";
import DS_Logo from "../../assets/images/DS_Logo.svg";

const hardSkills = [
  { name: "React", type: "image", icon: React_Logo },
  { name: "Javascript", type: "image", icon: JS_Logo },
  { name: "SQL", type: "image", icon: SQL_Logo },
  { name: "Python", type: "image", icon: Python_Logo },
  { name: "Git", type: "image", icon: Git_Logo },
  { name: "AI-Assisted Problem Solving", type: "image", icon: Claude_Logo },
  { name: "Statistics", type: "image", icon: Stats_Logo },
  { name: "Digital Security & Privacy", type: "image", icon: Security_Logo },
];

const softSkills = [
  { name: "Analytical Thinking", type: "text", icon: "📈" },
  { name: "Problem Solving", type: "text", icon: "🧩" },
  { name: "Communication", type: "text", icon: "💬" },
  { name: "Critical Thinking", type: "text", icon: "🎯" },
  { name: "Creativity", type: "text", icon: "✨" },
  { name: "Detail Oriented", type: "text", icon: "🤏" },
  { name: "Adaptability", type: "text", icon: "🔄" },
  { name: "Collaboration", type: "text", icon: "🤝" },
];

const tools = [
  { name: "Figma", type: "image", icon: Figma_Logo },
  { name: "VS Code", type: "image", icon: Vscode_Logo },
  { name: "Terminal", type: "image", icon: Terminal_Logo },
  { name: "Microsoft Office", type: "image", icon: Office_Logo },
];

const Tools = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-100 w-100 opacity-8"
        style={{
          background: "radial-gradient(circle, var(--gold), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="section-heading text-tertiary text-[clamp(2.5rem,6vw,5rem)] leading-tight">
            Skills & Tools I've Used
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Hard Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-tertiary mb-6 text-sm font-bold tracking-[0.3em] uppercase"
            >
              Hard Skills
            </motion.h3>
            <div className="grid gap-3">
              {hardSkills.map((s, i) => (
                <Chip key={s.name} {...s} delay={0.1 + i * 0.01} />
              ))}
            </div>
          </div>

          {/* Soft + Tools */}
          <div className="flex flex-col gap-12">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-tertiary mb-6 text-sm tracking-[0.3em] uppercase"
              >
                Soft Skills
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s, i) => (
                  <Chip key={s.name} {...s} delay={0.15 + i * 0.07} />
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-tertiary mb-6 text-sm tracking-[0.3em] uppercase"
              >
                Tools & Software
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((t, i) => (
                  <Chip key={t.name} {...t} delay={0.2 + i * 0.07} />
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="glass grad-border rounded-2xl p-5"
            >
              <p className="text-tertiary mb-3 text-xs tracking-[0.3em] uppercase">
                Currently Learning
              </p>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ translateY: -1.05 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="text-2xl"
                >
                  <img src={DS_Logo} alt="Data Science Logo" />
                </motion.div>
                <div>
                  <p className="text-md text-tertiary/80 font-light">
                    Data Science
                  </p>
                  <p className="text-tertiary/65 mt-0.5 text-xs">
                    Probability, Statistics, Python, Regression Analysis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
