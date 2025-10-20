import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaLaptopCode, FaLightbulb, FaArrowRight } from "react-icons/fa";
import interestImg from "../assets/intrests.jpg";
import { Link } from "react-router";

export default function InterestsSection() {
  return (
    <section
      id="interests"
      className="py-24 bg-[#282F37] text-white"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-10">
        My <span className="text-[#12F7D6]">Interests</span>
      </h2>

      <div className="mt-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">

        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={interestImg}
            alt="Interests Illustration"
            className="rounded-3xl shadow-lg object-cover w-full max-w-md h-[400px] border-[#12F7D6] border-[1px]"
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
          <p className="text-gray-300 text-lg">
            I’m passionate about exploring new ideas and bridging my technical and urban planning knowledge. 
            My interests shape my growth as both a planner and developer.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaMapMarkedAlt className="text-3xl text-[#12F7D6]" />
              <h3 className="text-2xl font-semibold text-white">
                Departmental Interests
              </h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              As an aspiring urban planner, I’m deeply interested in GIS, urban design, and sustainable development.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-3xl text-[#12F7D6]" />
              <h3 className="text-2xl font-semibold text-white">
                Out-of-Department Interests
              </h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Beyond my academic field, I enjoy building web apps with React and Firebase, growing as a full-stack developer.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-3xl text-[#12F7D6]" />
              <h3 className="text-2xl font-semibold text-white">
                Future Vision & Business
              </h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              I dream of creating tech-oriented urban solutions, merging planning and development for smart, sustainable innovations.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-sm bg-[#12F7D6] text-black font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Go Home <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
