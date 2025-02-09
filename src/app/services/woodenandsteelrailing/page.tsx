import Footer from '@/components/Footer'
import React from 'react'
import Header from '@/components/Header'
import WoodenandsteelrailingHero from '@/components/Hero/WoodenandsteelrailingHero'
import Slider from '@/components/ServicesComp/Slider'
import PhotoGal from '@/components/ServicesComp/PhotoGal'
const page = () => {
  return (
    <>
      <Header />
      <WoodenandsteelrailingHero />
      <Slider />
      <PhotoGal />
      <Footer />
    </>
  )
}

export default page