import Image from "next/image";

export default function LuxuryDesign() {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center p-6 sm:p-10">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Section - Image */}
        <div className="relative flex justify-center">
          <div className="rounded-[70%] overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            <Image
              src="/assests/welcome.jpg"
              width={400}
              height={400}
              alt="Luxury Design"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="text-gray-900 text-center md:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-light text-[#8e2d75]">
            A Complete Interio Solution
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mt-2">
            Welcome to Guras Interio – Where Elegance Meets Functionality
          </h1>
          <hr className="my-4 border-gray-400 mx-auto md:mx-0 w-2/3 md:w-full" />
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            At Guras Interio, we believe that every space has the potential to be extraordinary. As a premier interior design firm, we specialize in personalized interiors that reflect your style and vision. Whether it's a cozy home, a modern office, or a luxury commercial space, our expert team is dedicated to delivering perfectly curated designs that blend aesthetics with practicality.
          </p>
        </div>
      </div>
    </div>
  );
}
