import React from 'react';
import { Briefcase, Mail, Github, Linkedin, User } from 'lucide-react';

const Hero = ({ typedText, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pratheesh R
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 h-12 flex items-center justify-center">
            <span className="typing-cursor">{typedText}</span>
          </div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Professional PHP Laravel Developer with expertise in building scalable web applications and RESTful APIs. 
            Experienced in full-stack development with React.js and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary px-8 py-4 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary px-8 py-4 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/pratheeshravichandran"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github className="w-6 h-6 text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratheesh-r-b8615726a/"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-600" />
            </a>
            <a
              href="mailto:pratheeshravichandran@gmail.com"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-6 h-6 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;