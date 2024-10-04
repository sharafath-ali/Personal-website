import React from "react";
import "../Css/Project.css";

const Projects = () => {
  return (
    <div className="projects-page" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2>My Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>HR-PORTAL App</h3>
          <ul>
            <li>
              HR portal app streamlines employee management with features for
              adding and updating employee information, uploading files and
              images, and managing descriptive notes for each employee. It
              ensures data accuracy, security, and a user-friendly experience
              for HR personnel.
            </li>
            <li>
              Built HR portal's front-end using React.js with Material UI for
              modern design and SASS for organized styling, delivering a
              responsive user interface across devices.
            </li>
            <li>
              Express.js used for server-side, SharePoint as database. Secure
              APIs for HR functionalities, data integrity, and user privacy
              ensured.
            </li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/sharafath-ali/node-react-HR-Portal"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
            <a
              href="https://node-react-hr-portal.vercel.app/" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="site-link"
            >
              See It Live
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>iChat</h3>
          <ul>
            <li>
              iChat is a robust real-time communication chat application designed for seamless interaction. Built with Socket.IO for real-time event-driven communication and Express.js for the backend, this app provides instant messaging capabilities, ensuring messages are delivered in real time without delays.
            </li>
            <li>
              The application features server-side rendering, enhancing performance and improving SEO while delivering a smooth user experience. With a responsive design, iChat is accessible on both mobile and web platforms, allowing users to communicate effortlessly, whether at home or on the go.
            </li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/sharafath-ali/Chat-app"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
            <a
              href="https://wechat-i9go.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="site-link"
            >
              See It Live
            </a>
          </div>
        </div>


        <div className="project-card">
          <h3>Flim-flix App</h3>
          <ul>
            <li>
              Flim-flix is a fully responsive web application that offers comprehensive details about a wide range of films. Built using React, Sass , Material-UI , and the TMDB API, it delivers an intuitive and visually engaging user experience.
            </li>
            <li>
              Smart Search Functionality: The application features an advanced search bar with debouncing, allowing users to find films effortlessly while minimizing the number of API calls, thus optimizing performance and ensuring a smooth browsing experience.
            </li>
            <li>
              Users can explore various film genres, view detailed descriptions, and access ratings and reviews, making Flim-flix a one-stop platform for film enthusiasts.
            </li>
          </ul>
          <div className="project-links">
            <a
              href="https://github.com/sharafath-ali/Flim-flix"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
            <a
              href="https://flim-flix.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-link"
            >
              See It Live
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;