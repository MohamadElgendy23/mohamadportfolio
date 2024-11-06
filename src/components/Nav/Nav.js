import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="flex items-center justify-center flex-col mt-6 font-mono">
      <a href="/" id="about-anchor">
        <img
          alt="initials"
          src="https://img.freepik.com/premium-vector/me-letter-l…onogram-design-me-initials-letter_1012565-345.jpg"
          width={100}
          className="border-r-1 rounded-full w-25 h-25 mb-7"
        ></img>
      </a>
      <h1 className="font-bold text-3xl mb-2">Mohamad Elgendy</h1>
      <h2 className="font-bold text-2xl mb-2">Full Stack Developer</h2>
      <h3 className="mb-10">
        React | Node | Express | MongoDB | JavaScript | Python
      </h3>
      <ul className="flex flex-row justify-center items-center gap-10 font-bold uppercase">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
