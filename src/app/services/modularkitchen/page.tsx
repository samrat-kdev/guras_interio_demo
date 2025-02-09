'use client'
import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header'
import ModularKitchenHero from '@/components/Hero/ModularKitchenHero'
import Footer from '@/components/Footer'
import Slider from '@/components/ServicesComp/Slider'
import PhotoGal from '@/components/ServicesComp/PhotoGal'
const page = () => {
  return (
    <>
      <Header />
      <ModularKitchenHero />
      <Slider />
      <PhotoGal />
      <Footer />
    </>
  )
}

export default page