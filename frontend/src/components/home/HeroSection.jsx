import React from "react";

// src/components/HomePage/HeroSection
function HeroSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 ">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover innovative solutions and secure your digital world.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    );
  }
  
  export default HeroSection;