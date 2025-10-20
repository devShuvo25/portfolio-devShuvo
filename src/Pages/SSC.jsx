import { motion } from "framer-motion";
import schoolImg1 from "../assets/schools campus.jpg";
import schoolImg2 from "../assets/sscgroup.jpg";
import schoolImg3 from "../assets/sscgate.jpg";
import GallerySSc from "../components/GalleryDivSSC";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export default function SscSection() {
  return (
    <section id="ssc" className="py-24 bg-[#282F37] text-white">
<div className="text-center mb-5">
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
            School Life
          </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#12F7D6]">
            Syedkathi Union Secondary School
          </h3>
</div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 grid grid-cols-2 gap-4"
        >
          
          <img
            src={schoolImg1}
            alt="Syedkathi School 1"
            className="rounded-3xl shadow-lg w-full h-[250px] object-cover col-span-2"
          />
          <img
            src={schoolImg2}
            alt="Syedkathi School 2"
            className="rounded-2xl shadow-md w-full h-[200px] object-cover"
          />
          <img
            src={schoolImg3}
            alt="Syedkathi School 3"
            className="rounded-2xl shadow-md w-full h-[200px] object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-8"
        >

          <h3 className="text-2xl font-semibold text-gray-200">
            Syedkathi Union Secondary School
          </h3>
          <p className="text-gray-400 italic">
            Located in Banaripara, Barishal
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            My journey at <strong>Syedkathi Union Secondary School</strong> was
            where my foundation was built — the place that shaped my curiosity,
            discipline, and teamwork. Surrounded by a friendly environment and
            inspiring teachers, I developed both academic skills and a strong
            sense of purpose.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            During this period, I discovered my love for learning — whether it
            was science experiments, cultural activities, or spending time with
            classmates after school. These memories remain a vital part of who I
            am today.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <button className="px-6 py-3 rounded-sm bg-[#12F7D6] text-black font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300">
              Explore School
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div>
        <GallerySSc />
      </div>

      <div className="flex justify-center mt-8">
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
