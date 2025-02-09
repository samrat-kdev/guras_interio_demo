import Closet from '@/components/ServicesComp/Closet'
import React from 'react'
import ClosetHero from '@/components/Hero/ClosetHero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Closet2 from '@/components/ServicesComp/Closet2'
import Slider from '@/components/ServicesComp/Slider'

const page = () => {
  return (
    <div>
      <Header />
      <ClosetHero />
      <Slider />
      <Closet />
      <Closet2 />
      <Footer />


    </div>
  )
}

export default page