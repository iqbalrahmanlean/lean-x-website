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
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subject,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      
      // Show success toast
      setShowToast(true);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });

      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Message Sent Successfully!</h4>
              <p className="text-sm text-green-100">
                We'll get back to you soon.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto flex-shrink-0 text-green-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <section
        id="contact"
        className="py-16 px-6 relative"
        style={{ background: "linear-gradient(90deg, #ffc200 40%, #FCFBFF 40%)" }}
      >
        <div className="hidden sm:flex absolute left-[40%] top-0 bottom-0 items-center z-20">
          <div className="h-[60%] w-px bg-yellow-400"></div>
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[600px]">
          <div className="bg-white rounded-lg shadow-lg border w-full max-w-5xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 p-12 relative">
                <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-8">
                  Have questions? Our team is ready to assist.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <img src="icon/phone.png" alt="Phone" />
                    </div>
                    <span className="text-gray-800 font-medium">
                      +603 6276 2246
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <img src="icon/mail.png" alt="Email" />
                    </div>
                    <span className="text-gray-800 font-medium">
                      hello@leanis.com.my
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1">
                      <img src="icon/pin.png" alt="Location" />
                    </div>
                    <div className="text-gray-800 font-medium">
                      <div>T2-21-11, 8trium Tower</div>
                      <div>Jalan Cempaka SD12/5</div>
                      <div>
                        Bandar Sri Damansara,52200 <br /> Kuala Lumpur, Malaysia
                      </div>
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
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent text-black"
                        required
                        disabled={isSubmitting}
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
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent text-black"
                        required
                        disabled={isSubmitting}
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
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent text-black"
                        required
                        disabled={isSubmitting}
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
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent text-black"
                        required
                        disabled={isSubmitting}
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
                        { id: "support", label: "Get Support", active: false },
                      ].map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              formData.subject === option.label
                                ? "bg-yellow-400 border-yellow-400"
                                : "bg-white border-gray-300"
                            }`}
                          >
                            {formData.subject === option.label && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleSubjectChange(option.label)}
                            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                            disabled={isSubmitting}
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
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-yellow-400 outline-none bg-transparent placeholder-gray-400 text-black"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="hover-button bg-yellow-400 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ml-auto"
                    >
                      {isSubmitting && (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}