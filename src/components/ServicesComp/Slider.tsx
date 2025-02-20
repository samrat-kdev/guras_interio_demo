"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function Slider({ beforeImage, afterImage }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    let newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(newPosition, 100)); // Keep within bounds

    setSliderPosition(newPosition);
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white py-12 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#6b1b55]">
          Room Ideas & Inspiration
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Get inspired and find that perfect home décor idea: browse the stunning projects
          our expert virtual interior designers have created.
        </p>
      </div>

      <div className="w-full relative select-none">
        <div ref={sliderRef} className="relative w-full max-w-[900px] h-auto aspect-[16/9] m-auto overflow-hidden">
          {/* After Image */}
          <Image alt="after" fill priority src={afterImage} className="object-cover" />
          <div className="absolute top-0 right-0 m-4 bg-black bg-opacity-30 text-white text-2xl font-bold px-4 py-2">
            After
          </div>

          {/* Before Image */}
          <div
            className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image alt="before" fill priority src={beforeImage} className="object-cover" />
            <div className="absolute top-0 left-0 m-4 bg-black bg-opacity-30 text-white text-2xl font-bold px-4 py-2">
              Before
            </div>
          </div>

          {/* Slider Line & Circle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
            onMouseDown={handleMouseDown}
          >
            <div className="bg-white absolute rounded-full h-5 w-5 -left-2 top-[calc(50%-10px)] border-2 border-gray-500 shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
