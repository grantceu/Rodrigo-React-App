import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-xl">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 rounded-lg"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/search?q=Centro+Escolar+University+Manila&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded-lg shadow-lg opacity-90">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-green-400 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                9 Mendiola St <br />
                San Miguel, Manila, 1008 Metro Manila
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-green-400 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:rodrigo2103530@ceu.edu.ph" className="text-indigo-400 hover:text-indigo-500">
                rodrigo2103530@ceu.edu.ph
              </a>
              <h2 className="title-font font-semibold text-green-400 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">09458410205</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 bg-gray-800 rounded-lg shadow-md"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let's Connect
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            Feel free to reach out for collaborations, queries, or project discussions. I’d love to hear from you!
          </p>
          
          {/* Name Field */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-2 px-3 transition-all duration-200 ease-in-out"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-2 px-3 transition-all duration-200 ease-in-out"
            />
          </div>

          {/* Message Field */}
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 h-32 text-base outline-none text-gray-100 py-2 px-3 resize-none transition-all duration-200 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
