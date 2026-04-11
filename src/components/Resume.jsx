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
              <ul
                className="experience-desc"
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.5",
                  paddingLeft: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem"
                }}
              >
                <li>Designed and implemented an AI-powered OCR patient onboarding feature for Codona, a healthcare SaaS platform, using Vertex AI to extract patient, admission, and insurance data from PDF facesheets, automating form population and mapping data to internal records, reducing manual entry time and improving onboarding speed and data accuracy.</li>
                <li>Redesigned and implemented end-to-end patient, admission, and insurance workflows by consolidating scattered routes into a unified flow, ensuring consistent data synchronization with Codana and AdvancedMD (EHR) and enabling safe, reversible operations.</li>
                <li>Implemented an AI-powered notes-to-diagnosis feature using Vertex AI to convert clinical notes into ICD-10 codes with automatic primary diagnosis identification, reducing manual ICD-10 search and mapping effort.</li>
                <li>Developed and maintained a scalable multi-tenant backend using Express.js and PostgreSQL, ensuring secure client-level data separation and seamless client onboarding.</li>
                <li>Implemented an audit logging feature to track all user actions, making activity visible through an audit interface and improving traceability to meet HIPAA audit requirements.</li>
                <li>Migrated the frontend from JavaScript to TypeScript and from deprecated Create React App (CRA) to Vite, improving type safety, build performance, and maintainability.</li>
                <li>Established a comprehensive automated testing setup by implementing E2E tests (Playwright), backend unit and integration tests (Jest, Supertest with database validation), and frontend tests (React Testing Library), achieving near 100% coverage and integrating all tests into the CI/CD pipeline to ensure reliable builds and prevent regressions.</li>
                <li>Refactored the frontend application and redesigned the UI using Tailwind CSS, introducing reusable components and shared utility functions to reduce code duplication, bundle size, and initial load time.</li>
                <li>Led feature development and release cycles during the tech lead's absence, managing code reviews, pull request merges, and deployments to ensure uninterrupted releases and system stability.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Associate Software Engineer</h4>
              <p className="company-name">Global Infonet Inc · Kochi</p>
              <p className="employment-dates">Sept 2023 – Oct 2024</p>
              <ul
                className="experience-desc"
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.5",
                  paddingLeft: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem"
                }}
              >
                <li>Led the development of Quick Link panel feature in Dock 365 CMS (v4.8), integrating 28 interactive panels to enable in-place viewing and editing of related records, reducing page redirects by 40% and reducing navigation time by 40%.</li>
                <li>Revamped responsive UI with React.js + SPFx (Fluent UI), reducing initial load time through code splitting, lazy loading, and reusable components, while minimizing unnecessary re-renders using memoization.</li>
                <li>Built and optimized backend services using Node.js and Express.js, reduced API response time through Redis caching and MongoDB query optimization (indexing, pagination), and integrated SharePoint for document management.</li>
                <li>Resolved critical production issues and developed features involving database schema changes, implementing safe data migrations to ensure no client data loss and maintain system stability.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item">
            <div className="card experience-card">
              <h4 className="job-title">Trainee Software Engineer</h4>
              <p className="company-name">Global Infonet Inc · Kochi</p>
              <p className="employment-dates">Mar 2023 – Aug 2023</p>
              <ul
                className="experience-desc"
                style={{
                  marginTop: "0.6rem",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.5",
                  paddingLeft: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem"
                }}
              >
                <li>Worked on Dock 365 CMS, a web-based contract management system, contributing to both frontend and backend feature development and bug fixes.</li>
                <li>Worked under senior developers, gaining hands-on experience in development, debugging, coding standards, and Git-based version control within an agile team.</li>
              </ul>
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
                  {skill.icon && (
                    <skill.icon
                      style={{
                        color: skill.color ?? "var(--accent-primary)",
                        flexShrink: 0,
                        fontSize: "1.05em",
                      }}
                    />
                  )}
                  {skill.label}
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
