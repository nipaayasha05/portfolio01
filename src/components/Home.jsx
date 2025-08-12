import React, { useEffect } from "react";
import About from "./About";
import { Link, useLocation } from "react-router";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Banner from "./Banner";
import Education from "./Education";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <Banner />
      </div>
      <div>
        <About />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Education />
      </div>
      <div>
        <Projects />
      </div>

      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
