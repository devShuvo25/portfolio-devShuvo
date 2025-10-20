import { motion } from "framer-motion";
import aimImage from "../assets/dreams1.webp"; // Replace with your chosen image
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Aim() {
  return (
    <section
      id="aim-dream"
      className="py-24"
      style={{ backgroundColor: "#282F37", color: "white" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Image Side */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={aimImage}
            alt="Aim & Dream Illustration"
            className="w-full h-full rounded-3xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="md:w-1/2 space-y-6 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
             My Aim & <span className="text-[#12F7D6]">Dream</span>
          </h1>

          <p className="text-gray-300 leading-relaxed">
            I am Shuvo Mallik, an aspiring MERN stack developer and urban planner. My dream is to combine technology and urban planning to create sustainable, smart cities that improve people's lives and the environment.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Achieving this requires dedication, patience, and consistent hard work. I focus on learning new skills, building meaningful projects, and staying persistent through challenges, knowing that progress takes time.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My aim is to grow as a professional bridging technology and sustainable urban development. I continuously seek knowledge, tools, and experiences that equip me to make a meaningful impact.
          </p>
        </motion.div>
      </div>

      {/* Go Home Button */}
      <div className="flex justify-center mt-5">
        <Link
          to="/"
          className="flex w-30 text-black items-center gap-2 bg-custom-sec px-3 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Go Home <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
