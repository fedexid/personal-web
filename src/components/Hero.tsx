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
          <motion.p
            variants={item}
            className="text-violet mb-6 text-xs font-light tracking-[0.4em] uppercase"
          >
            Greetings!
          </motion.p>

          <motion.h1
            variants={item}
            className="section-heading glow-violet mb-6 text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] tracking-tight"
          >
            Sein
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 text-[clamp(1rem,2.5vw,1.4rem)] font-light tracking-[0.08em] text-white/50"
          >
            Frontend & Data
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group grad-border relative overflow-hidden rounded-sm px-8 py-4 text-sm font-light tracking-[0.2em] uppercase"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 text-white">My Projects</span>
              <motion.span
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(45,212,191,0.15), rgba(167,139,250,0.15))",
                }}
              />
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-sm border border-white/10 px-8 py-4 text-sm font-light tracking-[0.2em] text-white/50 uppercase transition-colors duration-300 hover:border-white/30 hover:text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-24 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase">
            Scroll Down
          </span>
          <motion.div
            className="h-12 w-px"
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
