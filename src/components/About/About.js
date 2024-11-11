import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./About.css";
const descriptionWordsArr = [
  "A Full Stack Developer",
  "A Basketball Fan",
  "A Food Lover",
  "An Egyptian",
];

const descriptionImagesArr = [
  "../images/DescriptionImage1.JPG",
  "../images/DescriptionImage2.JPG",
  "../images/DescriptionImage3.JPG",
  "../images/DescriptionImage4.JPG",
];

function About() {
  useEffect(() => {
    let currentDescription = 0;
    const totalDescriptions = descriptionWordsArr.length;
    let currentImage = 0;

    function showNextContent() {
      for (let i = 0; i < totalDescriptions; i++) {
        document.querySelector(".description").classList.remove("show");
        document.querySelector(".Image").classList.remove("show");
      }

      document.querySelector(".description").textContent =
        descriptionWordsArr[currentDescription];
      document.querySelector(".description").classList.add("show");

      document.querySelector(".Image").src = descriptionImagesArr[currentImage];
      document.querySelector(".Image").classList.add("show");

      currentDescription++;
      currentImage++;
      if (
        currentDescription >= totalDescriptions &&
        currentImage >= totalDescriptions
      ) {
        currentDescription = 0;
        currentImage = 0;
      }
    }

    setInterval(showNextContent, 5000);

    showNextContent();
  }, []);
  return (
    <div className="About">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7">
        <h1 className="font-bold italic text-2xl mb-2">
          About Me <span className="not-italic">&#129332;</span>
        </h1>
        <div className="flex items-center justify-center flex-col gap-5">
          I am ......
          <span id="description" className="description"></span>
          <img
            src="/Users/mohamadelgendy/Desktop/mohamadportfolio/public/images/DescriptionImage1.JPG"
            alt="img"
            className="Image"
            width={250}
          ></img>
          <div className="flex items-center justify-center flex-col max-w-screen-lg bg-slate-400 gap-7 pb-7">
            <i className="fa-solid fa-circle-info fa-beat-fade text-2xl mt-2"></i>
            <h3>Full Stack Developer</h3>
            <p>
              React | Node | Express | MongoDB | JavaScript | HTML | CSS |
              Python
            </p>
            <p>
              Full Stack Developer with experience in multiple languages and
              frameworks such as React, Node, Express, MongoDB, JavaScript,
              HTML, CSS, and Python. My curiosity and continuous learning spirit
              allows me to elevate in the world of software bringing new ideas
              to life.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
