import Footer from '@/components/Footer'
import React from 'react'

import Header from '@/components/Header'
import TVCabinetHero from '@/components/Hero/TVcabinethero'
import Slider from '@/components/ServicesComp/Slider'
import PhotoGal from '@/components/ServicesComp/PhotoGal'

const page = () => {
  return (
    <>
      <Header />
      <TVCabinetHero />
      <Slider />
      <PhotoGal />
      <Footer />
    </>
  )
}

export default page