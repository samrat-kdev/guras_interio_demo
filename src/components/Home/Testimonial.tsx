"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[60vh] flex items-center justify-center text-white text-center px-4 sm:px-12 overflow-hidden"
    >

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assests/c.jpg"
          alt="Testimonial Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-2 max-w-4xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p
          className="text-xl bg-[#8e2d75] uppercase tracking-wide font-bold text-[#f5f5f5] border-b border-[#8e2d75] rounded-lg mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          What our clients have to say
        </motion.p>

        <motion.blockquote
          className="text-lg sm:text-2xl font-light leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          "Guras Interio is the ideal fusion of professional know-how and artistic vision. Without their extraordinary devotion and design sensibility, we probably would have had a difficult time making our space come to life. The ability to turn a vision into reality while upholding the highest standards is a rare combination of strategic experience and creative genius that few organizations today possess. It's really amazing, and their commitment was essential to the success of our project!"
        </motion.blockquote>

        <motion.p
          className="mt-6 text-sm sm:text-base font-semibold text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          — Guras Interio
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Testimonial;
