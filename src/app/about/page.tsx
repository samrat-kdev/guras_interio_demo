'use client'

import Head from "next/head"
import Header from "@/components/Header"
import AboutHero from "@/components/Hero/Abouthero"

export default function About() {
  return (
    <main className="min-h-screen ">
      <Header />

      <AboutHero />
      <section className="prose max-w-3xl">
        <h2>Our Story</h2>
        {/* Add company history */}
        <h2>Our Team</h2>
        {/* Add team section */}
      </section>
    </main>
  )
}
