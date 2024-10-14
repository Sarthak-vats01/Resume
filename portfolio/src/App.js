import Homepage from "./pages/homepage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Project from "./pages/project.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Project />} /> {/* Home route */}
        <Route path="/Homepage" element={<Homepage />} /> {/* About route */}
      </Routes>
    </Router>
  );
}
