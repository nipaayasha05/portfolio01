import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router";
import { Features } from "tailwindcss";

const ProjectDetails = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects.find((project) => project.id == id);
  return (
    <div className="container m-5 w-10/12 mx-auto  py-5 sm:py-10">
      {" "}
      <div className=" ">
        <div className="text-sky-100 sm:text-lg space-y-2 sm:space-y-5">
          <div>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-blue-300 text-4xl font-bold">
              {project.projectName}
            </span>{" "}
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300  to-blue-200">
              - {project.project}
            </span>
          </div>
          <p className="sm:text-lg">{project.briefDescription}</p>
          <img src={project.projectImage} className="rounded-xl " alt="" />
          <div className="sm:text-lg">
            <strong>Features : </strong>
            {project.features.map((feature, index) => (
              <div feature={feature} key={index}>
                <p className="  "> - {feature}</p>
              </div>
            ))}
          </div>
          <div className="flex   items-center">
            <strong className="text-sky-100 sm:text-lg">
              Main technology stack used :{" "}
            </strong>
            <div>
              {" "}
              {project.mainTechnologyStack.map((tech, index) => (
                <p
                  className="badge bg-gray-800 badge-outline ml-2 mr-2 text-sky-100 text-md sm:text-md"
                  tech={tech}
                  key={index}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
          <p className="sm:text-lg">
            {" "}
            <strong>Challenges Faced :</strong>
            {project.challengesFaced}
          </p>
          <p>
            {" "}
            <strong>Potential Improvements :</strong>
            {project.potentialImprovements}
          </p>
          <div className="flex gap-5 ">
            <a href={project.liveProjectLink} target="_blank">
              <button className="btn hover:from-blue-500 hover:to-blue-500 py-5 text-white sm:py-0 border-0 outline-none shadow-none focus:outline-none focus:shadow-none  bg-gradient-to-r from-blue-500  to-blue-400">
                {" "}
                Live Link <FiExternalLink size={20} />
              </button>
            </a>
            <a href={project.githubClientLink} target="_blank">
              <button className="btn hover:from-blue-500 hover:to-blue-500 py-5 text-white border-0 outline-none shadow-none focus:outline-none focus:shadow-none  sm:py-0 bg-gradient-to-r from-blue-500  to-blue-400">
                Github Client <BsGithub size={20} />
              </button>
            </a>
            <a href={project.githubServerLink} target="_blank">
              <button className="btn hover:from-blue-500 hover:to-blue-500 py-5 text-white border-0 outline-none shadow-none focus:outline-none focus:shadow-none  sm:py-0 bg-gradient-to-r from-blue-500  to-blue-400">
                Github server <BsGithub size={20} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
