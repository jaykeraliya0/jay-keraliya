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
    <div className="scroll-smooth w-screen overflow-x-hidden h-screen overflow-y-scroll text-white snap-y snap-mandatory scrollbar-thin scrollbar-track-black scrollbar-thumb-cyan-950">
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
    </div>
  );
}
