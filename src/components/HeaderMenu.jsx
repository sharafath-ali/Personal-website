import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeaderMenu({ active, onNav, links }) {
  const [open, setOpen] = useState(false);

  const handleNav = (e, href) => {
    setOpen(false);
    onNav(e, href);
  };

  return (
    <div className="mobile-menu-wrapper">
      {/* Hamburger button */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Slide-down drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`mobile-nav-link ${active === href.replace("#", "") ? "active" : ""}`}
                onClick={(e) => handleNav(e, href)}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
