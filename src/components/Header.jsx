import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Css/Header.css";
import { ViewportContext } from "../Context/ViewportContext";
import HeaderMenu from "./HeaderMenu";
import { motion } from "framer-motion";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const { isMobile } = useContext(ViewportContext);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header-left">
        <h1>Sharafath Ali</h1>
        <p>Associate Software Developer</p>
      </div>
      <nav className="header-right">
        {isMobile ? (
          <div className="dropdown">
            <HeaderMenu />
          </div>
        ) : (
          <>
            <Link to="/" className={pathname === "/" ? "toblack" : ""}>About Me</Link>
            <Link to="/Resume" className={pathname === "/Resume" ? "toblack" : ""}>Resume</Link>
            <Link to="/Projects" className={pathname === "/Projects" ? "toblack" : ""}>Projects</Link>
            <Link to="/Contact" className={pathname === "/Contact" ? "toblack" : ""}>Contact</Link>
          </>
        )}
      </nav>
    </motion.header>
  );
}

export default Header;
