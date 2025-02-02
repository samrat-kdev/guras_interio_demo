'use client'

import Head from "next/head"
import Header from "@/components/Header"
import PortfolioHero from "@/components/Hero/PortfolioHero"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add portfolio grid */}
        </div>
      </main>
      <Footer />
    </>
  )
}
