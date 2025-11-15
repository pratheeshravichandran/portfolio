import React from 'react';
import { Server, Monitor, Globe, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">Professional developer with a passion for creating quality solutions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Professional Journey</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a dedicated PHP Laravel Developer with extensive experience in building real-world solutions. 
                My journey began with a deep interest in backend development, which has evolved into full-stack expertise 
                combining Laravel APIs with modern frontend technologies like React.js.
              </p>
              <p>
                Throughout my career at companies like CyberTechNinja and VDigitalize, I've successfully delivered 
                over 13 project modules including staff management systems, appointment booking platforms, and 
                real-time APIs. My approach focuses on clean, maintainable code and efficient database design.
              </p>
              <p>
                I specialize in creating scalable web applications, implementing secure authentication systems, 
                and optimizing database performance. My experience spans from individual freelance projects to 
                collaborative team environments, always maintaining high standards of code quality and delivery.
              </p>
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Backend</h4>
                  <p className="text-sm text-gray-600">PHP, Laravel, APIs</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Frontend</h4>
                  <p className="text-sm text-gray-600">React, Vue.js, CSS</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Database</h4>
                  <p className="text-sm text-gray-600">MySQL, Design</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Tools</h4>
                  <p className="text-sm text-gray-600">Git, Linux, AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
