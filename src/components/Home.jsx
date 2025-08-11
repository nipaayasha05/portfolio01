import React, { useEffect } from "react";
import About from "./About";
import { Link, useLocation } from "react-router";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <About />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Contact />
      </div>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default Home;
