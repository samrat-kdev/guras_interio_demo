import Closet from '@/components/ServicesComp/Closet'
import React from 'react'
import ClosetHero from '@/components/Hero/ClosetHero'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Closet2 from '@/components/ServicesComp/Closet2'

const page = () => {
  return (
    <div>
      <Header />
      <ClosetHero />
      <Closet />
      <Closet2 />
      <Footer />


    </div>
  )
}

export default page