import React from "react";
import gitHub from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import "../Css/Footer.css";

function Footer() {
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
            <img src={linkedin} />
          </a>
          <a
            href="https://www.linkedin.com/in/sharafathalivk"
            target="_blank"
            rel="noopener noreferrer"
            className="friend-logo"
          >
            <img src={instagram} />
          </a>
          <a
            href="https://github.com/sharafath-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="friend-logo"
          >
            <img src={gitHub} className="w-13" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
