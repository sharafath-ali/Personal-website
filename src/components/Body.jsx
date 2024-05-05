import React from "react";
import Button from "@mui/material/Button";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DownloadIcon from "@mui/icons-material/Download";
import Profile from "../Assets/profile.jpg";

function Body() {
  return (
    <div className="flex justify-between py-5 px-5 items-center bg-neutral-300">
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
          >
            Projects
          </Button>
        </div>
        <div className="px-1">
          <Button variant="outlined" size="small" endIcon={<DownloadIcon />}>
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Body;
