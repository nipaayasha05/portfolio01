import React from "react";
import { Link, Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const handleClick = (section) => {
    navigate(`/#${section}`);
  };

  return (
    <div className="w-full top-0 fixed text-white bg-gray-950 shadow-lg border-b-2 border-gray-600 z-50">
      <div className="container h-20 mx-auto max-w-7xl px-6 flex items-center justify-between">
        <div className="navbar-start">
          {location.pathname === "/" ? (
            <ScrollLink
              to="home"
              smooth
              offset={-100}
              duration={500}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 cursor-pointer"
            >
              Ayasha
            </ScrollLink>
          ) : (
            <button
              onClick={() => handleClick("home")}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 cursor-pointer"
            >
              Ayasha
            </button>
          )}
        </div>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              {location.pathname === "/" ? (
                <ScrollLink
                  to={item.to}
                  spy
                  smooth
                  offset={-100}
                  duration={500}
                  className="relative text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer text-slate-400 hover:text-white"
                  activeClass="text-white font-bold"
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleClick(item.to)}
                  className="relative text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer text-slate-400 hover:text-white"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="p-2 cursor-pointer text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-4 bg-gray-950 border border-white/10 rounded-2xl shadow-2xl"
          >
            {navItems.map((item) => (
              <li key={item.to}>
                {location.pathname === "/" ? (
                  <ScrollLink
                    to={item.to}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                    className="text-white hover:bg-white/5"
                    activeClass="bg-white/10"
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleClick(item.to)}
                    className="w-full text-left text-white hover:bg-white/5 px-4 py-2"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
