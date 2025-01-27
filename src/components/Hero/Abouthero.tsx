import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <motion.section
      className="relative min-h-[60vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url('/assests/About.jpg')` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-6 sm:px-12 max-w-7xl mx-auto text-white pb-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Breadcrumb */}
        <div className="text-sm mb-4 text-gray-300">
          <motion.a
            href="/"
            className="hover:text-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <span className="mx-2">›</span>
          <motion.span
            className="text-[#b24f99] underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            About Us
          </motion.span>
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          About Us
          <motion.span
            className="block bg-[#8e2d75] w-20 h-2 mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ transformOrigin: "left" }}
          ></motion.span>
        </motion.h1>
      </motion.div>
    </motion.section>
  );
};

export default ContactHero;
