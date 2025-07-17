import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Menu,
  X,
  Download,
  MapPin,
  Calendar,
  Phone,
  Send,
  Briefcase,
  Server,
  Monitor,
  Award,
  User,
  Zap,
  Building,
  Globe,
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [typedText, setTypedText] = useState('');
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const jobTitles = ['Full Stack Developer', 'React JS Developer', 'PHP Laravel Developer', 'Backend Developer'];

  // Professional typing animation
  useEffect(() => {
    const currentJob = jobTitles[currentJobIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeInterval = setInterval(() => {
      if (!isDeleting && currentIndex < currentJob.length) {
        setTypedText(currentJob.slice(0, currentIndex + 1));
        currentIndex++;
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentJob.slice(0, currentIndex - 1));
        currentIndex--;
      } else if (!isDeleting && currentIndex === currentJob.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && currentIndex === 0) {
        setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
        isDeleting = false;
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentJobIndex]);

  // Professional CSS styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blink {
        50% { opacity: 0; }
      }

      @keyframes skillProgress {
        from { width: 0%; }
        to { width: var(--target-width); }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      .animate-fade-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }

      .animate-slide-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .animate-slide-right {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .typing-cursor::after {
        content: '|';
        animation: blink 1s infinite;
        color: #2563eb;
      }

      .skill-progress {
        animation: skillProgress 2s ease-out forwards;
      }

      .card-hover {
        transition: all 0.3s ease;
      }

      .card-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }

      .btn-primary {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        transition: all 0.3s ease;
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
      }

      .btn-secondary {
        background: linear-gradient(135deg, #64748b 0%, #475569 100%);
        transition: all 0.3s ease;
      }

      .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(100, 116, 139, 0.3);
      }

      .section-reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
      }

      .section-reveal.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .text-gradient {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .glass-effect {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
        .skill-progress {
  width: 0%;
  transition: width 1s ease-in-out;
  width: var(--target-width);
}

    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const projects = [
    {
      title: 'Assistive Toy – Smart India Hackathon 2024',
      description: 'Led the development of a toy that assists deaf and mute individuals in communication using gesture recognition. Selected as the winning solution in the national Smart India Hackathon 2024.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React', 'Arduino'],
      github: '#',
      live: '#',
      category: 'AI/ML',
    },
    {
      title: 'Node Localization using ML in WSNs',
      description: 'Developed a hybrid simulation and machine learning system using NS-3 and models like SVR, Random Forest, and CatBoost to predict node transmission ranges in WSNs.',
      tech: ['Python', 'NS-3', 'SVR', 'Random Forest', 'CatBoost'],
      github: 'https://github.com/pratheeshravichandran/Node-Localization-using-ML-in-Wireless-Sensor-Networks',
      live: '#',
      category: 'Research',
    },
    {
      title: 'SkillzMentors – College Management Platform',
      description: 'Built and maintained Laravel REST APIs for modules including Feeds, Jobs, Events, Courses, and Profiles. Added secure authentication, role-based access, and performance-optimized queries.',
      tech: ['Laravel', 'MySQL', 'JWT', 'REST API'],
      github: '#',
      live: '#',
      category: 'Web App',
    },
    {
      title: 'Fullstack Staff Management System',
      description: 'Developed a modern staff management platform with role-based controls, dynamic dashboards, and responsive design using React, Tailwind CSS, and Laravel.',
      tech: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
      github: 'https://github.com/pratheeshravichandran/staff-management-system',
      live: '#',
      category: 'Web App',
    },
    {
      title: 'Doctor-Patient Appointment System',
      description: 'A web system to book and manage doctor appointments based on specialization, built with role-based access and secure validation.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
      github: '#',
      live: '#',
      category: 'Web App',
    },
    {
      title: 'Student Discipline Management System',
      description: 'Designed and developed a fullstack web app to manage student behavior records and reports using core web technologies.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: '#',
      live: '#',
      category: 'Web App',
    },
  ];

  const skills = [
    {
      name: 'Frontend Development',
      icon: <Monitor className="w-6 h-6" />,
      items: [
        { name: 'React.js', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML & CSS', level: 92 },
      ],
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: 'PHP', level: 88 },
        { name: 'Laravel', level: 88 },
        { name: 'CodeIgniter', level: 85 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      name: 'Development Tools',
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'Linux', level: 50 },
        { name: 'AWS', level: 35 },
        { name: 'CI/CD', level: 52 },
      ],
    },
    {
      name: 'Office & Design',
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { name: 'Excel', level: 80 },
        { name: 'PowerPoint', level: 80 },
        { name: 'Word', level: 85 },
        { name: 'Adobe Photoshop', level: 82 },
      ],
    },
  ];

  const experiences = [
    {
      company: 'Cybrtechninja',
      role: 'PHP Laravel Developer',
      duration: 'Nov 2024 - May 2025',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      achievements: [
        'Successfully completed 13+ real-world project tasks',
        'Built and maintained RESTful APIs to support mobile and web applications',
        'Developed Driver Allocation, Staff Attendance, Payroll, Task Management modules',
        'Implemented validations, policies, and middleware for secure operations',
        'Optimized Laravel controllers and migrations for better performance',
        'Maintained effective communication with project managers and delivered on time',
      ],
    },
    {
      company: 'Vdigitailze',
      role: 'PHP Laravel Developer',
      duration: 'July 2025 - Present',
      location: 'Maharashtra, Mumbai',
      type: 'Freelance',
      achievements: [
        'Working as a freelance PHP Laravel Developer on client-specific modules',
        'Built and maintained scalable RESTful APIs for web-based platforms',
        'Developed modules like Doctor Appointment, Staff Management, and Role-Based Access',
        'Integrated dynamic forms with backend validation and file uploads',
        'Implemented authentication and authorization using Laravel Sanctum',
        'Collaborated with frontend teams for seamless API integration',
      ],
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">Pratheesh R</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'certificates', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-600 transition-colors duration-300 font-medium ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <div className="px-4 py-6 space-y-4">
                {['home', 'about', 'skills', 'experience', 'certificates', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize hover:text-blue-600 transition-colors duration-300 text-gray-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-up">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pratheesh R
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 h-12 flex items-center justify-center">
              <span className="typing-cursor">{typedText}</span>
            </div>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Professional PHP Laravel Developer with expertise in building scalable web applications and RESTful APIs. 
              Experienced in full-stack development with React.js and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary px-8 py-4 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary px-8 py-4 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/pratheeshravichandran"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratheesh-r-b8615726a/"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-600" />
              </a>
              <a
                href="mailto:pratheeshravichandran@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              
              <div className="mt-8">
                <a
                  href="/Pratheesh R.pdf"
                  download="Pratheesh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">Expertise across the full development stack</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <div className="space-y-4">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        <span className="text-sm text-blue-600 font-semibold">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full skill-progress"
                          style={{ '--target-width': `${item.level}%` }  }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">My journey in software development</p>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span className="text-lg text-blue-600 font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-600 justify-end">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 justify-end mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mt-2">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
            <p className="text-xl text-gray-600">Recognition for professional excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart India Hackathon 2024 Winner',
                issuer: 'Government of India',
                date: '2024',
                type: 'Competition',
                description: 'National hackathon winner for developing an Assistive Toy for deaf and mute individuals.',
              },
              {
                title: 'PHP Laravel Certification',
                issuer: 'Laravel',
                date: '2024',
                type: 'Professional',
                description: 'Comprehensive Laravel framework certification covering advanced concepts and best practices.',
              },
              {
                title: 'React.js Developer Certification',
                issuer: 'Udemy',
                date: '2024',
                type: 'Course',
                description: 'Advanced React.js certification covering hooks, state management, and modern patterns.',
              },
              {
                title: 'Zoho Creator Course',
                issuer: 'Zoho',
                date: '2024',
                type: 'Course',
                description: 'Comprehensive Low Code development in Zoho',
              },
              {
                title: 'Data Science For Python',
                issuer: 'NPTEL',
                date: '2024',
                type: 'Exam',
                description: 'Explored core concepts of data science using Python, with a strong focus on data visualization using Matplotlib, including plots, charts, and advanced customization techniques.'
              },              
              {
                title: 'Python Certification',
                issuer: 'Edureka',
                date: '2022',
                type: 'Course',
                description: 'Advanced Python certification ',
              },
            ].map((cert, index) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcase of my technical expertise and problem-solving skills</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden card-hover">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-600" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-600" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white text-gray-700 text-xs rounded border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Let's discuss your next project or explore opportunities to work together
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">pratheeshravichandran@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9342798869</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Karur, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pratheeshravichandran"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-600" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pratheesh-r-b8615726a/"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-gray-600" />
                  </a>
                  <a
                    href="mailto:pratheeshravichandran@gmail.com"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary px-6 py-3 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Portfolio;