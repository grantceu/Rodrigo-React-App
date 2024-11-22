import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-r from-blue-900 to-gray-800 body-font py-20">
      <div className="container px-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-12 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-white">
            My Courses
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
            Here are some of the courses I’ve accomplished during my studies, showcasing my skills in full-stack development and problem-solving.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4 transition-transform transform hover:scale-105"
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-900 group">
                <img
                  alt="project"
                  className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-all duration-300" />
                <div className="px-8 py-10 relative z-10 w-full text-center">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-200">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
