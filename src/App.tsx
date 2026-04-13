import "@fontsource-variable/google-sans/index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MyProjects from "./components/Projects/MyProjects";
import AboutMe from "./components/AboutMe";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact";

import AuroraBackground from "./components/common/AuroraBackground";

function App() {
  return (
    <div className="min-h-screen bg-[#050810] text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <AuroraBackground />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="projects" style={{ clipPath: "inset(0)" }}>
            <MyProjects />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="tools">
            <Tools />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
