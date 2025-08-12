import React from "react";
import image from "../assets/protfolio.png";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="m-5   pt-5">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="space-y-2 flex-1 w-full sm:w-6/12">
          <div>
            <p className="text-5xl font-bold text-sky-100">
              Hello, I am Ayasha
            </p>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-fuchsia-400 text-">
              Fronted Developer
            </p>
          </div>
          <p className="text-xl text-sky-100 w-5/6">
            Passionate Frontend Developer with a commitment to continuous
            learning and growth. Skilled in React, HTML, CSS, Tailwind CSS,
            Node.js, Express.js, and Firebase, I build modern, responsive, and
            dynamic web applications.
          </p>
          <div className="flex gap-5 items-center py-2">
            <NavLink
              to="/resume"
              className="btn text-white bg-gradient-to-r from-violet-500  to-fuchsia-400"
            >
              Resume
            </NavLink>

            <a href="https://github.com/nipaayasha05" target="_blank">
              <BsGithub size={30} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/in/mstayashaakter/"
              target="_blank"
            >
              <BsLinkedin size={30} color="white" />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="w-[250px] h-[250px] rounded-full border-2 border-violet-300 p-2 "
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
