import React from "react";
import myImage from "../assets/My-Photo.jpg";
import { useNavigate } from "react-router-dom";

function Title() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-grow  p-8 ">
      <img
        className="mr-8 rounded-full w-96 h-96 object-cover filter grayscale"
        src={myImage}
        alt="my-photo"
      />
      <div className="flex flex-start flex-col">
        <h1 className="text-8xl font-bold">Hello</h1>
        <h3 className="text-xl font-semibold mt-8 ml-2">A Bit About Me</h3>
        <p className="mt-2 ml-2 leading-7 font-extralight  text-gray-800">
          I'm a full-stack developer proficient in MERN Stack, .NET, and <br />
          Angular, with a passion for building robust applications. I specialize
          <br />
          in creating seamless user experiences and secure, scalable backend
          <br />
          systems. Dedicated to delivering high-quality results for every
          project.
        </p>

        <div className="flex justify-between w-10/12 font-semibold mt-4">
          <div className="flex rounded-full w-32 h-32 border border-black justify-center items-center bg-yellow-500 hover:bg-inherit transition-colors duration-150 ease-in-out">
            Resume
          </div>
          <div
            className="flex rounded-full w-32 h-32 border border-black justify-center items-center bg-red-600 hover:bg-inherit transition-colors duration-150 ease-in-out"
            onClick={() => navigate("/projects")}
          >
            Projects
          </div>
          <div className="flex rounded-full w-32 h-32 border border-black justify-center items-center bg-blue-300 hover:bg-inherit transition-colors duration-150 ease-in-out">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
