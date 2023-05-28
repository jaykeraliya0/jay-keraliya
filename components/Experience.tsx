import React from "react";

type Props = {
  experience: {
    date: string[];
    company: string;
    title: string;
  }[];
};

const Experience = ({ experience }: Props) => {
  const buildDate = (date: string) => {
    return new Date(date);
  };

  return (
    <div className="min-h-screen py-24">
      <section>
        <div className="bg-black text-white py-8">
          <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <h1 className="ml-2 text-cyan-500/50 uppercase tracking-loose text-5xl">
                Experience
              </h1>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky w-full">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-cyan-555 absolute h-full  border-2 border-solid border-cyan-500/50 right-[50%] rounded-[1%]"></div>
                  <div className="border-2-2 border-cyan-555 absolute h-full left-[50%] border-2 border-solid border-cyan-500/50 rounded-[1%]"></div>
                  {/*  */}
                  {experience.map((exp, i) => (
                    <>
                      {i % 2 === 0 ? (
                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                          <div className="order-1 w-5/12"></div>
                          <div className="order-1 w-5/12 px-1 py-4 text-right">
                            <p className="mb-3 text-base text-cyan-300">
                              {buildDate(exp.date[0]).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}{" "}
                              -{" "}
                              {buildDate(exp.date[1]) >= new Date()
                                ? "PRESENT"
                                : buildDate(exp.date[1]).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                            </p>
                            <h4 className="mb-3 font-bold text-lg md:text-2xl">
                              {exp.company}
                            </h4>
                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                              {exp.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                          <div className="order-1 w-5/12"></div>
                          <div className="order-1  w-5/12 px-1 py-4 text-left">
                            <p className="mb-3 text-base text-cyan-300">
                              {buildDate(exp.date[0]).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}{" "}
                              -{" "}
                              {buildDate(exp.date[1]) >= new Date()
                                ? "PRESENT"
                                : buildDate(exp.date[1]).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                  )}
                            </p>
                            <h4 className="mb-3 font-bold text-lg md:text-2xl">
                              {exp.company}
                            </h4>
                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                              {exp.title}
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
