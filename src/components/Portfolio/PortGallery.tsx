import React from "react";
import Image from "next/image";

const PortGallery = () => {
  return (
    <div className="min-h-screen mt-10 px-4">
      <h2 className="text-center text-3xl sm:text-4xl font-bold font-serif mt-2">
        Projects Gallery from Guras Interio
      </h2>

      {/* Large Image */}
      <div className="flex justify-center items-center p-4">
        <Image
          src="/assests/T.jpg"
          alt="Gallery Image 1"
          width={800}
          height={400}
          className="w-full max-w-3xl h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Grid of Smaller Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center p-4">
        {[
          "/assests/tvcabinet.jpg",
          "/assests/wooden.jpg",
          "/assests/tvcabinet.jpg",
          "/assests/c.jpg",

        ].map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 2}`}
              width={100}
              height={80}
              className="w-full h-auto object-cover rounded-lg group-hover:scale-125 group-hover:z-10 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortGallery;
