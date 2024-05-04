import React from "react";
import Button from "@mui/material/Button";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DownloadIcon from "@mui/icons-material/Download";

function Body() {
  return (
    <div className="flex justify-between">
      <div style={{ width: "50%" }} className="flex">
        <div>
            
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <Button variant="outlined" size="small" startIcon={<WorkOutlineIcon />}>
          Projects
        </Button>
        <Button variant="outlined" size="small" endIcon={<DownloadIcon />}>
          Resume
        </Button>
      </div>
    </div>
  );
}

export default Body;
