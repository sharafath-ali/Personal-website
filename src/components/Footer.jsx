import React, { useContext } from "react";
import gitHub from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import "../Css/Footer.css";
import { ViewportContext } from "../Context/ViewportContext";

function Footer() {
  const { isMobile } = useContext(ViewportContext);

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2025 All rights reserved · Made with ❤️ by Sharafath Ali</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.linkedin.com/in/sharafathalivk"
          target="_blank"
          rel="noopener noreferrer"
          className="friend-logo"
          title="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="friend-logo"
          title="Instagram"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://github.com/sharafath-ali"
          target="_blank"
          rel="noopener noreferrer"
          className="friend-logo"
          title="GitHub"
        >
          <img src={gitHub} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
