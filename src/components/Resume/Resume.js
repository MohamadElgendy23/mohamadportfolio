import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Resume.css";
function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  function viewResume(event) {
    event.preventDefault();
    setIsVisible(!isVisible);
  }

  return (
    <div className="Resume">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7">
        <h1 className="font-bold italic text-2xl mb-8">
          Resume{" "}
          <span className="not-italic">
            <i className="fas fa-file-alt"></i>
          </span>
        </h1>
        <a
          href="/resume"
          id="viewResume"
          className="text-blue-500 underline"
          onClick={viewResume}
        >
          View My Resume (PDF)
        </a>
        <div className={`resumeImage ${isVisible ? "visible" : ""}`}>
          <img src="public/images/Resume.jpeg" alt="resume"></img>
        </div>
      </div>
    </div>
  );
}

export default Resume;
