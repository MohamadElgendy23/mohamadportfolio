import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="flex flex-col items-center justify-center mt-6 font-mono px-4 sm:px-6 lg:px-0">
      <a href="/" id="about-anchor">
        <img
          alt="initials"
          src="https://img.freepik.com/premium-vector/me-letter-l…onogram-design-me-initials-letter_1012565-345.jpg"
          className="rounded-full w-24 h-24 sm:w-28 sm:h-28 mb-5 border"
        />
      </a>
      <h1 className="font-bold text-2xl sm:text-3xl mb-1 text-center">
        Mohamad Elgendy
      </h1>
      <h2 className="font-bold text-xl sm:text-2xl mb-1 text-center">
        Full Stack Developer
      </h2>
      <h3 className="text-center mb-6 sm:mb-10 text-sm sm:text-base">
        React | Node | Express | MongoDB | JavaScript | Python
      </h3>
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 font-bold uppercase text-sm sm:text-base">
        <li>
          <a href="/" className="hover:text-blue-500 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-blue-500 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="/resume" className="hover:text-blue-500 transition-colors">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
