import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from "@/components";
import data from "@/data/data.json";

export default function Home() {
  const { about, skills, projects, experience, links } = data;

  return (
    <div className="relative scroll-smooth w-screen overflow-x-hidden h-screen overflow-y-scroll text-white snap-y snap-mandatory scrollbar-thin scrollbar-track-black scrollbar-thumb-cyan-950">
      <Header />
      <section id="home" className="h-screen snap-start">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-center">
        <About about={about} />
      </section>
      <section id="skills" className="h-screen snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="min-h-screen snap-start">
        <Projects projects={projects} />
      </section>
      <section id="experience" className="min-h-screen snap-start">
        <Experience experience={experience} />
      </section>
      <section id="contact" className="h-screen snap-start">
        <Contact links={links} />
      </section>
      <div className="fixed bottom-0 right-0 z-50 p-5">
        <a
          href="#contact"
          className="text-white text-2xl hover:text-cyan-500 transition-all duration-300"
        >
          <span className="sr-only">Contact-us</span>
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
