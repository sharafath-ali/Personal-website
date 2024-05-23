import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between bg-stone-500 p-10 items-center sticky top-0">
      <div className="flex justify-between">
        <h1 className="font-mono from-neutral-700 font-black  text-xl">
          Sharafath Ali
        </h1>
        <p className="font-mono from-neutral-700 font-black px-4  text-xl">/</p>
        <p className="font-mono from-neutral-700 font-black  text-xl">
          Associate Software Developer
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-mono from-neutral-600 font-black px-4">
            <Link to="/" className={pathname === "/" ? "text-slate-100" : ""}>
              ABOUT ME
            </Link>
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">
            <Link
              to="/Resume"
              className={pathname === "/Resume" ? "text-slate-100" : ""}
            >
              RESUME
            </Link>
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">
            <Link
              to="/Projects"
              className={pathname === "/Projects" ? "text-slate-100" : ""}
            >
              PROJECTS
            </Link>
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">
            <Link
              to="/Contact"
              className={pathname === "/Contact" ? "text-slate-100" : ""}
            >
              CONTACT
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
