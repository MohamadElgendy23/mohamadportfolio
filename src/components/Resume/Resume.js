import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Resume.css";
function Resume() {
  function ResumePage() {
    <div className="flex items-center justify-center flex-col gap-7">
      <h1>Mohamad Elgendy</h1>
      <p>
        (385)576-8791 | mohamadelgendy13@gmail.com | <a href="">LinkedIn</a> |{" "}
        <a href="http://github.com/MohamadElgendy23">GitHub</a> |{" "}
        <a href="">Portfolio</a>
      </p>
      <div>
        <h2 className="uppercase underline text-left">Education</h2>
        <div className="flex items-center justify-between font-bold">
          <h3>Bachelor of Science in Computer Science</h3>
          <h3>Aug 2019 - Dec 2023</h3>
        </div>
        <p className="italic text-left">
          University of Utah, Salt Lake City, UT
        </p>
        <ul>
          <li>GPA: 3.5</li>
          <li>
            Relevant Coursework: Algorithms & Data Structures, Discrete
            Structures, Software Practice, Models of Computation, Computer
            Networks, Computer Systems
          </li>
        </ul>
      </div>
      <div>
        <h2 className="uppercase underline text-left">Skills</h2>
        <p>
          Software: Python, React.js, JavaScript, HTML/CSS, MongoDB, Go, C#,
          Java, C, Git, SQL
        </p>
      </div>
      <div>
        <h2 className="uppercase underline text-left">Projects</h2>
        <div className="flex items-center justify-between font-bold">
          <h3>StoreIt</h3>
          <h3>Oct 2024</h3>
          <ul>
            <li>
              Implemented an application that allows users to add house items to
              a storage using JavaScript, HTML, CSS, and Firebase.
            </li>
            <li>
              Set up a Firebase database to store items and enable real-time
              data snapshots, facilitating quick data access.
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between font-bold">
          <h3>Hospital Management Application</h3>
          <h3>Sept 2024 - Oct 2024</h3>
          <ul>
            <li>
              Developed a full-stack hospital management application, enabling
              users to view patient records, check available doctors, and
              schedule appointments.
            </li>
            <li>
              Utilized MERN stack, developing on both backend and frontend.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="uppercase underline text-left">
          Employement Experience
        </h2>
        <div className="flex items-center justify-between font-bold">
          <h3>Undergraduate Teaching Assistant</h3>
          <h3>Jan 2021 - Dec 2023</h3>
        </div>
        <p className="italic">University of Utah College of Engineering</p>
        <ul>
          <li>
            Enhanced student coding proficiency for up to 300 students, and
            contributed to a positive learning environment.
          </li>
          <li>
            Conducted discussion sections, help hours, and labs focused on
            teaching students C# and Python in an agile setting.
          </li>
          <li>
            Utilized Gradescope to streamline the grading process, providing
            detailed feedback on student submissions and increasing student
            performance.
          </li>
        </ul>
        <div className="flex items-center justify-between font-bold">
          <h3>Customer Service Representative</h3>
          <h3>Aug 2024 - Oct 2024</h3>
          <ul>
            <li>
              In charge of setting up events and raising donations for the
              Family In Need organization.
            </li>
            <li>
              Provided suburb guest service and attention to detail to voice
              what the organization is about and how people can offer benefit to
              struggling families.
            </li>
            <li>
              Led toy drives on scheduled days for children in the Intermountain
              and University of Utah hospitals.
            </li>
          </ul>
        </div>
      </div>
    </div>;
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
