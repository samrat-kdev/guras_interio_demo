import React from "react";
import Image from "next/image";

const PortGallery = () => {
  return (
    <>
      {/* Large Image */}
      <div className="flex justify-center items-center p-4">
        <Image
          src="/assests/T.jpg"
          alt="Gallery Image 1"
          width={800}
          height={400}
          className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Grid of Smaller Images */}
      <div className="flex justify-center gap-3">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/assests/tvcabinet.jpg"
            alt="Gallery Image 2"
            width={100}
            height={80}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/assests/wooden.jpg"
            alt="Gallery Image 3"
            width={100}
            height={80}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/assests/tvcabinet.jpg"
            alt="Gallery Image 4"
            width={100}
            height={80}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-cover rounded-lg"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <Image
            src="/assests/c.jpg"
            alt="Gallery Image 4"
            width={100}
            height={80}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default PortGallery;
