"use client"
import React from 'react'
import Image from 'next/image'

export default function Slider() {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

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
      <div className='w-full relative' onMouseUp={handleMouseUp}>
        <div
          className='relative w-full max-w-[900px] aspect-[70/45] m-auto overflow-hidden'
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}>

          <Image alt='after' fill priority src="/assests/ModularKitchen.jpg" />
          <div className='absolute top-0 right-0 m-4 flex items-center justify-center bg-black bg-opacity-30 text-white text-2xl font-bold px-4 py-2'>After</div>

          <div
            className='absolute top-0 left-0 right-0 w-full max-w-[900px] aspect-[70/75] m-auto overflow-hidden select-none'
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
            <Image alt='before' fill priority src="/assests/beforemdk.jpg" />
            <div className='absolute top-0 left-0 m-4 flex items-center justify-center bg-black bg-opacity-30 text-white text-2xl font-bold px-4 py-2'>Before</div>
          </div>

          <div className='absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize' style={{ left: `calc(${sliderPosition}% - 1px)` }}>
            <div className='bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]'></div>
          </div>
        </div>
      </div>
    </>
  );
}
