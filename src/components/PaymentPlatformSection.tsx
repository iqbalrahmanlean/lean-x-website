// components/PaymentPlatformSection.tsx
"use client";
import React from "react";

export default function PaymentPlatformSection() {
    return (
        <section className="bg-gray-50 py-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                    {/* Left Side - Phone Mockup */}
                    <div className="relative bg-white p-8">
                        {/* Purple curved background */}
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

                        {/* Phone mockup */}
                        <div className="relative z-10 flex justify-center">
                            <img
                                src="home-top.png"
                                alt="Payment Platform Mobile App"
                                className="w-full max-w-sm drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content with Yellow Background */}
                    <div className="bg-yellow-400 p-12 min-h-full flex flex-col justify-center">
                        {/* Description paragraphs */}
                        <div className="space-y-6 text-white leading-relaxed mb-8">
                            <p>
                                Lean.X is a secure, flexible, and easy-to-integrate payment gateway
                                platform tailored to the needs of modern businesses. Built with scalability
                                and performance in mind, it empowers merchants to manage transactions,
                                streamline operations, and drive growth through an all-in-one digital
                                payments ecosystem.
                            </p>

                            <p>
                                To ensure the highest level of security and build trust with every transaction,
                                Lean.X is certified under the Payment Card Industry Data Security Standard
                                (PCI DSS) Level 1, the most stringent standard in global payment security.
                            </p>
                        </div>

                        {/* Learn More Button */}
                        <div>
                            <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}