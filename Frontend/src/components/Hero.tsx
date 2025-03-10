"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiGithub, FiLinkedin, FiMail, FiUser } from "react-icons/fi";

export default function Hero() {
  // Function to open social links
  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background gradient with jade black colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a14] via-[#071810] to-[#030c08] z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-800/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-700/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text content with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
              Hi, I'm Deep Rathi
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-emerald-400">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Software Engineer",
                    "Data Scientist",
                    "ML Engineer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I craft elegant solutions to complex problems, building innovative software
              that blends creativity with technical excellence. Let's create something amazing together.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-6 mb-8">
              <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openSocialLink('https://github.com/rathideep22')}
                className="text-gray-300 hover:text-emerald-400 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="h-7 w-7" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openSocialLink('https://www.linkedin.com/in/deep-rathi-b37a44230/')}
                className="text-gray-300 hover:text-emerald-400 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-7 w-7" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:deeprathi222@gmail.com'}
                className="text-gray-300 hover:text-emerald-400 transition-all"
                aria-label="Email"
              >
                <FiMail className="h-7 w-7" />
              </motion.button>
            </div>

            {/* Enhanced CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-[#0f2a1e] to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-emerald-900/30 transition-all hover:shadow-emerald-800/40"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-[#0a1a14] to-[#0f2a1e] shadow-xl border-2 border-emerald-800/50 flex items-center justify-center group">
              {/* Glow effect behind icon */}
              <div className="absolute inset-0 bg-emerald-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-emerald-800/20 animate-pulse"></div>
              </div>
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border-2 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent opacity-50"
              ></motion.div>
              <FiUser className="h-32 w-32 text-emerald-400 relative z-10 drop-shadow-lg group-hover:text-emerald-300 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down" className="block p-2 rounded-full bg-emerald-900/20 hover:bg-emerald-800/30 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
} 