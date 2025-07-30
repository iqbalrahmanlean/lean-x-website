// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative py-20 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/bg.png')",
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/hero.svg"
            alt="Leanjs Hero"
            width={500}
            height={500}
            className="mx-auto max-w-full h-auto"
            priority
          />

          <Image
            src="/assets/title-hero.svg"
            alt="Leanjs Title"
            width={500}
            height={500}
            className="max-w-full h-auto mb-0"
            priority
          />

          <Image
            src="/assets/sub-title.svg"
            alt="Leanjs Subtitle"
            width={500}
            height={500}
            className="mx-auto max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}