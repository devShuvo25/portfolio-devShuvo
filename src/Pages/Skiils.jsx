import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaProjectDiagram } from "react-icons/fa";

export default function SkillsCardsSection() {
  const skills = [
    {
      name: "HTML & CSS",
      icon: <FaHtml5 size={40} className="text-orange-600" />,
      description: "Building responsive and semantic web pages with clean and modern design.",
    },
    {
      name: "JavaScript & React",
      icon: <FaJs size={40} className="text-yellow-500" />,
      description: "Creating interactive web apps and dynamic UI with React and JS.",
    },
    {
      name: "Node.js & Express",
      icon: <FaNodeJs size={40} className="text-green-600" />,
      description: "Developing backend APIs and server-side logic efficiently.",
    },
    {
      name: "MongoDB & Firebase",
      icon: <FaDatabase size={40} className="text-blue-600" />,
      description: "Database management and real-time storage for scalable apps.",
    },
    {
      name: "MERN Stack Projects",
      icon: <FaProjectDiagram size={40} className="text-purple-600" />,
      description: "Building full-stack applications combining front-end and backend technologies.",
    },
    {
      name: "Urban & Regional Planning",
      icon: <FaProjectDiagram size={40} className="text-indigo-600" />,
      description: "Knowledge of sustainable urban design and spatial planning.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10">
           My Professional <span className="text-[#12F7D6]">Skills</span>
        </h2>
            <p className="mb-10">A blend of coding, design, and urban planning skills that power my projects and professional journey.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
