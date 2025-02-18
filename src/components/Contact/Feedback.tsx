"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
interface InquiryOption {
  value: string;
  label: string;
} interface FeedbackProps {
  inquiryOptions: InquiryOption[];
}

const Feedback: React.FC<FeedbackProps> = ({ inquiryOptions }) => {
  const [inquiryType, setInquiryType] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted with:", { projectType, inquiryType, message });

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setProjectType("");
      setInquiryType("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
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

        {/* Project Type Dropdown */}
        <div>
          <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type*
          </label>
          <select
            id="project-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          >
            <option value="">Select a project type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="office">Office</option>
            <option value="others">Others</option>
          </select>
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
            {Array.isArray(inquiryOptions) && inquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
          <button
            type="submit"
            className="flex items-center border bg-[#8e2d75] text-white px-7 py-2 rounded-xl hover:bg-[#8a2e73]"
          >
            {isLoading ? "Sending..." : "Send"} <ChevronRight className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
