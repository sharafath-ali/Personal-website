import React from "react";
import "../Css/Resume.css";
import resumePDF from "../Assets/resume.pdf";
import { SkillCategories } from "../consts/skills";
import { motion } from "framer-motion";

const categoryClass = {
  Frontend: "",
  Backend: "backend",
  "Cloud & AI": "cloud",
  "Testing & Tools": "tools",
  "Soft Skills": "soft",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

function Resume() {
  return (
    <div className="resume-page">
      <motion.div {...fadeUp(0)}>
        <h2>My Resume</h2>
        <p className="resume-subtitle">2.7+ years of hands-on experience across product companies — shipping real features that users rely on.</p>
      </motion.div>

      {/* EXPERIENCE */}
      <motion.div className="resume-section" {...fadeUp(0.15)}>
        <h3>💼 Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Senior Software Engineer</h4>
              <p className="company-name">Virginia Rehab Physicians · Richmond, VA (Remote)</p>
              <p className="employment-dates">Feb 2025 – Mar 2026</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Associate Software Engineer</h4>
              <p className="company-name">Global Infonet Inc · Kochi</p>
              <p className="employment-dates">Sept 2023 – Sept 2024</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Trainee Software Engineer</h4>
              <p className="company-name">Global Infonet Inc · Kochi</p>
              <p className="employment-dates">Mar 2023 – Aug 2023</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* EDUCATION */}
      <motion.div className="resume-section" {...fadeUp(0.25)}>
        <h3>🎓 Education</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="card">
              <h4 className="job-title">Master of Computer Applications (MCA)</h4>
              <p className="company-name">IGNOU — Pursuing</p>
              <p className="employment-dates">2025 – 2027</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card">
              <h4 className="job-title">Bachelor of Computer Applications (BCA)</h4>
              <p className="company-name">Jamia Hamdard University, Delhi</p>
              <p className="employment-dates">Graduated 2022</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <motion.div className="resume-section" {...fadeUp(0.35)}>
        <h3>🛠️ Skills</h3>
        {Object.entries(SkillCategories).map(([category, skills], catIdx) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + catIdx * 0.08 }}
          >
            <p className="skill-category-label">{category}</p>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.label}
                  className={`skill-chip ${categoryClass[category]}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + catIdx * 0.08 + i * 0.03 }}
                >
                  {skill.emoji} {skill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* DOWNLOAD */}
      <motion.div className="resume-section" {...fadeUp(0.5)}>
        <a href={resumePDF} download="Sharafath_Ali_Resume.pdf">
          <button className="download-button">📄 Download Resume</button>
        </a>
      </motion.div>
    </div>
  );
}

export default Resume;
