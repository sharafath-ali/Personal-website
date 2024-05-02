import React from "react";
import gitHub from "../Assets/github.png";
import instagram from "../Assets/instagram.png";
import linkedin from "../Assets/linkedin.png";
import "../App.css";

function Footer() {
  return (
    <div className="flex justify-between  bg-stone-500 p-5 items-center">
      <div>© 2024 by Sharafath Ali</div>
      <div>
        <h5 className="text-center font-mono from-neutral-700 font-black px-4 py-2">
          Follow
        </h5>
        <div className="flex justify-between w-60">
          <a
            href="https://www.linkedin.com/in/sharafathalivk"
            target="_blank"
            rel="noopener noreferrer"
            className="friend-logo"
          >
            <img src={instagram} />
          </a>
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
            <img src={gitHub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
