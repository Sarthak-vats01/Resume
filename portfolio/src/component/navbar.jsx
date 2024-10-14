import React, { useState } from "react";
import Orange from "../assets/Orange.png";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Resume.pdf";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="h-20 flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg justify-between items-center relative px-4 md:px-12">
      {/* Logo and Name */}
      <div
        className="flex items-center text-white font-mono font-bold text-lg md:text-2xl lg:text-3xl cursor-pointer transition-transform hover:scale-105"
        onClick={() => navigate("/homepage")}
      >
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-2"
          src={Orange}
          alt="Orange Dot"
        />
        Sarthak Vats
      </div>

      {/* Mobile Menu Toggle Button */}
      <div
        className="text-white text-3xl md:hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✖" : "☰"}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center text-white font-mono font-medium text-lg">
        <a
          className="hover:text-yellow-300 transition-colors duration-200 ease-in-out cursor-pointer"
          href={resume}
          download="Sarthak_Vats_Resume.pdf"
        >
          Resume
        </a>
        <span className="text-gray-300">|</span>
        <a
          className="hover:text-yellow-300 transition-colors duration-200 ease-in-out cursor-pointer"
          onClick={() => navigate("/")}
        >
          Projects
        </a>
        <span className="text-gray-300">|</span>
        <a
          className="hover:text-yellow-300 transition-colors duration-200 ease-in-out cursor-pointer"
          href="https://www.linkedin.com/in/sarthak-vats-793128226/"
        >
          LinkedIn
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center md:hidden z-10 py-4">
          <a
            className="p-2 text-gray-800 font-medium hover:text-amber-600 transition-colors cursor-pointer"
            href={resume}
            download="Sarthak_Vats_Resume.pdf"
          >
            Resume
          </a>
          <a
            className="p-2 text-gray-800 font-medium hover:text-amber-600 transition-colors cursor-pointer"
            onClick={() => {
              navigate("/projects");
              setMobileMenuOpen(false);
            }}
          >
            Projects
          </a>
          <a
            className="p-2 text-gray-800 font-medium hover:text-amber-600 transition-colors cursor-pointer"
            href="https://www.linkedin.com/in/sarthak-vats-793128226/"
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
