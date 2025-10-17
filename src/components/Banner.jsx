import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import hero from "../assets/desktop-wallpaper-web-development.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Hero Image */}
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:mt-16 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen gap-10">
        
        {/* Text Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
            <span className="text-custom">Code</span> Today,{" "}
            <span className="text-custom">Plan</span> Tomorrow.
          </h1>
          <p className="text-sm md:text-lg opacity-80">
            Hi, I&apos;m <span className="text-custom font-semibold">Shuvo Mallik</span>, a MERN stack developer and aspiring urban planner,
            currently studying at KUET, URP. I love creating interactive web applications with React, Node.js, and MongoDB while exploring
            sustainable urban design. My goal is to blend technology with urban planning to create innovative, practical solutions for both
            digital and real-world environments.
          </p>
          <div className="text-center flex justify-center lg:justify-normal items-center">
                      <Link
            to="/about-me"
            className="flex w-30  items-center gap-2 bg-custom-sec px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
          >
            Explore <FaArrowRight />
          </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 mt-25 lg:mt-0  flex justify-center md:justify-end"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile}
            alt="Shuvo Mallik"
            className="h-[300px] lg:h-[400px] rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
