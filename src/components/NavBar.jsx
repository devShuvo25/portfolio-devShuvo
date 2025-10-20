import React, { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router"; // ✅ FIXED (was "react-router" before)

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* ✅ Full width fixed navbar */}
      <nav className="bg-custom-primary text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center h-16">
          
          {/* Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>

            <Link to="/" className="flex items-center gap-2 text-xl font-bold uppercase">
              <FaCode color="#12F7D6" /> Dev <span className="text-[#12F7D6]">Shuvo</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8 items-center">
            <Link to="/home" className="hover:text-[#12F7D6] transition-colors duration-200">
              Home
            </Link>

            {/* About Me Dropdown */}
            <div className="relative group">
              <Link
                to="/about-me"
                className="hover:text-[#12F7D6] cursor-pointer transition-colors duration-200"
              >
                About Me
              </Link>
              <div className="absolute left-0  hidden group-hover:flex flex-col bg-white text-gray-800 rounded-md shadow-lg w-40">
                <Link to="/hobbies" className="px-4 py-2 hover:bg-gray-100 hover:rounded-t-md">Hobbies</Link>
                <Link to="/intrests" className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-md">Interests</Link>
              </div>
            </div>

            {/* Education Dropdown */}
            <div className="relative group">
              <span className="hover:text-[#12F7D6] cursor-pointer transition-colors duration-200">
                Education
              </span>
              <div className="absolute left-0  hidden group-hover:flex flex-col bg-white text-gray-800 rounded-md shadow-lg w-48">
                <Link to="/education-ssc" className="px-4 py-2 hover:bg-gray-100 hover:rounded-t-md">SSC</Link>
                <Link to="/education-hsc" className="px-4 py-2 hover:bg-gray-100">HSC</Link>
                <Link to="/education-burp" className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-md">Undergraduate</Link>
              </div>
            </div>

            {/* Achievements Dropdown */}
            <div className="relative group">
              <span className="hover:text-[#12F7D6] cursor-pointer transition-colors duration-200">
                Achievements
              </span>
              <div className="absolute left-0  hidden group-hover:flex flex-col bg-white text-gray-800 rounded-md shadow-lg w-40">
                <Link to="/scholarship" className="px-4 py-2 hover:bg-gray-100 hover:rounded-t-md">Scholarship</Link>
                <Link to="/award" className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-md">Award</Link>
              </div>
            </div>

            {/* Career Dropdown */}
            <div className="relative group">
              <span className="hover:text-[#12F7D6] cursor-pointer transition-colors duration-200">
                Career
              </span>
              <div className="absolute left-0  hidden group-hover:flex flex-col bg-white text-gray-800 rounded-md shadow-lg w-48">
                <Link to="/aim" className="px-4 py-2 hover:bg-gray-100 hover:rounded-t-md">Aim</Link>
                <Link to="/skills" className="px-4 py-2 hover:bg-gray-100">Skills</Link>
                <Link to="/projects" className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-md">Projects</Link>
              </div>
            </div>
          </div>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1gNUexHw9eR_fBh0K437HS5T8MgguX0yp/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 lg:px-5 py-2 bg-custom-sec text-black rounded-lg hover:bg-[#0ebea6] transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700 uppercase">
          <h2 className="text-xl font-bold">
            Dev <span className="text-[#12F7D6]">Shuvo</span>
          </h2>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-4">
          <Link onClick={() => setSidebarOpen(false)} to="/home">Home</Link>

          <div className="flex flex-col">
            <Link to="/about-me" className="font-medium">About Me</Link>
            <div className="flex flex-col ml-4 mt-1 space-y-1">
              <Link to="/hobbies" onClick={() => setSidebarOpen(false)}>Hobbies</Link>
              <Link to="/intrests" onClick={() => setSidebarOpen(false)}>Interests</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-medium">Education</span>
            <div className="flex flex-col ml-4 mt-1 space-y-1">
              <Link to="/education-ssc" onClick={() => setSidebarOpen(false)}>SSC</Link>
              <Link to="/education-hsc" onClick={() => setSidebarOpen(false)}>HSC</Link>
              <Link to="/education-burp" onClick={() => setSidebarOpen(false)}>Undergraduate</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-medium">Achievements</span>
            <div className="flex flex-col ml-4 mt-1 space-y-1">
              <Link to="/scholarship" onClick={() => setSidebarOpen(false)}>Scholarship</Link>
              <Link to="/award" onClick={() => setSidebarOpen(false)}>Award</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-medium">Career</span>
            <div className="flex flex-col ml-4 mt-1 space-y-1">
              <Link to="/aim" onClick={() => setSidebarOpen(false)}>Aim</Link>
              <Link to="/skills" onClick={() => setSidebarOpen(false)}>Skills</Link>
              <Link to="/projects" onClick={() => setSidebarOpen(false)}>Projects</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
