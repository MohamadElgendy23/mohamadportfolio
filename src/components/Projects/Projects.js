import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Projects.css";

function Projects() {
  return (
    <div className="Projects min-h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col items-center justify-center font-mono mt-7 px-4 sm:px-6 lg:px-0">
        <h1 className="font-bold italic text-2xl sm:text-3xl mb-8 text-center">
          Projects{" "}
          <span className="not-italic">
            <i className="fa-solid fa-clipboard"></i>
          </span>
        </h1>
        <div
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch gap-8 w-full max-w-6xl"
          id="projects"
        >
          {/* Project 1 */}
          <div className="border-2 border-black border-solid rounded-lg p-5 flex-1 min-w-[250px] max-w-sm flex flex-col justify-between">
            <h2 className="font-bold mb-2 text-lg sm:text-xl text-center">
              Hospital Management Application
            </h2>
            <span className="text-2xl text-blue-800 text-center">&#63;</span>
            <p className="text-center text-sm sm:text-base mt-2">
              MERN and Bootstrap application where users can view available
              appointments, view doctors on call, and view patients waiting in
              line.
            </p>
            <p className="text-center mt-4">
              <a
                href="https://github.com/MohamadElgendy23/HospitalManagementApp"
                target="_blank"
                rel="noreferrer"
                className="italic hover:text-blue-600 transition-colors"
              >
                Github Link
              </a>
            </p>
          </div>

          {/* Project 2 */}
          <div className="border-2 border-black border-solid rounded-lg p-5 flex-1 min-w-[250px] max-w-sm flex flex-col justify-between">
            <h2 className="font-bold mb-2 text-lg sm:text-xl text-center">
              Roster Viewer
            </h2>
            <span className="text-2xl text-blue-800 text-center">&#63;</span>
            <p className="text-center text-sm sm:text-base mt-2">
              Aesthetic application created in React.js, JS, HTML, and CSS where
              users can view available NBA teams and each team's roster.
              Utilizes API's for live NBA data.
            </p>
            <p className="text-center mt-4 flex flex-col gap-1">
              <a
                href="https://github.com/MohamadElgendy23/rosterviewer"
                target="_blank"
                rel="noreferrer"
                className="italic hover:text-blue-600 transition-colors"
              >
                Github Link
              </a>
              <a
                href="https://rosterviewerdeploy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="italic hover:text-blue-600 transition-colors"
              >
                Vercel Link
              </a>
            </p>
          </div>

          {/* Project 3 */}
          <div className="border-2 border-black border-solid rounded-lg p-5 flex-1 min-w-[250px] max-w-sm flex flex-col justify-between">
            <h2 className="font-bold mb-2 text-lg sm:text-xl text-center">
              Flixforall - All in One Movie App
            </h2>
            <span className="text-2xl text-blue-800 text-center">&#63;</span>
            <p className="text-center text-sm sm:text-base mt-2">
              MERN application where users can view movies and
              add/edit/view/delete reviews.
            </p>
            <p className="text-center mt-4">
              <a
                href="https://github.com/MohamadElgendy23/flix-for-all"
                target="_blank"
                rel="noreferrer"
                className="italic hover:text-blue-600 transition-colors"
              >
                Github Link
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
