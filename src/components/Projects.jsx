import React, { useEffect, useState } from "react";
import Project from "./project";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
    <div className="   container mx-auto">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-[2px] bg-slate-800"></div>
        <h2 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold tracking-widest py-10">
          Projects
        </h2>
        {/* <h3 className="text-3xl sm:text-4xl text-blue-200    text-center font-bold py-2">
            My Skills{" "}
          </h3> */}
        <div className="flex-1 h-[2px] bg-slate-800"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <Project
            project={project}
            key={project.id}
            setSelectedProject={setSelectedProject}
          ></Project>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
