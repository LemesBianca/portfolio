"use client";

import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {

  const [current, setCurrent] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeImage = (newIndex: number) => {
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent(newIndex);
      setIsAnimating(false);
    }, 250);
  };

  const previous =
    (current - 1 + images.length) %
    images.length;

  const next =
    (current + 1) %
    images.length;

  return (
    <>
      <div className="grid md:grid-cols-4 gap-6">

        {/* esquerda */}
        <div
          className="hidden md:block
          relative h-[200px] md:col-span-1 md:top-1/2 md:-translate-y-1/2
          rounded-3xl overflow-hidden opacity-50 hover:opacity-80
          transition-all duration-300 cursor-pointer"
          onClick={() => changeImage(previous)}
        >
          <img
            src={images[previous]}
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

        </div>


        {/* centro */}
        <div
          className={`relative min-h-[350px] md:col-span-2 rounded-3xl
            overflow-hidden transition-all duration-300 cursor-pointer
            ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
          `}>
          {/* MOBILE */}
          <button
            onClick={() => changeImage(previous)}
            className="md:hidden
            absolute left-3 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full border border-black/30
            backdrop-blur-sm text-black flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() => changeImage(next)}
            className="md:hidden
            absolute right-3 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full border border-black/30
            ackdrop-blur-sm text-black flex items-center justify-center"
          >
            →
          </button>

          <img
            src={images[current]}
            className="absolute inset-0 w-full h-full object-cover"
            onClick={() => setShowImage(true)}
          />
        </div>




        {/* direita */}
        <div
          className="hidden md:block
          relative h-[200px] md:col-span-1 md:top-1/2 md:-translate-y-1/2
          rounded-3xl overflow-hidden opacity-50 hover:opacity-80
          transition-all duration-300 cursor-pointer"
          onClick={() => changeImage(next)}
        >
          <img
            src={images[next]}
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

        </div>
      </div>

          
      {/* modal */}
      {
        showImage && (
          <div
            className="
            fixed inset-0 bg-black/90
            flex items-center justify-center
            z-50"
            onClick={() => setShowImage(false)}
          >
            <img
              src={images[current]}
              className="
              max-h-[90vh]
              max-w-[90vw]
              rounded-3xl"
            />
          </div>
          
        )
      }

    </>
  );
}