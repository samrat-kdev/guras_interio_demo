import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200 py-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#8e2d75]">Join With Us</h2>
            <p className="text-gray-600 text-m mt-1">
              A Complete Interio Solution
            </p>
          </div>
          <div className="mt-4 md:mt-0 w-full max-w-sm">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow border border-gray-300 rounded-l-md mr-4 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8e2d75] focus:border-[#8e2d75]"
              />
              <button
                type="submit"
                className="bg-[#8e2d75] text-white px-6 py-2 rounded-r-md mr-2 hover:bg-[#8e2d75] focus:outline-none focus:ring-2 focus:ring-[#8e2d75] focus:border-[#8e2d75]"
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We care about your data in our <a href="#" className="text-[#8e2d75] underline">privacy policy</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="text-gray-600 text-sm">
            <Image src="/assests/logo_slogan.jpg" width={100} height={100} alt="Logo" />
          </div>

          <div className="mt-2 flex justify-center space-x-4 text-gray-600">
            <a href="/Home" className="hover:text-[#8e2d75]">Home</a>
            <a href="/Services" className="hover:text-[#8e2d75]">Services</a>
            <a href="/Portfolio" className="hover:text-[#8e2d75]">Portfolio</a>
            <a href="/About" className="hover:text-[#8e2d75]">About Us</a>
            <a href="/Contact" className="hover:text-[#8e2d75]">Contact Us</a>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61555856837163" className="border border-[#8e2d75] rounded-full p-2 bg-[#8e2d75] text-white hover:text-gray-200">
              <Facebook />
            </a>
            <a href="#" className="border border-[#8e2d75] rounded-full p-2 bg-[#8e2d75] text-white hover:text-gray-200">
              <Instagram />
            </a>
            <a href="#" className="border border-[#8e2d75] rounded-full p-2 bg-[#8e2d75] text-white hover:text-gray-200">
              <Phone />
            </a>
          </div>
        </div>
        <div className="border-t border-[#8e2d75] my-4"></div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Copyright &copy; 2025 Guras_interio. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
