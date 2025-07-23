// components/MeetOurTeamSection.tsx
"use client";
import React from "react";

export default function MeetOurTeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Fazrul Imran",
      title: "HOD",
      company: "Operation",
      image: "team1.jpg"
    },
    {
      id: 2,
      name: "Yuvan Kumar",
      title: "HOD Policy",
      company: "& Governance",
      image: "team2.jpg"
    },
    {
      id: 3,
      name: "Iylia Muhammad",
      title: "HOD Business &",
      company: "Development",
      image: "team3.jpg"
    },
    {
      id: 4,
      name: "Nazirul Ifwat",
      title: "HOD Development &",
      company: "Transaction",
      image: "team4.jpg"
    },
    {
      id: 5,
      name: "Nizam Yaakop",
      title: "HOD User",
      company: "Experiences",
      image: "team5.jpg"
    },
    {
      id: 6,
      name: "Wira Azharan",
      title: "HOD Development",
      company: "& Integration",
      image: "team6.jpg"
    },
    {
      id: 7,
      name: "Muhammad Arifin",
      title: "HOD",
      company: "Support",
      image: "team7.jpg"
    },
    {
      id: 8,
      name: "Muhammad Hadi",
      title: "HOD II Development &",
      company: "Transaction",
      image: "team8.jpg"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto">
        {/* Header with yellow background */}
        <div className="mb-12 max-w-sm">
          <div className="bg-yellow-400 py-6 pl-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Meet Our Team
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 px-6 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center max-w-sm">
              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                    <span className="text-2xl lg:text-3xl text-gray-200 font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Uncomment when you have actual images */}
                  {/* <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  /> */}
                </div>
              </div>

              {/* Member Info */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {member.title}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {member.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}