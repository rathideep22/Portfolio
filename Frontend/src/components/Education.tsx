"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import Link from "next/link";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Vellore Institute of Technology, Vellore",
    duration: "2021 - 2025 (Expected)",
    description: "Pursuing a Bachelor's degree with a CGPA of 9.0. Focused on Data Science, Machine Learning, and Software Development coursework.",
  },
];

const certifications = [
  {
    title: "Machine Learning",
    issuer: "CloudyML",
    date: "2023",
    link: "https://cloudyml.com",
  },
  {
    title: "Full Stack Development",
    issuer: "Udemy",
    date: "2022",
    link: "https://udemy.com",
  },
  {
    title: "Google Cloud Computing Foundation",
    issuer: "Google",
    date: "2022",
    link: "https://cloud.google.com/certification",
  },
];

const coursework = [
  "Data Structures",
  "Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Management",
  "Machine Learning",
  "Blockchain",
  "Big Data",
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FiBookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {item.institution}
                    </p>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full mt-2 sm:mt-0">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {item.description}
                  </p>

                  {/* Relevant Coursework */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FiAward className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md flex items-center"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-4">
                    <FiAward className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {cert.issuer}
                      </p>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open(cert.link, '_blank')}
                    className="ml-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Achievements Section */}
            <div className="mt-10">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <FiAward className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Achievements
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>1st place in the 2024 AI Hackathon organized by IIM Ahmedabad</li>
                  <li>Advanced to the final round of Consultathon 4.0, organized by BITS Goa</li>
                  <li>Publication: PrecisionEdge project accepted and published in Scopus</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 