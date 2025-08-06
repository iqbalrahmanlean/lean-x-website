// components/ContactSection.tsx
"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subject
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 px-6 relative" style={{ background: 'linear-gradient(90deg, #ffc200 40%, #FCFBFF 40%)' }}>
      {/* Vertical line that matches the background split exactly with padding */}
   <div className="absolute left-[40%] top-0 bottom-0 flex items-center z-20">
  <div className="h-[60%] w-px bg-yellow-400"></div>
</div>



      
      <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[600px]">
        {/* Centered White Card */}
        <div className="bg-white rounded-lg shadow-lg border w-full max-w-5xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Side - Contact Info (40%) */}
            <div className="lg:col-span-2 p-12 relative">
              {/* Remove the old border line since we now have the absolute positioned one */}
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">Have questions? Our team is ready to assist.</p>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <img src="icon/phone.png" />
                  </div>
                  <span className="text-gray-800 font-medium">+603 6276 2246</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                   <img src="icon/mail.png" />
                  </div>
                  <span className="text-gray-800 font-medium">hello@leanis.com.my</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8  rounded-full flex items-center justify-center mt-1">
                   <img src="icon/pin.png" />
                  </div>
                  <div className="text-gray-800 font-medium">
                    <div>T2-21-11, 8trium Tower</div>
                    <div>Jalan Cempaka SD12/5</div>
                    <div>Bandar Sri Damansara,52200 , Kuala Lumpur,  Malaysia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (60%) */}
            <div className="lg:col-span-3 p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent text-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select Subject?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "general", label: "General Inquiry", active: true },
                      { id: "career", label: "Career Inquiry", active: false },
                      { id: "other", label: "Other Inquiry", active: false },
                      { id: "support", label: "Get Support", active: false }
                    ].map((option) => (
                      <div key={option.id} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.subject === option.label 
                            ? "bg-yellow-400 border-yellow-400" 
                            : "bg-white border-gray-300"
                        }`}>
                          {formData.subject === option.label && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleSubjectChange(option.label)}
                          className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          {option.label}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                 <input
  type="text"
  name="message"
  value={formData.message}
  onChange={handleInputChange}
  placeholder="Write your message.."
  className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent placeholder-gray-400"
/>
                </div>

                {/* Submit Button */}
                <div className="text-right">
                  <button
                    type="submit"
                    className="hover-button bg-yellow-400 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors" 
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}