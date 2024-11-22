import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data"; // Import skills array from data

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="container px-5 mx-auto text-center">
        <div className="text-center mb-16">
          <BadgeCheckIcon className="w-10 inline-block mb-4 text-green-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            Here are some of the technical skills I have developed during my studies and projects.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded-lg shadow-lg flex p-6 h-full items-center hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex-shrink-0 mr-4">
                  {/* Render the icon based on the skill */}
                  {skill.icon}
                </div>
                <div className="flex-grow">
                  <h2 className="title-font font-medium text-white text-lg">{skill.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
