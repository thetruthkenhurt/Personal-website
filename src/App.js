import React from "react";
import './index.css'; // Ensure this is imported to apply TailwindCSS
import Navbar from './Navbar';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
