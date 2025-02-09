import React from 'react'
import Header from '@/components/Header'
import FalseCeilingHero from '@/components/Hero/FalseCeilingHero'
import FalseCeiling from '@/components/ServicesComp/FalseCeiling'
import Footer from '@/components/Footer'
import Slider from '@/components/ServicesComp/Slider'

const page = () => {
  return (
    <>
      <Header />
      <FalseCeilingHero />
      <Slider />
      <FalseCeiling />
      <Footer />
    </>
  )
}

export default page