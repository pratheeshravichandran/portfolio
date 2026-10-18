import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Shield, 
  Rocket, 
  TestTube, 
  Brain, 
  Smartphone, 
  Palette, 
  Settings, 
  Trophy 
} from 'lucide-react';
import anime from 'animejs';

const Skills = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const skillCardsRef = useRef(null);

  const skillCategories = [
    {
      icon: Server,
      title: 'Backend & Systems Architecture',
      color: '#34D399',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'BullMQ', 'Redis Queues', 'WebSockets', 'Webhooks', 'Microservices', 'API Error Handling']
    },
    {
      icon: Rocket,
      title: 'Logistics & Geospatial Tech',
      color: '#FB923C',
      skills: ['OSRM Routing Engine', 'Uber H3 Geospatial Indexing', 'ONDC Network', 'Rail Parcel Integration', 'Multi-Carrier APIs (Shiprocket, Porter, Qwqer, Adloggs)', 'Live Rider Tracking', 'Parallel Serviceability']
    },
    {
      icon: Database,
      title: 'Databases & In-Memory',
      color: '#F472B6',
      skills: ['MySQL', 'Redis', 'Prisma ORM', 'Database Indexing', 'Query Optimization', 'Rate Limiting']
    },
    {
      icon: Palette,
      title: 'Frontend Development',
      color: '#60A5FA',
      skills: ['React.js', 'Tailwind CSS', 'TypeScript', 'Axios', 'TanStack Query', 'Real-Time Dashboards', 'Responsive UI']
    },
    {
      icon: Settings,
      title: 'DevOps & Infrastructure',
      color: '#FCD34D',
      skills: ['Docker', 'CI/CD Pipelines', 'Linux / VPS', 'PM2', 'Git & GitHub', 'NPM Publishing', 'Vercel']
    },
    {
      icon: Shield,
      title: 'Authentication & Security',
      color: '#A78BFA',
      skills: ['JWT Authentication', 'Role-Based Access (RBAC)', 'Session Auth', 'API Security', 'Webhook Verification']
    },
    {
      icon: TestTube,
      title: 'Optimization & Testing',
      color: '#EC4899',
      skills: ['Asynchronous Retries', 'High-Volume Order Processing', 'Route Distance Calculations', 'Performance Tuning']
    },
    {
      icon: Brain,
      title: 'Machine Learning & Research',
      color: '#8B5CF6',
      skills: ['NS-3 Network Simulation', 'SVR', 'Random Forest', 'CatBoost', 'WSN Research']
    },
    {
      icon: Trophy,
      title: 'Professional Highlights',
      color: '#FBBF24',
      skills: ['Smart India Hackathon 2024 Winner', 'Full SDLC Management', 'Multi-City Production Routing', 'NPM Package Author']
    }
  ];

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

    // Skill cards animation
    timeline.add({
      targets: skillCardsRef.current?.querySelectorAll('.skill-card'),
      scale: [0.8, 1],
      opacity: [0, 1],
      translateY: [60, 0],
      rotateY: [-15, 0],
      duration: 1000,
      delay: anime.stagger(80, {start: 200}),
      easing: 'easeOutElastic(1, .8)'
    }, 600);

    // Floating animation for icons
    anime({
      targets: '.skill-icon',
      translateY: [-8, 8],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(150)
    });

  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-20 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold text-white mb-4"
            style={{ perspective: '1000px' }}
          >
            Technical Expertise
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-400"
            style={{ opacity: 0 }}
          >
            Full-stack development skills across modern technologies
          </p>
        </div>
        
        <div ref={skillCardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="skill-card bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 group"
                style={{ opacity: 0 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="skill-icon p-3 rounded-xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg text-sm border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Technologies & Tools', value: '15+' },
            { label: 'Projects & Platforms', value: '5+' },
            { label: 'Carrier Integrations', value: '6+' },
            { label: 'Hackathon Wins', value: '1' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
