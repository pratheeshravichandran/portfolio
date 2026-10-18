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

  const create3DAnimation = () => {
    const container = threeDRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x61dafb, 2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9333ea, 2);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Create IDE code snippets with syntax highlighting
    const codeSnippets = [
      {
        title: 'React Component',
        code: [
          'const App = () => {',
          '  const [state, setState]',
          '  = useState(false);',
          '  return (',
          '    <div className="app">',
          '      <Header />',
          '    </div>',
          '  );',
          '};'
        ],
        colors: ['#61dafb', '#c678dd', '#e5c07b', '#98c379', '#61dafb']
      },
      {
        title: 'Node.js API',
        code: [
          'app.get("/api/users",',
          '  async (req, res) => {',
          '  const users = await',
          '    User.find();',
          '  res.json({',
          '    success: true,',
          '    data: users',
          '  });',
          '});'
        ],
        colors: ['#68a063', '#e5c07b', '#61dafb', '#c678dd', '#98c379']
      },
      {
        title: 'TypeScript',
        code: [
          'interface User {',
          '  id: number;',
          '  name: string;',
          '  email: string;',
          '}',
          'const getUser = async',
          '  (id: number):',
          '  Promise<User> => {',
          '};'
        ],
        colors: ['#3178c6', '#e5c07b', '#61dafb', '#c678dd', '#98c379']
      }
    ];

    // Create floating IDE windows
    const ideWindows = [];
    
    codeSnippets.forEach((snippet, index) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 512;

      // Draw IDE window background
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1e1e1e');
      gradient.addColorStop(1, '#252526');
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw window title bar
      context.fillStyle = '#323233';
      context.fillRect(0, 0, canvas.width, 40);

      // Draw window controls (dots)
      const dotColors = ['#ff5f56', '#ffbd2e', '#27c93f'];
      dotColors.forEach((color, i) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(20 + i * 20, 20, 6, 0, Math.PI * 2);
        context.fill();
      });

      // Draw title
      context.fillStyle = '#cccccc';
      context.font = 'bold 16px monospace';
      context.fillText(snippet.title, 80, 25);

      // Draw code with syntax highlighting
      context.font = '18px "Fira Code", monospace';
      snippet.code.forEach((line, lineIndex) => {
        const y = 70 + lineIndex * 32;
        const colorIndex = lineIndex % snippet.colors.length;
        context.fillStyle = snippet.colors[colorIndex];
        context.fillText(line, 20, y);
      });

      // Add cursor blink effect (random position)
      const cursorLine = Math.floor(Math.random() * snippet.code.length);
      const cursorY = 70 + cursorLine * 32;
      context.fillStyle = '#ffffff';
      context.fillRect(20 + snippet.code[cursorLine].length * 10.8, cursorY - 18, 2, 22);

      // Create texture and plane
      const texture = new THREE.CanvasTexture(canvas);
      const geometry = new THREE.PlaneGeometry(3, 3);
      const material = new THREE.MeshStandardMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0x111111),
        emissiveIntensity: 0.3
      });
      const plane = new THREE.Mesh(geometry, material);

      // Position windows in a circular arrangement
      const angle = (index / codeSnippets.length) * Math.PI * 2;
      const radius = 4;
      plane.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        Math.sin(angle) * 2
      );

      plane.userData = {
        rotationSpeed: 0.001 + Math.random() * 0.002,
        floatSpeed: 0.0005 + Math.random() * 0.001,
        floatOffset: Math.random() * Math.PI * 2
      };

      scene.add(plane);
      ideWindows.push(plane);
    });

    // Create particle system for code symbols
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x61dafb,
      size: 0.05,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create floating code symbols
    const floatingSymbols = [];
    const symbols = ['{ }', '< />', '[ ]', '=>', 'fn', 'const', 'async', 'import'];
    
    for (let i = 0; i < 20; i++) {
      const symbolCanvas = document.createElement('canvas');
      const symbolContext = symbolCanvas.getContext('2d');
      symbolCanvas.width = 128;
      symbolCanvas.height = 128;
      
      const colors = ['#61dafb', '#c678dd', '#e5c07b', '#98c379', '#56b6c2'];
      symbolContext.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      symbolContext.font = 'bold 32px monospace';
      symbolContext.textAlign = 'center';
      symbolContext.textBaseline = 'middle';
      symbolContext.fillText(symbols[Math.floor(Math.random() * symbols.length)], 64, 64);
      
      const texture = new THREE.CanvasTexture(symbolCanvas);
      const material = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.5
      });
      const sprite = new THREE.Sprite(material);
      
      sprite.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      sprite.scale.set(0.4, 0.4, 0.4);
      
      sprite.userData = {
        floatSpeed: 0.001 + Math.random() * 0.002,
        floatOffset: Math.random() * Math.PI * 2,
        rotateSpeed: 0.005 + Math.random() * 0.01
      };
      
      scene.add(sprite);
      floatingSymbols.push(sprite);
    }

    // Animation loop
    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Auto-rotate IDE windows
      ideWindows.forEach((window, index) => {
        window.rotation.y += window.userData.rotationSpeed;
        window.rotation.x = Math.sin(time * window.userData.floatSpeed + window.userData.floatOffset) * 0.1;
        window.position.y += Math.sin(time * window.userData.floatSpeed + window.userData.floatOffset) * 0.001;
      });

      // Rotate particles slowly
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;

      // Animate floating symbols
      floatingSymbols.forEach(sprite => {
        sprite.position.y += Math.sin(time * sprite.userData.floatSpeed + sprite.userData.floatOffset) * 0.002;
        sprite.rotation.z += sprite.userData.rotateSpeed;
      });

      // Gentle camera rotation
      camera.position.x = Math.sin(time * 0.1) * 2;
      camera.position.y = Math.cos(time * 0.15) * 1;
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
              Full Stack & Backend Developer specializing in scalable, real-time logistics and delivery platforms with Node.js, React.js, and MySQL. Experienced in multi-carrier aggregations, distributed BullMQ queues, OSRM routing, and geospatial indexing.
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
