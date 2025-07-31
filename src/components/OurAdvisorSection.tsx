// components/OurAdvisorSection.tsx
"use client";
import React from "react";

export default function OurAdvisorSection() {
  const advisors = [
    {
      id: 1,
      name: "Rob Cayzer",
      title: "Executive Director",
      company: "Yassar Group",
      image: "advisor1.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Dr Clement Oi",
      title: "President",
      company: "Kamakura Corporation",
      image: "advisor2.jpg" // Replace with actual image path
    },
    {
      id: 3,
      name: "Yuvankumar Danabalan",
      title: "Co-founder",
      company: "Leanis Solutions",
      image: "advisor3.jpg" // Replace with actual image path
    }
  ];

  return (
    <section id="people" className="bg-white py-16">
      <div className="mx-auto">
        {/* Header with yellow background */}
        <div className="mb-12 max-w-sm">
          <div className="bg-yellow-400 py-6 pl-6 text-center advisor-border">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Advisor
            </h2>
          </div>
        </div>

        {/* Advisors Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 px-6">
          {advisors.map((advisor) => (
            <div key={advisor.id} className="text-center max-w-sm">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-4xl text-gray-600 font-bold">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>

              {/* Advisor Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {advisor.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {advisor.title}
                </p>
                <p className="text-gray-500">
                  {advisor.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}