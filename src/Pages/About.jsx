import React from 'react';
import ScrollAnimation from '../utils/ScrollAnimation';
import { motion } from 'framer-motion';
import profile from '../assets/me.jpg'
import { MdOutlineFactCheck } from 'react-icons/md';
import { FaCity, FaUserGraduate } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { CiGlobe } from 'react-icons/ci';
import { GrUserSettings } from 'react-icons/gr';
import { GiInspiration } from 'react-icons/gi';



const About = () => {
    return (
        <div className="py-20 px-6 md:px-20 bg-[#282F37] text-white">
            <motion.div
            className="w-full flex flex-col items-center justify-center space-y-6 text-white"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            
            >
                <div className="max-w-5xl mx-auto">
          {/* Title */}
          {/* Main Content */}
          <div className="flex flex-col md:flex-row  gap-10">
            {/* Image */}
            <div className="relative w-full md:w-1/3 flex justify-center">
              <img
                src={profile}
                alt="Shuvo Mallik"
                className="rounded-2xl shadow-lg object-cover w-64 h-64 md:w-80 md:h-80 "
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-2/3 space-y-6  leading-relaxed">
                      <h2 className="text-4xl md:text-5xl font-bold mb-8 ">
            About <span className="text-[#12F7D6]">Me</span>
          </h2>
              <p className="text-lg">
                Hi, I’m <span className="font-semibold text-[#12F7D6]">Shuvo Mallik</span> — a passionate
                <span className="font-medium text-[#12F7D6]"> MERN Stack Developer </span> and an
                <span className="font-medium text-[#12F7D6]"> aspiring Urban Planner</span> from
                <span className="font-medium"> KUET (Khulna University of Engineering & Technology)</span>.
              </p>

              <p className="text-sm">
                My journey started with curiosity — how technology can make cities smarter, sustainable,
                and more human. Over time, I began blending my urban planning background with modern
                software development, creating meaningful solutions for people and places.
              </p>

              <p className="text-sm">
                Beyond coding, I love exploring city design, analyzing how people interact with their
                environment, and visualizing ideas that shape better communities. Whether it’s a
                responsive web app or a city model — I aim to design things that make life simpler and smarter.
              </p>

              <p className="text-sm">
                Personally, I’m a calm thinker, a learner who values creativity, empathy, and growth.
                I believe every challenge is a chance to reinvent myself — and that’s the story my
                website tells.
              </p>
            </div>
          </div>
            <div className='flex justify-between items-center gap-2 py-10'>
                {/* --- PERSONAL INFO TABLE --- */}
          <div className="overflow-x-auto flex justify-center">
            <table className="table-auto border-collapse text-left text-gray-700 dark:text-gray-300 shadow-md rounded-lg overflow-hidden">
              <tbody>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-3 font-semibold border border-gray-300 dark:border-gray-700">
                    Full Name
                  </th>
                  <td className="px-6 py-3 border border-gray-300 dark:border-gray-700">
                    Shuvo Mallik
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-3 font-semibold border border-gray-300 dark:border-gray-700">
                    University
                  </th>
                  <td className="px-6 py-3 border border-gray-300 dark:border-gray-700">
                    Khulna University of Engineering & Technology (KUET)
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-3 font-semibold border border-gray-300 dark:border-gray-700">
                    Department
                  </th>
                  <td className="px-6 py-3 border border-gray-300 dark:border-gray-700">
                    Urban and Regional Planning (URP)
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-3 font-semibold border border-gray-300 dark:border-gray-700">
                    University Roll
                  </th>
                  <td className="px-6 py-3 border border-gray-300 dark:border-gray-700">
                    [Your Roll Number Here]
                  </td>
                </tr>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-3 font-semibold border border-gray-300 dark:border-gray-700">
                    Email
                  </th>
                  <td className="px-6 py-3 border border-gray-300 dark:border-gray-700">
                    shuvo.mallik@example.com
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-3 font-semibold border border-gray-300 dark:border-gray-700">
                    Location
                  </th>
                  <td className="px-6 py-3 border border-gray-300 dark:border-gray-700">
                    Khulna, Bangladesh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

                 <iframe
            title="My Location - Khulna, Bangladesh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.730206540366!2d89.55608381498178!3d22.84564172603632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9a83330b8fbf%3A0x132db2f1438f6a23!2sKhulna!5e0!3m2!1sen!2sbd!4v1697045858147!5m2!1sen!2sbd"
            width="50%"
            height='340px'
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            </div>
            <div className='flex '>
                <div className='w-1/2'></div>
                              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <MdOutlineFactCheck />Quick Facts</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                  <li className='flex items-center gap-2'><FaUserGraduate size={20} /> Studying Urban & Regional Planning at KUET</li>
                  <li className='flex items-center gap-2'><VscVscode size={20} /> MERN Stack Developer</li>
                  <li className='flex items-center gap-2'><FaCity size={20}/> Interested in Smart City Design</li>
                  <li className='flex gap-2 items-center'><CiGlobe size={20}/> From Bangladesh</li>
                  <li className='flex items-center gap-2'><GrUserSettings size={20} />Loves problem-solving & design thinking</li>
                  <li className='flex items-center gap-2'><GiInspiration size={20} />Inspired by Self Motivation</li>
                </ul>
              </div>
            </div>
          {/* Bottom Quote */}
          <div className="mt-12 text-center">
            <blockquote className="italic text-lg max-w-3xl mx-auto">
              “Technology and planning aren’t separate — they’re two sides of building a better world.”
            </blockquote>
            <p className="mt-2 font-semibold text-[#12F7D6]">— Shuvo Mallik</p>
          </div>
        </div>
            </motion.div>
                      <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#12F7D6]  text-white rounded-full shadow-md transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border  hover:bg-blue-50 dark:hover:bg-gray-700 rounded-full transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
    );
};

export default About;