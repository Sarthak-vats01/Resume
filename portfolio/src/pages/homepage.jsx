import React from "react";
import Navbar from "../component/navbar.jsx";
import Title from "../component/Title.jsx";

function Homepage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Title />
    </div>
  );
}

export default Homepage;
