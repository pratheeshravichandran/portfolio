import React from 'react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">Pratheesh R</div>
            <p className="text-gray-400">
              Professional Full Stack Developer specializing in Laravel and React.js. 
              Passionate about creating efficient, scalable web solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Certificates', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>pratheeshravichandran@gmail.com</p>
              <p>+91 9342798869</p>
              <p>Karur, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Pratheesh R. All rights reserved. Built with React and passion for excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;