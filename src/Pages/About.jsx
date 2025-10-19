import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/me.jpg";
import {
  MdOutlineFactCheck,
} from "react-icons/md";
import {
  FaCity,
  FaUserGraduate,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { CiGlobe } from "react-icons/ci";
import { GrUserSettings } from "react-icons/gr";
import { GiInspiration } from "react-icons/gi";
import FindMeSection from "../components/findMe";

const About = () => {
  const [isClicked,setIsClicked]= useState(false);
  return (
    <section className="bg-[#1C232B] text-white py-20 px-6 md:px-20">
      {/* Main About Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={profile}
            alt="Shuvo Mallik"
            className="rounded-2xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96 border-4 border-[#12F7D6]"
          />
        </div>

        {/* About Content */}
        <div className="w-full md:w-2/3 space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#12F7D6]">Me</span>
          </h2>
          <p className="text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold text-[#12F7D6]">Shuvo Mallik</span> — a
            <span className="text-[#12F7D6] font-medium"> MERN Stack Developer </span> and an
            <span className="text-[#12F7D6] font-medium"> aspiring Urban Planner</span> from{" "}
            <span className="font-medium">Khulna University of Engineering & Technology (KUET)</span>.
          </p>

          <p className="text-sm opacity-80 leading-relaxed">
            I’m passionate about connecting technology and city design. My vision is to
            use modern development tools and planning principles to create sustainable,
            efficient, and user-centered solutions — both in digital and urban spaces.
          </p>

          <p className="text-sm opacity-80 leading-relaxed">
            From building interactive web apps to designing livable cities, I love solving
            problems through creativity, patience, and logic. I’m a calm learner who believes
            every project is an opportunity to grow.
          </p>

          <p className="italic text-[#12F7D6] font-medium">
            "Technology and planning aren’t separate — they’re two sides of building a better world."
          </p>
        </div>
      </motion.div>

      {/* Info Table + Map */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-16 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Info Table */}
        <div className="overflow-x-auto w-full lg:w-1/2">
          <table className="table-auto w-full border-collapse bg-[#242B33] rounded-xl shadow-md text-left">
            <tbody>
              {[
                ["Full Name", "Shuvo Mallik"],
                ["University", "Khulna University of Engineering & Technology (KUET)"],
                ["Department", "Urban and Regional Planning (URP)"],
                ["Email", "shuvomallik999@gamil.com"],
                ["Mobile", "+8801610801482"],
                ["Location", "Khulna, Bangladesh"],
              ].map(([label, value], i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#2E3740]" : "bg-[#1F262E]"
                  } border-b border-gray-700`}
                >
                  <th className="px-6 py-3 font-semibold text-[#12F7D6]">
                    {label}
                  </th>
                  <td className="px-6 py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <iframe
            title="My Location - Khulna, Bangladesh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.919835252651!2d89.50206187511991!3d22.899821879257454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8518d2d29b8b%3A0x1e8b78a07f81d8b!2sKhulna%20University%20of%20Engineering%20%26%20Technology%20(KUET)!5e0!3m2!1sen!2sbd!4v1729260149753!5m2!1sen!2sbd"
            width="100%"
            height="340"
            className="rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Quick Facts */}
      <motion.div
        className="max-w-6xl mx-auto mt-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <MdOutlineFactCheck size={25} className="text-[#12F7D6]" /> Quick Facts
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li className="flex items-center gap-2">
            <FaUserGraduate className="text-[#12F7D6]" /> Studying Urban & Regional Planning at KUET
          </li>
          <li className="flex items-center gap-2">
            <VscVscode className="text-[#12F7D6]" /> MERN Stack Developer
          </li>
          <li className="flex items-center gap-2">
            <FaCity className="text-[#12F7D6]" /> Interested in Smart City Design
          </li>
          <li className="flex items-center gap-2">
            <CiGlobe className="text-[#12F7D6]" /> From Bangladesh
          </li>
          <li className="flex items-center gap-2">
            <GrUserSettings className="text-[#12F7D6]" /> Loves Problem Solving & Design Thinking
          </li>
          <li className="flex items-center gap-2">
            <GiInspiration className="text-[#12F7D6]" /> Inspired by Self Motivation
          </li>
        </ul>
      </motion.div>

      {/* Bottom Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#12F7D6] text-black font-medium rounded-full shadow-md hover:bg-[#0ebea6] transition-all duration-300"
        >
          View My Work
        </a>
        <a
        
          onClick={() => setIsClicked(!isClicked)}
          className="px-6 py-3 border border-[#12F7D6] text-[#12F7D6] hover:cursor-pointer rounded-full hover:bg-[#12F7D6] hover:text-black transition-all duration-300"
        >
          Find Me
        </a>
      </div>
      {
        isClicked? <FindMeSection/> : ''
      }
    </section>
  );
};

export default About;
