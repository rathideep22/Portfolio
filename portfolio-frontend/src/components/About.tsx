"use client";

import { motion } from "framer-motion";
import { FiUser, FiAward, FiCode } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#030c08] to-[#071810]">
      {/* Background decoration elements */}
      <div className="absolute left-0 right-0 w-full">
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-emerald-800/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-emerald-700/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Software Engineer & Data Scientist</h3>
            <p className="mb-6 leading-relaxed">
              I'm a passionate software engineer and data scientist with expertise in building innovative digital solutions.
              My journey in tech began with a curiosity about how software shapes our world, and has evolved into a career
              focused on creating impactful applications that solve real problems.
            </p>
            <p className="mb-6 leading-relaxed">
              With experience across full-stack development, data science, and machine learning, I bring a holistic approach
              to every project. I specialize in blending technical excellence with user-centered design to create solutions 
              that are both powerful and intuitive.
            </p>
            <p className="leading-relaxed">
              Currently, I'm focused on developing AI-driven applications that make complex data analytics accessible and 
              actionable for businesses and organizations.
            </p>
          </motion.div>

          {/* Stats/Info blocks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tech Skills */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0c241c] to-[#071810] p-6 rounded-xl shadow-lg border border-emerald-900/50"
              >
                <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
                  <FiCode className="h-6 w-6 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Tech Stack</h4>
                <p className="text-gray-300">
                  Proficient in multiple languages and frameworks for both frontend and backend development
                </p>
              </motion.div>

              {/* Education */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0c241c] to-[#071810] p-6 rounded-xl shadow-lg border border-emerald-900/50"
              >
                <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
                  <FiUser className="h-6 w-6 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Education</h4>
                <p className="text-gray-300">
                  Bachelor Of Technology in Information Technology.
                </p>
              </motion.div>

              {/* Projects */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0c241c] to-[#071810] p-6 rounded-xl shadow-lg border border-emerald-900/50 sm:col-span-2"
              >
                <div className="rounded-full bg-emerald-900/30 w-12 h-12 flex items-center justify-center mb-4">
                  <FiCode className="h-6 w-6 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Projects</h4>
                <p className="text-gray-300">
                  Delivered 10+ successful projects ranging from web applications to data science solutions
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 