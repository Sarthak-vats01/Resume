import React from "react";
import Netflix from "../assets/Netflix.png";
import Pokedex from "../assets/Pokedex.png";
import MyShop from "../assets/MyShop.png";

function Projects() {
  return (
    <div className="flex flex-col w-9/12 mx-auto mt-28 space-y-12 ">
      <h1 className="font-mono font-bold text-4xl mb-10">Projects</h1>

      {/* Pokedex Project */}
      <div
        className="flex flex-col md:flex-row md:items-center md:space-x-6 border p-6 rounded-lg shadow-lg hover:bg-slate-500 hover:cursor-pointer"
        onClick={() =>
          (window.location.href = "https://pokedex-03oi.onrender.com")
        }
      >
        <div className="md:w-1/2 hover:text-white">
          <h2 className="font-semibold text-xl mb-4">Pokedex</h2>
          <p>
            A Pokedex built using React and Redux, fetching Pokémon data from an
            API. Users can filter and mark Pokémon as captured or not.
          </p>
        </div>
        <img
          className="mt-4 md:mt-0 md:w-1/2 w-full h-auto rounded-lg shadow hover:border hover:border-white"
          src={Pokedex}
          alt="Pokedex Project"
        />
      </div>
      {/* Netflix Clone */}
      <div
        className="flex flex-col md:flex-row md:items-center md:space-x-6 border p-6 rounded-lg shadow-lg hover:bg-slate-500 hover:cursor-pointer"
        onClick={() =>
          (window.location.href = "https://netflix-client-e66s.onrender.com")
        }
      >
        <img
          className="mt-4 md:mt-0 md:w-1/2 w-full h-auto rounded-lg shadow hover:border hover:border-white"
          src={Netflix}
          alt="Netflix Clone"
        />
        <div className="md:w-1/2 hover:text-white">
          <h2 className="font-semibold text-xl mb-4">Netflix - Clone</h2>
          <p>
            This is a clone of the Netflix user interface built using React. It
            includes movie listings, filtering options, and a functional login
            system.
          </p>
        </div>
      </div>
      {/* E-Commerce Project */}
      <div
        className="flex flex-col md:flex-row md:items-center md:space-x-6 border p-6 rounded-lg shadow-lg hover:bg-slate-500 hover:cursor-pointer"
        onClick={() =>
          (window.location.href = "https://my-shop-client.onrender.com")
        }
      >
        <div className="md:w-1/2 hover:text-white">
          <h2 className="font-semibold text-xl mb-4">E-Commerce Website</h2>
          <p>
            An E-commerce platform where users can browse, add products to the
            cart, and place orders. Built with the MERN stack and features user
            authentication and payment processing.
          </p>
        </div>
        <img
          className="mt-4 md:mt-0 md:w-1/2 w-full h-auto rounded-lg shadow hover:border hover:border-white"
          src={MyShop}
          alt="E-Commerce Project"
        />
      </div>
    </div>
  );
}

export default Projects;
