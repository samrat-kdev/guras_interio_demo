'use client'

import Header from "@/components/Header"
import PortfolioHero from "@/components/Hero/PortfolioHero"
import Footer from "@/components/Footer"
import PortfolioComp from "@/components/Portfolio/PortfolioComp"
import PortGallery from "@/components/Portfolio/PortGallery"
import PhotoBooth from "@/components/AboutComp/PhotoBooth"
import Portest from "@/components/Portfolio/Portest"
export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />

      <Portest />

      <PortGallery />
      <div className="py-9 text-center px-10 mt-4">
        <h2 className="text-4xl font-bold font-serif mt-2">Changes That Guras Have Made</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum recusandae sapiente nihil suscipit in excepturi quos at quo iusto. Ullam, quisquam distinctio aliquam atque sed dolore laudantium reprehenderit dolores.</p>
        <PortfolioComp />
      </div>

      <PhotoBooth />



      <Footer />
    </>
  )
}
