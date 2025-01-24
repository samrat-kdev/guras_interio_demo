"use client";

import React, { useState } from "react";
import Sendfull from "../Button/Sendfull";
import { ChevronRight } from "lucide-react";

const Feedback = () => {
  const [inquiryType, setInquiryType] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true)
    console.log("Form submitted with:", { inquiryType, message });

    setTimeout(() => {
      setisLoading(false)
      setInquiryType("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Get In Touch
        <span className="block w-2/3 sm:w-1/2 md:w-1/3 h-1.5 bg-[#8e2d75] mt-2 mx-auto"></span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <input
            type="text"
            id="number"
            placeholder="Enter your phone number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          />
        </div>

        {/* Inquiry Type Dropdown */}
        <div>
          <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-1">
            General Inquiry*
          </label>
          <select
            id="inquiry-type"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          >
            <option value="">Select an option</option>
            <option value="design">Interior Design</option>
            <option value="consultation">Consultation</option>
            <option value="pricing">Pricing Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message*
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          {/* <Sendfull /> */}
          <button type="submit" className="flex border bg-[#8e2d75] text-white px-7 py-2 rounded-xl hover:bg-[#8a2e73]">{isLoading ? "Sending..." : "Send"} <ChevronRight /> </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
