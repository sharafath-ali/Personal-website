// src/components/Projects.js
import React from "react";
import "../Css/Project.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>HR-PORTAL App</h3>
          <ul>
            <li>
              HR portal app streamlines employee management with features for
              adding and updating employee information, uploading files and
              images, and managing descriptive notes for each employee. It
              ensures data accuracy, security, and a user-friendly experience
              for HR personnel.
            </li>
            <li>
              Built HR portal's front-end using React.js with Material UI for
              modern design and SASS for organized styling, delivering a
              reponsive user interface across devices.
            </li>
            <li>
              Express.js used for server-side, SharePoint as database. Secure
              APIs for HR functionalities, data integrity, and user privacy
              ensured.
            </li>
          </ul>
          <a
            href="https://github.com/sharafath-ali/node-react-HR-Portal"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Flim-flix App</h3>
          <ul>
            <li>
              Flim-flix is a responsive web application that provides
              comprehensive details about various films, powered by React, Sass,
              Material-UI, and the TMDB API
            </li>
          </ul>
          <a
            href="https://github.com/sharafath-ali/Flim-flix"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
