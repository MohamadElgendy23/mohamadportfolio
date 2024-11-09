import React from "react";
import Nav from "/Users/mohamadelgendy/Desktop/mohamadportfolio/src/components/Nav/Nav.js";
import Footer from "../Footer/Footer";
function Resume() {
  return (
    <div className="Resume">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7">
        <h1 className="font-bold italic text-2xl mb-8">
          Resume <span className="not-italic"></span>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
