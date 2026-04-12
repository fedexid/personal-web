import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Variants } from "motion/react";

import AuroraBackground from "./common/AuroraBackground";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <AuroraBackground />

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="section-heading text-tertiary glow-tertiary mb-6 text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tight"
          >
            Greetings
          </motion.h1>

          <motion.p
            variants={item}
            className="text-tertiary mb-6 text-xs font-light tracking-[0.4em] uppercase"
          >
            Welcome 👋
          </motion.p>

          <motion.p
            variants={item}
            className="text-tertiary/50 mb-4 text-[clamp(1rem,2.5vw,1.4rem)] font-light tracking-[0.08em]"
          >
            Welcome to My Personal Website
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group bg-secondary grad-border hover:shadow-secondary relative overflow-hidden rounded-sm px-8 py-4 text-sm font-light tracking-[0.2em] uppercase transition hover:-translate-y-2 hover:scale-105 hover:font-bold hover:shadow-lg hover:ease-in-out active:scale-95"
            >
              <span className="text-tertiary relative z-10">My Projects</span>
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(167,139,250,0.15))",
                }}
              />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-tertiary hover:border-tertiary/30 hover:glass border-tertiary/10 hover:text-tertiary rounded-sm border-2 px-8 py-4 text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 hover:-translate-y-2 hover:scale-105 hover:font-bold hover:shadow-lg hover:transition hover:ease-in-out active:scale-95"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <motion.div
            className="h-12 w-1"
            style={{
              background:
                "linear-gradient(to bottom, rgba(45,212,191,0.6), transparent)",
            }}
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
