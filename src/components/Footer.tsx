import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#6b1b55] border-t border-gray-200 py-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-[#F5F5F5]">Join With Us</h2>
            <p className="text-[#F5F5F5] text-m mt-1">A Complete Interio Solution</p>
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-end">
            <form className="w-full flex flex-col sm:flex-row items-center max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-grow border border-gray-300 rounded-md sm:rounded-l-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8e2d75] focus:border-[#8e2d75]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#8e2d75] text-white px-6 py-2 rounded-md sm:rounded-r-md mt-2 sm:mt-0 hover:bg-[#8e2d75] focus:outline-none focus:ring-2 focus:ring-[#8e2d75] focus:border-[#8e2d75]"
              >
                Submit
              </button>
            </form>
            <p className="text-xs text-[#F5F5F5] mt-2 text-center sm:text-left">
              We care about your data in our <a href="#" className="text-[#f9f9f9] underline">privacy policy</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Image src="/assests/logo_slogan.jpg" width={100} height={100} alt="Logo" />
          </div>

          <div className="flex flex-wrap justify-center space-x-4 text-[#F5F5F5]">
            <a href="/Home" className="hover:text-[#8e2d75]">Home</a>
            <a href="/Services" className="hover:text-[#8e2d75]">Services</a>
            <a href="/Portfolio" className="hover:text-[#8e2d75]">Portfolio</a>
            <a href="/About" className="hover:text-[#8e2d75]">About Us</a>
            <a href="/Contact" className="hover:text-[#8e2d75]">Contact Us</a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-6 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61555856837163" className="border border-[#8e2d75] rounded-full p-2 bg-[#f5f5f5] text-[#6b1b55] hover:bg-[#8e2d75] hover:text-white transition-all flex items-center justify-center w-10 h-10">
              <Facebook />
            </a>
            <a href="#" className="border border-[#8e2d75] rounded-full p-2 bg-[#f5f5f5] text-[#6b1b55] hover:bg-[#8e2d75] hover:text-white transition-all flex items-center justify-center w-10 h-10">
              <Instagram />
            </a>
            <a href="#" className="border border-[#8e2d75] rounded-full p-2 bg-[#f5f5f5] text-[#6b1b55] hover:bg-[#8e2d75] hover:text-white transition-all flex items-center justify-center w-10 h-10">
              <Phone />
            </a>
          </div>
        </div>
        <div className="border-t border-[#FFFFFF] my-4"></div>
        <div className="mt-8 text-center text-[#F5F5F5] text-sm">
          Copyright &copy; 2025 Guras Interio. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
