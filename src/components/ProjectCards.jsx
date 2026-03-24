import React from 'react';
import "../Css/Project.css";
import { motion } from "framer-motion";

const projects = [
  {
    icon: "🛒",
    title: "NexBuy",
    description:
      "Advanced e-commerce platform with user auth, product listings, cart management, and secure Stripe payments. Backend: Node.js + Express + MongoDB + Redis. Frontend: React + TailwindCSS + Zustand. Image uploads via Cloudinary.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Stripe", "Zustand", "Cloudinary"],
    github: "https://github.com/sharafath-ali/NexBuy",
    live: "https://nexbuy.onrender.com/",
  },
  {
    icon: "💬",
    title: "Chatterverse",
    description:
      "Real-time chat app on a monorepo architecture. Socket.IO messaging, JWT auth, Cloudinary media uploads, 32 DaisyUI themes, and full profile management. Deployed on Render with MongoDB Atlas.",
    tech: ["React", "Express.js", "Socket.IO", "Zustand", "TailwindCSS", "DaisyUI", "JWT"],
    github: "https://github.com/sharafath-ali/Chatterverse",
    live: "https://chatterverse-0hba.onrender.com/",
  },
  {
    icon: "🏢",
    title: "HR Portal",
    description:
      "Employee management system with file/image uploads, descriptive notes, and secure SharePoint-backed APIs. Built with React + Material-UI + Sass frontend and Express.js backend.",
    tech: ["React", "Express.js", "SharePoint", "Material-UI", "Sass"],
    github: "https://github.com/sharafath-ali/node-react-HR-Portal",
    live: "https://node-react-hr-portal.vercel.app/",
  },
  {
    icon: "🗨️",
    title: "iChat",
    description:
      "Real-time chat application using Socket.IO for event-driven messaging. Features server-side rendering with EJS for improved SEO and performance. Fully responsive for mobile and web.",
    tech: ["Node.js", "Socket.IO", "Express.js", "EJS", "SSR"],
    github: "https://github.com/sharafath-ali/Chat-app",
    live: "https://wechat-i9go.onrender.com",
  },
  {
    icon: "🎬",
    title: "Flim-flix",
    description:
      "Responsive movie discovery app powered by the TMDB API. Features advanced search with debouncing, genre filters, detailed film info, ratings, and reviews. Built with React, Sass, and Material-UI.",
    tech: ["React", "TMDB API", "Sass", "Material-UI"],
    github: "https://github.com/sharafath-ali/Flim-flix",
    live: "https://flim-flix.vercel.app/",
  },
];

function ProjectCards() {
  return (
    <div className="projects-page">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Projects</h2>
        <p className="projects-subtitle">Things I've built that I'm proud of.</p>
      </motion.div>

      <div className="project-cards">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            className="project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-icon">{proj.icon}</div>
            <h3>{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>

            <div className="tech-tags">
              {proj.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                🐙 GitHub
              </a>
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="site-link"
              >
                🚀 Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCards;