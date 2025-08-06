// components/PaymentPlatformSection.tsx
"use client";
import React from "react";

export default function PaymentPlatformSection() {
    return (
        <section id="products" className="bg-white overflow-hidden">
           <div className="max-w-7xl mx-auto styling-full hidden sm:block">
                <body className="m-0 p-0">
                    <div className="w-full">
                        <div className="">
                            <div className="p-8 flex-1 flex justify-between items-center relative">
                                <div className="absolute right-20 margin-payment-header top-1/2 transform -translate-y-1/2 z-10">
                                    <img
                                        src="payment_header.png"
                                        alt="Next-Generation, Unified Payment Platform"
                                        className="h-16 lg:h-20"
                                    />
                                </div>
                                <div className="ml-auto custom-margin">
                                    <img
                                        src="payment_logo.png"
                                        alt="Lean.X Logo"
                                        className="h-12 lg:h-16"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start relative">
                            <div className="w-[30%] relative">
                                <div className="absolute top-24 left-0 z-10 custom-layout">
                                    <img
                                        src="home-top.svg"
                                        alt="Payment Platform Mobile App"
                                        className="w-165 max-w-none mt-1"
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-[70%] bg-yellow-400 border-radius-yellow p-8 lg:p-12 flex flex-col justify-center">
                                <div className="w-[70%] ml-auto">
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
                                    <div>
                                        <button className="hover-button-reverse bg-white text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </div>

            {/* Mobile Responsive Section */}
            <div className="block sm:hidden bg-white" id="products-mobile">
                <div className="">
                    {/* Mobile Header */}
                    <div className="text-center mb-6">
                       
                    </div>

                    {/* Mobile App Image */}
                    <div className="flex justify-center">
                        <img
                            src="home-top.png"
                            alt="Payment Platform Mobile App"
                            className="w-64 max-w-[80%] drop-shadow-xl mobile-home-top"
                        />

                        
                        <img
                            src="payment-header-mobile.svg"
                            alt="Next-Generation, Unified Payment Platform"
                            className="h-12 mx-auto mobile-payment-header"
                        />

                         <img
                            src="payment_logo.png"
                            alt="Lean.X Logo"
                            className="h-10 mx-auto mb-4 mobile-payment-logo"
                        />
                    </div>

                    <div className="bg-yellow-400 rounded-lg p-6 ">
                        <div className="space-y-4 text-white leading-relaxed mb-6 text-center">
                            <p className="text-sm">
                                Lean.X is a secure, flexible, and easy-to-integrate payment gateway
                                platform tailored to the needs of modern businesses. Built with scalability
                                and performance in mind, it empowers merchants to manage transactions,
                                streamline operations, and drive growth through an all-in-one digital
                                payments ecosystem.
                            </p>

                            <p className="text-sm">
                                To ensure the highest level of security and build trust with every transaction,
                                Lean.X is certified under the Payment Card Industry Data Security Standard
                                (PCI DSS) Level 1, the most stringent standard in global payment security.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <button className="bg-white text-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md sm:w-auto w-auto">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}