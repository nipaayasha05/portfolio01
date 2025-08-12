import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const ProjectDetails = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const { id } = useParams();
  const projects = useLoaderData();
  const project = projects.find((project) => project.id == id);
  return (
    <div>
      {" "}
      <div className="container flex items-center text-white  mx-auto pt-10">
        <div className=" m-5 flex bg-gray-800 flex-col lg:flex-row justify-center items-center shadow-gray-600  shadow-md p-5 rounded-xl space-y-5 lg:gap-10">
          <div className="flex-1">
            <img
              className=" shadow-xl rounded-xl"
              src={project.projectImage}
              alt=""
            />
          </div>
          <div className="flex-1 text-sky-100 text-start space-y-2 lg::w-3xl    ">
            <p>
              <strong>Project Name : </strong>
              {project.projectName}
            </p>
            <div>
              <strong>Main technology stack used : </strong>
              {project.mainTechnologyStack.map((tech, index) => (
                <p className="badge badge-outline mr-3" tech={tech} key={index}>
                  {tech}
                </p>
              ))}
            </div>
            <p>
              <strong>Brief description : </strong>
              {project.briefDescription}
            </p>
            <p>
              <strong>Live project link : </strong>
              {project.liveProjectLink}
            </p>
            <p>
              <strong>Challenges faced while developing the project : </strong>
              {project.challengesFaced}
            </p>
            <p>
              <strong>
                Potential improvements and future plans for the project :{" "}
              </strong>
              {project.potentialImprovements}
            </p>

            <a
              href="https://sprightly-moonbeam-219a97.netlify.app/"
              target="_blank"
            >
              <button className="btn bg-gradient-to-r from-violet-500  to-fuchsia-400 text-white">
                Live Site
              </button>
            </a>
            <a href={project.githubClientLink} target="_blank">
              <button className="btn ml-5 bg-gradient-to-r from-violet-500  to-fuchsia-400 text-white">
                Github Repository
              </button>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProjectDetails;
