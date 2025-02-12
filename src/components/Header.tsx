"use client";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
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
            className={`${isMobileMenuOpen ? "block" : "hidden"} lg:flex absolute lg:relative top-[60px] left-0 lg:top-0 lg:left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 p-4 lg:p-0">
              <li className="py-2">
                <Link href="/" className="text-black hover:text-[#8e2d75] transition">
                  Home
                </Link>
              </li>

              {/* Services Dropdown (Now Clickable) */}
              <li
                className="py-2 relative"
                onMouseEnter={() => window.innerWidth >= 1024 && setIsServicesOpen(true)}
                onMouseLeave={() => window.innerWidth >= 1024 && setIsServicesOpen(false)}
              >
                <div className="flex items-center justify-between w-full lg:w-auto">
                  <Link
                    href="/services"
                    className="text-black hover:text-[#8e2d75] transition w-full lg:w-auto"
                  >
                    Services
                  </Link>
                  <button
                    className="ml-2 focus:outline-none lg:hidden"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <ChevronDown className={`transition-transform ${isServicesOpen ? "rotate-180" : "rotate-0"}`} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                <div
                  className={`absolute lg:left-0 mt-2 bg-white border rounded shadow-lg w-64 z-50 transition-all duration-300 ease-in-out transform ${isServicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                >
                  <ul className="flex flex-col">
                    {[
                      { name: "Closet", href: "/services/closet" },
                      { name: "Modular Kitchen Closet", href: "/services/modularkitchen" },
                      { name: "TV Cabinet", href: "/services/tvcabinet" },
                      { name: "Office Furniture", href: "/services/officefurniture" },
                      { name: "False Ceiling", href: "/services/falseceiling" },
                      { name: "Wooden or Steel Railing", href: "/services/woodenandsteelrailing" },
                      { name: "Parqueting", href: "/services/parqueting" },
                    ].map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2 text-black hover:bg-[#8e2d75] hover:text-white transition"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link href="/portfolio" className="block py-2 text-black hover:text-[#8e2d75] transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 text-black hover:text-[#8e2d75] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 text-black hover:text-[#8e2d75] transition">
                  Contact Us
                </Link>
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
      </header>

      {/* Padding to prevent overlap */}
      <div className="pt-[70px]"></div>
    </>
  );
};

export default Navbar;
