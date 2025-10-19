import { motion } from "framer-motion";
import { FaRegSadCry, FaTrophy } from "react-icons/fa";

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8"
        >
          🏅 Awards & Recognition
        </motion.h2>

        {/* Empty State Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 max-w-xl mx-auto flex flex-col items-center justify-center space-y-4"
        >
          <FaRegSadCry className="text-5xl text-gray-400 dark:text-gray-500" />
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            No Awards Yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            I haven’t received any formal awards yet, but I’m constantly working hard,  
            learning new skills, and striving for excellence.  
            Every small achievement brings me closer to the day this section shines 🌟
          </p>
        </motion.div>

        {/* Motivational Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-gray-600 dark:text-gray-400"
        >
          <FaTrophy className="inline text-yellow-500 mr-2" />
          <span className="text-lg italic">
            “The journey itself is the biggest award.”
          </span>
        </motion.div>
      </div>
    </section>
  );
}
