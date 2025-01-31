"use client"

import { Lightbulb, BarChart } from "lucide-react";

export default function StepsSection() {
  return (
    <section className="py-20 flex items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row gap-6 items-stretch max-w-4xl mx-auto">
        {/* Step Option One */}
        <div className="relative bg-white rounded-lg border border-gray-200 shadow-lg p-6 flex-1 flex flex-col text-center">
          <div className="absolute -top-3 left-0 right-0 mx-auto w-14 h-2 bg-[#8e2d75] rounded-md"></div>
          <BarChart className="mx-auto text-[#8e2d75] mb-4" size={40} />
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm flex-grow">
            At Guras Interio, we strive to craft interiors that reflect your personality and meet your needs, blending timeless designs with modern trends.
          </p>
        </div>

        {/* Step Option Two */}
        <div className="relative bg-white rounded-lg border border-gray-200 shadow-lg p-6 flex-1 flex flex-col text-center">
          <div className="absolute -top-3 left-0 right-0 mx-auto w-14 h-2 bg-[#8e2d75] rounded-md"></div>
          <Lightbulb className="mx-auto text-[#8e2d75] mb-4" size={45} />
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 text-sm flex-grow">
            To become a trusted name in interior design, renowned for innovation, craftsmanship, and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}
