import React from "react";

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
            ABOUT ME
          </p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">RESUME</p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">PROJECTS</p>
        </div>
        <div>
          <p className="font-mono from-neutral-700 font-black px-4">CONTACT</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
