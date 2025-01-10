import React from "react";
import Button from "@mui/material/Button";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DownloadIcon from "@mui/icons-material/Download";
import Profile from "../Assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import resumePDF from "../Assets/resume.pdf";
import "../Css/Body.css";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="description">
              👋 Hello! I'm Sharafath Ali -             A passionate Fullstack Web Developer with 1.6 years of experience specializing in the MERN stack.
              My journey into coding began unexpectedly after college when I discovered my love for web development during my time at Brototype. Initially unfamiliar with the world of web and mobile development, I quickly found my stride through self-learning and haven’t looked back since.
            </p>
          </motion.div>
          {/* <ul className="skills">
            <li>
              <strong>JavaScript, React, Node.js:</strong> Building dynamic web
              apps.
            </li>
            <li>
              <strong>MongoDB, Express.js:</strong> Handling data and server
              authentication.
            </li>
            <li>
              <strong>Git:</strong> Seamless version control and collaboration
            </li>
            <li>
              <strong>Familiar with:</strong> Linux, Deployment.
            </li>
          </ul> */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="portfolio">
              🌐{" "}
              <a
                href="https://github.com/sharafath-ali/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my GitHub
              </a>
              {" to dive into a world of code where creativity meets functionality. ✍️ For stories behind the code and valuable insights, "}
              <a
                href="https://sharafath.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                visit my Hashnode blog
              </a>
              {" and discover my journey, lessons learned, and tips for aspiring developers!"}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Body;
