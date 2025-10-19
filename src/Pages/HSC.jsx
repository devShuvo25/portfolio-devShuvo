import React from "react";
import bm1 from "../assets/bmcampusmain.jpg";
import bm2 from "../assets/bmcampus2.jpg";
import bmcampus from "../assets/bmcampus.jpg";
import GalleryDiv from "../components/gallery";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import GalleryDivHSC from "../components/gallery";

const HSC = () => {
  return (
    <section
      id="hsc"
      className="py-24 bg-gradient-to-tr from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
          My College Life —{" "}
          <span className="text-[#12F7D6]">Govt. BM College, Barishal</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* --- Photos Section --- */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="col-span-2 overflow-hidden rounded-3xl group relative shadow-lg">
              <img
                src={bm1}
                alt="BM College Main Gate"
                className="w-full h-64 md:h-80 object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {[bmcampus, bm2].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl group relative shadow-md"
              >
                <img
                  src={img}
                  alt={`BM College ${index + 1}`}
                  className="w-full h-40 md:h-44 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex justify-center items-center">
                  <p className="text-white text-sm font-medium">
                    {index === 0
                      ? "Academic Building"
                      : index === 1
                      ? "Campus Ground"
                      : `Campus Photo ${index + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* --- Text + Identity Section --- */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Higher Secondary Certificate (HSC)
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My time at{" "}
              <span className="font-semibold text-[#12F7D6]">
                Govt. Brojomohun College, Barishal
              </span>{" "}
              shaped not just my education but also my personality. Being part
              of one of the most historic and prestigious institutions in
              Bangladesh taught me discipline, creativity, and a deep respect
              for learning.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Surrounded by motivated students and inspiring teachers, I
              discovered the importance of consistency and self-growth. These
              years gave me a stronger identity — as{" "}
              <span className="font-semibold text-[#12F7D6]">Shuvo Mallik</span>
              , someone who believes in building a meaningful future through
              passion and dedication.
            </p>

            {/* --- Identity Card --- */}
            <div className="mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md hover:shadow-lg transition-shadow p-6 text-left space-y-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                🎓 My Academic Identity
              </h4>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Name:
                </span>{" "}
                Shuvo Mallik
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  College:
                </span>{" "}
                Govt. Brojomohun College, Barishal
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Board:
                </span>{" "}
                Barishal Education Board
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Group:
                </span>{" "}
                Science
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Passing Year:
                </span>{" "}
                2019
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Result:
                </span>{" "}
                GPA 5.00 / 5.00
              </p>
            </div>

            <a
              href="https://bmcollege.gov.bd/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-[#12F7D6] text-black font-medium rounded-sm transition-all shadow-md hover:bg-[#0fae9e]"
            >
              Explore
            </a>
          </motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <GalleryDivHSC />
                  <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="flex w-30 text-black  items-center gap-2 bg-custom-sec px-3 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Go Home <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default HSC;
