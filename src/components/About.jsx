import React, { useEffect, useRef } from 'react';
import { Server, Monitor, Globe, Code } from 'lucide-react';
import anime from 'animejs';

const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const competenciesRef = useRef(null);

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
        delay: anime.stagger(50),
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

    // Left content animation
    timeline.add({
      targets: leftContentRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo'
    }, 600);

    timeline.add({
      targets: leftContentRef.current.querySelectorAll('p'),
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(150),
      easing: 'easeOutCubic'
    }, 800);

    // Right content animation
    timeline.add({
      targets: rightContentRef.current,
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: 'easeOutExpo'
    }, 600);

    // Competencies cards animation
    timeline.add({
      targets: competenciesRef.current?.querySelectorAll('.competency-card'),
      scale: [0.8, 1],
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutElastic(1, .8)'
    }, 1000);

    // Floating animation for icons
    anime({
      targets: '.icon-float',
      translateY: [-10, 10],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(200)
    });

  }, []);

  return (
    <section id="about" 
      className="relative min-h-screen flex items-center overflow-hidden bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold text-white mb-4"
            style={{ perspective: '1000px' }}
          >
            About Me
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-400"
            style={{ opacity: 0 }}
          >
            Professional developer with a passion for creating quality solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={leftContentRef} style={{ opacity: 0 }}>
            <h3 className="text-3xl font-semibold text-white mb-6">
              My Professional Journey
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I am a passionate Full Stack & Backend Developer specializing in scalable, real-time logistics and delivery architectures. With core expertise across <span className="text-yellow-400 font-medium">Node.js, React.js, and MySQL</span>, I build resilient production platforms that bridge complex server-side business logic with high-performance user interfaces.
              </p>
              <p>
                At <span className="text-white font-medium">Alab Technologies Pvt Ltd</span>, I architect and maintain mission-critical logistics systems including platforms like <em>Green Drive Delivery</em> and <em>Delivar</em>. My implementations range from multi-carrier aggregations (<span className="text-yellow-400">ONDC, Shiprocket, Porter, Qwqer, Adloggs, Indian Railways Rail Parcel</span>) to parallel serviceability checks and automated dispatch routing.
              </p>
              <p>
                My focus centers on low-latency systems and geospatial processing: deploying self-hosted <span className="text-yellow-400">OSRM routing services</span> across major metropolitan cities, implementing <span className="text-yellow-400">Uber H3 hexagonal indexing</span> for rider dispatch and demand analytics, and engineering distributed job queues using <span className="text-yellow-400">Redis and BullMQ</span> with live WebSocket tracking.
              </p>
            </div>
          </div>

          <div ref={rightContentRef} style={{ opacity: 0 }}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Core Competencies
              </h3>
              <div ref={competenciesRef} className="grid grid-cols-2 gap-4">
                <div className="competency-card bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                  <Server className="icon-float w-10 h-10 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Backend & Queues</h4>
                  <p className="text-sm text-gray-400">Node.js, Redis, BullMQ</p>
                </div>
                <div className="competency-card bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                  <Globe className="icon-float w-10 h-10 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Logistics & Geo</h4>
                  <p className="text-sm text-gray-400">OSRM, Uber H3, ONDC</p>
                </div>
                <div className="competency-card bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                  <Monitor className="icon-float w-10 h-10 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Frontend & Real-time</h4>
                  <p className="text-sm text-gray-400">React.js, WebSockets</p>
                </div>
                <div className="competency-card bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
                  <Code className="icon-float w-10 h-10 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-1">Database & DevOps</h4>
                  <p className="text-sm text-gray-400">MySQL, Docker, CI/CD</p>
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
