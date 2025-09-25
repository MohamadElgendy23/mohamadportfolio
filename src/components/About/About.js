import React, { useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./About.css";
import image1 from "../../images/DescriptionImage1.JPG";
import image2 from "../../images/DescriptionImage2.JPG";
import image3 from "../../images/DescriptionImage3.JPG";
import image4 from "../../images/DescriptionImage4.JPG";

const descriptionWordsArr = [
  "A Full Stack Developer",
  "A Basketball Fan",
  "A Food Lover",
  "An Egyptian",
];

const descriptionImagesArr = [image1, image2, image3, image4];

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
    <div className="About min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col items-center justify-center font-mono mt-7 px-4 sm:px-6 lg:px-0">
        <h1 className="font-bold italic text-2xl sm:text-3xl mb-4 text-center">
          About Me <span className="not-italic">&#129332;</span>
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 max-w-4xl text-center">
          <p className="text-base sm:text-lg">
            I am <span className="description font-semibold"></span>
          </p>
          <img
            src={image1}
            alt="description"
            className="Image rounded-lg w-48 sm:w-64 md:w-80 transition-all duration-500"
          />
          <div className="flex flex-col items-center justify-center bg-slate-400 gap-4 p-5 rounded-lg mt-5 w-full sm:w-4/5 lg:w-3/5">
            <i className="fa-solid fa-circle-info fa-beat-fade text-2xl mt-2"></i>
            <h3 className="font-bold text-lg sm:text-xl">
              Full Stack Developer
            </h3>
            <p className="text-sm sm:text-base">
              React | Node | Express | MongoDB | JavaScript | HTML | CSS |
              Python
            </p>
            <p className="text-sm sm:text-base">
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
