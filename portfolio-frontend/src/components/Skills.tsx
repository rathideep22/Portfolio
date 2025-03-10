"use client";

import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    title: "Languages",
    icon: <FiCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    title: "Frameworks & Technologies",
    icon: <FiDatabase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Keras", level: 85 },
      { name: "Scikit-learn", level: 90 },
      { name: "OpenAI's GPT Models", level: 85 },
      { name: "React", level: 75 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <FiTool className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    skills: [
      { name: "Linux", level: 80 },
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Tableau", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Google Cloud", level: 75 },
      { name: "Jupyter", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        viewport={{ once: true }}
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 