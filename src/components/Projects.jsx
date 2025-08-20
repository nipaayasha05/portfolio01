import React, { useEffect, useState } from "react";
import Project from "./project";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="m-5 container mx-auto">
      <h3 className="text-4xl text-sky-100   text-center font-bold py-5">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects.map((project) => (
          <Project project={project} key={project.id}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
