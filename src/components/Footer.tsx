
import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <footer className=" bg-[#8e2d75] text-white py-6">
      <div className="container mx-auto px-4">



        {/* Logo and Links */}
        <div className="text-center">
          <div className='flex justify-center align-center'>
            <img
              src="/assests/logo_slogan.jpg" className='object-contain h-20 w-20 ' />
            <p></p>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center space-x-1"
            >
              <Facebook />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className=" hover:text-white text-xl"
            >
              <Instagram />
            </a>
            <a href="#" aria-label="Twitter" className=" hover:text-white text-xl">
              <Twitter />
            </a>

          </div>
          {/* Footer Links */}
          <div className="flex justify-center space-x-6">

            <a href="#" className="hover:text-white text-sm">
              HOME
            </a>
            <a href="#" className="hover:text-white text-sm">
              SERVICES
            </a>
            <a href="#" className="hover:text-white text-sm">
              PORTFOLIO
            </a>
            <a href="#" className="hover:text-white text-sm">
              ABOUT US
            </a>
            <a href="/contact" className="hover:text-white text-sm">
              CONTACT US
            </a>
          </div>
          {/* Divider */}
          <div className="border-t border-white my-4"></div>

          {/* Disclaimer Text */}
          <p className="text-xs text-gray-400 mt-4">
            &copy; 2025 GURAS INTERIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;