import React from "react";
import myImage from "../assets/My-Photo.jpg";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Resume.pdf";

function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-16 text-white">
      <img
        className="rounded-full w-48 h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
        src={myImage}
        alt="my-photo"
      />
      <div className="mt-10 text-center">
        <h1 className="text-6xl font-bold tracking-wider text-gold">Hello</h1>
        <h3 className="text-xl mt-4">A Bit About Me</h3>
        <p className="mt-4 text-lg max-w-lg leading-relaxed text-gray-300">
          I'm a full-stack developer proficient in MERN Stack, .NET, and
          Angular. I focus on creating seamless user experiences and secure,
          scalable backend systems.
        </p>
        <div className="flex space-x-6 mt-8">
          <a href={resume} download="Sarthak_Vats_Resume.pdf">
            <button className="rounded-full w-32 h-32 border-2 border-gold bg-transparent hover:bg-gold hover:text-white transition-all duration-300">
              Resume
            </button>
          </a>
          <button
            onClick={() => navigate("/projects")}
            className="rounded-full w-32 h-32 border-2 border-gold bg-transparent hover:bg-gold hover:text-white transition-all duration-300"
          >
            Projects
          </button>
          <button className="rounded-full w-32 h-32 border-2 border-gold bg-transparent hover:bg-gold hover:text-white transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;
