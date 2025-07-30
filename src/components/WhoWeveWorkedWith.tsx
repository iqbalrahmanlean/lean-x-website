// components/WhoWeveWorkedWith.tsx
"use client";
import React from "react";

export default function WhoWeveWorkedWith() {
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
                <div className="mt-16 overflow-hidden">
                    <div className="flex animate-slide gap-12 items-center">
                        {/* First set of logos */}


                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/KAJIDATA.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/ALHAMRA_1.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/BRIGHTFAST_TECHNOLOGY.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/BUAL.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/BULAN_BINTANG.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/DPMM.png" />
                            </div>
                        </div>


                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/EASTERN.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/FRIEDCHILLIES.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/HAUSBOOM.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/INCEIF.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/IRSA.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/LPPKN.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/Petronas_Towers_Logo.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/PETRONAS.png" />
                            </div>
                        </div>


                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/PLC.png" />
                            </div>
                        </div>


                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/PRUDENTIAL_BSN1.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/PS.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/SAYALIVE.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/SNI.png" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center min-w-[300px] h-20 img-size">
                            <div className="flex items-center gap-2">
                                <img src="worked_with/ZS.png" />
                            </div>
                        </div>






                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
        
        .animate-slide:hover {
          animation-play-state: paused;
        }

        .style-worked{
            margin: auto;
        }

        .img-size{
      height: auto !important;
      `}</style>
        </section>
    );
}