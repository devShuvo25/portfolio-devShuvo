import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import hero from "../assets/desktop-wallpaper-web-development.jpg";
import { div, h1 } from "framer-motion/client";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className=" p-10
            text-white bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center 
            "
      >
        <div>
          <motion.div
            className="w-full flex flex-col items-center justify-center space-y-6 text-white"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="my-10">
              <h1 className="text-6xl font-extrabold shadow-2xl ">
                <span className="text-custom">Code</span> Today, <span className="text-custom">Plan </span>Tomorrow.
              </h1>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex my-20">
          <motion.div
            className="md:w-1/2 flex flex-col items-start justify-center space-y-6 text-white"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Hi, I'am Shuvo <span className="text-custom">Mallik</span>
            </h1>
            <p className="text-sm text-white opacity-75">
             A MERN stack developer and an aspiring urban
              planner, currently studying at KUET, URP. I enjoy creating
              interactive web applications using modern technologies like React,
              Node.js, and MongoDB, while also exploring the principles of urban
              planning to design sustainable and user-friendly spaces.I aim to
              blend technology with urban design to develop solutions that are
              both innovative and practical, whether online or in real-world
              environments.
            </p>
            <button className="flex items-center gap-2 bg-custom-sec text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Explore <FaArrowRight/>
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={profile}
              alt="Banner"
              className="h-[400px] rounded-[50%] border-[5px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Left Text */}

      {/* Right Image / Frame */}
    </section>
  );
};

export default Banner;
