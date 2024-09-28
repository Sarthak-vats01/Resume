import React from "react";
import Projects from "../component/Projects.jsx";
import Navbar from "../component/navbar.jsx";
function project() {
  return (
    <div>
      <Navbar />
      <div className="flex  justify-center">
        <Projects />
      </div>
    </div>
  );
}

export default project;
