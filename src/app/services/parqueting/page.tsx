import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ParquetingHero from '@/components/Hero/ParquetingHero'
import React from 'react'
import Slider from '@/components/ServicesComp/Slider'
import Pic from '@/components/Pic'
const page = () => {
  return (
    <>
      <Header />
      <ParquetingHero />
      <Slider />
      <Pic />
      <Footer />
    </>
  )
}

export default page