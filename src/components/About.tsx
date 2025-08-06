// components/About.tsx
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
                Where We Started.
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">
                Where We're Going
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Our journey began with three college mates building web and software applications, 
                and we've been growing ever since. Over the past decade, we've developed a wide range 
                of solutions, from mobile games and web platforms to desktop applications and digital 
                systems for residential communities, travel agencies, educational institutions, 
                financial services, government bodies, and global non-profits.
              </p>

              <p>
                In recent years, we shifted our focus toward financial technology. We contributed to 
                the core systems behind several of Malaysia's leading e-wallet platforms and supported 
                the development of an international digital banking infrastructure. These experiences 
                strengthened our ability to build secure, scalable, and reliable financial systems 
                that businesses can depend on.
              </p>

              <p>
                Today, our full focus is on Lean.x, a digital payment ecosystem built for modern 
                businesses. Since its launch in January 2025, Lean.x has processed over 16.5 million 
                transactions, with a total transaction volume exceeding RM1.1 billion, covering both 
                customer collections and merchant payouts.
              </p>

              <p>
                We believe in delivering developer-friendly, integration-ready solutions that solve 
                real problems, especially for small and growing businesses. As the world becomes more 
                digital and connected, our mission remains clear: to make payments faster, safer, 
                and smarter for everyone.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="p-4 ">
              <Image
                src="/img_1-1.svg"
                alt="Digital Payment Ecosystem"
                width={532}
                height={553}
                className="w-full h-auto rounded-lg"
                priority
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}