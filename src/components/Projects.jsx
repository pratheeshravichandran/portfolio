import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import anime from 'animejs';

const Projects = ({ projects }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const projectCardsRef = useRef(null);

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

    // Project cards animation
    timeline.add({
      targets: projectCardsRef.current?.querySelectorAll('.project-card'),
      scale: [0.8, 1],
      opacity: [0, 1],
      translateY: [80, 0],
      rotateX: [-20, 0],
      duration: 1000,
      delay: anime.stagger(100, {start: 200}),
      easing: 'easeOutElastic(1, .8)'
    }, 600);

    // Hover animation for cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card.querySelector('.project-icon'),
          rotate: 360,
          duration: 600,
          easing: 'easeInOutQuad'
        });
      });
    });

  }, []);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold text-white mb-4"
            style={{ perspective: '1000px' }}
          >
            Featured Projects
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-400"
            style={{ opacity: 0 }}
          >
            Showcase of my technical expertise and problem-solving skills
          </p>
        </div>
        
        <div ref={projectCardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 group"
              style={{ opacity: 0 }}
            >
              <div className="p-6">
                {/* Header with category and links */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="project-icon p-2 bg-yellow-500/10 rounded-lg">
                      <FolderGit2 className="w-6 h-6 text-yellow-500" />
                    </div>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-lg border border-yellow-500/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-500 border border-gray-700 transition-all duration-300 group/icon"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-gray-400 group-hover/icon:text-yellow-500 transition-colors" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 rounded-lg hover:bg-yellow-500/20 hover:border-yellow-500 border border-gray-700 transition-all duration-300 group/icon"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover/icon:text-yellow-500 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project title and description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gray-800/80 text-gray-300 text-xs rounded-lg border border-gray-700 hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Optional: Project highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-yellow-500 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/pratheeshravichandran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;