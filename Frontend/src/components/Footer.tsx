"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  // Function to open social links
  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-[#071810] border-t border-emerald-900/30 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors mb-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="h-5 w-5" />
          </button>

          {/* Navigation */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <Link 
                  href="#about" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#experience" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="#education" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => openSocialLink('https://www.linkedin.com/in/deep-rathi-b37a44230/')}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-5 w-5" />
            </button>
            <button
              onClick={() => openSocialLink('https://github.com/rathideep22')}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.location.href = 'mailto:deeprathi222@gmail.com'}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Deep Rathi. All rights reserved.</p>
            <p className="mt-1">Software Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 