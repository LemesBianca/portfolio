"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
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

            <Link
              href={
                current === 0
                  ? "/portfolio"
                  : current === 1
                    ? "/gapa"
                    : "/cats-adventure"
              }
              className="
              mt-6
              mx-auto
              block
              w-fit
              px-6
              py-3
              rounded-full
              bg-white
              text-black
              font-medium
              hover:scale-105
              transition-all
              duration-300
              "
            >
              View Details
            </Link>
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
