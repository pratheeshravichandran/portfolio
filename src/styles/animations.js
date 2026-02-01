import  anime from "animejs";

// ============================================
// CORE ANIMATION FUNCTIONS
// ============================================

/**
 * Animate elements when they scroll into view
 * @param {HTMLElement} element - The element to animate
 */
export const animateOnScroll = (element) => {
  if (!element) return;

  anime({
    targets: element,
    opacity: [0, 1],
    translateY: [60, 0],
    duration: 1000,
    easing: 'easeOutCubic'
  });
};

/**
 * Setup hover animations for all project/certificate cards
 */
export const setupCardAnimations = () => {
  const cards = document.querySelectorAll(
    '.project-card, .certificate-card, .experience-card, .skill-card'
  );
  
  cards.forEach(card => {
    // Prevent multiple event listeners
    if (card.dataset.animated) return;
    card.dataset.animated = 'true';

    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        translateY: -10,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
        duration: 400,
        easing: 'easeOutCubic'
      });
    });

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        translateY: 0,
        scale: 1,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 400,
        easing: 'easeOutCubic'
      });
    });
  });
};

/**
 * Animate skill progress bars
 * @param {NodeList|Array} skillBars - Skill bar elements
 */
export const animateSkills = (skillBars) => {
  if (!skillBars || skillBars.length === 0) return;

  skillBars.forEach((bar, index) => {
    const targetWidth = bar.getAttribute('data-width') || bar.dataset.width || '0%';
    
    anime({
      targets: bar,
      width: [0, targetWidth],
      duration: 1500,
      delay: index * 100,
      easing: 'easeInOutQuad'
    });
  });
};

/**
 * Create floating animation for icons and elements
 * @param {string} selector - CSS selector
 */
export const floatingAnimation = (selector) => {
  const elements = document.querySelectorAll(selector);
  if (!elements || elements.length === 0) return;

  elements.forEach((element, index) => {
    anime({
      targets: element,
      translateY: [-8, 8],
      duration: 2000 + (index * 200), // Stagger timing
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });
  });
};

/**
 * Magnetic button effect - follows cursor
 * @param {HTMLElement} button - Button element
 */
export const magneticButton = (button) => {
  if (!button || button.dataset.magnetic) return;
  button.dataset.magnetic = 'true';

  const strength = 0.3;

  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    anime({
      targets: button,
      translateX: x * strength,
      translateY: y * strength,
      duration: 300,
      easing: 'easeOutCubic'
    });
  });

  button.addEventListener('mouseleave', () => {
    anime({
      targets: button,
      translateX: 0,
      translateY: 0,
      duration: 500,
      easing: 'easeOutElastic(1, .6)'
    });
  });
};

/**
 * Text reveal animation - character by character
 * @param {string} selector - CSS selector
 */
export const textReveal = (selector) => {
  const elements = document.querySelectorAll(selector);
  if (!elements || elements.length === 0) return;
  
  elements.forEach(el => {
    if (el.dataset.revealed) return;
    el.dataset.revealed = 'true';

    const text = el.textContent;
    const chars = text.split('');
    
    el.innerHTML = chars
      .map(char => {
        if (char === ' ') return '<span class="char">&nbsp;</span>';
        return `<span class="char" style="display: inline-block; opacity: 0;">${char}</span>`;
      })
      .join('');
    
    anime({
      targets: el.querySelectorAll('.char'),
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: anime.stagger(30),
      easing: 'easeOutExpo'
    });
  });
};

/**
 * Animated number counter
 * @param {HTMLElement} element - Element containing the number
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
export const countUp = (element, target, duration = 2000) => {
  if (!element) return;

  const obj = { count: 0 };
  const suffix = element.dataset.suffix || '';
  const prefix = element.dataset.prefix || '';
  
  anime({
    targets: obj,
    count: target,
    duration: duration,
    easing: 'easeOutCubic',
    round: 1,
    update: () => {
      element.textContent = prefix + Math.round(obj.count) + suffix;
    }
  });
};

// ============================================
// SPECIALIZED ANIMATIONS
// ============================================

/**
 * Button ripple effect on click
 * @param {HTMLElement} button - Button element
 * @param {Event} event - Click event
 */
export const buttonRipple = (button, event) => {
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255, 255, 255, 0.6)';
  ripple.style.pointerEvents = 'none';
  ripple.className = 'ripple-effect';
  
  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);

  anime({
    targets: ripple,
    scale: [0, 2.5],
    opacity: [0.6, 0],
    duration: 600,
    easing: 'easeOutExpo',
    complete: () => ripple.remove()
  });
};

/**
 * Stagger animation for lists/grids
 * @param {string} selector - CSS selector
 * @param {number} delay - Delay between items
 */
