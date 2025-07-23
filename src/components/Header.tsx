// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`relative sticky top-0 transition-all duration-300 z-50 ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-md shadow-lg' 
          : 'bg-cover bg-center bg-no-repeat'
      }`}
      style={!isScrolled ? {
        backgroundImage: "url('/assets/bg.png')",
      } : {}}
    >
      {/* Background overlay - only when not scrolled */}
      {!isScrolled && <div className="absolute inset-0 "></div>}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Leanjs Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-black">
            <a href="#home" className=" hover:text-yellow-500 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className=" hover:text-yellow-500 transition-colors font-medium">
              About Us
            </a>
            <a href="#products" className="hover:text-yellow-500 transition-colors font-medium">
              Products
            </a>
            <a href="#people" className=" hover:text-yellow-500 transition-colors font-medium">
              Our People
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors font-medium">
              Contact Us
            </a>
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
              Download Our Profile
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-yellow-500"
            >
            
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden relative z-10">
            <div className="absolute inset-0 "></div>
            <div className="relative z-10 border-t border-white/20 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className=" hover:text-yellow-500 transition-colors font-medium">
                  Home
                </a>
                <a href="#about" className=" hover:text-yellow-500 transition-colors font-medium">
                  About Us
                </a>
                <a href="#products" className=" hover:text-yellow-500 transition-colors font-medium">
                  Products
                </a>
                <a href="#people" className=" hover:text-yellow-500 transition-colors font-medium">
                  Our People
                </a>
                <a href="#contact" className=" hover:text-yellow-500 transition-colors font-medium">
                  Contact Us
                </a>
                <button className="bg-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium w-full">
                  Download Our Profile
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}