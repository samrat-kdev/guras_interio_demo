import React from "react";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <motion.section
      className="relative min-h-[80vh] md:min-h-[94vh] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url('/assests/About.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/50 md:bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-8 md:px-12 max-w-7xl mx-auto text-white text-center pb-12 sm:pb-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm mb-4 text-white">
          <motion.a
            href="/"
            className="hover:text-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <span className="mx-1 sm:mx-2">›</span>
          <motion.span
            className="text-[#b24f99] underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Home
          </motion.span>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          GURAS INTERIOR
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-2xl md:text-xl font-serif mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          A Complete Interior Solution
        </motion.p>

        {/* Underline */}
        <motion.span
          className="block bg-[#8e2d75] w-16 sm:w-20 h-1 sm:h-2 mt-2 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ transformOrigin: "left" }}
        ></motion.span>
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;
