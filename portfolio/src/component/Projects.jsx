import React from "react";
import Netflix from "../assets/Netflix.png";
import Pokedex from "../assets/Pokedex.png";
import MyShop from "../assets/MyShop.png";

function Projects() {
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-16 md:mt-24 space-y-12">
      <h1 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-10 text-gray-800">
        My Projects
      </h1>

      {/* Notification about server delay */}
      <div className="bg-yellow-100 text-yellow-800 border border-yellow-200 rounded-lg p-4 text-center shadow-lg">
        <p>
          Please note: The backend servers are hosted on a free service, which
          might take a few seconds to start. Thank you for your patience!
        </p>
      </div>

      {/* Pokedex Project */}
      <div
        className="flex flex-col md:flex-row md:items-center md:space-x-6 border border-gray-200 rounded-lg p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
        onClick={() =>
          (window.location.href = "https://pokedex-03oi.onrender.com")
        }
      >
        <div className="md:w-1/2 text-gray-700 hover:text-white transition-colors duration-300">
          <h2 className="font-semibold text-2xl mb-4">Pokedex</h2>
          <p className="leading-relaxed">
            A Pokedex built using React and Redux, fetching Pokémon data from an
            API. Users can filter and mark Pokémon as captured or not.
          </p>
        </div>
        <img
          className="mt-4 md:mt-0 md:w-1/2 w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          src={Pokedex}
          alt="Pokedex Project"
        />
      </div>

      {/* Netflix Clone */}
      <div
        className="flex flex-col md:flex-row-reverse md:items-center md:space-x-6 border border-gray-200 rounded-lg p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
        onClick={() =>
          (window.location.href = "https://netflix-client-e66s.onrender.com")
        }
      >
        <img
          className="mt-4 md:mt-0 md:w-1/2 w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          src={Netflix}
          alt="Netflix Clone"
        />
        <div className="md:w-1/2 text-gray-700 hover:text-white transition-colors duration-300">
          <h2 className="font-semibold text-2xl mb-4">Netflix Clone</h2>
          <p className="leading-relaxed">
            This is a clone of the Netflix user interface built using React. It
            includes movie listings, filtering options, and a functional login
            system.
          </p>
        </div>
      </div>

      {/* E-Commerce Project */}
      <div
        className="flex flex-col md:flex-row md:items-center md:space-x-6 border border-gray-200 rounded-lg p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
        onClick={() =>
          (window.location.href = "https://my-shop-client.onrender.com")
        }
      >
        <div className="md:w-1/2 text-gray-700 hover:text-white transition-colors duration-300">
          <h2 className="font-semibold text-2xl mb-4">E-Commerce Website</h2>
          <p className="leading-relaxed">
            An E-commerce platform where users can browse, add products to the
            cart, and place orders. Built with the MERN stack and features user
            authentication and payment processing.
          </p>
        </div>
        <img
          className="mt-4 md:mt-0 md:w-1/2 w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          src={MyShop}
          alt="E-Commerce Project"
        />
      </div>
    </div>
  );
}

export default Projects;
