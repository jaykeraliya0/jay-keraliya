import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <div className="relative scroll-smooth w-screen overflow-x-hidden h-screen overflow-y-scroll text-white snap-y snap-mandatory scrollbar-thin scrollbar-track-black scrollbar-thumb-cyan-950">
      <Header />
      <section id="home" className="h-screen snap-start">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-center">
        <About />
      </section>
      <section id="skills" className="h-screen snap-center">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen snap-center">
        <Projects />
      </section>
      <section id="experience" className="min-h-screen snap-center">
        <Experience />
      </section>
      <section id="contact" className="h-screen snap-start">
        <Contact />
      </section>
      <div className="fixed bottom-0 right-0 z-50 p-5">
        <a
          href="#contact"
          className="text-white text-2xl hover:text-cyan-500 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
