import React, { useContext, useState, useEffect } from "react";
import "../Css/Header.css";
import { ViewportContext } from "../Context/ViewportContext";
import HeaderMenu from "./HeaderMenu";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About Me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const { isMobile } = useContext(ViewportContext);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.getElementById(href.replace("#", ""))
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="header-left">
        <h1>Sharafath Ali</h1>
        <p>Senior Software Engineer</p>
      </div>
      <nav className="header-right">
        {isMobile ? (
          <HeaderMenu active={active} onNav={scrollTo} links={NAV_LINKS} />
        ) : (
          NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={active === href.replace("#", "") ? "toblack" : ""}
              onClick={(e) => scrollTo(e, href)}
            >
              {label}
            </a>
          ))
        )}
      </nav>
    </motion.header>
  );
}

export default Header;
