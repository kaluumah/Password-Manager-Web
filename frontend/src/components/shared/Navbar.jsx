import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../../assets/logo.svg";

function HeroSection() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="flex justify-center items-center  w-full">
      <div className="py-10 container mx-auto">
        <nav
          className={`fixed top-5  flex justify-center items-center shadow-lg  px-10 py-3 transition-all duration-300 
          ${scrolling ? " backdrop-blur-md shadow-lg" : "bg-transparent"}`}
        >
          {/* Logo & Mobile Menu Button (side by side) */}
          <div className="flex items-center space-x-4">
            <img src={logo} className="w-13 h-13" alt="CycleCipher Logo" />
            <span className="text-white text-2xl">CycleCipher</span>

            {/* Mobile Menu Button - Only show on mobile */}
            <button
              className="text-white text-2xl md:hidden ml-4"
              onClick={toggleMobileMenu}
            >
              <FaBars />
            </button>
          </div>

          {/* Desktop Navigation Links (only show on md and above) */}
          <div className="hidden md:flex items-center space-x-20">
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
            <button className="navbarbutton bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer">
              Join Waitlist
            </button>
          </div>
        </nav>

        {/* Mobile Slide-In Menu (only visible on mobile when open) */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden"
              onClick={toggleMobileMenu}
            ></div>
            <div
              className="fixed top-0 right-0 h-full w-64 bg-purple-900 z-50 transform transition-transform duration-300
                         md:hidden translate-x-0"
            >
              <div className="p-5">
                <button
                  className="text-white text-2xl mb-5"
                  onClick={toggleMobileMenu}
                >
                  <FaTimes />
                </button>
                <ul className="space-y-4">
                  {["About", "Features", "Integrations", "Pricing", "Blog"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="block text-white text-lg"
                          onClick={toggleMobileMenu} // Close after clicking
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                  <li>
                    <button className="w-full bg-purple-700 text-white px-4 py-2 rounded-lg">
                      Join Waitlist
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
