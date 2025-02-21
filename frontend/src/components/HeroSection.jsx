import React from "react";
import ProjectLogo from "../assets/logo.svg";

const HeroSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
     <img src={ProjectLogo} className="w-50 h-50" />
      <h1 className="text-white">hello</h1>
      <div><h1 className="text-green-600">hello2</h1></div>
    </div>
  );
};

export default HeroSection;
