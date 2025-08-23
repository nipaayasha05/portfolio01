import React from "react";
import image from "../assets/protfolio.png";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  const pdfUrl = "/resume.pdf";
  return (
    <div className="m-5  from-gray-90 to-violet-95  bg-radial-[at_50%_25%] from-gray-900 via-indigo-950 to-slate-900 rounded-xl to-90%   p-10 lg:h-[70vh] md:h-[85vh] pt-5  flex flex-col items-center border border-slate-80 shadow-xl justify-center">
      <div className="">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <div className="space-y-2 flex-1 w-full sm:w-6/12">
            <div>
              <p className="text-4xl md:text-4xl lg:text-6xl font-bold  -montserrat text-sky-100">
                Hello, I am Ayasha
              </p>
              <p className="text-5xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-fuchsia-400 text-">
                Frontend Developer
              </p>
            </div>
            <p className="text-xl md:text-xl lg:text-2xl text-sky-100 w-5/6">
              Passionate Frontend Developer with a commitment to continuous
              learning and growth. Skilled in React, HTML, CSS, Tailwind CSS,
              Node.js, Express.js, and Firebase, I build modern, responsive, and
              dynamic web applications.
            </p>
            <div className="flex gap-5 items-center py-2">
              <a href={pdfUrl} download>
                <button className="btn text-white hover:from-violet-700 hover:to-fuchsia-500  bg-gradient-to-r from-violet-500  border-none to-fuchsia-400">
                  Resume
                  <MdOutlineFileDownload size={20} />
                </button>
              </a>

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
          <div className="flex- flex items-center justify-center">
            <img
              className="w-[250px] h-[250px] rounded-full border-2 border-violet-400 p-2 "
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
