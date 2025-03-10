"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "PrecisionEdge - A Data Analysis AI Agent",
    description: "An AI-powered data analytics platform automating 80% of preprocessing, including cleaning, transformation, and feature selection using LLMs. Enhanced efficiency by reducing processing time 40%, integrating parallel processing and automated model selection.",
    image: "/precision-edge.jpeg",
    tags: ["Python", "Pandas", "Scikit-learn", "LLM"],
    github: "https://github.com/rathideep22/PrecsionEdge",
    demo: "",
    category: "ai"
  },
  {
    title: "GROW - AI Powered Learning Enhancement",
    description: "An AI-driven web platform that generates personalized learning paths in under 5 seconds, leveraging GROQ LLM API. Implemented interactive timelines, progress tracking, and export functionality to .docx, enabling structured learning plans.",
    image: "/grow.jpeg",
    tags: ["Python", "Streamlit", "GROQ API", "AI"],
    github: "https://github.com/rathideep22/Grow",
    demo: "",
    category: "ai"
  },
  {
    title: "AyuBOT - A Medical Chatbot",
    description: "An Ayurveda-based diagnostic tool utilizing OpenAI API trained on 100+ Ayurvedic resources. Analyzes user inputs through a structured form, generates disease probabilities with up to 95% confidence, and provides Ayurvedic remedies.",
    image: "/ayubot.jpeg",
    tags: ["OpenAI API", "Machine Learning", "Python"],
    github: "https://github.com/rathideep22/AyuBot",
    demo: "",
    category: "ai"
  },
  {
    title: "Traffic Prediction Model",
    description: "Developed for Ahmedabad Municipal Corporation using pincodes, weather data, and other parameters, achieving 88% accuracy with a Random Forest Classifier for traffic prediction and management.",
    image: "/traffic-prediction.jpeg",
    tags: ["Random Forest", "Data Analysis", "Python"],
    github: "https://github.com/rathideep22/Traffic-Prediction",
    demo: "",
    category: "data"
  },
  {
    title: "IoT Fruit Ripeness Detection",
    description: "An IoT-based system for detecting fruit ripeness using OpenMV, CNN, and transfer learning, achieving 89% accuracy. Implemented advanced image cleaning techniques to enhance model performance.",
    image: "/iot-fruit.jpeg",
    tags: ["IoT", "CNN", "Transfer Learning", "OpenMV"],
    github: "https://github.com/rathideep22/",
    demo: "",
    category: "iot"
  },
  {
    title: "LaneScan Net",
    description: "A deep learning model for detecting obstacle lane states, created in collaboration with researchers from VIT and SUNY Binghamton, achieving a 15% improvement in detection accuracy over previous models.",
    image: "/lanescan.jpeg",
    tags: ["Deep Learning", "Computer Vision", "Python"],
    github: "https://github.com/rathideep22/Chronic-Kidney-Diseasehttps://www.sciencedirect.com/science/article/abs/pii/S0957417423014720",
    demo: "",
    category: "research"
  }
];

const categories = [
  { id: "all", name: "All" },
  { id: "ai", name: "AI" },
  { id: "data", name: "Data Science" },
  { id: "iot", name: "IoT" },
  { id: "research", name: "Research" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Function to safely open URLs, handling empty values
  const openExternalLink = (url: string) => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#071810] to-[#030c08] text-white">
      {/* Background decoration elements */}
      <div className="absolute left-0 right-0 w-full">
        <div className="absolute top-20 left-5 w-64 h-64 rounded-full bg-emerald-800/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-5 w-72 h-72 rounded-full bg-emerald-700/5 blur-3xl"></div>
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto mb-8 rounded-full"></div>
          
          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-emerald-900/30"
                    : "bg-[#0a2018] text-gray-200 hover:bg-[#0f2a20] shadow-emerald-900/10"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -7, scale: 1.02 }}
              className="bg-gradient-to-b from-[#0c241c] to-[#071810] rounded-xl overflow-hidden shadow-lg border border-emerald-900/50 hover:border-emerald-600/50 transition-all hover:shadow-xl hover:shadow-emerald-900/10"
            >
              {/* Project Display (no image) */}
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-900/40 to-emerald-800/10">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-gradient-radial from-emerald-800/20 to-transparent opacity-70"></div>
                  <span className="text-2xl font-bold text-white text-center z-10 drop-shadow-md">
                    {project.title}
                  </span>
                </div>
                <div className="absolute -bottom-3 left-0 w-full h-12 bg-gradient-to-t from-[#0c241c] to-transparent"></div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 h-24 overflow-hidden text-sm leading-relaxed border-l-2 border-emerald-700/30 pl-4">
                  {project.description}
                </p>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-emerald-900/60 to-emerald-800/40 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enhanced Links */}
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openExternalLink(project.github)}
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all group"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="h-5 w-5" />
                    <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Code</span>
                  </motion.button>
                  {project.demo && project.demo.trim() !== '' && (
                    <motion.button
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openExternalLink(project.demo)}
                      className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-all group"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="h-5 w-5" />
                      <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Demo</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 