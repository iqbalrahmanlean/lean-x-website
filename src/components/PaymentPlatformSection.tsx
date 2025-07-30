// components/PaymentPlatformSection.tsx
"use client";
import React from "react";

export default function PaymentPlatformSection() {
    return (
        <section className="bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen relative">
                    {/* Left Side - Phone Image with partial yellow background */}
                    <div className="relative flex justify-center items-center p-8">
                        {/* White background section - only left 20% */}
                        <div className="absolute top-0 left-0 w-1/5 "></div>
                        
                        {/* White box same size as yellow content section - top half */}
                        <div className="absolute top-0 right-0 w-full h-1/2 "></div>
                        
                        {/* Yellow box same size as white header section - bottom half */}
                        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-yellow-400 custom-top"></div>
                        
                        {/* Phone image */}
                        <div className="relative z-10">
                            <img
                                src="home-top.png"
                                alt="Payment Platform Mobile App"
                                className="w-full max-w-lg drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side - Split into two sections */}
                    <div className="flex flex-col">
                        {/* Top Section - Logo and Header overflowing to left */}
                        <div className=" p-8 flex-1 flex justify-between items-center relative">
                            {/* Payment Header - positioned to overflow into left section */}
                            <div className="absolute  lg:-left-40 lg:-left-0 md:-left-32  top-1/2 transform -translate-y-1/2 z-10">
                                <img
                                    src="payment_header.png"
                                    alt="Next-Generation, Unified Payment Platform"
                                    className="h-16 lg:h-20"
                                />
                            </div>
                            
                            {/* Payment Logo - stays on the right */}
                            <div className="ml-auto custom-margin">
                                <img
                                    src="payment_logo.png"
                                    alt="Lean.X Logo"
                                    className="h-12 lg:h-16"
                                />
                            </div>
                        </div>

                        {/* Bottom Section - Yellow Content */}
                        <div className="bg-yellow-400 p-8 lg:p-12 flex-1 flex flex-col justify-center border-radius-yellow">
                            {/* Description paragraphs */}
                            <div className="space-y-6 text-white leading-relaxed mb-8">
                                <p className="text-base lg:text-lg">
                                    Lean.X is a secure, flexible, and easy-to-integrate payment gateway
                                    platform tailored to the needs of modern businesses. Built with scalability
                                    and performance in mind, it empowers merchants to manage transactions,
                                    streamline operations, and drive growth through an all-in-one digital
                                    payments ecosystem.
                                </p>

                                <p className="text-base lg:text-lg">
                                    To ensure the highest level of security and build trust with every transaction,
                                    Lean.X is certified under the Payment Card Industry Data Security Standard
                                    (PCI DSS) Level 1, the most stringent standard in global payment security.
                                </p>
                            </div>

                            {/* Learn More Button */}
                            <div>
                                <button className="hover-button-reverse bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md hover">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}