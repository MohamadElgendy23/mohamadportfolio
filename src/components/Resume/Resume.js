import React, { useState } from "react";
import Nav from "/Users/mohamadelgendy/Desktop/mohamadportfolio/src/components/Nav/Nav.js";
import "./Resume.css";
function Resume() {
  const [showResume, setShowResume] = useState(false);
  function scrollToResume() {
    setShowResume(true);
  }
  function ResumePage() {
    return (
      <div
        id="ResumePage"
        className="flex items-center justify-center flex-col gap-5 font-mono"
      >
        <p className="text-3xl">
          Thanks for scrolling.....
          <br /> Here is my resume:
          <span className="text-4xl text-center">&#9787;</span>
        </p>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vS0kYEg48WsE_3S34jyiphJaXxaH3YKcVwYFPRvzkGE7Phgc5cEpurawZ_1yIaFCiHwbzppKKxjFUYM/pub"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          View My Resume (PDF)
        </a>
      </div>
    );
  }
  return (
    <div className="Resume">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7">
        <h1 className="font-bold italic text-2xl mb-8">
          Resume{" "}
          <span className="not-italic">
            <i class="fas fa-file-alt"></i>
          </span>
        </h1>
        <img
          src="https://www.theladders.com/wp-content/uploads/fouraudiences-resume.png"
          alt="resume-img"
          width={700}
          height={650}
        ></img>
        <p className="mt-10">Scroll down to see resume! :)</p>
        <div
          class="fixed bottom-20 left-1/2 transform -translate-x-1/2 text-4xl text-gray-700 cursor-pointer"
          onClick={scrollToResume}
          id="down-arrow"
        >
          <a href="#ResumePage">
            <i class="fas fa-arrow-down"></i>
          </a>
        </div>
      </div>
      {showResume && <ResumePage />}
    </div>
  );
}

export default Resume;
