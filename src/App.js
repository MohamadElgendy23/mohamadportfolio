import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
