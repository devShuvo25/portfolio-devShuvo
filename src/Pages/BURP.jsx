import React from "react";
import kuet1 from "../assets/kuet5.jpg";
import kuet2 from "../assets/kuet2.jpg";
import kuet3 from "../assets/kuet4.jpg";
import GalleryDiv from "../components/gallery";
import { motion } from "framer-motion";

export default function UGSection() {
  return (
    <section
      id="undergraduate"
      className="py-24 bg-gradient-to-tr from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
          🏫 Undergraduate Life —{" "}
          <span className="text-indigo-600">KUET URP</span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* --- University Photos --- */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="col-span-2 overflow-hidden rounded-3xl group relative shadow-lg">
              <img
                src={kuet1}
                alt="KUET Campus"
                className="w-full h-64 md:h-80 object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex justify-center items-center">
                <p className="text-white text-lg font-semibold">
                  KUET Campus Main Gate
                </p>
              </div>
            </div>

            {[kuet2, kuet3].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl group relative shadow-md"
              >
                <img
                  src={img}
                  alt={`KUET ${index + 2}`}
                  className="w-full h-40 md:h-44 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex justify-center items-center">
                  <p className="text-white text-sm font-medium">
                    {index === 0 ? "URP Department" : "Campus Event"}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* --- Text + Identity --- */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Bachelor’s in Urban & Regional Planning
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am currently pursuing my undergraduate studies in{" "}
              <span className="font-semibold text-indigo-600">
                Urban & Regional Planning (URP)
              </span>{" "}
              at{" "}
              <span className="font-semibold text-blue-600">
                Khulna University of Engineering & Technology (KUET)
              </span>
              . This journey has deepened my interest in designing sustainable
              urban spaces while improving my technical and problem-solving
              skills.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              KUET has been a place of immense learning, inspiration, and
              collaboration. The projects and courses have shaped my perspective
              on urban planning and digital solutions for smarter cities.
            </p>

            {/* --- Identity Card --- */}
            <div className="mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md hover:shadow-lg transition-shadow p-6 text-left space-y-2">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                🎓 My University Identity
              </h4>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Name:
                </span>{" "}
                Shuvo Mallik
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  University:
                </span>{" "}
                KUET
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Department:
                </span>{" "}
                Urban & Regional Planning (URP)
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  Session:
                </span>{" "}
                2019 - Present
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  CGPA:
                </span>{" "}
                3._ _ (so far)
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=KUET"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-all shadow-md"
            >
              View KUET on Map
            </a>
          </motion.div>
        </div>

        {/* --- Gallery Section --- */}
        <GalleryDiv />
      </div>
    </section>
  );
}
