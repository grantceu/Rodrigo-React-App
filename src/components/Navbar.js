import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 md:sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Brand Name */}
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-2xl border-b-2 border-transparent hover:border-white transition duration-300"
          >
            Grant Rodrigo
          </a>
        </a>
        {/* Navigation Links */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="mr-5 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 transition duration-300"
          >
            Courses
          </a>
          <a
            href="#skills"
            className="mr-5 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="mr-5 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-gray-300 transition duration-300"
          >
            Testimonials
          </a>
        </nav>
        {/* Call to Action */}
        <a
          href="#contact"
          className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 py-2 px-4 focus:outline-none hover:from-teal-500 hover:to-green-500 rounded-full text-base mt-4 md:mt-0 shadow-lg transition duration-300"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
