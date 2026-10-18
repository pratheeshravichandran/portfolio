import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { projects } from './data/projects';
import { skills } from './data/skills';
import { experiences } from './data/experiences';
import { certificates } from './data/certificates';
import { useTypingEffect } from './hooks/useTypingEffect';
import {
  animateOnScroll,
  setupCardAnimations,
  animateSkills,
  floatingAnimation,
  magneticButton,
  textReveal,
  countUp
} from './styles/animations';

import NeonCursor from './styles/NeonCursor';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const jobTitles = [
    'Full Stack Developer',
    'Node.js & Backend Engineer',
    'Real-Time Logistics Systems Developer',
    'React.js Developer'
  ];

  const typedText = useTypingEffect(jobTitles);

 

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NeonCursor />
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <Hero typedText={typedText} scrollToSection={scrollToSection} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <About />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;
