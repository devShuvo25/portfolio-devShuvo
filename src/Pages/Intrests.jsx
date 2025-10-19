import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaLaptopCode,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import interestImg from "../assets/intrests.jpg"; // Replace with your relevant image
import { Link } from "react-router";

export default function InterestsSection() {
  return (
    <section
      id="interests"
      className="py-24 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {" "}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
        My <span className="text-[#12F7D6]">Interests</span>
      </h2>
      <div className="mt-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-normal gap-12">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <img
            src={interestImg}
            alt="Interests Illustration"
            className="rounded-3xl shadow-lg object-cover w-full h-[400px] border-[#12F7D6] border-[1px]"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-8"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I’m passionate about exploring new ideas and bridging my technical
            and urban planning knowledge. My interests span across
            **departmental expertise and personal innovation, shaping my growth
            as both a planner and developer.
          </p>

          {/* Departmental Interest */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-3xl text-[#12F7D6]" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Departmental Interests
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              As an aspiring urban planner, I’m deeply interested in Geographic
              Information Systems (GIS), urban design, and sustainable
              development. My goal is to become a GIS expert, using data-driven
              spatial analysis to solve real-world urban challenges.
            </p>
          </div>

          {/* Out-of-Department Interest */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-3xl text-[#12F7D6]" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Out-of-Department Interests
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Beyond my academic field, I’m passionate about web development and
              software engineering. I enjoy building modern web apps with React
              and Firebase, and I aim to grow as a full-stack developer.
            </p>
          </div>

          {/* Future Vision / Entrepreneurship */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-3xl text-[#12F7D6]" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Future Vision & Business
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              I dream of starting my own tech-oriented urban solutions business,
              merging my skills in planning and development to create smart,
              sustainable innovations that truly make a difference.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center mt-5">
        <Link
          to="/"
          className="flex w-30  items-center gap-2 bg-custom-sec px-3 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Go Home <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
