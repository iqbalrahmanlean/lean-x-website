// components/SeamlessIntegrationSection.tsx
"use client";
import React from "react";

export default function SeamlessIntegrationSection() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400">
              Seamless Integration,
              <br />
              Ready Out of the Box
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Lean.x is a secure, flexible, and easy-to-integrate payment
                gateway platform tailored to the needs of modern businesses.
                Built with scalability and performance in mind, it empowers
                merchants to manage transactions, streamline operations, and
                drive growth through an all-in-one digital payments ecosystem.
              </p>

              <p>
                To strengthen trust and safeguard every transaction, Lean.x is
                currently undergoing PCI DSS Level 1 Certification — the highest
                standard in global payment security compliance.
              </p>
            </div>
          </div>

          {/* Right Side - Logo Slider */}
          <div className="relative h-[240px]">
            <div className="overflow-hidden h-full">
              <div className="flex flex-col gap-8 animate-scroll">
                {/* First set of logos */}
                <div className="flex justify-center">
                  <img src="slider/XERO.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/PRESTASHOP.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/MAGENTO.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/NERO.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/OPENCART.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/QUICKBOOKS.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/WHMCS.png" />
                </div>
                <div className="flex justify-center">
                  <img src="slider/WOO.png" />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">G</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">xero</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">S</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">O</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">Q</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
