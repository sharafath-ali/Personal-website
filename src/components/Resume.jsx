import React from "react";
import "../Css/Resume.css";
import resumePDF from "../Assets/resume.pdf";
import { Skills } from "../consts/skills";

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
          <div className="card experience-card">
            <h4 className="job-title">Associate Software Engineer</h4>
            <p className="company-name">Global Infonet Inc, Kochi</p>
            <p className="employment-dates">Sept 2023 - Oct 2024</p>
            <p className="employment-duration">(1 yr 1 mo)</p>
          </div>
          <div className="card experience-card">
            <h4 className="job-title">Associate Software Engineer Trainee</h4>
            <p className="company-name">Global Infonet Inc, Kochi</p>
            <p className="employment-dates">Mar 2023 - Sept 2023</p>
            <p className="employment-duration">(5 mo)</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-cards">
          <div className="card">
            <h4 className="job-title">Bachelor of Computer Application</h4>
            <p className="company-name">Jamia Hamdard University, Delhi</p>
            <p className="employment-dates">Year of Graduation: 2022</p>
          </div>
          <div className="card">
            <h4 className="job-title">12th (Higher Secondary Education)</h4>
            <p className="company-name">G.V.H.S. School, Kadirur, Kannur, Kerala</p>
            <p className="employment-dates">Kerala State Board - 2017 to 2019</p>
          </div>
          <div className="card">
            <h4 className="job-title">10th (SSLC)</h4>
            <p className="company-name">Kuthuparamba High School, Kannur, Kerala</p>
            <p className="employment-dates">Kerala State Board - 2017</p>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          {Skills.map((skill) => (
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

