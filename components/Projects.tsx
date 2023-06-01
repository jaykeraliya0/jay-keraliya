import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: {
    title: string;
    description: string;
    image: string;
    demo: string;
    source: string;
  }[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="relative min-h-screen pb-24">
      <h1 className="pt-36 uppercase text-center left-0 text-6xl font-bold text-cyan-500/50">
        Projects
      </h1>
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          projectData={project}
          odd={i % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;
