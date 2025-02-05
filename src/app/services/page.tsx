'use client';
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceHero from '@/components/Hero/Servicehero'
import Service1 from '@/components/ServicesComp/Service1'

export default function Services() {

  return (
    <>
      <Header />
      <ServiceHero />
      <main className="min-h-screen p-8">
        <div className="text-center my-10">
          <div className="flex items-center justify-center">
            <div className="w-16 border-t-2 border-[#6b1b55]"></div>
            <span className="mx-4 text-[#6b1b55] tracking-widest uppercase text-m">Best Features</span>
            <div className="w-16 border-t-2 border-[#6b1b55]"></div>
          </div>
          <h2 className="text-4xl font-bold font-serif mt-2">Services</h2>
        </div>
        <div>
          <Service1 />
        </div>

      </main>
      <Footer />
    </>
  )
}
