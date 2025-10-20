import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function FindMeSection() {
  return (
    <section
      id="contact-me"
      className="py-20 bg-[#282F37] text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Find Me
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I’m always open to collaborations, discussions, and creative ideas.  
          Feel free to connect with me — whether it’s for tech, urban planning, or just a friendly chat!
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.facebook.com/shuvo999a"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-300"
          >
            <FaFacebook size={20} />
            <span>Facebook</span>
          </a>

          <a
            href="https://github.com/devShuvo25"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 text-white shadow-md transition-all duration-300"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shuvo-mallik-992308301/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a66c2] text-white hover:bg-blue-800 shadow-md transition-all duration-300"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:shuvomallik999@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white shadow-md transition-all duration-300"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
        </div>

        {/* Location Card */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 bg-gray-800 rounded-xl px-6 py-4 shadow-md">
            <FaLocationDot className="text-[#12F7D6]" size={24} />
            <span className="text-gray-300 text-lg">Khulna, Bangladesh</span>
          </div>
        </div>
      </div>
    </section>
  );
}
