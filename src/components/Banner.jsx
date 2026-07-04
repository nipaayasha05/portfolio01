import React from "react";
import image from "../assets/protfolio.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1_z3nrhsO3QY7gAkVs0MdBzIC5x1OSQzc/view?usp=sharing";

  return (
    <div className="relative mt-5 overflow-hidden rounded-2xl bg-slate-950 p-6 md:p-12 lg:p-16 min-h-[70vh]  items-center justify-center shadow-2xl border border-slate-800">
      {/* Background Creative Elements (Ambient Glow) */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* Left Content Column */}
          <div className="space-y-6 flex-1 text-center lg:text-left max-w-2xl">
            <div className="space-y-2">
              <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Welcome to my portfolio
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
                Hello, I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300">
                  Ayasha
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-300">
                Frontend Developer
              </h2>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I craft responsive, visually stunning, and user-focused web
              applications using React, JavaScript, and modern CSS frameworks
              like Tailwind CSS.
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start pt-4 w-full">
              {/* Resume Button Wrapper */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="flex items-center justify-center gap-2 group text-center hover:from-blue-600 hover:to-sky-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-white w-full sm:w-auto font-medium transition-all duration-300 tracking-wide cursor-pointer text-sm md:text-base">
                  Resume
                  <MdOutlineFileDownload size={22} />
                </button>
              </a>

              {/* Social Icons Container */}
              <div className="flex gap-4 items-center justify-center w-full sm:w-auto">
                <a
                  href="https://github.com/nipaayasha05"
                  target="_blank"
                  rel="noreferrer"
                  className=" border border-slate-800/60  hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 shadow-md flex items-center justify-center target-baseline bg-blue-500/10 p-3 rounded-xl text-blue-400"
                >
                  <BsGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mstayashaakter/"
                  target="_blank"
                  rel="noreferrer"
                  className="  border border-slate-800/60  hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300 shadow-md flex items-center justify-center target-baseline bg-blue-500/10 p-3 rounded-xl text-blue-400"
                >
                  <BsLinkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image Column (Creative Profile Wrapper) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Background geometric design structures */}
            <div className="absolute -inset-4 rounded-[2rem] border border-slate-800/40 bg-gradient-to-b from-slate-900/20 to-transparent -rotate-3 pointer-events-none" />
            <div className="absolute -inset-4 rounded-[2rem] border border-slate-800/20 bg-gradient-to-t from-slate-900/10 to-transparent rotate-3 pointer-events-none" />

            {/* Main Interactive Frame */}
            <div className="relative group p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.1)]">
              {/* Top-Right Neon Tech Bracket Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/40 rounded-tr-xl pointer-events-none group-hover:border-cyan-400 transition-colors" />
              {/* Bottom-Left Neon Tech Bracket Accent */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/40 rounded-bl-xl pointer-events-none group-hover:border-cyan-400 transition-colors" />

              <img
                className="w-[260px] h-[260px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-xl object-cover grayscale-0 filter transition-all duration-700"
                src={image}
                alt="Ayasha Akter Portfolio Portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
