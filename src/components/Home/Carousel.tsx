import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  ["/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG"],
  ["/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG"],
  ["/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG"],
  ["/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG", "/assests/HomeAbt/Abt1.JPG"],
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0 grid grid-cols-3 gap-4">
            {slide.map((src, i) => (
              <Image key={i} src={src} alt={`Slide ${index + 1} Image ${i + 1}`} width={300} height={300} className="w-full h-auto rounded-lg" />
            ))}
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        <ChevronLeft size={24} />
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span key={index} className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}></span>
        ))}
      </div>
    </div>
  );
}
