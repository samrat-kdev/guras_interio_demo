import Link from 'next/link';

const projects = [
  { title: 'Modular Kitchen', image: '/assests/ModularKitchen.jpg', link: '/highlands-eichler' },
  { title: 'False Ceiling', image: '/assests/FalseCeiling.jpg', link: '/australian-minimalist' },
  { title: 'TV Cabinet', image: '/assests/tvcabinet.jpeg', link: '/los-gatos-treehouse' },
  { title: 'Office Furniture', image: '/assests/Office.jpg', link: '/modern-loft' },
  { title: 'Parquet Floor', image: '/assests/p.jpg', link: '/scandinavian-retreat' },
  { title: 'Wooden and Steel Railings', image: '/assests/railing.jpg', link: '/urban-oasis' },
];

export default function ServicesHeader() {
  return (
    <div className="text-center my-10">

      <div className="grid grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <Link key={index} href={project.link}>
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
