import React, { useEffect, useRef } from 'react';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';
import anime from 'animejs';

const Experience = ({ experiences }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    // Title animation
    if (titleRef.current) {
      const title = titleRef.current;
      const text = title.textContent;
      title.innerHTML = text
        .split('')
        .map(char => `<span class="char" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      timeline.add({
        targets: titleRef.current.querySelectorAll('.char'),
        translateY: [100, 0],
        opacity: [0, 1],
        rotateX: [-90, 0],
        duration: 1200,
        delay: anime.stagger(30),
        easing: 'easeOutElastic(1, .6)'
      }, 0);
    }

    // Subtitle animation
    timeline.add({
      targets: subtitleRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutCubic'
    }, 400);

    // Timeline line animation
    timeline.add({
      targets: timelineRef.current,
      height: ['0%', '100%'],
      duration: 1500,
      easing: 'easeInOutQuad'
    }, 600);

    // Experience cards animation
    timeline.add({
      targets: cardsRef.current?.querySelectorAll('.experience-card'),
      translateX: (el, i) => [i % 2 === 0 ? -100 : 100, 0],
      opacity: [0, 1],
      rotateY: [15, 0],
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeOutElastic(1, .8)'
    }, 800);

    // Floating animation for icons
    anime({
      targets: '.experience-icon',
      translateY: [-5, 5],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(200)
    });

  }, []);

  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold text-white mb-4"
            style={{ perspective: '1000px' }}
          >
            Professional Experience
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-400"
            style={{ opacity: 0 }}
          >
            My journey in software development
          </p>
        </div>
        
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-400 to-transparent top-48 bottom-0 hidden md:block" 
             ref={timelineRef}
             style={{ height: '0%' }}
        />
        
        <div ref={cardsRef} className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-card flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ opacity: 0 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black z-10 shadow-lg shadow-yellow-500/50" />
              
              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 group">
                  {/* Company Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-xl mb-6 experience-icon`}>
                    <Briefcase className="w-8 h-8 text-yellow-500" />
                  </div>
                  
                  {/* Role and Company */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Building className="w-5 h-5 text-yellow-500" />
                    <span className="text-lg text-yellow-400 font-semibold">{exp.company}</span>
                  </div>
                  
                  {/* Duration and Location */}
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center gap-2 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-gray-400 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-lg border border-yellow-500/30">
                      {exp.type}
                    </span>
                  </div>

                  {/* Description if exists */}
                  {exp.description && (
                    <p className="mt-4 text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  {/* Key achievements if exists */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-yellow-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Spacer for timeline */}
              <div className="hidden md:block w-2/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;