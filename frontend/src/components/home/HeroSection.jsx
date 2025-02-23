import React from "react";
import logo from "./../../assets/logo.svg";

// src/components/HomePage/HeroSection
function HeroSection() {
  return (
    <section className="flex justify-center items-center">
      <div className="py-10">
        <nav className=" flex justify-center items-center shadow-lg  px-15 py-3">
          <div className="leftnavlogoside flex items-center mr-30 cursor-pointer">
            <img src={logo} className="w-13 h-13" />
            <span className="text-white text-2xl">CycleCipher</span>
          </div>
          {/* Navigation Links */}
        <div className="flex  items-center space-x-20">
          <a href="#about" className="navlinks text-2xl text-gray-300 hover:text-white">About</a>
          <a href="#features" className="navlinks text-gray-300 hover:text-white">Features</a>
          <a href="#integrations" className="navlinks text-gray-300 hover:text-white">Integrations</a>
          <a href="#pricing" className="navlinks text-gray-300 hover:text-white">Pricing</a>
          <a href="#blog" className="navlinks text-gray-300 hover:text-white">Blog</a>
          <button className="text-2xl bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 ml-30 cursor-pointer">
            Join Waitlist
          </button>
        </div>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
