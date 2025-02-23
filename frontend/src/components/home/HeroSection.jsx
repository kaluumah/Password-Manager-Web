import React from "react";
import logo from "./../../assets/logo.svg";

// src/components/HomePage/HeroSection
function HeroSection() {
  return (
    <section className="flex  items-center justify-center text-center py-20 ">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="logoleft flex items-center ">
          <img src={logo} className="w-10 h-10" />
          <span>CycleCipher</span>
        </div>
        <div>
          <ul className="hidden md:flex space-x-20 font-medium text-white">
            <li className="navlinks">About</li>
            <li className="navlinks">Features</li>
            <li className="navlinks">Integrations</li>
            <li className="navlinks">Pricing</li>
            <li className="navlinks">Blog</li>
          </ul>
        </div>
      </nav>
      <div></div>
    </section>
  );
}

export default HeroSection;
