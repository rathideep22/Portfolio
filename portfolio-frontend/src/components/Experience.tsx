"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    title: "Data Scientist Intern",
    company: "Cybersurf India",
    location: "Ahmedabad (On-Site)",
    duration: "Aug 2023 – Oct 2023",
    description: [
      "Designed and deployed a traffic prediction model for Ahmedabad Municipal Corporation using pincodes, weather data, and other parameters, achieving 88% accuracy with a Random Forest Classifier.",
      "Analyzed HR data for 1,435 employees, identifying key trends and reducing employee turnover by 15% through actionable, data-driven insights.",
      "Cleaned and processed 10,000+ rows of data, enhancing data quality and boosting model accuracy by 98%."
    ]
  },
  {
    title: "Software Intern",
    company: "Ejyle",
    location: "Remote",
    duration: "Jan 2024 – March 2024",
    description: [
      "Built a CGAN for synthetic data generation, achieving 88% accuracy in simulating environments.",
      "Used an SVM classifier to analyze data, achieving 93% accuracy for real-time honeypot adaptation.",
      "Hosted the honeypot, attracting 100+ attackers in 1 minute, proving its real-world effectiveness."
    ]
  },
  {
    title: "Software Intern",
    company: "Wajra",
    location: "Remote",
    duration: "Jan 2023 – March 2023",
    description: [
      "Developed an IoT-based fruit ripeness detection system using OpenMV, CNN, and transfer learning, achieving 89% accuracy.",
      "Enhanced model performance through advanced image cleaning techniques."
    ]
  },
  {
    title: "Research Intern",
    company: "SUNY Binghamton",
    location: "Remote",
    duration: "Jan 2022 – Oct 2022",
    description: [
      "Contributed to \"LaneScan Net\", a deep learning model for detecting obstacle lane states, by collaborating with researchers from VIT and SUNY Binghamton.",
      "Assisted in labeling and preparing 10,000+ images from VIT's driving dataset, enabling effective model training and validation with a 15% improvement in detection accuracy."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              )}

              <div className="flex items-start">
                {/* Icon */}
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full mr-6 z-10">
                  <FiBriefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Content */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company} <span className="text-gray-500 dark:text-gray-400 text-sm">• {exp.location}</span>
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 