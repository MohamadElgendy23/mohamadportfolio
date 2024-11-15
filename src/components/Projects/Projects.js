import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Projects.css";
function Projects() {
  return (
    <div className="Projects">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7">
        <h1 className="font-bold italic text-2xl mb-8">
          Projects{" "}
          <span className="not-italic">
            <i className="fa-solid fa-clipboard"></i>
          </span>
        </h1>
        <div
          className="flex items-center justify-center flex-col gap-10"
          id="projects"
        >
          <div id="project1" className="border-2 border-black border-solid">
            <h2 className="font-bold mb-3">Hospital Management Application</h2>
            <span className="text-2xl text-blue-800">&#63;</span>
            <p className="text-center">
              MERN and Bootstrap application where users can view available{" "}
              <br />
              appointments, view doctors on call, and view patients waiting in
              line.
            </p>
            <p className="text-center pt-5">
              <a
                href="https://github.com/MohamadElgendy23/HospitalManagementApp"
                target="_blank"
                rel="noreferrer"
                className="italic"
              >
                Github Link
              </a>
            </p>
          </div>
          <div id="project2" className="border-2 border-black border-solid">
            <h2 className="font-bold mb-3">Roster Viewer</h2>
            <span className="text-2xl text-blue-800">&#63;</span>
            <p className="text-center">
              Aesthetic application created in React.js, JS, HTML, and CSS where{" "}
              <br />
              users can view available NBA teams and each team's roster.
              Utilizes API's for live NBA data.
            </p>
            <p className="text-center pt-5">
              <a
                href="https://github.com/MohamadElgendy23/rosterviewer"
                target="_blank"
                rel="noreferrer"
                className="italic"
              >
                Github Link
              </a>
              <br />
              <a
                href="https://rosterviewerdeploy.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="italic"
              >
                Vercel Link
              </a>
            </p>
          </div>
          <div id="project3" className="border-2 border-black border-solid">
            <h2 className="font-bold mb-3">
              Flixforall - All in One Movie App
            </h2>
            <span className="text-2xl text-blue-800">&#63;</span>
            <p id="project-description" className="text-center">
              MERN application where users can view movies and <br />
              add/edit/view/delete reviews.
            </p>
            <p className="text-center pt-5">
              <a
                href="https://github.com/MohamadElgendy23/flix-for-all"
                target="_blank"
                rel="noreferrer"
                className="italic"
              >
                Github Link
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
