import React from 'react'
import Header from '@/components/Header'
import FalseCeilingHero from '@/components/Hero/FalseCeilingHero'
import FalseCeiling from '@/components/ServicesComp/FalseCeiling'
import Footer from '@/components/Footer'
import Slider from '@/components/ServicesComp/Slider'
import Pic from '@/components/Pic'

const page = () => {
  return (
    <>
      <Header />
      <FalseCeilingHero />
      <Slider />
      <Pic />
      <Footer />
    </>
  )
}

export default page