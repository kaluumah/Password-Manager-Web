import React from "react";
import logo from "./../../assets/logo.svg";

// src/components/HomePage/HeroSection
function HeroSection() {
  return (
    <section className="flex justify-center items-center ">
      <div>
        <nav className="py-20">
          <div className="leftnavlogoside flex items-center">
            <img src={logo} className="w-13 h-13"/>
            <span className="text-white text-2xl">CycleCipher</span>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
