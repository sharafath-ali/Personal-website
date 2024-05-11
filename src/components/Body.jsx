import React from "react";
import Button from "@mui/material/Button";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DownloadIcon from "@mui/icons-material/Download";
import Profile from "../Assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import resumePDF from "../Assets/resume.pdf";

function Body() {
  const navigate = useNavigate();

  const goToProject = () => {
    navigate("/Projects");
  };

  return (
    <div
      className="h-dvh flex justify-between py-5 px-5 items-center bg-customGray"
      style={{ backgroundColor: "rgb(246, 245, 250)" }}
    >
      <div style={{ width: "50%" }} className="flex justify-end">
        <div className="border-y border-x border-70">
          <img className="border-x border-y rounded-full w-72" src={Profile} />
        </div>
      </div>
      <div style={{ width: "50%" }} className="flex justify-start">
        <div className="px-1">
          <Button
            variant="outlined"
            size="small"
            startIcon={<WorkOutlineIcon />}
            onClick={goToProject}
          >
            Projects
          </Button>
        </div>
        <div className="px-1">
          <a href={resumePDF} download="SHARAFATH ALI MAY CV.pdf">
            <Button variant="outlined" size="small" endIcon={<DownloadIcon />}>
              Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Body;
