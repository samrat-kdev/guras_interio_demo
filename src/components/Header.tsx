import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-1 px-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assests/Guras_interio.jpg"
            alt="Guras Interio Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden block text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isMobileMenuOpen ? "block" : "hidden"
            } lg:flex absolute lg:relative top-[60px] left-0 lg:top-0 lg:left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 shadow-lg lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 p-4 lg:p-0">
            <li className="py-2">
              <a href="/" className="text-black hover:text-[#8e2d75] transition">
                Home
              </a>
            </li>
            <li className="py-2 relative">
              <button

                className="flex items-center text-black hover:text-[#8e2d75] transition"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className="ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-full lg:w-auto z-50">
                  <ul className="flex flex-col">
                    {[
                      { name: "Services", href: "/services/modular-kitchen-closet" },
                      { name: "Modular Kitchen Closet", href: "/services/modular-kitchen-closet" },
                      { name: "TV Cabinet", href: "/services/tv-cabinet" },
                      { name: "Office Furniture", href: "/services/office-furniture" },
                      { name: "False Ceiling", href: "/services/false-ceiling" },
                      { name: "Wooden or Steel Railing", href: "/services/wooden-steel-railing" },
                      { name: "Parqueting", href: "/services/parqueting" },
                    ].map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="block px-4 py-2 text-black hover:bg-[#8e2d75] hover:text-white"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="/Portfolio"
                className="block py-2 text-black hover:text-[#8e2d75] transition"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 text-black hover:text-[#8e2d75] transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="block py-2 text-black hover:text-[#8e2d75] transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone className="text-[#8e2d75]" />
            <span>980-2090755</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Mail className="text-[#8e2d75]" />
            <span>gurasinterio@gmail.com</span>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Navbar;
