'use client';

import Image from 'next/image';

const images = [
  '/assests/HomeAbt/Abt1.JPG', '/assests/HomeAbt/Abt2.JPG', '/assests/HomeAbt/Abt3.JPG',
  '/assests/HomeAbt/Abt4.JPG', '/assests/HomeAbt/Abt5.JPG', '/assests/HomeAbt/Abt6.JPG',
  '/assests/HomeAbt/Abt7.JPG', '/assests/HomeAbt/Abt8.JPG', '/assests/HomeAbt/Abt9.JPG',
  '/assests/HomeAbt/Abt10.JPG', '/assests/HomeAbt/Abt11.JPG', '/assests/HomeAbt/Abt12.JPG',
  '/assests/HomeAbt/Abt13.JPG', '/assests/HomeAbt/Abt14.JPG', '/assests/HomeAbt/Abt15.JPG',
  // '/assests/HomeAbt/Abt16.JPG', '/assests/HomeAbt/Abt17.JPG', '/assests/HomeAbt/Abt18.JPG'
];

export default function MasonryGrid() {
  return (
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
  );
}
