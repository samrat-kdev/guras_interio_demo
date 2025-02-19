import Link from "next/link";

const projects = [
  { title: "Closet", image: "/assests/closetpic.jpg", route: "/services/closet" },
  { title: "False Ceiling", image: "/assests/falseCel.jpg", route: "/services/falseceiling" },
  { title: "TV Cabinet", image: "/assests/tvcabinet.jpeg", route: "/services/tvcabinet" },
  { title: "Modular Kitchen", image: "/assests/ModularKitchen.jpg", route: "/services/modularkitchen" },
  { title: "Parquet Floor", image: "/assests/parqu.jpg", route: "/services/parqueting" },
  { title: "Office Furniture", image: "/assests/Office.jpg", route: "/services/officefurniture" },
  { title: "Wooden and Steel Railings", image: "/assests/railing.jpg", route: "/services/woodenandsteelrailing" },
];

export default function ServicesHeader() {
  return (
    <div className="text-center my-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.route}>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-3 text-center text-sm font-semibold transition duration-300 group-hover:bg-opacity-75">
                {project.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
