import { useRef } from "react";
import { motion, useInView } from "motion/react";

const Chip = ({
  name,
  type,
  icon,
  delay: _delay,
}: {
  name: string;
  type: string;
  icon: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      className="glass flex cursor-default items-center gap-2 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
    >
      {type === "image" ? (
        <img className="h-8 w-8 md:h-6 md:w-6" src={icon} alt={`${icon}`} />
      ) : (
        <span className="text-lg">{icon}</span>
      )}
      <span className="text-tertiary text-xs font-light tracking-wide">
        {name}
      </span>
    </motion.div>
  );
};

export default Chip;
