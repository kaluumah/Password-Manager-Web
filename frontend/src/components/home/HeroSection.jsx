import React from "react";
import Navbar from "./../shared/Navbar"; // Adjust path as needed
import heroimage from "./../../assets/heroimage.png";

const HeroSection = () => {
  return (
    <section className=" ">
      <div>
        <Navbar /> {/* Navbar Component */}
      </div>

      <div class="flex justify-center items-center mt-10">
        <button class="mvpreleasenotif items-center bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          MVP C 1.0 Release Coming Soon
        </button>
      </div>

      <div className=" herotextdiv flex text-center text-white ">
        <h1 className=" herotext mt-15 font-semibold inline-block">
          The Future of{" "}
          <span className="text-yellow-300">Password Security</span> is Here !
        </h1>
      </div>
      <div className=" flex items-center justify-center p-4 mt-20 ">
      <div className="border rounded-lg ">
      <img src={heroimage} className="w-300 " />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
