import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import anime from 'animejs';
import { sendEmail } from '../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);

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

    // Contact cards animation
    timeline.add({
      targets: contactCardsRef.current?.querySelectorAll('.contact-card'),
      translateX: [-100, 0],
      opacity: [0, 1],
      rotateY: [-15, 0],
      duration: 1000,
      delay: anime.stagger(150),
      easing: 'easeOutElastic(1, .8)'
    }, 600);

    // Form animation
    timeline.add({
      targets: formRef.current,
      translateX: [100, 0],
      opacity: [0, 1],
      rotateY: [15, 0],
      duration: 1000,
      easing: 'easeOutElastic(1, .8)'
    }, 600);

    // Form fields animation
    timeline.add({
      targets: formRef.current?.querySelectorAll('.form-field'),
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      delay: anime.stagger(100),
      easing: 'easeOutCubic'
    }, 1000);

    // Floating animation for icons
    anime({
      targets: '.contact-icon',
      translateY: [-5, 5],
      duration: 2000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: anime.stagger(200)
    });

  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Button animation on submit
    anime({
      targets: '.submit-btn',
      scale: [1, 0.95, 1],
      duration: 300,
      easing: 'easeInOutQuad'
    });

    const result = await sendEmail(formData);
    alert(result.message);
    if (result.success) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl font-bold text-white mb-4"
            style={{ perspective: '1000px' }}
          >
            Get In Touch
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-400"
            style={{ opacity: 0 }}
          >
            Let's discuss your next project or explore opportunities to work together
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={contactCardsRef} className="space-y-6">
            <div className="contact-card bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 group" style={{ opacity: 0 }}>
              <div className="flex items-center gap-4">
                <div className="contact-icon p-4 bg-yellow-500/10 rounded-xl">
                  <Mail className="w-7 h-7 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Email</h3>
                  <a href="mailto:pratheeshravichandran@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    pratheeshravichandran@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-card bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 group" style={{ opacity: 0 }}>
              <div className="flex items-center gap-4">
                <div className="contact-icon p-4 bg-yellow-500/10 rounded-xl">
                  <Phone className="w-7 h-7 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Phone</h3>
                  <a href="tel:+919342798869" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    +91 9342798869
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-card bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 group" style={{ opacity: 0 }}>
              <div className="flex items-center gap-4">
                <div className="contact-icon p-4 bg-yellow-500/10 rounded-xl">
                  <MapPin className="w-7 h-7 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">Location</h3>
                  <p className="text-gray-400">Karur, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-card bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800" style={{ opacity: 0 }}>
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pratheeshravichandran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 rounded-xl hover:bg-yellow-500/20 hover:border-yellow-500 border border-gray-700 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratheesh-r-b8615726a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800 rounded-xl hover:bg-yellow-500/20 hover:border-yellow-500 border border-gray-700 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                </a>
                <a
                  href="mailto:pratheeshravichandran@gmail.com"
                  className="p-4 bg-gray-800 rounded-xl hover:bg-yellow-500/20 hover:border-yellow-500 border border-gray-700 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            style={{ opacity: 0 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-field" style={{ opacity: 0 }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500 resize-none transition-all"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="submit-btn w-full bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-black rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;