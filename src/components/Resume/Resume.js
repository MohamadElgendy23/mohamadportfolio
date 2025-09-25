import Nav from "../Nav/Nav";
import "./Resume.css";
import resume from "../../images/Resume.jpeg";

function Resume() {
  return (
    <div className="Resume">
      <Nav></Nav>
      <div className="flex items-center justify-center flex-col font-mono mt-7 gap-5">
        <h1 className="font-bold italic text-2xl mb-8">
          Resume{" "}
          <span className="not-italic">
            <i className="fas fa-file-alt"></i>
          </span>
          <img src={resume} alt="Resume"></img>
        </h1>
      </div>
    </div>
  );
}

export default Resume;
