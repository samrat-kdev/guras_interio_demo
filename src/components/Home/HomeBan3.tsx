import { Link } from "lucide-react";
import React from "react";
import Link2 from "next/link";
import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#F5F5F5] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/assests/cont.jpg"
            alt="Contact Image"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#6b1b55]">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or collaboration opportunities, our team is here to help. Reach out to us via email, phone, or by filling out the form below, and we’ll get back to you as soon as possible.
          </p>
          {/* CTA Button */}
          <Link2 href="/contact" className="mt-8 px-6 py-3 bg-[#6b1b55] text-white text-lg font-medium uppercase rounded-md hover:bg-gray-800 transition-all">You Can Contact Us </Link2>

        </div>
      </div>
    </section>
  );
}
