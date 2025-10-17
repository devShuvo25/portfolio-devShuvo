import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import academic1 from "../assets/academic1.jpg";
// import academic2 from "../assets/academic2.jpg";

// Sample data, replace with your projects
const developmentProjects = [
  {
    title: "Portfolio Website",
    description: "Responsive portfolio built with React, Tailwind, and Framer Motion.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Task Manager App",
    description: "Full-stack MERN app with authentication and task management features.",
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskmanager.com",
  },
];

const academicProjects = [
  {
    title: "Urban Planning Case Study",
    description: "Sustainable urban development strategies for Barishal city.",
    image: '',
  },
  {
    title: "Smart City Analysis",
    description: "Analyzed city traffic and infrastructure using GIS and AutoCAD.",
    image: '',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* ===== Development Projects ===== */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Web Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Web and software projects with live demos and GitHub repositories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
          {developmentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow hover:scale-[1.03] flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4 justify-center md:justify-start mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full text-sm hover:bg-gray-900 dark:hover:bg-gray-300 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-shadow shadow-md"
        >
          See More Web Projects
        </a>

        {/* ===== Academic Projects ===== */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-24 mb-6">
          Academic Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          University and academic projects with images and descriptions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-[1.03]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-shadow shadow-md"
        >
          See More Academic Projects
        </a>
      </div>
    </section>
  );
}
