import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-slate-800 ">
      <footer className="footer sm:footer-horizontal bg-slate-800 text-neutral-content items-center p-4 container mx-auto">
        <aside className="grid-flow-col items-center">
          <p>Ayasha | Fronted Developer</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a></a>

          <a href="https://github.com/nipaayasha05" target="_blank">
            <BsGithub size={30} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/mstayashaakter/" target="_blank">
            <BsLinkedin size={30} color="white" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
