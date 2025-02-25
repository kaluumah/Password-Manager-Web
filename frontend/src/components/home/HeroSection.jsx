import React from "react";
import Navbar from "./../shared/Navbar"; // Adjust path as needed

const HeroSection = () => {
  return (
    <section className=" ">
      <div>
        <Navbar /> {/* Navbar Component */}
      </div>
      <div className=" mvpreleasenotif flex justify-center items-center align-middle text-white gap-5  ">
        <span className="justify-center items-center bg-purple-800 mt-3 border border-gray-300 rounded-lg ">MVP C 1.0 Release</span>
      </div>
    </section>
  );
};

export default HeroSection;
