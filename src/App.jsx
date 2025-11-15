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
import { injectAnimations } from './styles/animations';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const jobTitles = [
    'Full Stack Developer',
    'React JS Developer',
    'PHP Laravel Developer',
    'Backend Developer'
  ];

  const typedText = useTypingEffect(jobTitles);

  // Inject animations
  useEffect(() => {
    return injectAnimations();
  }, []);

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
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <Hero typedText={typedText} scrollToSection={scrollToSection} />
      <About />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Portfolio;