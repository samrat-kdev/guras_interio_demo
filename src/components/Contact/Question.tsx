"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import { config } from "process";
import { toast } from "sonner"


interface InquiryOption {
  value: string;
  label: string;
}

interface FeedbackProps {
  inquiryOptions: InquiryOption[];
}

const Feedback: React.FC<FeedbackProps> = ({ inquiryOptions }) => {
  const [inquiryType, setInquiryType] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [servicesType, setServicesType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Prevent default triggered"); // Check if this logs before refresh

    setIsLoading(true);

    try {

      console.log("Form submitted with:", {
        projectType,
        inquiryType,
        message,
        name,
        email,
        phone,
        timeline,
        budget,
        servicesType
      });
      const data = {
        projectType,
        inquiryType,
        message,
        name,
        email,
        phone,
        timeline,
        budget,
        servicesType
      }

      // 
      // make api call with axios
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/contact`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        toast.success("Form submitted successfully")
        console.log(response.data);
        console.log("Form submitted successfully");

      }

      setIsLoading(false);

      // Reset form fields
      setProjectType("");
      setInquiryType("");
      setMessage("");
      setName("");
      setEmail("");
      setPhone("");
      setTimeline("");
      setBudget("");
      setServicesType("");
    } catch (error) {
      console.error("Form submission failed:", error);
      toast.error(`Form is not submitted: ${error}`)
    } finally {
      setIsLoading(false);
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"

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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            id="project-type"
            value={servicesType}
            onChange={(e) => setServicesType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"

          >
            <option value="">Select a service type</option>
            <option value="residential">R</option>
            <option value="commercial">C</option>
            <option value="office">O</option>
            <option value="others">Others</option>
          </select>
        </div>
        {/* Timeline Input */}
        <div>
          <label htmlFor="Timeline" className="block text-sm font-medium text-gray-700 mb-1">
            Timeline*
          </label>
          <input
            type="text"
            id="Timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            placeholder="Enter your Timeline"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e2d75]"
            required
          />
        </div>

        {/* Budget Input */}
        <div>
          <label htmlFor="Budget" className="block text-sm font-medium text-gray-700 mb-1">
            Budget*
          </label>
          <input
            type="number"
            id="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your Budget"
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