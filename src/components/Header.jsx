import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
          <p className="font-mono from-neutral-600 font-black px-4 hover:bg-slate-100">
            <Link to="/">ABOUT ME</Link>
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">
            <Link to="/Resume">RESUME</Link>
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">
            <Link to="/Projects">PROJECTS</Link>
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">
            <Link to="/Contact">CONTACT</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
