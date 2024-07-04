import React from "react";
import "../Css/Resume.css";

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
            <p>September 2023 - Present (10 months)</p>
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
          {[
            "React.Js",
            "Node (Node Js)",
            "Express (Express Js)",
            "SHARE POINT FRAMEWORK",
            "JavaScript",
            "TypeScript",
            "Redux-Toolkit",
            "MongoDB",
            "Material-UI, Chakra-UI, React-Bootstrap",
            "Git",
            "Postman",
            "Azure Devops",
            "GitHub",
            "React Router",
            "Styled Components - Sass",
            "Microsoft Windows Series, Linux",
            "HTML, CSS",
            "Problem-Solving",
            "Strong Communication",
          ].map((skill) => (
            <div key={skill} className="skill-chip">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <button
          className="download-button"
          onClick={() => window.open("/path/to/resume.pdf")}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Resume;
