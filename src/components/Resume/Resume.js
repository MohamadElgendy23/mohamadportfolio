import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Resume.css";
function Resume() {
  function ResumePage() {
    <div className=""></div>;
  }

  return (
    <div className="Resume">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7 gap-5">
        <h1 className="font-bold italic text-2xl mb-8">
          Resume{" "}
          <span className="not-italic">
            <i className="fas fa-file-alt"></i>
          </span>
        </h1>
        <ResumePage />
      </div>
    </div>
  );
}

export default Resume;
