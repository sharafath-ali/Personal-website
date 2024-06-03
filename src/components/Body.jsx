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
    <div className="body-container">
      <div className="profile-card">
        <img src={Profile} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <p className="description">
            MERN stack web developer with 1.5 years of experience, BCA from
            Jamia Hamdard, Delhi.
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
