import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../../assets/logo.svg";

// src/components/HomePage/HeroSection
function HeroSection() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
  return (
    <section className="flex justify-center items-center  w-full">
      <div className="py-10 container mx-auto">
        <nav className={`fixed top-3  flex justify-center items-center shadow-lg  px-15 py-3 transition-all duration-300 
          ${scrolling ? " backdrop-blur-md shadow-lg" : "bg-transparent"}`} >
          
          <div className="leftnavlogoside flex items-center mr-40 cursor-pointer">
            <img src={logo} className="w-13 h-13" />
            <span className="text-white text-2xl">CycleCipher</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex  items-center space-x-20 ">
            {["About", "Features", "Integrations", "Pricing", "Blog"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="navlinks relative text-gray-300 hover:text-white transition duration-300 
                         before:absolute before:inset-0 before:bg-purple-800 before:opacity-0 before:rounded-md 
                         before:transition-all before:duration-300 before:scale-0 
                         hover:before:opacity-40 hover:before:scale-100 px-4 py-2 hover:underline"
                >
                  {item}
                </a>
              )
            )}
            <button className="navbarbutton bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer ">
              Join Waitlist
            </button>

      

            
          </div>
        </nav>
      </div>
    </section>
  );
}

export default HeroSection;
