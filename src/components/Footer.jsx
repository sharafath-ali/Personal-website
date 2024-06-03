import React, { useContext } from "react";
import gitHub from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import "../Css/Footer.css";
import { ViewportContext } from "../Context/ViewportContext";

function Footer() {
  const { isMobile } = useContext(ViewportContext);

  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <p>© 2024 by Sharafath Ali</p>
        </div>
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/sharafathalivk"
            target="_blank"
            rel="noopener noreferrer"
            className="friend-logo"
          >
            <img src={linkedin} className={isMobile ? "w-7 mx-1" : "w-13"} />
          </a>
          <a
            href="https://www.linkedin.com/in/sharafathalivk"
            target="_blank"
            rel="noopener noreferrer"
            className="friend-logo"
          >
            <img src={instagram} className={isMobile ? "w-7  mx-1" : "w-13"} />
          </a>
          <a
            href="https://github.com/sharafath-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="friend-logo"
          >
            <img src={gitHub} className={isMobile ? "w-7  mx-1" : "w-13"} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
