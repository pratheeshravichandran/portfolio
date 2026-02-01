import React, { useEffect, useRef } from 'react';
import { Briefcase, Mail, Github, Linkedin } from 'lucide-react';
import anime from "animejs";
import * as THREE from 'three';
import { techStack } from '../data/techstacks';

const Hero = ({ scrollToSection }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);
  const animationRef = useRef(null);
  const threeDRef = useRef(null);

  // Three.js 3D Animation
  const create3DAnimation = () => {
    const container = threeDRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ff88, 1);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Create floating code symbols
    const codeSymbols = [];
    const symbols = ['{ }', '< >', '[ ]', '( )', '/>', '===', '=>', 'fn', 'var', 'let'];
    
    for (let i = 0; i < 30; i++) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 128;
      canvas.height = 128;
      
      context.fillStyle = '#ffffff';
      context.font = 'bold 48px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(symbols[Math.floor(Math.random() * symbols.length)], 64, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.6
      });
      const sprite = new THREE.Sprite(material);
      
      sprite.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      sprite.scale.set(0.5, 0.5, 0.5);
      
      sprite.userData = {
        velocity: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };
      
      scene.add(sprite);
      codeSymbols.push(sprite);
    }

    // Create central geometric shape (dodecahedron)
    const geometry = new THREE.DodecahedronGeometry(1.5, 0);
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ffaa,
      linewidth: 2
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    // Create inner rotating cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
    const cubeMaterial = new THREE.LineBasicMaterial({ 
      color: 0xff00ff,
      linewidth: 2
    });
    const cube = new THREE.LineSegments(cubeEdges, cubeMaterial);
    scene.add(cube);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation loop
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate main shapes
      wireframe.rotation.x += 0.005;
      wireframe.rotation.y += 0.005;

      cube.rotation.x -= 0.01;
      cube.rotation.y -= 0.01;

      // Rotate particles
      particles.rotation.y += 0.001;

      // Animate code symbols
      codeSymbols.forEach(sprite => {
        sprite.position.x += sprite.userData.velocity.x;
        sprite.position.y += sprite.userData.velocity.y;
        sprite.position.z += sprite.userData.velocity.z;

        // Boundary check
        if (Math.abs(sprite.position.x) > 5) sprite.userData.velocity.x *= -1;
        if (Math.abs(sprite.position.y) > 5) sprite.userData.velocity.y *= -1;
        if (Math.abs(sprite.position.z) > 5) sprite.userData.velocity.z *= -1;

        sprite.rotation.z += 0.01;
      });

      // Mouse interaction
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  };

  const createFloatingLogos = () => {
    const container = animationRef.current;
    if (!container) return;

    container.innerHTML = '';

    const createLogoSet = () => {
      const logoSet = document.createElement('div');
      logoSet.className = 'logo-set';
      logoSet.style.display = 'inline-flex';
      logoSet.style.alignItems = 'center';
      logoSet.style.gap = '4rem';
      logoSet.style.paddingRight = '4rem';

      techStack.forEach((tech) => {
        const logoWrapper = document.createElement('div');
        logoWrapper.className = 'floating-logo';
        logoWrapper.style.display = 'flex';
        logoWrapper.style.flexDirection = 'column';
        logoWrapper.style.alignItems = 'center';
        logoWrapper.style.gap = '0.5rem';
        logoWrapper.style.flexShrink = '0';

        const logoIcon = document.createElement('div');
        logoIcon.innerHTML = tech.svg;
        logoIcon.style.color = tech.color;
        logoIcon.style.width = '64px';
        logoIcon.style.height = '64px';
        logoIcon.style.display = 'flex';
        logoIcon.style.alignItems = 'center';
        logoIcon.style.justifyContent = 'center';
        logoIcon.style.filter = 'drop-shadow(0 0 12px rgba(255,255,255,0.15))';

        const logoText = document.createElement('div');
        logoText.textContent = tech.name;
        logoText.style.color = '#9CA3AF';
        logoText.style.fontSize = '0.875rem';
        logoText.style.fontWeight = '500';
        logoText.style.whiteSpace = 'nowrap';

        logoWrapper.appendChild(logoIcon);
        logoWrapper.appendChild(logoText);
        logoSet.appendChild(logoWrapper);
      });

      return logoSet;
    };

    const scrollWrapper = document.createElement('div');
    scrollWrapper.className = 'scroll-wrapper';
    scrollWrapper.style.display = 'flex';
    scrollWrapper.style.alignItems = 'center';
    scrollWrapper.style.width = 'fit-content';

    scrollWrapper.appendChild(createLogoSet());
    scrollWrapper.appendChild(createLogoSet());

    container.appendChild(scrollWrapper);

    const logoSetWidth = scrollWrapper.firstChild.offsetWidth;

    anime({
      targets: scrollWrapper,
      translateX: [-logoSetWidth, 0],
      duration: 25000,
      easing: 'linear',
      loop: true,
    });
  };

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1200
    });

    if (titleRef.current) {
      const title = titleRef.current;
      const text = title.textContent;
      title.innerHTML = text
        .split('')
        .map(char => `<span class="char" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      timeline.add({
        targets: titleRef.current.querySelectorAll('.char'),
        translateX: [-100, 0],
        opacity: [0, 1],
        rotateY: [-90, 0],
        duration: 1200,
        delay: anime.stagger(40),
        easing: 'easeOutElastic(1, .6)'
      }, 0);
    }

    timeline.add({
      targets: subtitleRef.current,
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutCubic'
    }, 400);

    timeline.add({
      targets: buttonsRef.current?.querySelectorAll('button'),
      scale: [0.8, 1],
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutElastic(1, .8)'
    }, 800);

    timeline.add({
      targets: socialsRef.current?.querySelectorAll('a'),
      scale: [0, 1],
      rotate: [180, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(80),
      easing: 'easeOutElastic(1, .6)'
    }, 1000);

    createFloatingLogos();
    const cleanup3D = create3DAnimation();

    return () => {
      if (cleanup3D) cleanup3D();
    };
  }, []);

  const handleButtonHover = (e, isEntering) => {
    const button = e.currentTarget;

    if (isEntering) {
      button.addEventListener('mousemove', magneticEffect);

      anime({
        targets: button,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutCubic'
      });
    } else {
      button.removeEventListener('mousemove', magneticEffect);

      anime({
        targets: button,
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 500,
        easing: 'easeOutElastic(1, .6)'
      });
    }
  };

  const magneticEffect = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    anime({
      targets: button,
      translateX: x * 0.2,
      translateY: y * 0.2,
      duration: 200,
      easing: 'easeOutCubic'
    });
  };

  const handleButtonClick = (e, callback) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';

    button.appendChild(ripple);

    anime({
      targets: ripple,
      scale: [0, 2.5],
      opacity: [0.6, 0],
      duration: 600,
      easing: 'easeOutExpo',
      complete: () => {
        ripple.remove();
        if (callback) callback();
      }
    });
  };

  const handleSocialHover = (e, isEntering) => {
    const icon = e.currentTarget;

    if (isEntering) {
      anime({
        targets: icon,
        scale: 1.2,
        rotate: 10,
        duration: 300,
        easing: 'easeOutCubic'
      });
    } else {
      anime({
        targets: icon,
        scale: 1,
        rotate: 0,
        duration: 400,
        easing: 'easeOutElastic(1, .8)'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white"
    >
      {/* Content at the top */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-20 lg:pt-32 -mt-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div ref={heroRef} className="hero-content">
            <h1
              ref={titleRef}
              className="hero-title text-5xl md:text-7xl lg:text-8xl font-satoshi font-bold text-white mb-6"
              style={{
                perspective: '1000px',
                letterSpacing: '0.02em'
              }}
            >
              Pratheesh R
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed font-inter"
              style={{ opacity: 0 }}
            >
              Professional React, Node.js Developer with expertise in building scalable web applications and RESTful APIs.
              Experienced in full-stack development with React.js, Node.js, Laravel and modern web technologies.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={(e) => handleButtonClick(e, () => scrollToSection('projects'))}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
                className="relative overflow-hidden px-8 py-4 border-2 border-white bg-white text-black rounded-full font-satoshi font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-transparent hover:text-white"
                style={{ opacity: 0 }}
              >
                <Briefcase className="w-5 h-5" />
                View My Work
              </button>

              <button
                onClick={(e) => handleButtonClick(e, () => scrollToSection('contact'))}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
                className="relative overflow-hidden px-8 py-4 border-2 border-white bg-transparent text-white rounded-full font-satoshi font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors"
                style={{ opacity: 0 }}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            <div
              ref={socialsRef}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/pratheeshravichandran"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 border-2 border-yellow-500 bg-transparent rounded-full hover:bg-white transition-colors group"
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
                style={{ opacity: 0 }}
              >
                <Github className="w-6 h-6 text-yellow group-hover:text-black transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/pratheesh-r-b8615726a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 border-2 border-yellow-500 bg-transparent rounded-full hover:bg-white transition-colors group"
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
                style={{ opacity: 0 }}
              >
                <Linkedin className="w-6 h-6 text-yellow group-hover:text-black transition-colors" />
              </a>

              <a
                href="mailto:pratheeshravichandran@gmail.com"
                className="social-icon p-3 border-2 border-yellow-500 bg-transparent rounded-full hover:bg-white transition-colors group"
                onMouseEnter={(e) => handleSocialHover(e, true)}
                onMouseLeave={(e) => handleSocialHover(e, false)}
                style={{ opacity: 0 }}
              >
                <Mail className="w-6 h-6 text-yellow group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Right side - 3D Animation */}
          <div className="hidden lg:block relative h-[600px]">
            <div 
              ref={threeDRef} 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Tech stack logos at the bottom */}
      <div className="relative w-full h-32 md:h-40 overflow-hidden mb-8">
        <div
          ref={animationRef}
          className="animation-container absolute bottom-0 left-0 h-full whitespace-nowrap"
        />
      </div>

      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.4);
          pointer-events: none;
        }
        
        .animation-container {
          pointer-events: none;
          display: flex;
          align-items: center;
        }

        .floating-logo svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Hero;