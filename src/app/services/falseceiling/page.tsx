import React from 'react'
import Header from '@/components/Header'
import FalseCeilingHero from '@/components/Hero/FalseCeilingHero'
import FalseCeiling from '@/components/ServicesComp/FalseCeiling'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
      <Header />
      <FalseCeilingHero />
      <FalseCeiling />
      <Footer />
    </>
  )
}

export default page