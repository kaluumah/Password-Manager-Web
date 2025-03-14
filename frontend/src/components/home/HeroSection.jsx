import React from "react";
import Navbar from "./../shared/Navbar"; // Adjust path as needed
import heroimage from "./../../assets/heroimage.png";

const HeroSection = () => {
  return (
    <section className=" ">
      <div>
        <Navbar /> {/* Navbar Component */}
      </div>

      <div class=" flex justify-center items-center mt-20">
        <button class="btn cube cube-hover">
          <div class="bg-top">
            <div class="bg-inner"></div>
          </div>
          <div class="bg-right">
            <div class="bg-inner"></div>
          </div>
          <div class="bg">
            <div class="bg-inner"></div>
          </div>
          <div class="text">MVP C 1.0 Release Coming Soon</div>
        </button>
      </div>

      <div className=" herotextdiv flex text-center text-white ">
        <h1 className=" herotext mt-15 font-semibold inline-block">
          The Future of{" "}
          <span className="text-yellow-300">Passwords Security</span>  is Here !
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
