import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Css/Header.css";
import { ViewportContext } from "../Context/ViewportContext";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const { isMobile } = useContext(ViewportContext);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1>Sharafath Ali</h1>
          <p>Associate Software Developer</p>
        </div>
        <nav className="header-right">
          {isMobile ? (
            <div className="dropdown">
              <button onClick={toggleDropdown}>Menu</button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/"
                    onClick={toggleDropdown}
                    className={pathname === "/" ? "toblack" : ""}
                  >
                    ABOUT ME
                  </Link>
                  <Link
                    to="/Resume"
                    onClick={toggleDropdown}
                    className={pathname === "/Resume" ? "toblack" : ""}
                  >
                    RESUME
                  </Link>
                  <Link
                    to="/Projects"
                    onClick={toggleDropdown}
                    className={pathname === "/Projects" ? "toblack" : ""}
                  >
                    PROJECTS
                  </Link>
                  <Link
                    to="/Contact"
                    onClick={toggleDropdown}
                    className={pathname === "/Contact" ? "toblack" : ""}
                  >
                    CONTACT
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
