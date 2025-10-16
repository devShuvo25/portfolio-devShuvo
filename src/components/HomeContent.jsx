import React from "react";
import Card from "./Card";
import {
  FaCode,
  FaBookReader,
  FaRegLightbulb,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";
import ProjectLogo from "../assets/carrer-removebg-preview.png";
import myImage1 from "../assets/myImage2.jpg";
import myImage2 from "../assets/myImage1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { MdReviews } from "react-icons/md";
const HomeContent = () => {
  return (
    <div className="w-full flex justify-between p-10 ">
        <motion.div className="w-[45%] flex flex-col gap-10 justify-between"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
      <div className="flex flex-col gap-5 px-5">
        
        <div className="border-b-[1px] pb-5">
                    <h1 className="text-2xl flex items-center gap-2 border-l-[2px] border-[#12F7D6] ps-4 py-3"><FaBookReader
        /> <span className="text-[#12F7D6]">Education</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam voluptate animi labore beatae dolore possimus ab ea nemo doloribus.</p>
        <ol className="px-10 mt-3">
            <Link className="text-xl font-bold text-[#12F7D6]">SSC - 2021,</Link>
            <p>Syedkathi Union Secondary Scholl,</p>
            <p>Banaripara,Barishal</p>
        </ol>
        <ol className="ps-10 mt-3">
            <Link className="text-xl font-bold text-[#12F7D6]">HSC - 2023,</Link>
            <p>Govt. B.M. College,</p>
            <p>Barishal</p>
        </ol>
        <ol className="ps-10 mt-3">
            <Link className="text-xl font-bold text-[#12F7D6]">BURP</Link>
            <p>Khulna University of Engineering and Technology-[KUET]</p>
            <p>Khulna,Bangladesh</p>
        </ol>
        </div>
    <div className="flex flex-col gap-5 justify-between border-b-[1px] pb-5">
        <h1 className="text-2xl flex items-center gap-2 border-l-[2px] border-[#12F7D6] ps-4 py-3"><FaRegLightbulb/>
         <span className="text-[#12F7D6]">Skills</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam voluptate animi labore beatae dolore possimus ab ea nemo doloribus.</p>
        <ol className="ps-10">
            <h1 className="text-xl font-bold text-[#12F7D6]">Programming</h1>
            <li>MERN Stack Apps And Web Developent</li>
        </ol>
      </div>
    <div className="flex flex-col gap-5 justify-between">
        <h1 className="text-2xl flex items-center gap-2 border-l-[2px] border-[#12F7D6] ps-4 py-3"><FaRegLightbulb/>
         <span className="text-[#12F7D6]">Projects</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam voluptate animi labore beatae dolore possimus ab ea nemo doloribus.</p>
        <ol className="ps-10 space-y-1">
            
            <li >
                <h1 className="text-xl font-bold text-[#12F7D6]">Academimc</h1>
                <p>MERN Stack Apps And Web Developent</p>
            </li>
            <li className="mt-5">
                <h1 className="text-xl font-bold text-[#12F7D6]">Web Projects</h1>
                <p>MERN Stack Apps And Web Developent</p>
            </li>

        </ol>
      </div>
      

      </div>
        </motion.div>
        <motion.div className="w-[60%]  p-10 rounded-2xl"
        initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
      <div>
        <div className="relative w-full h-[400px] rounded-2xl text-center">
          <img className="h-[350px] z-10 border-[1px] rounded-2xl absolute right-30 top-50" src={myImage2} alt="" />
          <img className="h-[350px] border-[1px] rounded-2xl absolute top-7 left-20 " src={myImage1} alt="" />
        </div>
<div className="mt-60 flex justify-between items-center p-10  ">
        <div className="flex flex-col items-center justify-center gap-2">
            <FaLaptopCode size={30} />
        <h1 className="text-5xl font-bold text-[#12F7D6]">50+</h1>
        <p>Projects</p>
    </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <FaTools size={30} />
        <h1 className="text-5xl font-bold text-[#12F7D6]">10+</h1>
        <p>Tools Skills</p>
    </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <MdReviews size={30} />
        <h1 className="text-5xl font-bold text-[#12F7D6]">500+</h1>
        <p>Review</p>
    </div>
</div>
      </div>
        </motion.div>
    </div>
  );
};

export default HomeContent;
