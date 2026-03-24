import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function HeaderMenu({ active, onNav, links }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ padding: "6px 10px", fontSize: "13px", color: "var(--text-primary)" }}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
        PaperProps={{
          style: {
            background: "#12122a",
            border: "1px solid rgba(108,99,255,0.2)",
            borderRadius: "10px",
          },
        }}
      >
        {links.map(({ label, href }) => (
          <MenuItem
            key={href}
            onClick={(e) => { handleClose(); onNav(e, href); }}
            style={{
              color: active === href.replace("#", "") ? "var(--accent-primary)" : "var(--text-secondary)",
              fontFamily: "'Inter', 'Poppins', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
