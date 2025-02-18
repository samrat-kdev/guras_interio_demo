import Footer from '@/components/Footer'
import React from 'react'
import Header from '@/components/Header'
import OfficeFurnitureHero from '@/components/Hero/OfficeFurnitureHero'
import Slider from '@/components/ServicesComp/Slider'
import Pic from '@/components/Pic'
const page = () => {
  return (
    <>
      <Header />
      <OfficeFurnitureHero />
      <Slider />
      <Pic />
      <Footer />
    </>
  )
}

export default page