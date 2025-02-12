"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Slider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (x: number, rect: DOMRect) => {
    const clampedX = Math.max(0, Math.min(x - rect.left, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(event.clientX, event.currentTarget.getBoundingClientRect());
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    handleMove(event.touches[0].clientX, event.currentTarget.getBoundingClientRect());
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <>
      <div className="bg-white py-12 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#6b1b55]">
          Room Ideas & Inspiration
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Get inspired and find that perfect home décor idea: browse the stunning projects
          our expert virtual interior designers have created.
        </p>
      </div>
      <div className="w-full relative" onMouseUp={handleMouseUp} onTouchEnd={handleTouchEnd}>
        <div
          className="relative w-full max-w-[900px] h-auto aspect-[16/9] m-auto overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          {/* After Image */}
          <Image alt="after" fill priority src="/assests/ModularKitchen.jpg" className="object-cover" />
          <div className="absolute top-0 right-0 m-4 flex items-center justify-center bg-black bg-opacity-30 text-white text-2xl font-bold px-4 py-2">
            After
          </div>

          {/* Before Image */}
          <div
            className="absolute top-0 left-0 right-0 w-full h-full overflow-hidden select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image alt="before" fill priority src="/assests/beforemdk.jpg" className="object-cover" />
            <div className="absolute top-0 left-0 m-4 flex items-center justify-center bg-black bg-opacity-30 text-white text-2xl font-bold px-4 py-2">
              Before
            </div>
          </div>

          {/* Slider Line & Circle */}
          <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `calc(${sliderPosition}% - 1px)` }}>
            <div className="bg-white absolute rounded-full h-5 w-5 -left-2 top-[calc(50%-10px)] border-2 border-gray-500 shadow-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
