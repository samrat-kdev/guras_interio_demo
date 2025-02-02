'use client'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HomeHero from "@/components/Hero/Homehero"
import Gallery from "@/components/Home/Gallery"
import HomeBan1 from "@/components/Home/HomeBan1"
import HomeBan2 from "@/components/Home/HomeBan2"
import HomeBan3 from "@/components/Home/HomeBan3"
import Testimonial from "@/components/Home/Testimonial"
export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <HomeBan1 />
      <Testimonial />
      <HomeBan2 />

      <main className=" flex flex-col items-center justify-center">

        <section className="my-8 p-11">
          <h2 className="text-4xl font-light text-[#6b1b55] text-center mb-12">Our Work</h2>
          <p className="text-center align-middle mt-2 text-m">Let us transform your space into something truly remarkable—where comfort, beauty, and innovation come together seamlessly.</p>
          <Gallery />
        </section>
        <section className="my-8">
          {/* <h2 className="text-2xl mb-4">Featured Projects</h2> */}
          {/* Add portfolio showcase */}
        </section>

      </main>
      <div>
        <HomeBan3 />
      </div>

      <Footer />
    </>
  )
}
