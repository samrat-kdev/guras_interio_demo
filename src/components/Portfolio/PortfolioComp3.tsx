import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Closet", description: "A stylish and functional closet.", image: "/assests/closetpic.jpg" },
  { id: 2, title: "Modular Kitchen", description: "A customizable and functional kitchen.", image: "/assests/HomeAbt/Abt5.JPG" },
  { id: 3, title: "Bedroom", description: "A cozy and comfortable bedroom.", image: "/assests/HomeAbt/Abt5.JPG" },
  { id: 4, title: "Luxury Bathroom", description: "A spa-like experience at home.", image: "/assests/HomeAbt/Abt5.JPG" },
  { id: 5, title: "Rustic Dining Room", description: "A warm and inviting dining space.", image: "/assests/HomeAbt/Abt5.JPG" },
];

const ITEMS_PER_PAGE = 1;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#6b1b55]">Interior Design Portfolio</h2>
      <div className="flex flex-col items-center gap-6">
        {paginatedProjects.map((project) => (
          <div key={project.id} className="bg-white p-4 shadow-lg rounded-lg w-full max-w-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-md"
              unoptimized={true} // Add this if images fail to load
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          className="px-4 py-2 bg-[#6b1b55] text-white rounded-lg disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>
        <button
          className="px-4 py-2 bg-[#6b1b55] text-white rounded-lg disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
