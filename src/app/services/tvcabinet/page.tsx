import Footer from '@/components/Footer'
import React from 'react'

import Header from '@/components/Header'
import TVCabinetHero from '@/components/Hero/TVcabinethero'
import Slider from '@/components/ServicesComp/Slider'
import Pic from '@/components/Pic'

const page = () => {
  return (
    <>
      <Header />
      <TVCabinetHero />
      <Slider />
      <Pic />
      <Footer />
    </>
  )
}

export default page