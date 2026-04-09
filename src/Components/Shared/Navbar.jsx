import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-start md:items-center">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => `
        font-semibold ${isActive ? "text-green-400 border border-green-500" : ""}
          `}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/books"}
            className={({ isActive }) => `
        font-semibold ${isActive ? "text-green-400 border border-green-500" : ""}
          `}
          >
            Listed Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/booksdsd"}
            className={({ isActive }) => `
        font-semibold ${isActive ? "text-green-400 border border-green-500" : ""}
          `}
          >
            {" "}
            Pages to Read{" "}
          </NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <h2 className="text-2xl font-bold">Book Vibe</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end  gap-4 relative">
        <label className="toggle bg-primary-content text-base-content">
          <input type="checkbox" value="dark" className="theme-controller" />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              // className="text-blue-400"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="text-green-400"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
        <div className=" flex-col md:flex-row right-15 hidden md:flex  gap-4">
        <a className="btn btn-success text-white">Sign In</a>
        <a className="btn btn-accent text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
