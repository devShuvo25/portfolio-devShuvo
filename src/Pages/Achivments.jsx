import { motion } from "framer-motion";
import { FaArrowRight, FaAward, FaGraduationCap, FaMedal } from "react-icons/fa";
import { Link } from "react-router";

const achievements = [
  {
    year: "2015",
    title: "Talentpool Board Scholarship",
    exam: "Primary Education Certificate (PEC)",
    icon: <FaMedal className="text-4xl text-yellow-500" />,
    desc: "Achieved Talentpool Board Scholarship in PEC 2015 for outstanding academic performance.",
  },
  {
    year: "2018",
    title: "Talentpool Board Scholarship",
    exam: "Junior School Certificate (JSC)",
    icon: <FaAward className="text-4xl text-indigo-500" />,
    desc: "Received Talentpool Board Scholarship in JSC 2018 for academic excellence and merit.",
  },
  {
    year: "2023",
    title: "General Board Scholarship",
    exam: "Higher Secondary Certificate (HSC)",
    icon: <FaGraduationCap className="text-4xl text-green-500" />,
    desc: "Honored with General Board Scholarship in HSC 2023 for strong academic results and consistency.",
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24"
      style={{ backgroundColor: "#282F37", color: "white" }} // Dark mode background
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          🏆 My <span className="text-[#12F7D6]">Scholarship</span>
        </motion.h2>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1F262E] rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 text-sm italic mt-1">
                {item.exam} — {item.year}
              </p>
              <p className="text-gray-300 mt-4 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
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
