'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HomeHero from "@/components/Home/Homehero"
import Carousel from "@/components/Home/Carousel"

import HomeBan1 from "@/components/Home/HomeBan1"
import HomeBan2 from "@/components/Home/HomeServices"
import HomeBan3 from "@/components/Home/HomeCTA"
import Testimonial from "@/components/Home/Testimonial"

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeBan1 />
      <Testimonial />
      <HomeBan2 />

      <main className="flex flex-col items-center justify-center px-4 md:px-8">

        {/* OUR WORK Section */}
        <section className="my-8 max-w-screen-lg text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#6b1b55] mb-4">
            OUR WORK
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Let us transform your space into something truly remarkable—where comfort, beauty, and innovation come together seamlessly.
          </p>
          <Carousel />
        </section>

        <HomeBan3 />
      </main>

      <Footer />
    </>
  )
}
