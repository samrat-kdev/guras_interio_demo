import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ParquetingHero from '@/components/Hero/ParquetingHero'
import React from 'react'
import Slider from '@/components/ServicesComp/Slider'
import PhotoGal from '@/components/ServicesComp/PhotoGal'
const page = () => {
  return (
    <>
      <Header />
      <ParquetingHero />
      <Slider />
      <PhotoGal />
      <Footer />
    </>
  )
}

export default page