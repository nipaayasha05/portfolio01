import React from "react";
import { Link } from "react-router";

const Project = ({ project }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#111827] transition-all duration-300 hover:-translate-y-2  hover:border-cyan-400/40">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.projectImage}
          alt={project.projectName}
          className="h-52 w-full object-cover p-1 rounded-t-xl"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Accent */}
        {/* <div className="mb-5 h-1 w-1 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-20"></div> */}

        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-200">
          {project.projectName}
        </h2>

        {/* Description */}
        <p className="mt-2 flex-1 text-base leading-7 text-slate-300">
          {project.sentence}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Small Tag */}
          {/* <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            Featured
          </span> */}

          {/* Button */}
          <Link
            to={`/project-details/${project.id}`}
            className="group mt-6 text-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-white transition hover:scale-105 w-full"
            // onClick={() => setSelectedProject(project)}
          >
            View Details{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-125">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
