import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const menuItems = ['home','skills', 'experience', 'projects','about','contact'];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                    <div className="text-4xl font-satoshi font-bold text-black">Pratheesh R</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize px-4 py-2 rounded-full border-2 transition-all duration-300 font-satoshi font-medium flex items-center justify-center ${
                  activeSection === item 
                    ? 'border-yellow-500 bg-yellow-500 text-black shadow-lg shadow-yellow-500/50' 
                    : 'border-white text-white hover:border-yellow-500 hover:text-yellow-500 hover:shadow-md hover:shadow-yellow-500/30'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-white border-2 border-white hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left capitalize px-4 py-2 rounded-full border-2 transition-all duration-300 font-satoshi font-medium ${
                    activeSection === item 
                      ? 'border-yellow-500 bg-yellow-500 text-black shadow-lg shadow-yellow-500/50' 
                      : 'border-white text-white hover:border-yellow-500 hover:text-yellow-500 hover:shadow-md hover:shadow-yellow-500/30'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;