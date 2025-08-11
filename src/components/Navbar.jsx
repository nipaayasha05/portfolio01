import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2   border-b-gray-300  " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b-2   border-b-gray-300  " : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/top-car"
          className={({ isActive }) =>
            isActive ? "border-b-2   border-b-gray-300  " : ""
          }
        >
          Skills
        </NavLink>
      </li>

      <>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "border-b-2   border-b-gray-300  " : ""
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2   border-b-gray-300   " : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </>
    </>
  );

  return (
    <div className="navbar   top-0 fixed text-white  bg-gray-800 shadow-sm border-b-2 border-gray-600 z-10 ">
      <div className="flex  container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="    lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-gray-800 dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow  "
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex   font-semibold">
          <ul className="menu menu-horizontal px-1  ">{links}</ul>
        </div>

        <div className="navbar-end">
          <NavLink to="/resume" className="btn">
            Resume
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
