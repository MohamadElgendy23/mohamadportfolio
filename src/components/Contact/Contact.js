import React from "react";
import Nav from "/Users/mohamadelgendy/Desktop/mohamadportfolio/src/components/Nav/Nav.js";
import Footer from "../Footer/Footer";
function Contact() {
  return (
    <div className="Contact">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7">
        <h1 className="font-bold italic text-2xl mb-2">
          Contact{" "}
          <span className="not-italic">
            <i class="fas fa-address-card"></i>
          </span>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
