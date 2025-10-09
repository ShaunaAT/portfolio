"use client";
import { useState } from "react";


export default function SlideShow({ images }: { images: string[] })  {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full aspect-video border border-stroke rounded-lg shadow-md overflow-hidden bg-bg">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-contain"
      />

      {/* left button */}
      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-button text-button-text px-3 py-1 rounded-full shadow hover:brightness-95"
      >
        ‹
      </button>

      {/* right button */}
      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-button text-button-text px-3 py-1 rounded-full shadow hover:brightness-95"
      >
        ›
      </button>

      {/* slide indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-headline" : "bg-stroke/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}