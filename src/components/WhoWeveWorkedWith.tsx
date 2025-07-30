// components/WhoWeveWorkedWith.tsx
"use client";
import React, { useRef, useEffect } from "react";

export default function WhoWeveWorkedWith() {
    const scrollRef = useRef<HTMLDivElement>(null);
    
    const logos = [
        "worked_with/KAJIDATA.png",
        "worked_with/ALHAMRA_1.png",
        "worked_with/BRIGHTFAST_TECHNOLOGY.png",
        "worked_with/BUAL.png",
        "worked_with/BULAN_BINTANG.png",
        "worked_with/DPMM.png",
        "worked_with/EASTERN.png",
        "worked_with/FRIEDCHILLIES.png",
        "worked_with/HAUSBOOM.png",
        "worked_with/INCEIF.png",
        "worked_with/IRSA.png",
        "worked_with/LPPKN.png",
        "worked_with/Petronas_Towers_Logo.png",
        "worked_with/PETRONAS.png",
        "worked_with/PLC.png",
        "worked_with/PRUDENTIAL_BSN1.png",
        "worked_with/PS.png",
        "worked_with/SAYALIVE.png",
        "worked_with/SNI.png",
        "worked_with/ZS.png"
    ];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;
        let autoScrollInterval: NodeJS.Timeout;

        // Auto scroll function
        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                if (!isDown && container) {
                    const maxScroll = container.scrollWidth - container.clientWidth;
                    if (container.scrollLeft >= maxScroll - 5) {
                        container.scrollLeft = 0;
                    } else {
                        container.scrollLeft += 1;
                    }
                }
            }, 40);
        };

        // Mouse drag functionality
        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            clearInterval(autoScrollInterval);
        };

        const handleMouseLeave = () => {
            isDown = false;
            container.style.cursor = 'grab';
            setTimeout(startAutoScroll, 1000);
        };

        const handleMouseUp = () => {
            isDown = false;
            container.style.cursor = 'grab';
            setTimeout(startAutoScroll, 1000);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        };

        // Touch drag functionality
        const handleTouchStart = (e: TouchEvent) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            clearInterval(autoScrollInterval);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        };

        const handleTouchEnd = () => {
            isDown = false;
            setTimeout(startAutoScroll, 1000);
        };

        // Add event listeners
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        // Start auto scroll
        startAutoScroll();

        return () => {
            clearInterval(autoScrollInterval);
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Title */}
                    <div className="style-worked">
                        <h2 className="text-4xl lg:text-5xl font-bold text-yellow-400">
                            Who We've Worked With
                        </h2>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            We have successfully delivered over 70 digital projects across fintech, education,
                            logistics, and public services. These include mobile applications, enterprise
                            platforms, and fully customized system solutions tailored to unique business
                            needs.
                        </p>

                        <p>
                            Our solutions have helped clients improve operational efficiency, optimize
                            workflows, and accelerate their digital transformation initiatives. This experience
                            continues to shape the way we build Lean.x today.
                        </p>
                    </div>
                </div>

                {/* Logo Slider */}
                <div className="mt-16">
                    <div className="slider-wrapper">
                        {/* Left blur gradient */}
                        <div className="blur-gradient blur-left"></div>
                        
                        {/* Right blur gradient */}
                        <div className="blur-gradient blur-right"></div>
                        
                        <div ref={scrollRef} className="slider-container">
                            <div className="slider-track">
                                {/* Render logos 4 times for infinite scroll */}
                                {[...Array(4)].map((_, setIndex) => 
                                    logos.map((logo, index) => (
                                        <div key={`logo-${setIndex}-${index}`} className="logo-item">
                                            <img 
                                                src={logo} 
                                                alt={`Client ${index + 1}`}
                                                draggable={false}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .slider-wrapper {
                    position: relative;
                    width: 100%;
                }

                .blur-gradient {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 100px;
                    z-index: 10;
                    pointer-events: none;
                }

                .blur-left {
                    left: 0;
                    background: linear-gradient(to right, white, transparent);
                }

                .blur-right {
                    right: 0;
                    background: linear-gradient(to left, white, transparent);
                }

                .slider-container {
                    overflow-x: hidden;
                    overflow-y: hidden;
                    width: 100%;
                    cursor: grab;
                    user-select: none;
                    padding: 1rem 0;
                }

                .slider-track {
                    display: flex;
                    gap: 3rem;
                    width: max-content;
                }

                .logo-item {
                    flex-shrink: 0;
                    width: 200px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    user-select: none;
                }

                .logo-item img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    transition: all 0.3s ease;
                    pointer-events: none;
                    user-select: none;
                }

                .logo-item img:hover {
                    filter: grayscale(0);
                    opacity: 1;
                    transform: scale(1.1);
                }

                .style-worked {
                    margin: auto;
                }

                @media (max-width: 768px) {
                    .logo-item {
                        width: 150px;
                        height: 60px;
                    }
                    
                    .slider-track {
                        gap: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}