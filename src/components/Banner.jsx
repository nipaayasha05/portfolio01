import React from "react";
import image from "../assets/protfolio.png";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1EPG0kXk2dp7p9L7EuVPXk7D6eFVw4y2L/view?usp=sharing";
  return (
    <div className="m-5 from-gray-90 to-violet-95 bg-radial-[at_150%_50%] from-slate-700 via-blue-950 to-slate-900 rounded-xl to-90% p-10 lg:h-[70vh] md:h-[70vh] pt-5 flex flex-col items-center shadow-md justify-center">
      <div className="">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="space-y-2 flex-1 w-full sm:w-6/12">
            <div>
              <p className="text-2xl md:text-4xl lg:text-4xl font-bold  -montserrat text-sky-100 text-center sm:text-start">
                Hello, I am Ayasha
              </p>
              <p className="text-2xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-blue-300 text-center  sm:text-start">
                Frontend Developer
              </p>
            </div>
            <p className="sm:text-lg   md:text-lg lg:text-xl text-sky-100 w-5/6 text-center ml-6 sm:text-start sm:ml-0">
              I build responsive and user-friendly web applications using React,
              JavaScript, HTML, CSS, and Tailwind CSS.
            </p>
            <div className="flex flex-col-reverse sm:flex-row gap-5 items-center justify-center sm:justify-start py-2">
              <a href={pdfUrl} target="_blank">
                <button className="btn text-white  hover:from-blue-500 hover:to-blue-500  focus:outline-none focus:shadow-none bg-gradient-to-r from-blue-500  border-none shadow-none outline-none to-blue-400">
                  Resume
                  <MdOutlineFileDownload size={20} />
                </button>
              </a>

              <div className="flex gap-2">
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
          </div>
          <div className="flex- flex items-center justify-center">
            <img
              className="w-[250px] h-[250px] rounded-full border-2 border-sky-100/40  bg-amber/5 backdrop-blur-md shadow-l p-2 "
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
