import Image from "next/image";

export default function LuxuryDesign() {
  return (
    <div className="bg-white min-h-[80vh] flex items-center justify-center p-5">
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Section - Image */}
        <div className="relative">
          <div className="rounded-[70%] overflow-hidden w-full max-w-[400px] mx-auto">
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
        <div className="text-gray-900">
          <p className="text-sm uppercase tracking-widest font-light text-[#8e2d75]">
            A Complete Interio Solution
          </p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mt-2">
            Welcome to Guras Interio – Where Elegance Meets Functionality
          </h1>
          <hr className="my-4 border-gray-400" />
          <p className="text-lg leading-relaxed">
            At Guras Interio, we believe that every space has the potential to be extraordinary. As a premier interior design firm, we specialize in personalized interiors that reflect your style and vision. Whether it's a cozy home, a modern office, or a luxury commercial space, our expert team is dedicated to delivering perfectly curated designs that blend aesthetics with practicality.
          </p>
          {/* <p className="text-lg leading-relaxed mt-4">
            As a trusted industry leader, our white-glove experience is driven by relationships. Our full-service, turn-key approach has helped Amy Elizabeth Designs create incredible results for clients who return to us again and again – Building communities and transforming spaces through exquisite design.
          </p> */}
        </div>
      </div>
    </div>
  );
}
