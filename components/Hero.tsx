import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen max-w-4xl mx-auto bg-gradient-radial from-transparent via-black/90 to-black/90">
      <Image
        src="/images/main.png"
        alt="Hero Image"
        fill
        className="absolute object-cover w-full h-full -z-20 bg-black transform opacity-40"
      />

      <div className="absolute flex flex-col w-full justify-end items-center space-y-5 mx-auto p-8 bottom-10">
        <h1 className="text-5xl font-bold text-white text-center">
          Hello, I&apos;m <span className="text-cyan-500 underline">Jay</span>{" "}
          <span className="text-cyan-700">Keraliya</span>
        </h1>
        <h3 className="text-3xl font-bold text-gray-400 text-center">
          Full Stack Web<span className="text-gray-500 underline">3</span>{" "}
          <span className="text-cyan-500 underline">Developer</span>
        </h3>
      </div>
    </div>
  );
};

export default Hero;
