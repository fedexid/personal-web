import { motion } from "motion/react";

const AuroraBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#050810] via-[#07101f] to-[#050810]" />

      {/* Aurora blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-175 w-175 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-125 w-125 rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(167,139,250,0.7) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-100 w-100 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(251,113,133,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -20, 10, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 3 === 0
                ? "var(--teal)"
                : i % 3 === 1
                  ? "var(--violet)"
                  : "var(--rose)",
            opacity: Math.random() * 0.6 + 0.2,
          }}
          animate={{
            y: [0, -(Math.random() * 60 + 20), 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
