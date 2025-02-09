import Footer from '@/components/Footer'
import React from 'react'
import Header from '@/components/Header'
import OfficeFurnitureHero from '@/components/Hero/OfficeFurnitureHero'
import Slider from '@/components/ServicesComp/Slider'
import PhotoGal from '@/components/ServicesComp/PhotoGal'
const page = () => {
  return (
    <>
      <Header />
      <OfficeFurnitureHero />
      <Slider />
      <PhotoGal />
      <Footer />
    </>
  )
}

export default page