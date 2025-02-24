import React from "react";
import Navbar from "./../shared/Navbar"; // Adjust path as needed

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center">
      <div>
        <Navbar /> {/* Navbar Component */}
      </div>
    </section>
  );
};

export default HeroSection;
