'use client';

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    "Healthcare",
    "AI & Machine Learning",
    "Mobile Development",
    "Blockchain",
    "Big Data",
    "Software Development",
    "Cloud Services",
    "AR/VR",
    "UX/UI Services",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4 bg-[#0C0C0C] px-3 sm:px-6 lg:px-3 py-4 sm:py-6">
        {/* Header Section */}
        <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left">
          <h2 className="font-figtree font-semibold text-xl sm:text-2xl lg:text-3xl text-white">
            Contact Us
          </h2>
          <h5 className="font-figtree font-semibold text-lg sm:text-xl text-white">
            Let's come together to create something truly great.
          </h5>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div className={`p-4 rounded-lg text-center ${
            submitStatus.type === 'success' 
              ? 'bg-green-900 text-green-200 border border-green-700' 
              : 'bg-red-900 text-red-200 border border-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Main Content Container */}
        <div className="flex flex-col xl:flex-row items-start gap-4 sm:gap-6 w-full bg-[#121015] rounded-xl px-3 sm:px-5 lg:px-6 py-4 sm:py-6">
          {/* Contact Image & Details Section */}
          <div className="relative z-0 w-full xl:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[80vh] xl:h-[90vh] rounded-2xl overflow-hidden">
            <Image
              src="/images/contact.jpg"
              className="rounded-2xl object-cover"
              fill
              alt="contact form"
            />
            <div className="absolute w-full h-full z-10 bg-[#0000008F] rounded-2xl" />

            {/* Contact Details Overlay */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 z-20 flex flex-col gap-2 sm:gap-3">
              <h4 className="font-figtree font-bold text-lg sm:text-xl text-white">
                Contact Details
              </h4>

              {/* Phone Numbers */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5">
                <div className="flex items-center gap-1 sm:gap-2">
                  <MdCall className="text-white text-sm sm:text-base" />
                  <h4 className="font-figtree text-sm sm:text-base text-white">
                    +91 9515053073
                  </h4>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <MdCall className="text-white text-sm sm:text-base" />
                  <h4 className="font-figtree text-sm sm:text-base text-white">
                    +91 9515053073
                  </h4>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-1 sm:gap-2">
                <MdEmail className="text-white text-sm sm:text-base" />
                <h4 className="font-figtree text-sm sm:text-base text-white break-all">
                  remind@vxsoftwaresolutions.com
                </h4>
              </div>

              {/* Address */}
              <div className="flex items-start gap-1 sm:gap-2">
                <FaLocationDot className="mt-1 text-white text-sm sm:text-base flex-shrink-0" />
                <h4 className="font-figtree text-sm sm:text-base text-white leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md">
                  Flat no 102, Namas Building, #945
                  Road No - 48, Ayyappa Society, Madhapur
                  Hyderabad 500081
                </h4>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full xl:w-1/2 h-auto xl:h-[90vh]">
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-4 sm:gap-6 xl:overflow-auto">
              {/* Name Field */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <label className="text-white font-figtree text-sm sm:text-base">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                  required
                  className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888] text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-white font-figtree text-sm sm:text-base">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email ID"
                    required
                    className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888] text-sm sm:text-base"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1 sm:gap-2">
                  <label className="text-white font-figtree text-sm sm:text-base">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                    required
                    className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white focus:outline-none focus:border-[#888] text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <label className="text-white font-figtree text-sm sm:text-base">
                  Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white font-figtree focus:outline-none focus:border-[#888] appearance-none text-sm sm:text-base"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  {serviceOptions.map((svc) => (
                    <option
                      className="text-black font-figtree"
                      key={svc}
                      value={svc}
                    >
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1 sm:gap-2 flex-1">
                <label className="text-white font-figtree text-sm sm:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows={4}
                  required
                  className="flex-1 min-h-[100px] sm:min-h-[120px] xl:flex-1 bg-transparent border border-[#555] rounded-lg px-3 sm:px-4 py-2 sm:py-3 placeholder:font-figtree placeholder:text-[#777] text-white resize-none focus:outline-none focus:border-[#888] text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <div className="self-center sm:self-end mt-2 sm:mt-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#5029FF] text-white font-figtree px-6 py-3 rounded-lg hover:bg-[#4020DD] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}