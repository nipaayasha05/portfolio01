import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

const Project = ({ project }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  // console.log(ava);
  return (
    <div className="card m-5 bg-base-100 text-sky-100  shadow-sm">
      <figure>
        <img className="w-full h-[280px]" src={project.projectImage} />
      </figure>
      <div className="card-body bg-gray-700 rounded-b-md">
        <h2 className="card-title text-xl font-bold  ">
          {project.projectName}
        </h2>

        <div className="card-actions justify-end">
          <Link
            to={`/project-details/${project.id}`}
            // onClick={() => navigate(`/project-details/${project.id}`)}
            className="btn text-white btn-block bg-gradient-to-r from-violet-500  to-fuchsia-400"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
