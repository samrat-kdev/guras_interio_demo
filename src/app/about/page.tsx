'use client'

import Head from "next/head"
import Header from "@/components/Header"
import AboutHero from "@/components/Hero/Abouthero"
import AboutBan1 from "@/components/AboutComp/AboutBan1"
import Footer from "@/components/Footer"
import PhotoBooth from "@/components/AboutComp/PhotoBooth"

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <main className=" flex flex-col items-center justify-center">
        <section className="max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-[#6b1b55] mt-12">Do You Want To Know More?</h2>
          <p className="text-center align-middle mt-6 text-lg">
            Welcome to <b>Guras Interio</b>, where design meets functionality. We specialize in creating bespoke interiors that bring elegance, comfort, and a personal touch to your spaces. Whether it’s your home, office, or commercial space, we turn your vision into reality. At Guras Interio, we redefine luxury interiors with cutting-edge designs and impeccable craftsmanship.
          </p>
          <div>
            <div className="p-10">

              <AboutBan1 />
            </div>
            <div>
              <PhotoBooth />
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}

