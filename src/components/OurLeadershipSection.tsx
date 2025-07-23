// components/OurLeadershipSection.tsx
"use client";
import React from "react";

export default function OurLeadershipSection() {
  const leaders = [
    {
      id: 1,
      name: "Bee Teck Loon",
      title: "Chief Executive",
      company: "Officer",
      image: "leader1.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Azrul Anuar",
      title: "Chief Operating / Chief",
      company: "Technology Officer",
      image: "leader2.jpg" // Replace with actual image path
    },
    {
      id: 3,
      name: "Azrul Aziz",
      title: "Chief Business",
      company: "Officer",
      image: "leader3.jpg" // Replace with actual image path
    },
    {
      id: 4,
      name: "Ahmad Yazid",
      title: "Chief Financial",
      company: "Officer",
      image: "leader4.jpg" // Replace with actual image path
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto">
        {/* Header with yellow background */}
        <div className="mb-12 max-w-sm ml-auto">
          <div className="bg-yellow-400 py-6 pl-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Leadership
            </h2>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 px-6">
          {leaders.map((leader) => (
            <div key={leader.id} className="text-center max-w-sm">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-4xl text-gray-600 font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>

              {/* Leader Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-medium">
                  {leader.title}
                </p>
                <p className="text-gray-500">
                  {leader.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}