import Image from "next/image";

type Props = {
  skills: string[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className="min-h-screen relative flex flex-col md:grid md:grid-cols-2">
      <div className="absolute md:relative h-1/3 md:h-full w-full -z-10">
        <Image
          src="/images/skill.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-full h-full md:w-2/3 object-cover bg-black transform opacity-40"
        />
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-start mx-auto p-8">
        <div className="flex flex-wrap justify-end md:justify-start items-start">
          {skills.map((skill) => (
            <div key={skill} className="flex justify-center items-center">
              <p className="text-lg font-bold text-gray-300 bg-gray-950 shadow-inner m-2 p-3 rounded uppercase hover:bg-gray-300 hover:text-gray-950 cursor-pointer transition-all duration-700 ease-in-out">
                <span>{skill}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1 className="absolute uppercase bottom-1 right-0 text-6xl font-bold text-cyan-500/50">
        Skills
      </h1>
    </div>
  );
};

export default Skills;
