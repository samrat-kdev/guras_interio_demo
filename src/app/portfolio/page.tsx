'use client'

import Header from "@/components/Header";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import Footer from "@/components/Footer";
import PortfolioComp from "@/components/Portfolio/PortfolioComp";
import PortGallery from "@/components/Portfolio/PortGallery";

import PortfolioComp2 from "@/components/Portfolio/PortfolioComp2";
import PortfolioComp3 from "@/components/Portfolio/PortfolioComp3";


export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <PortfolioComp2 />

      {/* Animated Divider */}
      <div className="w-full my-10 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#6b1b55] to-transparent animate-pulse"></div>
      </div>

      <div className="py-9 text-center min-h-screen mt-10 px-4">
        <h2 className="text-4xl font-bold font-serif mt-2">Changes That Guras Have Made</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum recusandae sapiente nihil suscipit in excepturi quos at quo iusto. Ullam, quisquam distinctio aliquam atque sed dolore laudantium reprehenderit dolores.
        </p>
        <PortfolioComp />
      </div>

      {/* Animated Divider */}
      <div className="w-full my-10 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#6b1b55] to-transparent animate-pulse"></div>
      </div>

      <PortfolioComp3 />

      {/* Animated Divider */}
      <div className="w-full my-10 flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#6b1b55] to-transparent animate-pulse"></div>
      </div>

      <PortGallery />


      <Footer />
    </>
  );
}
