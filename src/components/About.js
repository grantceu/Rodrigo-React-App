import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Grant!
            <br className="hidden lg:inline-block" /> A passionate developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a dedicated and motivated student with a strong interest in web development. I enjoy learning new technologies, building projects, and solving problems. My goal is to continuously improve and create meaningful, user-friendly applications.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Let's Collaborate
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Courses
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg border-4 border-gray-500"
            style={{ width: "250px", height: "250px" }} // Increased size to 250px for a larger image
            alt="developer"
            src="https://i.postimg.cc/W3gQGJRd/grantpic.jpg"
          />
        </div>
      </div>
    </section>
  );
}
