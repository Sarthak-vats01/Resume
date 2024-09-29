import React from "react";
import Orange from "../assets/Orange.png";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Resume.pdf"; // Correctly import the resume PDF

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="h-20 flex bg-white shadow-lg justify-between items-center">
      <h1
        className="ml-12 flex items-center font-mono font-bold text-3xl cursor-pointer hover:text-amber-700"
        onClick={() => navigate("/")}
      >
        <img className="size-16" src={Orange} alt="Orange Dot" />
        Sarthak Vats
        <span className="font-extralight text-base ml-2 text-amber-700">
          SDE
        </span>
      </h1>
      <div className="mr-16 flex justify-between items-center space-x-3 font-extralight text-base text-gray-600">
        <a
          className="hover:text-amber-700 cursor-pointer"
          href={resume} // Use the imported resume path
          download="Sarthak_Vats_Resume.pdf" // Name of the downloaded file
        >
          Resume
        </a>
        <span>|</span>
        <a
          className="hover:text-amber-700 cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          Projects
        </a>
        <span>|</span>
        <a
          className="hover:text-amber-700 cursor-pointer"
          href="https://www.linkedin.com/in/sarthak-vats-793128226/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Navbar;
