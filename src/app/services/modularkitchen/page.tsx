import Head from 'next/head'
import React from 'react'
import Header from '@/components/Header'
import ModularKitchenHero from '@/components/Hero/ModularKitchenHero'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Header />
      <ModularKitchenHero />
      <Footer />
    </>
  )
}

export default page