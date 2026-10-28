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

        <div className="flex-1 h-[2px] bg-slate-800"></div>
      </div>

      <div className="space-y-8">
  {/* First row */}

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
  {projects.map((project, index) => (
    <div
      key={project.id}
      className={` md:col-span-1 lg:col-span-2 ${
        projects.length === 5 && index === 3
          ? "lg:row-start-2 lg:col-start-2"
          : projects.length === 5 && index === 4
            ? "lg:row-start-2 lg:col-start-4"
            : ""
      }`}
    >
      <Project project={project} />
    </div>
  ))}
</div>

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
