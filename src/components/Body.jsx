import React from "react";
import Button from "@mui/material/Button";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DownloadIcon from "@mui/icons-material/Download";
import Profile from "../Assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import resumePDF from "../Assets/resume.pdf";
import "../Css/Body.css";

function Body() {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate("/Projects");
  };

  return (
    <div
      className="body-container"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="profile-card">
        <img src={Profile} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <p className="description">
            👋 Hello! I'm Sharafath Ali, a passionate Fullstack JavaScript
            developer specializing in the MERN stack. I love building dynamic
            web applications using modern technologies.
          </p>
          <ul className="skills">
            <li>
              <strong>JavaScript, React, Node.js:</strong> Creating interactive
              web applications.
            </li>
            <li>
              <strong>MongoDB, Express.js:</strong> Handling data and server
              authentication.
            </li>
            <li>
              <strong>Git:</strong> Version control and team collaboration.
            </li>
            <li>
              <strong>Familiar with:</strong> Linux, Deployment
            </li>
          </ul>
          <p className="portfolio">
            🌐{" "}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            : Check out my work on GitHub to see my coding style and projects.
          </p>
          <div className="buttons">
            <Button
              variant="contained"
              size="medium"
              startIcon={<WorkOutlineIcon />}
              onClick={goToProject}
              className="custom-button"
            >
              Projects
            </Button>
            <a
              href={resumePDF}
              download="SHARAFATH ALI MAY CV.pdf"
              className="custom-link"
            >
              <Button
                variant="contained"
                size="medium"
                endIcon={<DownloadIcon />}
                className="custom-button"
              >
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
