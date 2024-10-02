import React from "react";
import "../Css/Resume.css";
import resumePDF from "../Assets/resume.pdf";

function Resume() {
  return (
    <div
      className="resume-page"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2>My Resume</h2>
      <div className="resume-section">
        <h3>Experience</h3>
        <div className="resume-cards">
          <div className="card">
            <h4>Associate Software Engineer</h4>
            <p>Global Infonet Inc, Kochi</p>
            <p>September 2023 - October 2024 (1 year and 1 month)</p>
          </div>
          <div className="card">
            <h4>Associate Software Engineer Trainee</h4>
            <p>Global Infonet Inc, Kochi</p>
            <p>March 2023 - September 2023 (5 months)</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-cards">
          <div className="card">
            <h4>Bachelor of Computer Application</h4>
            <p>Jamia Hamdard University, Delhi</p>
            <p>Year of Graduation: 2022</p>
          </div>
          <div className="card">
            <h4>12th (Higher Secondary Education)</h4>
            <p>G.V.H.S. School, Kadirur, Kannur, Kerala</p>
            <p>Kerala State Board - 2017 - 2019</p>
          </div>
          <div className="card">
            <h4>10th (SSLC)</h4>
            <p>Kuthuparamba High School, Kannur, Kerala</p>
            <p>Kerala State Board - 2017</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          {["React.Js",
            "Node (Node Js)",
            "Express (Express Js)",
            "JavaScript",
            "TypeScript",
            "MongoDB",
            "Mongoose",
            "Git",
            "Postman",
            "Redux-Toolkit",
            "jsonwebtoken (JWT-based authentication)",
            "bcrypt (Secure password hashing)",
            "REST APIs",
            "Model–View–Controller (MVC)",
            "Azure DevOps",
            "Socket.IO",
            "SHARE POINT FRAMEWORK",
            "Server-Side Rendering (SSR) with EJS",
            "GitHub",
            "React Router",
            "Material-UI, Chakra-UI, React-Bootstrap",
            "Styled Components - Sass",
            "Microsoft Windows Series, Linux",
            "HTML, CSS",
            "Problem-Solving",
            "Strong Communication"].map((skill) => (
            <div key={skill} className="skill-chip">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <a href={resumePDF} download="SHARAFATH ALI MAY CV.pdf">
          <button className="download-button">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
