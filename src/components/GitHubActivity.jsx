import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import "../Css/GitHubActivity.css";

const calendarTheme = {
  dark: [
    "rgba(255, 255, 255, 0.04)",
    "rgba(108, 99, 255, 0.30)",
    "rgba(108, 99, 255, 0.55)",
    "rgba(140, 80, 255, 0.78)",
    "#a855f7",
  ],
};

function GitHubActivity() {
  return (
    <motion.div
      className="github-inline-block"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    >
      <div className="github-inline-header">
        <span className="github-inline-label">📅 GitHub Contributions</span>
        <a
          href="https://github.com/sharafath-ali"
          target="_blank"
          rel="noopener noreferrer"
          className="github-inline-link"
        >
          View Profile →
        </a>
      </div>

      <div className="calendar-wrapper">
        <GitHubCalendar
          username="sharafath-ali"
          theme={calendarTheme}
          colorScheme="dark"
          blockSize={12}
          blockMargin={4}
          blockRadius={3}
          fontSize={12}
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
    </motion.div>
  );
}

export default GitHubActivity;
