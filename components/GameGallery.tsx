"use client";

import { useState } from "react";

type GameGalleryProps = {
    images: string[];
};

export default function GameGallery({
    images,
}: GameGalleryProps) {

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

    const currentMedia = images[current];

    const isVideo =
        currentMedia.toLowerCase().endsWith(".mp4");

    return (
        <>
            {/* centro */}
            <div
                className={`relative min-h-[350px] rounded-3xl
            overflow-hidden transition-all duration-300 cursor-pointer
            ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
          `}>
                {/* MOBILE */}
                <button
                    onClick={() => changeImage(previous)}
                    className="
            absolute left-3 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full border border-black/30
            backdrop-blur-sm text-black flex items-center justify-center"
                >
                    ←
                </button>

                <button
                    onClick={() => changeImage(next)}
                    className="
            absolute right-3 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full border border-black/30
            backdrop-blur-sm text-black flex items-center justify-center"
                >
                    →
                </button>

                {isVideo ? (
                    <video
                        src={currentMedia}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={currentMedia}
                        className="absolute inset-0 w-full h-full object-cover"
                        onClick={() => setShowImage(true)}
                    />
                )}
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