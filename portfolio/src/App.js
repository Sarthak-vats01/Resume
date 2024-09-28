import Homepage from "./pages/homepage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/project.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Home route */}
        <Route path="/projects" element={<Project />} /> {/* About route */}
      </Routes>
    </Router>
  );
}
