import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

import coding_storyset from "../assets/images/coding_storyset.svg";
import Typewriter from "./common/Typewriter";

const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div ref={ref} className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          {/* Image column */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Frame decoration */}
            <div className="grad-border absolute -inset-3 rounded-3xl opacity-50" />
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src={coding_storyset}
                alt="Coding Storyset"
                className="h-full w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#050810]/50 via-transparent" />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-4 text-2xl font-extrabold tracking-[0.4em] uppercase">
                About Me
              </p>
              <h2 className="section-heading mb-8 text-[clamp(2.5rem,5vw,4rem)] leading-tight text-white">
                <Typewriter texts={["Frontend", "Data"]} />
                <br />
              </h2>
            </motion.div>

            {[
              "I'm a Fresh Graduate Majoring in Information Systems and love to learn new things to improve my skills. I have a strong interest in Data field and Frontend Development",
              "I have an experience in Product Data Coordinator with the role of Standardizing, Validate, and Maintained the Data Product Catalog",
              "I'm currently learning Data Science focusing in Probability, Statistics (Descriptive & Inferential), Python, and Regression Analysis.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.35 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4 text-sm leading-relaxed font-light text-white/50"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
