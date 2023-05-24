import Link from "next/link";

type Props = {
  projectData: {
    title: string;
    description: string;
    image: string;
    demo: string;
    source: string;
  };
  odd?: boolean;
};

const ProjectCard = ({ projectData, odd }: Props) => {
  return (
    <div className="mx-auto max-w-7xl py-5 sm:px-6 lg:px-8">
      <div
        className={`relative isolate overflow-hidden bg-gray-950 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 ${
          odd && "flex-row-reverse"
        }`}
      >
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {projectData.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {projectData.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href={projectData.demo}
              target="_blank"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Live Demo
            </Link>
            {projectData.source && (
              <Link
                href={projectData.source}
                target="_blank"
                className="text-sm font-semibold leading-6 text-white"
              >
                Source Code
              </Link>
            )}
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className={`absolute top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 ${
              odd && "right-0"
            }`}
            src={projectData.image}
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
