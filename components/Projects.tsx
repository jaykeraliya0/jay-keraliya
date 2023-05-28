import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Byte Bunch",
      description:
        "Byte Bunch is a versatile NFT project based on the ERC-721 standard, offering users the ability to mint, own, and trade unique digital assets.",
      image: "/images/projects/project1.png",
      demo: "https://byte-bunch.vercel.app/",
      source: "https://github.com/jaykeraliya0/Project-Byte-Bunch",
    },
    {
      title: "CIVF",
      description:
        "a website for the nonprofit Charusat Innovative Ventures Foundation, which aims to support aspiring entrepreneurs and innovators in creating their own startups.",
      image: "/images/projects/project2.png",
      demo: "https://civf.co.in/",
      source: "",
    },
  ];
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
