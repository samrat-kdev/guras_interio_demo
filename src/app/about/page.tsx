'use client'

import Head from "next/head"
import Header from "@/components/Header"

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <section className="prose max-w-3xl">
        <h2>Our Story</h2>
        {/* Add company history */}
        <h2>Our Team</h2>
        {/* Add team section */}
      </section>
    </main>
  )
}
