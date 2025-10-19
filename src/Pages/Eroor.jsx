import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import errorImg from "../assets/icons8-error-94.png"; // use any 404 illustration image
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center px-6">
      
      {/* Animated Image */}
      <motion.img
        src={errorImg}
        alt="404 Not Found"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-72 md:w-20 mb-6 drop-shadow-xl"
      />

      {/* Text Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-gray-800 dark:text-white"
      >
        Oops! Page Not Found 😢
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl text-lg"
      >
        The page you’re looking for doesn’t exist or may have been moved.  
        Let’s get you back on the right track!
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          <FaHome size={18} />
          Back to Home
        </Link>
      </motion.div>

    </section>
  );
}
