import { Link } from "lucide-react";
import React, { useState } from "react";
import Link2 from "next/link";
import { motion } from "framer-motion";
import { PhoneCall } from 'lucide-react';

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null); // 👈 Fix: Allow number or null

  const services = [
    {
      title: "MODULAR KITCHEN",
      description:
        "A modular kitchen is a modern and customizable kitchen layout that consists of pre-made cabinet modules or units. These units include storage cabinets, countertops, drawers, and appliances designed for maximum space utilization and convenience.",
    },
    {
      title: "TV CABINET",
      description:
        "A TV cabinet is a functional and stylish furniture piece designed to house a television, media devices, and accessories. These cabinets come in various styles, from wall-mounted units to freestanding designs.",
    },
    {
      title: "OFFICE FURNITURE",
      description:
        "Office furniture includes ergonomic and functional pieces designed to enhance productivity and comfort in a workplace. It covers a range of furniture like desks, chairs, conference tables, storage units, and partitions.",
    },
    {
      title: "FALSE CEILING",
      description:
        "Wooden and steel railings are popular choices for staircases, balconies, and terraces, each offering unique aesthetics and functionality. Wooden railings bring a classic and elegant touch to interiors and exteriors, providing a warm and natural appeal.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-[#6b1b55] text-center mb-12">
          OUR SERVICES
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`group text-center p-6 rounded-lg transition-all duration-300 cursor-pointer ${selected === index
                ? "bg-[#6b1b55] text-white scale-105"
                : "bg-white shadow-lg hover:shadow-xl"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(index)} // ✅ No more error!
            >
              <h3 className="text-2xl font-semibold mb-4">
                <br />
                <span className="font-light">{service.title}</span>
              </h3>
              <p
                className={`transition-all duration-300 ${selected === index ? "text-gray-200" : "text-gray-600"
                  }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link2
            href="/services"
            className="bg-[#6b1b55] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
          >
            View All Services
          </Link2>
        </div>
      </div>
    </section>
  );
}
