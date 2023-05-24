import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center mx-auto max-w-4xl">
      <p className="text-base sm:text-xl font-semibold bg-black/20 p-12 leading-loose pr-12 text-justify md:text-left md:pr-48">
        I am passionate about crafting innovative digital solutions as a
        Full-stack Web3 Developer. With a strong foundation in both frontend and
        backend technologies, coupled with expertise in blockchain development,
        I strive to create impactful and cutting-edge applications that push the
        boundaries of what&apos;s possible.{" "}
        <span className="text-amber-500">Yes, I love kittens too!</span>
      </p>
      <Image
        src="/images/kitten.png"
        alt="Hero Image"
        width={800}
        height={800}
        className="absolute w-full md:w-1/3 object-contain right-0 h-full -z-20 bg-black transform opacity-40"
      />
      <h1 className="absolute uppercase bottom-1 left-0 text-6xl font-bold text-cyan-500/50">
        About Me
      </h1>
    </div>
  );
};

export default About;
