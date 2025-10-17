import React from "react";
import { motion } from "framer-motion";
import {
  FaBookReader,
  FaRegLightbulb,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";

import myImage1 from "../assets/myImage2.jpg";
import myImage2 from "../assets/myImage1.jpg";

const HomeContent = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 p-6 lg:p-10">
      
      {/* Left Side: Education, Skills, Projects */}
      <motion.div
        className="lg:w-1/2 flex flex-col gap-8"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Education Card */}
        <div className="bg-[#20252c] border border-[#12F7D6] rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold flex items-center gap-2 border-l-4 border-[#12F7D6] pl-4 pb-2 text-[#12F7D6]">
            <FaBookReader /> Education
          </h2>
          <p className="mt-2 text-gray-300">
            I have pursued my education with dedication and a focus on building
            a strong foundation for my career in software development and urban planning.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <span onClick='education/ssc' className="font-bold text-[#12F7D6]">SSC - 2021:</span> Syedkathi Union Secondary School, Banaripara, Barishal
            </li>
            <li>
              <span className="font-bold text-[#12F7D6]">HSC - 2023:</span> Govt. B.M. College, Barishal
            </li>
            <li>
              <span className="font-bold text-[#12F7D6]">BURP:</span> Khulna University of Engineering and Technology (KUET), Khulna, Bangladesh
            </li>
          </ul>
        </div>

        {/* Skills Card */}
        <div className="bg-[#20252c] border border-[#12F7D6] rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold flex items-center gap-2 border-l-4 border-[#12F7D6] pl-4 pb-2 text-[#12F7D6]">
            <FaRegLightbulb /> Skills
          </h2>
          <p className="mt-2 text-gray-300">
            I am proficient in full-stack web development, particularly MERN stack, and continuously improve my skillset to deliver high-quality projects.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <span className="font-bold text-[#12F7D6]">Programming:</span> MERN Stack Apps & Web Development
            </li>
            <li>
              <span className="font-bold text-[#12F7D6]">Tools:</span> Git, VS Code, Figma, Firebase, Tailwind CSS
            </li>
          </ul>
        </div>

        {/* Projects Card */}
        <div className="bg-[#20252c] border border-[#12F7D6] rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold flex items-center gap-2 border-l-4 border-[#12F7D6] pl-4 pb-2 text-[#12F7D6]">
            <FaLaptopCode /> Projects
          </h2>
          <p className="mt-2 text-gray-300">
            I have developed a mix of academic and personal projects to sharpen my skills and apply practical solutions.
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <span className="font-bold text-[#12F7D6]">Academic:</span> University assignments, MERN stack mini-projects
            </li>
            <li>
              <span className="font-bold text-[#12F7D6]">Web Projects:</span> Portfolio website, E-commerce apps, Blogging platform
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Right Side: Image + Stats */}
      <motion.div
        className="lg:w-1/2 relative flex flex-col items-center gap-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlapping Images */}
        <div className="lg:relative w-full h-[400px] ">
          <img
            className="lg:absolute top-0 left-10 w-full md:w-72 h-full lg:h-74 border-[1px] border-[#12F7D6] rounded-2xl shadow-lg object-cover"
            src={myImage1}
            alt="Profile 1"
          />
          <img
            className="absolute hidden lg:block border-[1px] -bottom-30 lg:bottom-0 right-0 w-full md:w-72 rounded-2xl shadow-lg object-cover"
            src={myImage2}
            alt="Profile 2"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 w-full text-center">
          <div className="bg-[#20252c] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <FaLaptopCode size={30} className="mx-auto text-[#12F7D6]" />
            <h3 className="text-4xl font-bold text-[#12F7D6] mt-2">50+</h3>
            <p className="text-gray-300 mt-1">Projects</p>
          </div>
          <div className="bg-[#20252c] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <FaTools size={30} className="mx-auto text-[#12F7D6]" />
            <h3 className="text-4xl font-bold text-[#12F7D6] mt-2">10+</h3>
            <p className="text-gray-300 mt-1">Tools Skills</p>
          </div>
          <div className="bg-[#20252c] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <MdReviews size={30} className="mx-auto text-[#12F7D6]" />
            <h3 className="text-4xl font-bold text-[#12F7D6] mt-2">500+</h3>
            <p className="text-gray-300 mt-1">Review</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeContent;
