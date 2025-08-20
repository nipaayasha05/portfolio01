import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

const Project = ({ project }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  // console.log(ava);
  return (
    <div className="card m-5 bg-linear-to-r from-gray-800 to-slate-700 transform transition duration-300 hover:scale-105  text-sky-100  shadow-md">
      <figure className="rounded-xl">
        <img
          className="w-full  pt-5 pr-5 pl-5 h-[280px] transform transition duration-300 hover:scale-105  "
          src={project.projectImage}
        />
      </figure>
      <div className="card-body bg-linear-to-r from-slate-800 to-slate-700 rounded-b-md">
        <h2 className="card-title text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-fuchsia-400 text-2xl font-bold  ">
          {project.projectName}
        </h2>
        <p className="text-lg">{project.shortDescription}</p>

        <div className="card-actions justify-end">
          <Link
            to={`/project-details/${project.id}`}
            // onClick={() => navigate(`/project-details/${project.id}`)}
            className="btn hover:from-violet-700 hover:to-fuchsia-500 border-none text-white btn-block bg-gradient-to-r from-violet-500  to-fuchsia-400"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
