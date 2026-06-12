"use client";

import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      type: "Personal Project",
      description:
        "Personal portfolio developed to showcase professional experience, projects and technical skills through a modern and responsive interface.",
      image: "/portfolio.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
      ],
    },

    {
      title: "GAPA System",
      type: "Professional Project",
      description:
        "Management system for animal protection organizations built with Next.js, TypeScript, Prisma and PostgreSQL.",
      image: "/gapa.png",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
      ],
    },

    {
      title: "Cat's Adventure",
      type: "In Development",
      description:
        "A 2D top-down adventure game where players control a cat on a mission to rescue friends kidnapped by a mysterious villain.",
      image: "/cats-adventure.png",
      technologies: [
        "Unity",
        "C#",
        "Unity API",
        "Game Design",
      ],
    },
  ];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeProject = (newIndex: number) => {
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setIsAnimating(false);
    }, 250);
  };

  const previous =
    (current - 1 + projects.length) %
    projects.length;

  const next =
    (current + 1) %
    projects.length;

  return (
    <section className="py-10 px-8">


      <div className="grid md:grid-cols-4 gap-6">

        {/* ESQUERDA */}
        <div
          onClick={() => changeProject(previous)}
          className="relative h-[200px] md:col-span-1 top-1/2 -translate-y-1/2
          rounded-3xl overflow-hidden opacity-50 hover:opacity-80
          transition-all duration-300 cursor-pointer"
        >
          <img
            src={projects[previous].image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/70 to-black" />

          <button
            className="absolute left-1 top-1/2 -translate-y-1/2
            w-18 h-18 rounded-full border border-white/30 backdrop-blur-sm
            flex items-center justify-center"
          >
            ←
          </button>

          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-blue-400">
              {projects[previous].type}
            </p>

            <h3 className="text-2xl font-bold">
              {projects[previous].title}
            </h3>
          </div>
        </div>

        {/* CENTRO */}
        <div className={`relative h-[350px] md:col-span-2 rounded-3xl
            overflow-hidden transition-all duration-300 cursor-pointer
            ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
          `}>
          <img
            src={projects[current].image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-blue-400 text-sm flex flex-wrap justify-center">
              {projects[current].type}
            </span>

            <h3 className="text-4xl font-bold mt-2 text-white flex flex-wrap justify-center">
              {projects[current].title}
            </h3>

            <p className="text-white mt-4 flex flex-wrap justify-center">
              {projects[current].description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5 flex flex-wrap justify-center">
              {projects[current].technologies.map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <button
              className="mt-6 mx-auto block px-6 py-3 rounded-full
              bg-white text-black font-medium hover:scale-105
              transition-all duration-300 flex flex-wrap justify-center"
            >
              View Details
            </button>
          </div>
        </div>

        {/* DIREITA */}
        <div
          onClick={() => changeProject(next)}
          className="relative h-[200px] md:col-span-1 top-1/2
          -translate-y-1/2 rounded-3xl overflow-hidden opacity-50
          hover:opacity-80 transition-all duration-300 cursor-pointer"
        >
          <img
            src={projects[next].image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/70 to-black" />

          <button
            className="absolute right-1 top-1/2 -translate-y-1/2
            w-18 h-18 rounded-full border border-white/30
            backdrop-blur-sm flex items-center justify-center"
          >
            →
          </button>

          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-blue-400">
              {projects[next].type}
            </p>

            <h3 className="text-2xl font-bold">
              {projects[next].title}
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
/*export default function Projects() {
  return (
    <section className="py-5 px-8">
      <h2 className="text-4xl font-bold mb-2 justify-center flex flex-wrap justify-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-4 gap-6">



        <div className="border border-zinc-800 rounded-2xl p-6 md:col-span-1 opacity-50">
          <span className="text-sm text-blue-400">
            Personal Project
          </span>

          <h3 className="text-2xl font-semibold mt-2">
            Portfolio Website
          </h3>

          <p className="text-zinc-400 mt-3">
            Personal portfolio built to showcase
            professional experience, projects and
            technical skills through a modern and
            responsive interface.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Next.js
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              React
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              TypeScript
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Tailwind CSS
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Vercel
            </span>
          </div>
        </div>


        <div className="border border-zinc-800 rounded-2xl p-6 md:col-span-2">
          <span className="text-sm text-blue-400 flex flex-wrap justify-center">
            Professional Project
          </span>

          <h3 className="text-2xl font-semibold mt-2 flex flex-wrap justify-center">
            Sistema GAPA
          </h3>

          <p className="text-zinc-400 mt-3 flex flex-wrap justify-center">
            Web-based management system developed
            for animal protection organizations,
            featuring inspection and animal
            sterilization management modules.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              React
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Next.js
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              TypeScript
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Prisma
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              PostgreSQL
            </span>
          </div>

          <div
            className=" mt-8 h-56 rounded-2xl bg-zinc-900 flex
                        items-center justify-center text-zinc-600"
          >
            Project Preview
          </div>
        </div>


        <div className="border border-zinc-800 rounded-2xl p-6 md:col-span-1 opacity-50">
          <span className="text-sm text-blue-400">
            In Development
          </span>

          <h3 className="text-2xl font-semibold mt-2">
            Cat's Adventure
          </h3>

          <p className="text-zinc-400 mt-3">
            A 2D top-down adventure game where players
            control a brave cat on a journey to rescue
            friends kidnapped by a mysterious villain.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Unity
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              C#
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Unity API
            </span>

            <span className="px-3 py-1 bg-zinc-900 rounded-full text-gray-300 text-sm">
              Game Design
            </span>
          </div>
        </div>


      </div>
    </section>
  );
}
*/