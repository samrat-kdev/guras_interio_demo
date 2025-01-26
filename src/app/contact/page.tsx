'use client'

import Feedback from "@/components/Contact/Feedback"
import Map from "@/components/Contact/Map"
import Info from "@/components/Contact/Info"
import { useState } from 'react'
import Header from '@/components/Header'
export default function Contact() {

  return (
    <main className="min-h-screen p-8">
      <Header />
      <div className="flex justify-center items-center mt-4 mb-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Our <span className="relative inline-block group">
            Location
            <span className="bg-none w-full h-[4px] block group-hover:bg-[#8e2d75] "></span>
          </span>
        </h1>
      </div>
      <Map />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10">
        <div>
          <form className="space-y-4">
            <Feedback />
          </form>
        </div>

        <div>
          <Info />
        </div>
      </div>
    </main>
  )
}
