import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { pathname } = useLocation();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ padding: "6px 10px", fontSize: "13px" }} 
      >
        Explore
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" className={pathname === "/" ? "toblack" : ""}>
            ABOUT ME
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/Resume"
            className={pathname === "/Resume" ? "toblack" : ""}
          >
            RESUME
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/Projects"
            className={pathname === "/Projects" ? "toblack" : ""}
          >
            PROJECTS
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link
            to="/Contact"
            className={pathname === "/Contact" ? "toblack" : ""}
          >
            CONTACT
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
