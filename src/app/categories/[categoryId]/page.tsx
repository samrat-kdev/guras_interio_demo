'use client';

import React, { useEffect } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceHero from '@/components/Hero/Servicehero'
import ServicesComponents from '@/components/ServicesComp/Services'
import axios from 'axios'
export default function Services({ params }: { params: Promise<{ categoryId: string }> }) {
  const [categoryId, setCategoryId] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setCategoryId(resolvedParams.categoryId);
    });
  }, [params]);

  const [services, setServices] = React.useState([]);
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    if (!categoryId) return; // Prevents fetching when categoryId is null

    const fetchServices = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/${categoryId}`);
      setServices(response.data);
      setImages(response.data.images);
    };
    
    fetchServices();
  }, [categoryId]);


  return (
    <>
      <Header />
      <ServiceHero categories={services} images={images}/>
      <main className="min-h-screen p-4 sm:p-6 md:p-8">
        <div className="text-center my-10">
          <div className="flex items-center justify-center">
            <div className="w-12 sm:w-16 md:w-20 border-t-2 border-[#6b1b55]"></div>
            <span className="mx-2 sm:mx-4 text-[#6b1b55] tracking-widest uppercase text-sm sm:text-base md:text-lg">
              Best Features
            </span>
            <div className="w-12 sm:w-16 md:w-20 border-t-2 border-[#6b1b55]"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mt-2">Services</h2>
        </div>
        <div>

        
          <ServicesComponents />
        </div>

      </main>

      <Footer />
    </>
  )
}
