import React from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    deluxe: number;
    standard: number;
  };
  imageUrl: string;
  category: {
    id: string;
    name: string;
    description: string;
  };
}

const services: Service[] = [
  {
    id: "cm6uj44a10006fhis4p1676uw",
    title: "Renovation Services",
    description: "Full home and office renovation services with expert consultation.",
    features: ["Wall painting", "Flooring solutions", "Electrical works"],
    pricing: {
      deluxe: 5000,
      standard: 1000,
    },
    imageUrl: "https://via.placeholder.com/300", // Placeholder image
    category: {
      id: "cm6uj449m0003fhis2it3pdv9",
      name: "Commercial",
      description: "Projects for commercial buildings, shops, and malls.",
    },
  },
  {
    id: "cm6uj44a10007fhis4p1676ux",
    title: "Office Remodeling",
    description: "Modern office remodeling services to enhance productivity.",
    features: ["Open space design", "Ergonomic furniture", "Lighting solutions"],
    pricing: {
      deluxe: 7000,
      standard: 2000,
    },
    imageUrl: "https://via.placeholder.com/300",
    category: {
      id: "cm6uj449m0003fhis2it3pdv9",
      name: "Commercial",
      description: "Projects for commercial buildings, shops, and malls.",
    },
  },
  {
    id: "cm6uj44a10008fhis4p1676uy",
    title: "Home Interior",
    description: "Custom home interior design for a cozy and elegant look.",
    features: ["Furniture selection", "Wall decor", "Space optimization"],
    pricing: {
      deluxe: 6000,
      standard: 1500,
    },
    imageUrl: "https://via.placeholder.com/300",
    category: {
      id: "cm6uj449m0003fhis2it3pdv9",
      name: "Residential",
      description: "Home renovation and remodeling projects.",
    },
  },
  {
    id: "cm6uj44a10008fhis4p1676uy",
    title: "Home Interior",
    description: "Custom home interior design for a cozy and elegant look.",
    features: ["Furniture selection", "Wall decor", "Space optimization"],
    pricing: {
      deluxe: 6000,
      standard: 1500,
    },
    imageUrl: "https://via.placeholder.com/300",
    category: {
      id: "cm6uj449m0003fhis2it3pdv9",
      name: "Residential",
      description: "Home renovation and remodeling projects.",
    },
  },
  {
    id: "cm6uj44a10008fhis4p1676uy",
    title: "Home Interior",
    description: "Custom home interior design for a cozy and elegant look.",
    features: ["Furniture selection", "Wall decor", "Space optimization"],
    pricing: {
      deluxe: 6000,
      standard: 1500,
    },
    imageUrl: "https://via.placeholder.com/300",
    category: {
      id: "cm6uj449m0003fhis2it3pdv9",
      name: "Residential",
      description: "Home renovation and remodeling projects.",
    },
  },
  {
    id: "cm6uj44a10008fhis4p1676uy",
    title: "Home Interior",
    description: "Custom home interior design for a cozy and elegant look.",
    features: ["Furniture selection", "Wall decor", "Space optimization"],
    pricing: {
      deluxe: 6000,
      standard: 1500,
    },
    imageUrl: "https://via.placeholder.com/300",
    category: {
      id: "cm6uj449m0003fhis2it3pdv9",
      name: "Residential",
      description: "Home renovation and remodeling projects.",
    },
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold text-gray-800 mt-4">{service.title}</h2>
      <p className="text-gray-600 mt-2">{service.description}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Features:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Pricing:</h3>
        <p className="text-gray-700">Deluxe: ${service.pricing.deluxe}</p>
        <p className="text-gray-700">Standard: ${service.pricing.standard}</p>
      </div>
      <div className="mt-4">
        <span className="inline-block bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
          {service.category.name}
        </span>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white py-10 px-4">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}