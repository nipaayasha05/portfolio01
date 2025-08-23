import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2   border-b-gray-300  text-lg text-sky-100"
              : "text-lg text-sky-100"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-2   border-b-gray-300  text-lg text-sky-100"
              : "text-lg text-sky-100"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "border-b-2   border-b-gray-300  text-lg text-sky-100"
              : "text-lg text-sky-100"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive
              ? "border-b-2   border-b-gray-300  text-lg text-sky-100"
              : "text-lg text-sky-100"
          }
        >
          Education
        </NavLink>
      </li>

      <>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "border-b-2   border-b-gray-300 text-lg text-sky-100"
                : "text-lg text-sky-100"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-2   border-b-gray-300 text-lg  text-sky-100"
                : "text-lg text-sky-100"
            }
          >
            Contact
          </NavLink>
        </li>
      </>
    </>
  );

  return (
    <div className="navbar h-20   top-0 fixed text-white  bg-gray-900 shadow-lg  2 border-gray-600 z-10 ">
      <div className="flex  container mx-auto  justify-between max-w-6xl ">
        <div className="navbar-start   ">
          {/* <div className="dropdown ">
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
              className="menu menu-sm bg-gray-900 dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow  "
            >
              {links}
            </ul>
          </div>  */}
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-fuchsia-400">
            Ayasha
          </p>
        </div>
        {/* <div className="navbar-center hidden lg:flex md:flex  font-semibold">
          <ul className="menu menu-horizontal px-1  ">{links}</ul>
        </div> */}

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex md:flex  font-semibold">
            <ul className="menu menu-horizontal px-1  ">{links}</ul>
          </div>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="    lg:hidden md:hidden "
            >
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
              className="menu menu-sm bg-gray-900 dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow  "
            >
              {links}
            </ul>
          </div>
          {/* <NavLink
            to="/resume"
            className="btn hover:from-violet-700 hover:to-fuchsia-500 text-white bg-gradient-to-r from-violet-500 border-none to-fuchsia-400"
          >
            Resume
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
