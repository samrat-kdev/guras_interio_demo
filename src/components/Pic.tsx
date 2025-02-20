"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Collage({ images }: { images: string[] }) {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  return (
    <>
      <motion.div
        className="my-6 border-t-2 border-[#6b1b55] transition-all duration-500 mx-auto w-2/3"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        whileHover={{ scaleX: 1.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>

      <h2 className="text-4xl font-bold font-serif mt-2 text-center uppercase">Services</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem temporibus.</p>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-64 cursor-pointer"
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={src} alt={`Collage Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg shadow-md hover:opacity-75 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl">
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md" onClick={() => setSelectedImage(null)}>
                ✖
              </button>
              <Image src={selectedImage} alt="Selected" layout="responsive" width={800} height={600} className="rounded-lg" />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
