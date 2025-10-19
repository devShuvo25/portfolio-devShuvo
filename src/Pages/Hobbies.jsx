import { motion } from "framer-motion";
import { FaCode, FaBook, FaMusic, FaGamepad, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
// import bookImg from "../assets/books.jpg";
// import gameImg from "../assets/gaming.jpg";
// import codingImg from "../assets/coding.jpg";
// import musicImg from "../assets/music.jpg";

const hobbies = [
  {
    title: "💻 Coding",
    icon: <FaCode className="text-4xl text-purple-600" />,
    desc: "I love to explore web development and create digital experiences using React, Firebase, and Tailwind. Coding helps me turn ideas into reality.",
    
  },
  {
    title: "📚 Reading Books",
    icon: <FaBook className="text-4xl text-blue-600" />,
    desc: "Reading expands my creativity and focus. I enjoy self-development and fiction books. Recently finished: ‘Atomic Habits’, ‘The Alchemist’.",
    
  },
  {
    title: "🎵 Singing Songs",
    icon: <FaMusic className="text-4xl text-pink-600" />,
    desc: "Music keeps my mind calm and refreshed. I love singing during leisure time — it helps me express emotions creatively.",
    
  },
  {
    title: "🎮 Gaming (Occasionally)",
    icon: <FaGamepad className="text-4xl text-green-600" />,
    desc: "I play games occasionally to relax. Some favorites: Valorant, FIFA, and GTA V — they bring balance between work and fun.",

  },
];

export default function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10"
        >
           My Hobbies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="p-6 space-y-3">
                <div className="flex justify-center">{hobby.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {hobby.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
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
