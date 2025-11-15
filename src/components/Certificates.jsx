import React from 'react';
import { Award } from 'lucide-react';

const Certificates = ({ certificates }) => {
  return (
    <section id="certificates" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-gray-600">Recognition for professional excellence</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {cert.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{cert.date}</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-green-600">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;