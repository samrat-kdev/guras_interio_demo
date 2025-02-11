import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [isBefore, setIsBefore] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${isBefore ? 'bg-[#6b1b55] text-white' : 'bg-gray-300 text-[#6b1b55]'}`}
          onClick={() => setIsBefore(true)}
        >
          BEFORE
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${!isBefore ? 'bg-[#6b1b55] text-white' : 'bg-gray-300 text-[#6b1b55]'}`}
          onClick={() => setIsBefore(false)}
        >
          AFTER
        </button>
      </div>

      <div className="relative w-[800px] h-[500px] overflow-hidden rounded-lg shadow-lg">
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
