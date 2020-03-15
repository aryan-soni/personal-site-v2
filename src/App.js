import React from "react";
import Navbar from "./components/navbar";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import resumeInfo from "./resumeInfo";
import "./App.css";

function App() {
  return (
    <div className='App'>
      // render components; pass resumeInfo into each respective component
      <Navbar resumeInfo={resumeInfo} />
      <Resume resumeInfo={resumeInfo} />
      <Skills resumeInfo={resumeInfo} />
      <Contact resumeInfo={resumeInfo} />
      <Footer resumeInfo={resumeInfo} />
    </div>
  );
}

export default App;
