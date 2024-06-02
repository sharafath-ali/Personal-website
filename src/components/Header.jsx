import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Css/Header.css";

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1>Sharafath Ali</h1>
          <p>Associate Software Developer</p>
        </div>
        <nav className="header-right">
          <Link to="/" className={pathname === "/" ? "toblack" : ""}>
            ABOUT ME
          </Link>
          <Link
            to="/Resume"
            className={pathname === "/Resume" ? "toblack" : ""}
          >
            RESUME
          </Link>
          <Link
            to="/Projects"
            className={pathname === "/Projects" ? "toblack" : ""}
          >
            PROJECTS
          </Link>
          <Link
            to="/Contact"
            className={pathname === "/Contact" ? "toblack" : ""}
          >
            CONTACT
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