export const staggerAnimation = (selector, delay = 100) => {
  const elements = document.querySelectorAll(selector);
  if (!elements || elements.length === 0) return;

  anime({
    targets: elements,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 800,
    delay: anime.stagger(delay),
    easing: 'easeOutCubic'
  });
};

/**
 * Fade in animation
 * @param {string|HTMLElement} target - Element or selector
 * @param {number} duration - Duration in ms
 */
export const fadeIn = (target, duration = 800) => {
  anime({
    targets: target,
    opacity: [0, 1],
    duration: duration,
    easing: 'easeOutCubic'
  });
};

/**
 * Fade out animation
 * @param {string|HTMLElement} target - Element or selector
 * @param {number} duration - Duration in ms
 */
export const fadeOut = (target, duration = 800) => {
  return anime({
    targets: target,
    opacity: [1, 0],
    duration: duration,
    easing: 'easeInCubic'
  }).finished;
};

/**
 * Slide in from direction
 * @param {string|HTMLElement} target - Element or selector
 * @param {string} direction - 'left', 'right', 'top', 'bottom'
 * @param {number} distance - Distance to slide
 */
export const slideIn = (target, direction = 'bottom', distance = 50) => {
  const transforms = {
    left: { translateX: [-distance, 0] },
    right: { translateX: [distance, 0] },
    top: { translateY: [-distance, 0] },
    bottom: { translateY: [distance, 0] }
  };

  anime({
    targets: target,
    opacity: [0, 1],
    ...transforms[direction],
    duration: 800,
    easing: 'easeOutCubic'
  });
};

/**
 * Scale in animation
 * @param {string|HTMLElement} target - Element or selector
 */
export const scaleIn = (target) => {
  anime({
    targets: target,
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutElastic(1, .8)'
  });
};

/**
 * Pulse animation
 * @param {string|HTMLElement} target - Element or selector
 * @param {number} scale - Scale amount
 */
export const pulse = (target, scale = 1.05) => {
  anime({
    targets: target,
    scale: [1, scale, 1],
    duration: 600,
    easing: 'easeInOutQuad'
  });
};

/**
 * Shake animation
 * @param {string|HTMLElement} target - Element or selector
 */
export const shake = (target) => {
  anime({
    targets: target,
    translateX: [0, -10, 10, -10, 10, 0],
    duration: 500,
    easing: 'easeInOutQuad'
  });
};

/**
 * Loading animation for buttons
 * @param {HTMLElement} button - Button element
 */
export const loadingAnimation = (button) => {
  const spinner = document.createElement('span');
  spinner.className = 'loading-spinner';
  spinner.innerHTML = '⟳';
  spinner.style.display = 'inline-block';
  spinner.style.marginLeft = '8px';
  
  button.appendChild(spinner);

  anime({
    targets: spinner,
    rotate: 360,
    duration: 1000,
    loop: true,
    easing: 'linear'
  });

  return () => spinner.remove();
};

/**
 * Progress bar animation
 * @param {HTMLElement} bar - Progress bar element
 * @param {number} percentage - Target percentage
 */
export const animateProgressBar = (bar, percentage) => {
  anime({
    targets: bar,
    width: `${percentage}%`,
    duration: 1500,
    easing: 'easeInOutQuad'
  });
};

/**
 * Modal/Dialog animation
 * @param {HTMLElement} modal - Modal element
 * @param {boolean} show - Show or hide
 */
export const animateModal = (modal, show = true) => {
  if (show) {
    modal.style.display = 'flex';
    anime({
      targets: modal,
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutCubic'
    });
    
    anime({
      targets: modal.querySelector('.modal-content'),
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutCubic'
    });
  } else {
    anime({
      targets: modal,
      opacity: [1, 0],
      duration: 300,
      easing: 'easeInCubic',
      complete: () => {
        modal.style.display = 'none';
      }
    });
  }
};

/**
 * Parallax effect on scroll
 * @param {string} selector - CSS selector
 * @param {number} speed - Parallax speed (0-1)
 */
export const setupParallax = (selector, speed = 0.5) => {
  const elements = document.querySelectorAll(selector);
  if (!elements || elements.length === 0) return;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const distance = scrollY - elementTop;
      
      anime({
        targets: el,
        translateY: distance * speed,
        duration: 0,
        easing: 'linear'
      });
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Conditional animation based on user preferences
 * @param {Function} animationFn - Animation function to run
 */
export const conditionalAnimate = (animationFn) => {
  if (!prefersReducedMotion()) {
    animationFn();
  }
};

export default {
  animateOnScroll,
  setupCardAnimations,
  animateSkills,
  floatingAnimation,
  magneticButton,
  textReveal,
  countUp,
  buttonRipple,
  staggerAnimation,
  fadeIn,
  fadeOut,
  slideIn,
  scaleIn,
  pulse,
  shake,
  loadingAnimation,
  animateProgressBar,
  animateModal,
  setupParallax,
  prefersReducedMotion,
  conditionalAnimate
};