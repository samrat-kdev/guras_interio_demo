'use client'
import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header'
import ModularKitchenHero from '@/components/Hero/ModularKitchenHero'
import Footer from '@/components/Footer'
import Slider from '@/components/ServicesComp/Slider'
import Pic from '@/components/Pic'
const page = () => {
  return (
    <>
      <Header />
      <ModularKitchenHero />
      <Slider />
      <Pic />
      <Footer />
    </>
  )
}

export default page