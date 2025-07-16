import emailjs from 'emailjs-com'

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Zap,
  Menu,
  X,
  Download,
  MapPin,
  Calendar,
  Phone,
  Send,
  Briefcase,
  Server,
  Smartphone,
  Monitor,
} from "lucide-react"

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [typedText, setTypedText] = useState("")
  const [currentJobIndex, setCurrentJobIndex] = useState(0)

  const jobTitles = ["Full Stack Developer", "React Specialist", "PHP Laravel Developer", "MySql"]

  // Typing animation effect
  useEffect(() => {
    const currentJob = jobTitles[currentJobIndex]
    let currentIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(
      () => {
        if (!isDeleting && currentIndex < currentJob.length) {
          setTypedText(currentJob.slice(0, currentIndex + 1))
          currentIndex++
        } else if (isDeleting && currentIndex > 0) {
          setTypedText(currentJob.slice(0, currentIndex - 1))
          currentIndex--
        } else if (!isDeleting && currentIndex === currentJob.length) {
          setTimeout(() => {
            isDeleting = true
          }, 2000)
        } else if (isDeleting && currentIndex === 0) {
          setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length)
          isDeleting = false
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearInterval(typeInterval)
  }, [currentJobIndex])

  // Add custom CSS animations
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fadeUpReveal {
        0% { 
          opacity: 0; 
          transform: translateY(30px); 
        }
        100% { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      @keyframes tiltHover {
        0% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg); }
        100% { transform: perspective(1000px) rotateX(-5deg) rotateY(5deg); }
      }
      
      @keyframes slideInCTA {
        0% { 
          opacity: 0; 
          transform: translateX(-20px); 
        }
        100% { 
          opacity: 1; 
          transform: translateX(0); 
        }
      }
      
      @keyframes floatingIcon {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg); 
        }
        33% { 
          transform: translateY(-10px) rotate(2deg); 
        }
        66% { 
          transform: translateY(-5px) rotate(-2deg); 
        }
      }
      
      @keyframes pulseRipple {
        0% { 
          transform: scale(1); 
          box-shadow: 0 0 0 0 rgba(247, 127, 0, 0.4); 
        }
        70% { 
          transform: scale(1.05); 
          box-shadow: 0 0 0 10px rgba(247, 127, 0, 0); 
        }
        100% { 
          transform: scale(1); 
          box-shadow: 0 0 0 0 rgba(247, 127, 0, 0); 
        }
      }
      
      @keyframes gentleFloat {
        0%, 100% { 
          transform: translateY(0px) translateX(0px) rotate(0deg); 
        }
        25% { 
          transform: translateY(-15px) translateX(5px) rotate(1deg); 
        }
        50% { 
          transform: translateY(-25px) translateX(-3px) rotate(-1deg); 
        }
        75% { 
          transform: translateY(-10px) translateX(-8px) rotate(0.5deg); 
        }
      }
      
      @keyframes glowPulse {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(244, 165, 97, 0.3); 
        }
        50% { 
          box-shadow: 0 0 40px rgba(244, 165, 97, 0.6), 0 0 60px rgba(247, 127, 0, 0.2); 
        }
      }
      
      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }
      
      @keyframes blink {
        0%, 50% { border-color: transparent; }
        51%, 100% { border-color: #f77f00; }
      }
      
      .animate-fade-up {
        animation: fadeUpReveal 0.8s ease-out forwards;
      }
      
      .animate-tilt-hover:hover {
        animation: tiltHover 0.3s ease-out forwards;
      }
      
      .animate-slide-cta {
        animation: slideInCTA 0.6s ease-out forwards;
      }
      
      .animate-floating {
        animation: floatingIcon 4s ease-in-out infinite;
      }
      
      .animate-pulse-ripple:hover {
        animation: pulseRipple 0.6s ease-out;
      }
      
      .animate-gentle-float {
        animation: gentleFloat 8s ease-in-out infinite;
      }
      
      .animate-glow-pulse {
        animation: glowPulse 3s ease-in-out infinite;
      }
      
      .typing-cursor::after {
        content: '|';
        animation: blink 1s infinite;
        color: #f77f00;
      }
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(46, 44, 41, 0.15);
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      title: "Assistive Toy – Smart India Hackathon 2024",
      description:
        "Led the development of a toy that assists deaf and mute individuals in communication using gesture recognition. Selected as the winning solution in the national Smart India Hackathon 2024.",
      tech: ["Python", "TensorFlow", "Flask", "React", "Arduino"],
      image: "https://images.unsplash.com/photo-1581090700227-1e8f2b212f48?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Node Localization using ML in Wireless Sensor Networks",
      description:
        "Developed a hybrid simulation and machine learning system using NS-3 and models like SVR, Random Forest, and CatBoost to predict node transmission ranges in WSNs.",
      tech: ["Python", "NS-3", "SVR", "Random Forest", "CatBoost"],
      image: "https://images.unsplash.com/photo-1581091215367-3bba512f6e5f?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "SkillzMentors – Real-Time College Management Platform",
      description:
        "Built and maintained Laravel REST APIs for modules including Feeds, Jobs, Events, Courses, and Profiles. Added secure authentication, role-based access, and performance-optimized queries.",
      tech: ["Laravel", "MySQL", "JWT", "REST API"],
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Student Discipline Management System",
      description:
        "Designed and developed a fullstack web app to manage student behavior records and reports using core web technologies.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: "https://images.unsplash.com/photo-1588776814546-ec7a3e6f61a8?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Fullstack Staff Management System",
      description:
        "Developed a modern staff management platform with role-based controls, dynamic dashboards, and responsive design using React, Tailwind CSS, and Laravel.",
      tech: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Doctor-Patient Appointment System",
      description:
        "A web system to book and manage doctor appointments based on specialization, built with role-based access and secure validation.",
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1588776814546-ec7a3e6f61a8?w=400&h=250&fit=crop",
      github: "#",
      live: "#",
    },
  ];
  
  const skills = [
    {
      name: "Frontend",
      icon: <Monitor className="w-8 h-8" />,
      items: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML and CSS", level: 92 },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="w-8 h-8" />,
      items: [
        { name: "PHP", level: 88 },
        { name: "Laravel", level: 88 },
        { name: "Codeigniter", level: 85 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      name: "Tools",
      icon: <Zap className="w-8 h-8" />,
      items: [
        { name: "Git and GitHub", level: 80 },
        { name: "Linux", level: 50 },
        { name: "AWS", level: 35 },
        { name: "CI/CD", level: 52 },
      ],
    },
    {
      name: "Tools",
      icon: <Zap className="w-8 h-8" />,
      items: [
        { name: "Excel", level: 80 },
        { name: "Power Point", level: 80 },
        { name: "Word", level: 85 },
        { name: "Adode Photoshop", level: 82 },
      ],
    },
  ]

  const experiences = [
    {
      company: "Cybrtechninja",
      role: "PHP Laravel Developer",
      duration: "Nov 2024 - May 2025",
      location: "Chennai ,Tamil Nadu",
      achievements: [
        "Successfully completed 13+ real-world project tasks",
        "Built and maintained RESTful APIs to support mobile and web applications",
        "Developed Driver Allocation, Staff Attendance, Payroll, Task Management modules",
        "Handled Laravel backend logic and database relationships independently",
        "Implemented validations, policies, and middleware for secure operations",
        "Debugged and optimized Laravel controllers and migrations",
        "Worked with MySQL and Laravel Eloquent ORM for efficient data handling",
        "Maintained effective communication with project managers",
        "Delivered tasks on time in dynamic, fast-paced environments",
        "Aligned backend API logic with frontend/mobile app requirements",
        "Contributed to internal planning and module discussions"
      ],
    },
    {
      company: "Vdigitailze",
      role: "PHP Laravel Developer",
      duration: "july 2025 - Present",
      location: "Maharastra ,Mumbai",
      achievements: [
        "Worked as a freelance PHP Laravel Developer on client-specific modules",
  "Built and maintained scalable RESTful APIs for web-based platforms",
  "Developed modules like Doctor Appointment, Staff Management, and Role-Based Access",
  "Integrated dynamic forms with backend validation and file uploads",
  "Implemented authentication and authorization using Laravel Sanctum",
  "Worked on database schema design and complex query optimization",
  "Collaborated with frontend teams for seamless API integration",
  "Delivered production-ready code under tight deadlines",
  "Handled client change requests and provided quick fixes",
  "Participated in planning feature enhancements and improvements"
      ],
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
  
    emailjs.send(
      'service_zio0z5t',          // Your Service ID
      'template_60tmtyc',         // Your Template ID
      formData,                   // Form data with keys: name, email, message
      '_GpYLzK19wK21d1eL'      // Replace with your actual Public Key from EmailJS
    ).then(
      (result) => {
        console.log("Email sent:", result.text)
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      },
      (error) => {
        console.error("Email error:", error.text)
        alert("Failed to send message. Please try again later.")
      }
    )
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#fefae0] text-[#111111] overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main cursor follower */}
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-[#f4d58d]/20 to-[#f77f00]/10 rounded-full blur-3xl transition-all duration-500 ease-out animate-gentle-float"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#80ed99]/10 rounded-full blur-2xl animate-gentle-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#ff6b6b]/8 rounded-full blur-2xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#f4a261]/12 rounded-full blur-xl animate-gentle-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#f77f00]/30 rounded-full animate-floating" />
        <div
          className="absolute top-40 right-20 w-2 h-2 bg-[#80ed99]/40 rounded-full animate-floating"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-4 h-4 bg-[#ff6b6b]/25 rounded-full animate-floating"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#fefae0]/90 border-b border-[#eaddca] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-[#f77f00] animate-glow-pulse">Pratheesh R</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-[#f77f00] transition-all duration-300 relative ${
                    activeSection === item ? "text-[#f77f00] font-medium" : "text-[#6f4e37]"
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f77f00] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#eaddca]/50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-[#fefae0]/95 backdrop-blur-md border-b border-[#eaddca] shadow-lg">
              <div className="px-4 py-6 space-y-4">
                {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize hover:text-[#f77f00] transition-colors duration-300 text-[#6f4e37]"
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 px-4 relative">
          {/* Profile Picture */}
          <div className="relative mb-8 animate-fade-up">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#f4d58d]/30 to-[#f77f00]/20 backdrop-blur-xl border-4 border-[#eaddca] flex items-center justify-center mb-6 animate-glow-pulse overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=140&width=140"
                className="w-32 h-32 rounded-full object-cover shadow-lg"
              />
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#f77f00] rounded-full -translate-x-1 -translate-y-1 animate-floating" />
              <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-[#80ed99] rounded-full translate-x-1 translate-y-1 animate-floating" />
            </div>
          </div>

          {/* Enhanced Title */}
          <div className="relative mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl font-bold text-[#111111] relative mb-4">Pratheesh R</h1>
            <div className="text-2xl md:text-3xl font-semibold text-[#ff784f] typing-cursor min-h-[3rem] flex items-center justify-center">
              {typedText}
            </div>
          </div>

          {/* Short Intro */}
          <div className="relative mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg md:text-xl text-[#6f4e37] max-w-2xl mx-auto leading-relaxed">
            I’m a PHP Laravel Developer with experience in building real-time web applications and RESTful APIs. I’ve worked on freelance projects at CybrTeckNinja and VDigitalize, delivering modules like staff management, payroll, and driver allocation with clean and scalable backend code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-cta"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-4 bg-[#f77f00] text-white rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-ripple font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-[#ff6b6b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 border-2 border-[#f77f00] text-[#f77f00] rounded-full backdrop-blur-sm overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-[#f77f00] hover:text-white font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <a href="https://github.com/pratheeshravichandran" className="group relative">
              <div className="p-3 rounded-full bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d] text-[#6f4e37] hover:text-[#f77f00] hover:border-[#f77f00] hover:bg-[#f4d58d]/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-floating">
                <Github className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#6f4e37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>
            <a href="https://www.linkedin.com/in/pratheesh-r-b8615726a/" className="group relative">
              <div
                className="p-3 rounded-full bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d] text-[#6f4e37] hover:text-[#f77f00] hover:border-[#f77f00] hover:bg-[#f4d58d]/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-floating"
                style={{ animationDelay: "1s" }}
              >
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#6f4e37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </a>
            <a href="mailto:pratheeshravichandran@gmail.com" className="group relative">
              <div
                className="p-3 rounded-full bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d] text-[#6f4e37] hover:text-[#f77f00] hover:border-[#f77f00] hover:bg-[#f4d58d]/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-floating"
                style={{ animationDelay: "2s" }}
              >
                <Mail className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#6f4e37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </a>
          </div>

          {/* Status Indicator */}
          
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="text-xs text-[#6f4e37] mb-2 animate-pulse">Scroll to explore</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-[#f77f00] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#f77f00] rounded-full mt-2 animate-bounce" />
            </div>
            <ChevronDown className="w-6 h-6 text-[#f77f00] mt-2 animate-bounce" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#eaddca]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111111] animate-fade-up">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#f77f00] to-[#ff6b6b] rounded-full" />
                <div className="pl-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#ff784f]">My Journey</h3>
                  <p className="text-lg text-[#6f4e37] leading-relaxed mb-4">
                  My journey in tech started with a deep interest in building real-world solutions using code. I began as a freelance PHP Laravel Developer, gradually expanding my skill set to include React.js for frontend development.
                  </p>
                  <p className="text-lg text-[#6f4e37] leading-relaxed mb-4">
                  Working with companies like CyberTechNinja and VDigitalize, I’ve contributed to both backend and frontend projects. At VDigitalize, I built responsive user interfaces using React.js and connected them with Laravel APIs for a seamless user experience. I also developed key backend modules such as staff management, doctor appointments, attendance systems, and payroll.
                  </p>
                  <p className="text-lg text-[#6f4e37] leading-relaxed mb-6">
                  Each project helped me grow — from writing clean backend code and designing databases to integrating secure APIs. I’ve learned how to take ownership of modules, understand client requirements, and deliver efficient solutions under deadlines. What started as a learning curve has now become a confident stride toward mastering backend development.
                  </p>
                </div>
              </div>

              {/* Key Skills Tags */}
              <div className="pl-8">
                <h4 className="text-xl font-semibold mb-4 text-[#ff784f]">Key Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {["PHP", "React", "Laravel", "Python", "MySQL", "Codeigniter", "Vue.js", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-[#f4d58d]/40 text-[#6f4e37] rounded-full text-sm backdrop-blur-sm border border-[#f4d58d] hover:border-[#f77f00] hover:bg-[#f4d58d]/60 transition-all duration-300 hover-lift"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Download CV Button */}
              <div className="pl-8 pt-4">
                <button className="group relative px-6 py-3 bg-[#80ed99] text-[#111111] rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-ripple font-semibold">
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-[#f4a261] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[#f4d58d]/30 to-[#f77f00]/20 p-8 backdrop-blur-sm border border-[#eaddca] hover-lift">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#f77f00] to-[#ff6b6b] flex items-center justify-center mb-6 animate-glow-pulse">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[#111111]">What I Do</h3>
                    <div className="space-y-4 text-left">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#f77f00] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#6f4e37]">Full-stack web application development</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#80ed99] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#6f4e37]">Develop an API for Mobile Applications</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#ff6b6b] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#6f4e37]">API design and database architecture</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#f4a261] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#6f4e37]">Cloud deployment and DevOps practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#f77f00]/5 rounded-full blur-2xl animate-gentle-float" />
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#80ed99]/5 rounded-full blur-2xl animate-gentle-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111111] animate-fade-up">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-6 hover:bg-[#eaddca]/70 hover:shadow-xl hover:shadow-[#f77f00]/10 transition-all duration-300 animate-tilt-hover hover-lift">
                  <div className="text-[#f77f00] mb-4 group-hover:scale-110 transition-transform duration-300 animate-floating">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-[#111111]">{skill.name}</h3>
                  <div className="space-y-4">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[#6f4e37] text-sm">{item.name}</span>
                          <span className="text-[#f77f00] text-xs font-semibold">{item.level}%</span>
                        </div>
                        <div className="w-full bg-[#f4d58d]/30 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#f77f00] to-[#ff6b6b] h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-[#eaddca]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111111] animate-fade-up">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f77f00] to-[#ff6b6b]" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-8 animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f77f00] to-[#ff6b6b] rounded-full flex items-center justify-center animate-glow-pulse">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-6 hover:bg-[#eaddca]/70 hover:shadow-xl hover:shadow-[#f77f00]/10 transition-all duration-300 animate-tilt-hover hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#ff784f]">{exp.role}</h3>
                        <h4 className="text-lg text-[#111111]">{exp.company}</h4>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-[#6f4e37] text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2 text-[#6f4e37] text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#f77f00] rounded-full mt-2 flex-shrink-0" />
                          <p className="text-[#6f4e37] text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#111111] animate-fade-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl overflow-hidden hover:bg-[#eaddca]/70 hover:shadow-xl hover:shadow-[#f77f00]/10 transition-all duration-300 animate-tilt-hover hover-lift">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-[#f77f00] transition-colors animate-floating"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-[#f77f00] transition-colors animate-floating"
                        style={{ animationDelay: "0.5s" }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-[#111111]">{project.title}</h3>
                    <p className="text-[#6f4e37] text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#f4d58d]/40 text-[#6f4e37] text-xs rounded-full border border-[#f4d58d]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <a href={project.github} className="text-[#6f4e37] hover:text-[#f77f00] transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href={project.live} className="text-[#6f4e37] hover:text-[#f77f00] transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      <button className="text-[#f4a261] hover:text-[#f77f00] text-sm font-medium transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#eaddca]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#111111] animate-fade-up">
            Let's Work Together
          </h2>
          <p
            className="text-xl text-[#6f4e37] text-center mb-16 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing
            together.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="grid gap-6">
                <a href="mailto:alex@example.com" className="group">
                  <div className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-6 hover:bg-[#eaddca]/70 hover:shadow-xl hover:shadow-[#f77f00]/10 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-[#f77f00] to-[#ff6b6b] rounded-full animate-floating">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-[#111111]">Email</h3>
                        <p className="text-[#6f4e37]">pratheeshravichandran@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="tel:+1234567890" className="group">
                  <div className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-6 hover:bg-[#eaddca]/70 hover:shadow-xl hover:shadow-[#f77f00]/10 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 bg-gradient-to-br from-[#80ed99] to-[#f4a261] rounded-full animate-floating"
                        style={{ animationDelay: "1s" }}
                      >
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 text-[#111111]">Phone</h3>
                        <p className="text-[#6f4e37]">+91 9342798869</p>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-6 hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 bg-gradient-to-br from-[#ff6b6b] to-[#f77f00] rounded-full animate-floating"
                      style={{ animationDelay: "2s" }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-[#111111]">Location</h3>
                      <p className="text-[#6f4e37]">Karur , Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-6 hover-lift">
                <h3 className="text-lg font-semibold mb-4 text-[#111111]">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/pratheeshravichandran" className="group">
                    <div className="p-3 bg-[#f4d58d]/30 rounded-full hover:bg-[#f77f00]/20 transition-all duration-300 transform hover:scale-110 animate-floating">
                      <Github className="w-6 h-6 text-[#6f4e37] group-hover:text-[#f77f00]" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/pratheesh-r-b8615726a/" className="group">
                    <div
                      className="p-3 bg-[#f4d58d]/30 rounded-full hover:bg-[#f77f00]/20 transition-all duration-300 transform hover:scale-110 animate-floating"
                      style={{ animationDelay: "1s" }}
                    >
                      <Linkedin className="w-6 h-6 text-[#6f4e37] group-hover:text-[#f77f00]" />
                    </div>
                  </a>
                  <a href="mailto:pratheeshravichandran@gmail.com" className="group">
                    <div
                      className="p-3 bg-[#f4d58d]/30 rounded-full hover:bg-[#f77f00]/20 transition-all duration-300 transform hover:scale-110 animate-floating"
                      style={{ animationDelay: "2s" }}
                    >
                      <Mail className="w-6 h-6 text-[#6f4e37] group-hover:text-[#f77f00]" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-[#eaddca]/50 backdrop-blur-sm border border-[#f4d58d]/50 rounded-2xl p-8 shadow-xl hover-lift animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#111111]">Send Me a Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#6f4e37] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#fefae0]/80 border border-[#f4d58d] rounded-lg focus:outline-none focus:border-[#f77f00] focus:ring-2 focus:ring-[#f77f00]/20 transition-all duration-300 text-[#111111] placeholder-[#6f4e37]/60"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#6f4e37] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#fefae0]/80 border border-[#f4d58d] rounded-lg focus:outline-none focus:border-[#f77f00] focus:ring-2 focus:ring-[#f77f00]/20 transition-all duration-300 text-[#111111] placeholder-[#6f4e37]/60"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#6f4e37] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#fefae0]/80 border border-[#f4d58d] rounded-lg focus:outline-none focus:border-[#f77f00] focus:ring-2 focus:ring-[#f77f00]/20 transition-all duration-300 text-[#111111] placeholder-[#6f4e37]/60 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full group relative px-6 py-4 bg-[#80ed99] text-[#111111] rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-ripple font-semibold"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-[#f4a261] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#eaddca] bg-[#fefae0]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-[#f77f00] mb-4 animate-glow-pulse">Pratheesh R</div>
              <p className="text-[#6f4e37] text-sm">
                Full Stack Developer passionate about creating exceptional digital experiences.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#111111]">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-[#6f4e37] hover:text-[#f77f00] transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#111111]">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/pratheeshravichandran" className="text-[#6f4e37] hover:text-[#f77f00] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratheesh-r-b8615726a/"
                  className="text-[#6f4e37] hover:text-[#f77f00] transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:pratheeshravichandran@gmail.com" className="text-[#6f4e37] hover:text-[#f77f00] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#eaddca] text-center text-[#6f4e37]">
            <p>&copy; 2024 Alex Rivera. Built with React and passion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
