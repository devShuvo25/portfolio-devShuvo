// 🏫 Replace with your school photo
import school from "../assets/ssc school.jpeg";
import GalleryDivSSC from "../components/GalleryDivSSC";
import { motion } from "framer-motion";

export default function SSS() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
          My School Life —{" "}
          <span className="text-[#12F7D6]">
            Syedkathi Union Secondary School
          </span>
        </h2>

        {/* --- SSC Story Section --- */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* --- Text Story --- */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left space-y-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                Syedkathi Union Secondary School
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My SSC years were a defining period of my life — full of
                curiosity, creativity, and discovery. It was during this time
                that I found my passion for technology, problem-solving, and
                learning beyond textbooks.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Studying at{" "}
                <span className="font-semibold text-[#12F7D6]">
                  Syedkathi Union Secondary School
                </span>{" "}
                under the <span className="font-semibold">Jessore Education Board</span> gave me a
                solid foundation for analytical thinking and the drive to
                explore bigger challenges ahead.
              </p>

              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Passing Year:</span> 2021
                </p>
                <p>
                  <span className="font-semibold">Group:</span> Science
                </p>
                <p>
                  <span className="font-semibold">Result:</span>{" "}
                  <span className="text-[#12F7D6] font-semibold">GPA 5.00 / 5.00</span>
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-[#12F7D6] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                View School on Map
              </a>
            </motion.div>

            {/* --- School Photo Card --- */}
            <motion.div
              className="w-full md:w-1/2 relative group"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src={school}
                  alt="School"
                  className="w-full h-80 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay Info on Hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-4">
                <h4 className="text-2xl font-semibold text-white mb-2">
                  Syedkathi Union Secondary School
                </h4>
                <p className="text-gray-200">Jessore Education Board</p>
                <p className="text-gray-300">Barishal, Bangladesh</p>
              </div>
            </motion.div>
          </div>

          {/* --- Gallery Section --- */}
          <GalleryDivSSC />
        </div>
      </div>
    </section>
  );
}
