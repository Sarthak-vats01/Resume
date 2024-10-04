import myImage from "../assets/My-Photo.jpg";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Resume.pdf"; // Correctly import the resume PDF

function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex-col md:flex-row lg:flex-row flex justify-center items-center flex-grow p-8 bg-gradient-to-b from-blue-50 to-indigo-200">
      <img
        className="mr-8 rounded-full w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        src={myImage}
        alt="my-photo"
      />
      <div className="flex flex-start flex-col items-center md:items-start">
        {/* Stylish heading with gradient text and drop shadow */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-extrabold drop-shadow-lg">
          Hello
        </h1>

        {/* Subheading with a nice italic style */}

        {/* Body text with slight spacing, new font weight, and color */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 ml-2 leading-7 font-sans font-light text-gray-700 text-center md:text-left">
          I'm a{" "}
          <span className="font-semibold text-indigo-600">
            full-stack developer
          </span>{" "}
          proficient in <span className="font-semibold">MERN Stack</span>,{" "}
          <br />
          <span className="font-semibold">.NET</span>, and{" "}
          <span className="font-semibold">Angular</span>, with a passion for
          building robust applications. <br />
          I specialize in creating seamless user experiences and secure,
          scalable <br />
          backend systems. Dedicated to delivering high-quality results for
          every project.
        </p>

        {/* Action buttons with hover effects and subtle scaling */}
        <div className="flex justify-between w-full md:w-10/12 font-mono font-semibold mt-6 space-x-4">
          {/* Resume download button */}
          <a
            className="flex rounded-full w-32 h-32 border-2 border-transparent shadow-md justify-center items-center bg-yellow-500 text-white hover:bg-yellow-400 hover:scale-105 transition-transform duration-200 ease-in-out"
            href={resume} // Correctly linking to the resume file
            download="Sarthak_Vats_Resume.pdf"
          >
            Resume
          </a>

          {/* Navigate to Projects button */}
          <button
            className="flex rounded-full w-32 h-32 border-2 border-transparent shadow-md justify-center items-center bg-red-600 text-white hover:bg-red-500 hover:scale-105 transition-transform duration-200 ease-in-out"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>

          {/* Contact button */}
          <button className="flex rounded-full w-32 h-32 border-2 border-transparent shadow-md justify-center items-center bg-blue-500 text-white hover:bg-blue-400 hover:scale-105 transition-transform duration-200 ease-in-out">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;
