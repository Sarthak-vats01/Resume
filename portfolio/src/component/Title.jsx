import myImage from "../assets/My-Photo.jpg";
import { useNavigate } from "react-router-dom";
import resume from "../assets/Resume.pdf"; // Correctly import the resume PDF

function Title() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-grow p-8">
      <img
        className="mr-8 rounded-full w-96 h-96 object-cover filter grayscale"
        src={myImage}
        alt="my-photo"
      />
      <div className="flex flex-start flex-col">
        <h1 className="text-8xl font-mono font-bold">Hello</h1>
        <h3 className="text-xl font-mono font-semibold mt-8 ml-2">
          A Bit About Me
        </h3>
        <p className="mt-2 ml-2 leading-7 font-mono font-extralight text-gray-800">
          I'm a full-stack developer proficient in MERN Stack, .NET, and <br />
          Angular, with a passion for building robust applications. I specialize
          <br />
          in creating seamless user experiences and secure, scalable backend
          <br />
          systems. Dedicated to delivering high-quality results for every
          project.
        </p>

        <div className="flex justify-between w-10/12 font-mono font-semibold mt-4">
          {/* Resume download button */}
          <a
            className="flex rounded-full w-32 h-32 border border-black justify-center items-center bg-yellow-500 hover:bg-inherit transition-colors duration-150 ease-in-out"
            href={resume} // Correctly linking to the resume file
            download="Sarthak_Vats_Resume.pdf"
          >
            Resume
          </a>

          {/* Navigate to Projects */}
          <button
            className="flex rounded-full w-32 h-32 border border-black justify-center items-center bg-red-600 hover:bg-inherit transition-colors duration-150 ease-in-out"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>

          {/* Contact button (could be improved by linking to a contact section) */}
          <button className="flex rounded-full w-32 h-32 border border-black justify-center items-center bg-blue-300 hover:bg-inherit transition-colors duration-150 ease-in-out">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;
