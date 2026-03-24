import React from "react";
import Profile from "../Assets/profile.jpg";
import resumePDF from "../Assets/resume.pdf";
import "../Css/Body.css";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

function Body() {
  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="body-container">
      <div className="profile-card">

        {/* Avatar */}
        <motion.div
          className="avatar-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="avatar-ring">
            <img src={Profile} alt="Sharafath Ali" className="profile-pic" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="profile-info">
          <motion.p className="hero-greeting" {...fadeUp(0.1)}>
            👋 Welcome to my portfolio
          </motion.p>

          <motion.h1 className="hero-name" {...fadeUp(0.2)}>
            Sharafath Ali
          </motion.h1>

          <motion.p className="hero-role" {...fadeUp(0.3)}>
            Senior Software Engineer · Full-Stack · TypeScript · React · Node.js
          </motion.p>

          <motion.p className="description" {...fadeUp(0.4)}>
            Full-Stack Software Engineer with <strong style={{color:'var(--accent-primary)'}}>2.7+ years of experience</strong> building
            scalable web applications, integrating AI capabilities, and owning
            products end-to-end — from architecture to deployment.
          </motion.p>

          {/* Social links */}
          <motion.div className="social-links" {...fadeUp(0.5)}>
            <a href="https://github.com/sharafath-ali/" target="_blank" rel="noopener noreferrer" className="social-pill">🐙 GitHub</a>
            <a href="https://sharafath.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="social-pill">✍️ Hashnode Blog</a>
            <a href="https://www.linkedin.com/in/sharafathalivk" target="_blank" rel="noopener noreferrer" className="social-pill">💼 LinkedIn</a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="buttons" {...fadeUp(0.6)}>
            <button className="btn-primary" onClick={scrollToProjects}>
              🚀 View Projects
            </button>
            <a href={resumePDF} download="Sharafath_Ali_Resume.pdf" className="custom-link">
              <button className="btn-outline">📄 Download Resume</button>
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Body;
