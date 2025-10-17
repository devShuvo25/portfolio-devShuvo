import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function FindMeSection() {
  return (
    <section
      id="findme"
      className="py-20 "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Find Me
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I’m always open to collaborations, discussions, and creative ideas.  
          Feel free to connect with me — whether it’s for tech, urban planning, or just a friendly chat!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 shadow-md transition-all duration-300"
          >
            <FaFacebook size={20} />
            <span>Facebook</span>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-900 shadow-md transition-all duration-300"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800 shadow-md transition-all duration-300"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:shuvo.mallik@example.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 shadow-md transition-all duration-300"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
        </div>

        {/* Location Card */}
       
      </div>
    </section>
  );
}
