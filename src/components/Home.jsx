import React, { useEffect } from "react";
import About from "./About";

import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Banner from "./Banner";
import Education from "./Education";

const Home = () => {
  useEffect(() => {
    document.title = "Ayasha Akter";
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="container mx-auto max-w-7xl bg-slate-950 px-6 pt-20">
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
