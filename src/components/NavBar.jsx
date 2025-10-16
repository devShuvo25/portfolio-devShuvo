import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-custom-primary text-[rgb(255,255,253)] shadow-[1px_0.5px_10px] shadow-gray-500">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <FaCode color="#12F7D6" /> Dev Shuvo
        </a>
      </div>

      <div className="navbar-end flex gap-20">
        <ul className="menu menu-horizontal px-1 flex gap-12 items-center justify-between">
          <Link
            className="hover:text-[#12F7D6] relative hover:underline ease-in duration-100 text-[16px]"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#12F7D6] relative hover:underline ease-in duration-100 text-[16px]"
            to="/home"
          >
            About Me
          </Link>

          {/* Education dropdown */}
          <div className="relative group">
            <Link
              className="hover:text-[#12F7D6] relative hover:underline ease-in duration-100 text-[16px]"
              to="/home"
            >
              Education
            </Link>

            <div className="absolute left-0  hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-48 z-10 transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
              <ul className="py-2 flex flex-col">
                <Link className="drop-down-li">SSC</Link>
                <Link className="drop-down-li">HSC</Link>
                <Link className="drop-down-li">Achievements</Link>
                <Link className="drop-down-li">Skills</Link>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <Link
              className="hover:text-[#12F7D6] relative hover:underline ease-in duration-100 text-[16px]"
              to="/home"
            >
              Career
            </Link>

            <div className="absolute left-0  hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-48 z-10 transition-all duration-300 origin-top scale-y-0 group-hover:scale-y-100">
               <ul className="py-2 flex flex-col">
                <Link className="drop-down-li">SSC</Link>
                <Link className="drop-down-li">HSC</Link>
                <Link className="drop-down-li">Achievements</Link>
                <Link className="drop-down-li">Skills</Link>
              </ul>
            </div>
          </div>
        </ul>
        <a className="btn shadow-none text-white border-none bg-custom-sec px-5">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
