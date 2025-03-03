"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Closet",
    image: "/assests/closetpic.jpg",
    route: "/services/closet",
    description: "Custom-designed closets to maximize space and enhance aesthetics."
  },
  {
    title: "False Ceiling",
    image: "/assests/falseCel.jpg",
    route: "/services/falseceiling",
    description: "Stylish and durable false ceiling designs for modern interiors."
  },
  {
    title: "TV Cabinet",
    image: "/assests/tvcabinet.jpeg",
    route: "/services/tvcabinet",
    description: "Elegant TV cabinets crafted for functionality and style."
  },
  {
    title: "Modular Kitchen",
    image: "/assests/ModularKitchen.jpg",
    route: "/services/modularkitchen",
    description: "Efficient modular kitchen designs tailored to your needs."
  },
  {
    title: "Parquet Floor",
    image: "/assests/parqu.jpg",
    route: "/services/parqueting",
    description: "Premium parquet flooring solutions for a luxurious look."
  },
  {
    title: "Office Furniture",
    image: "/assests/Office.jpg",
    route: "/services/officefurniture",
    description: "Modern office furniture that blends comfort and productivity."
  },
  {
    title: "Wooden and Steel Railings",
    image: "/assests/railing.jpg",
    route: "/services/woodenandsteelrailing",
    description: "High-quality wooden and steel railings for safety and aesthetics."
  },
];

export default function ServicesHeader() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/categories`);
        console.log("Response:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    
    getCategories();
  }, []);

  return (
    <div className="text-center my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <Link key={index} href="#">
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  src={projects[index % projects.length].image}
                  alt={projects[index % projects.length].title}
                  className="w-full h-80 object-cover transform transition duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-3 text-center text-sm font-semibold transition duration-300 group-hover:bg-opacity-75">
                  <h3>{category?.name}</h3>
                  <p className="text-xs mt-1 opacity-80">{category.description}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
}
