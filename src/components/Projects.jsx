import React from "react";
import "../Css/Project.css";
import ProjectCards from "./ProjectCards";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-page" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Projects</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProjectCards />
      </motion.div>
    </div>
  );
};

export default Projects;