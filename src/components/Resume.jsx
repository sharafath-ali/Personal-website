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
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, delay, ease: "easeOut" },
});

function Resume() {
  return (
    <div className="resume-page">
      <motion.div {...fadeUp(0)}>
        <h2>Resume</h2>
        <p className="resume-subtitle">
          2.7+ years building scalable, production-grade features used by real
          users across product companies.
        </p>
      </motion.div>

      {/* EXPERIENCE */}
      <motion.div className="resume-section" {...fadeUp(0.15)}>
        <h3>💼 Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Senior Software Engineer</h4>
              <p className="company-name">
                Virginia Rehab Physicians · Richmond, VA (Remote)
              </p>
              <p className="employment-dates">Feb 2025 – Mar 2026</p>
              <p
                className="experience-desc"
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.5",
                }}
              >
                Built and optimized core workflows for an internal, multi-tenant
                healthcare SaaS product, including patient onboarding,
                admissions, insurance processing, and clinical data
                synchronization with EHR systems. Delivered AI-powered
                automation for OCR-based data extraction and notes-to-diagnosis
                mapping using Vertex AI, while ensuring system reliability
                through solid architecture, comprehensive testing, and
                performance optimizations.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Associate Software Engineer</h4>
              <p className="company-name">Global Infonet Inc · Kochi</p>
              <p className="employment-dates">Sept 2023 – Sept 2024</p>
              <ul
                className="experience-list"
                style={{
                  marginTop: "0.8rem",
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.5",
                  paddingLeft: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <li>
                  Led development of the Quick Link panel feature in Dock 365
                  CMS (v4.8), integrating 28 interactive panels for in-place
                  record viewing and editing, cutting page redirects and
                  navigation time by 40%.
                </li>
                <li>
                  Revamped responsive UI with React.js and SPFx (Fluent UI),
                  driving faster load times via code splitting, lazy loading,
                  and preventing unnecessary re-renders using memoization.
                </li>
                <li>
                  Optimized Node.js and Express.js backend services, reducing
                  API response times via Redis caching, MongoDB query
                  optimization (indexing & pagination), and smooth SharePoint
                  integration.
                </li>
                <li>
                  Resolved critical production issues and developed new features
                  requiring seamless database schema updates, authoring automated
                  client data migrations to ensure zero data loss and system
                  stability.
                </li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Trainee Software Engineer</h4>
              <p className="company-name">Global Infonet Inc · Kochi</p>
              <p className="employment-dates">Mar 2023 – Aug 2023</p>
              <p
                className="experience-desc"
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                }}
              >
                Worked on Dock 365 CMS, a web-based contract management system,
                contributing to both frontend and backend feature development
                and bug fixes. Worked under senior developers, gaining hands-on
                experience in development, debugging, coding standards, and
                Git-based version control within an agile team.
              </p>
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
              <h4 className="job-title">
                Master of Computer Applications (MCA)
              </h4>
              <p className="company-name">IGNOU — Pursuing</p>
              <p className="employment-dates">2025 – 2027</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card">
              <h4 className="job-title">
                Bachelor of Computer Applications (BCA)
              </h4>
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.35 + catIdx * 0.08 }}
          >
            <p className="skill-category-label">{category}</p>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.label}
                  className={`skill-chip ${categoryClass[category]}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + catIdx * 0.08 + i * 0.03,
                  }}
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
