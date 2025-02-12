import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [isBefore, setIsBefore] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 mt-7">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md ${isBefore ? 'bg-[#6b1b55] text-white shadow-lg scale-105' : 'bg-gray-200 text-[#6b1b55] hover:bg-gray-300'}`}
          onClick={() => setIsBefore(true)}
        >
          BEFORE
        </button>
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 shadow-md ${!isBefore ? 'bg-[#6b1b55] text-white shadow-lg scale-105' : 'bg-gray-200 text-[#6b1b55] hover:bg-gray-300'}`}
          onClick={() => setIsBefore(false)}
        >
          AFTER
        </button>
      </div>

      <div className="relative w-full max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
        {isBefore ? (
          <Image
            src="/assests/about1.jpg"
            alt="Before"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Image
            src="/assests/About.jpg"
            alt="After"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
    </div>
  );
}
