'use client';

import Image from 'next/image';

const images = [
  '/assests/Falseceililng/fc1.JPG', '/assests/Falseceililng/fc2.JPG', '/assests/Falseceililng/fc2.JPG',
  '/assests/Falseceililng/fc4.JPG', '/assests/Falseceililng/fc5.JPG', '/assests/Falseceililng/fc6.JPG',
  '/assests/Falseceililng/fc7.JPG', '/assests/Falseceililng/fc8.JPG', '/assests/Falseceililng/fc9.JPG',
  '/assests/Falseceililng/fc10.JPG', '/assests/Falseceililng/fc11.JPG', '/assests/Falseceililng/fc2.JPG',
  '/assests/Falseceililng/fc3.JPG', '/assests/Falseceililng/fc4.JPG', '/assests/Falseceililng/fc1.JPG',
  '/assests/Falseceililng/fc6.JPG', '/assests/Falseceililng/fc7.JPG', '/assests/Falseceililng/fc1.JPG'
];

export default function MasonryGrid() {
  return (
    <>
      <div className="text-center my-10">
        <div className="flex items-center justify-center">
          <div className="w-16 border-t-2 border-[#6b1b55]"></div>
          <span className="mx-4 text-[#6b1b55] tracking-widest uppercase text-m">SERVICES</span>
          <div className="w-16 border-t-2 border-[#6b1b55]"></div>
        </div>
        <h2 className="text-4xl font-bold font-serif mt-2">FALSE CEILING</h2>
      </div>
      <div className="bg-white min-h-screen flex justify-center items-center p-8">
        <div className="columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
