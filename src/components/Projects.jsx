import React from "react";
import "../Css/Project.css";

function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Project Title 1</h3>
          <p>Project Description...</p>
        </div>
        <div className="project-card">
          <h3>Project Title 2</h3>
          <p>Project Description...</p>
        </div>
        <div className="project-card">
          <h3>Project Title 3</h3>
          <p>Project Description...</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
}

export default Projects;
