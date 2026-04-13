import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const links: string[] = ["Home", "Projects", "About", "Tools", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("Home")}
          className="text-2xl font-light tracking-widest"
          whileHover={{ scale: 1.04 }}
        >
          <span className="text-white">Sein</span>
        </motion.button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link} className="group relative">
              <button
                onClick={() => scrollTo(link)}
                className="text-tertiary text-sm font-light tracking-[0.12em] uppercase transition-colors duration-300 hover:text-white"
              >
                {link}
                {/* underline bar */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-teal-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
                {active === link && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="from-teal to-violet absolute -bottom-1 left-0 h-px w-full bg-linear-to-r"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-px w-6 origin-center bg-white"
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 8 }
                    : i === 2
                      ? { rotate: -45, y: -8 }
                      : { opacity: 0 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => scrollTo(link)}
                    className="w-full border-b border-white/5 py-3 text-left text-sm tracking-[0.15em] text-white/60 uppercase transition-colors last:border-0 hover:text-white"
                  >
                    {link}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
