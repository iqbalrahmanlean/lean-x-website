// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="">
      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="Leanis HQ Location"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.358268719042!2d101.60047609274315!3d3.183799100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc499639f89d27%3A0x69a7eb729bf50732!2sMenara%208trium!5e0!3m2!1sen!2smy!4v1690272491895!5m2!1sen!2smy"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Bottom Yellow Bar */}
      {/* Bottom Yellow Bar */}
      <div className="bg-yellow-400 text-gray-900 py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo */}
        <div className="md:order-1 w-full md:w-auto text-left">
          <img src="logo-footer.png" alt="Leanis Logo" className="footer-center h-10 w-auto" />
        </div>

        {/* Right: Copyright */}
        <div className="md:order-2 w-full md:w-auto footer-center text-sm font-medium">
          &copy; 2025 Leanis Solutions. All Rights Reserved
        </div>
      </div>

    </footer>
  );
}
