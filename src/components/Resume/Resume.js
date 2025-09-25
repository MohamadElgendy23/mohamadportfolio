import React from "react";
import Nav from "../Nav/Nav";
import "./Resume.css";
import resume from "../../images/Resume.jpeg";

function Resume() {
  return (
    <div className="Resume min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col items-center justify-center font-mono mt-7 px-4 sm:px-6 lg:px-0 gap-5">
        <h1 className="font-bold italic text-2xl sm:text-3xl mb-4 text-center">
          Resume{" "}
          <span className="not-italic">
            <i className="fas fa-file-alt"></i>
          </span>
        </h1>
        <div className="w-full flex justify-center">
          <img
            src={resume}
            alt="Resume"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
