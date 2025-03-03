'use client';

import Map from "@/components/Contact/Map";
import Info from "@/components/Contact/Info";
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import ContactHero from "@/components/Hero/ContactHero";
import Question from "@/components/Contact/Question";

const inquiryOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Support" },
  { value: "feedback", label: "Feedback" },
  { value: "others", label: "Others" }
];

export default function Contact() {
  return (
    <>
      <Header />
      <ContactHero />
      <main className="min-h-screen p-8">
        {/* Location Heading */}
        <div className="flex justify-center items-center mt-4 mb-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our <span className="relative inline-block group">
              Location
              <span className="bg-none w-full h-[4px] block group-hover:bg-[#8e2d75] "></span>
            </span>
          </h1>
        </div>

        {/* Map Component */}
        <Map />

        {/* Grid for Form and Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Question Component (contains the form) */}
          <div>
            <Question inquiryOptions={inquiryOptions} />
          </div>

          {/* Info Component */}
          <div>
            <Info />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}