import React from "react";
import "../Css/Resume.css";
function Resume() {
  return (
    <div className="resume-page">
      <h2>My Resume</h2>
      <div className="resume-section">
        <h3>Experience</h3>
        <div className="resume-cards">
          <div className="card">
            <h4>Associate Software Engineer</h4>
            <p>Global Infonet Inc, Kochi</p>
            <p>September 2023- Present (10 months)</p>
          </div>
          <div className="card">
            <h4>Associate Software Engineer trainee</h4>
            <p>Global Infonet Inc, Kochi</p>
            <p>March 2023 - September 2023 (5 months)</p>
          </div>
          {/* Add more experience cards as needed */}
        </div>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-cards">
          <div className="card">
            <h4>Bachelor of Computer Application</h4>
            <p>Jamia Hamdard University, Delhi</p>
            <p>Year of Graduation: 2022</p>
            <p></p>
          </div>
          <div className="card">
            <h4>12 th (Higher Secondary Education)</h4>
            <p>G.V.H.S. School, Kadirur, Kannur, Kerala</p>
            <p>Kerala State Board - 2017 - 2019</p>
            <p>Details about the grade...</p>
          </div>
          <div className="card">
            <h4>10 th (S S L C)</h4>
            <p>Kuthuparamba High School, Kannur, Kerala</p>
            <p>Kerala State Board - 2017</p>
            <p>Details about the grade...</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <div className="resume-cards">
          <div className="card">
            <h4>Programming Languages</h4>
            <p>JavaScript, Python, etc.</p>
          </div>
          <div className="card">
            <h4>Technologies</h4>
            <p>React, Node.js, MongoDB, etc.</p>
          </div>
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
