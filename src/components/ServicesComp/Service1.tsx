import Link from 'next/link';

const projects = [
  { title: 'Closet', image: '/assests/closetpic.jpg', route: "/services/closet" },
  { title: 'False Ceiling', image: '/assests/falseCel.jpg', route: "/services/falseceiling" },
  { title: 'TV Cabinet', image: '/assests/tvcabinet.jpeg', route: "/services/tvcabinet" },
  { title: 'Modular Kitchen', image: '/assests/ModularKitchen.jpg', route: "/services/modularkitchen" },
  { title: 'Parquet Floor', image: '/assests/parqu.jpg', route: "/services/parqueting" },
  { title: 'Office Furniture', image: '/assests/Office.jpg', route: "/services/officefurniture" },
  { title: 'Wooden and Steel Railings', image: '/assests/railing.jpg', route: "/services/woodenandsteelrailing" },
];

export default function ServicesHeader() {
  return (
    <div className="text-center my-10">
      <div className="grid grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.route}>
            <div className="relative group cursor-pointer overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-auto transform transition duration-300 group-hover:scale-105" />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 text-sm font-semibold">{project.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}