import React, { useEffect, useRef } from "react";
import  anime from "animejs";

const NeonCursor = () => {
  const mountRef = useRef(null);
  const trailRef = useRef([]);
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationIdRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const trailLength = 30;
    const trail = [];

    // Create SVG for the yellow line
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = "fixed";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "none";
    svg.style.zIndex = "9999";
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke", "#FFD700");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.style.filter = "drop-shadow(0 0 10px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))";
    
    svg.appendChild(path);
    mount.appendChild(svg);
    lineRef.current = path;

    // Create trail points for the line
    for (let i = 0; i < trailLength; i++) {
      trail.push({ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2,
        targetX: window.innerWidth / 2,
        targetY: window.innerHeight / 2
      });
    }

    // Create main cursor dot
    const cursorDot = document.createElement("div");
    cursorDot.style.position = "fixed";
    cursorDot.style.pointerEvents = "none";
    cursorDot.style.zIndex = "10000";
    cursorDot.style.borderRadius = "50%";
    cursorDot.style.width = "12px";
    cursorDot.style.height = "12px";
    cursorDot.style.transform = "translate(-50%, -50%)";
    cursorDot.style.background = "radial-gradient(circle, rgba(255, 215, 0, 1) 0%, rgba(255, 215, 0, 0.8) 50%, rgba(255, 215, 0, 0.4) 100%)";
    cursorDot.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.4)";
    mount.appendChild(cursorDot);

    // Create outer ring
    const outerRing = document.createElement("div");
    outerRing.style.position = "fixed";
    outerRing.style.pointerEvents = "none";
    outerRing.style.zIndex = "10000";
    outerRing.style.borderRadius = "50%";
    outerRing.style.width = "30px";
    outerRing.style.height = "30px";
    outerRing.style.transform = "translate(-50%, -50%)";
    outerRing.style.border = "2px solid rgba(255, 215, 0, 0.6)";
    outerRing.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.4)";
    outerRing.style.transition = "width 0.3s ease, height 0.3s ease";
    mount.appendChild(outerRing);

    trailRef.current = trail;

    // Initial fade-in animation
    anime({
      targets: [cursorDot, outerRing],
      opacity: [0, 1],
      scale: [0, 1],
      duration: 600,
      easing: 'easeOutElastic(1, .6)'
    });

    anime({
      targets: path,
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutCubic'
    });

    // Mouse move handler
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Mouse enter/leave handlers for interactive elements
    const onMouseEnter = () => {
       anime({
        targets: outerRing,
        scale: 1.5,
        duration: 300,
        easing: 'easeOutCubic'
      });
      
    anime({
        targets: cursorDot,
        scale: 0.8,
        duration: 300,
        easing: 'easeOutCubic'
      });
    };

    const onMouseLeave = () => {
      anime({
        targets: outerRing,
        scale: 1,
        duration: 300,
        easing: 'easeOutCubic'
      });
      
      anime({
        targets: cursorDot,
        scale: 1,
        duration: 300,
        easing: 'easeOutCubic'
      });
    };

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    // Click effect with anime.js - yellow ripple effect
    const onClick = (e) => {
      // Ripple effect
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.borderRadius = "50%";
      ripple.style.border = "2px solid rgba(255, 215, 0, 0.9)";
      ripple.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.6)";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "9998";
      ripple.style.transform = "translate(-50%, -50%)";
      
      mount.appendChild(ripple);

      anime({
        targets: ripple,
        scale: [1, 4],
        opacity: [1, 0],
        duration: 800,
        easing: 'easeOutExpo',
        complete: () => ripple.remove()
      });

      // Pulse effect on cursor
    anime({
        targets: cursorDot,
        scale: [1, 1.5, 1],
        duration: 400,
        easing: 'easeOutElastic(1, .8)'
      });

      // Create yellow particle burst on click
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particle.style.width = "3px";
        particle.style.height = "12px";
        particle.style.borderRadius = "2px";
        particle.style.background = "linear-gradient(180deg, rgba(255, 215, 0, 1) 0%, rgba(255, 215, 0, 0) 100%)";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9997";
        particle.style.transform = "translate(-50%, -50%)";
        particle.style.boxShadow = "0 0 8px rgba(255, 215, 0, 0.8)";
        
        mount.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 12;
        const distance = 60 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        anime({
          targets: particle,
          translateX: tx,
          translateY: ty,
          rotate: angle * (180 / Math.PI),
          scale: [1, 0],
          opacity: [1, 0],
          duration: 700 + Math.random() * 300,
          easing: 'easeOutExpo',
          complete: () => particle.remove()
        });
      }
    };

    // Smooth animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const mouse = mouseRef.current;
      
      // Lead point follows mouse with spring physics
      trail[0].targetX = mouse.x;
      trail[0].targetY = mouse.y;
      
      const dx = trail[0].targetX - trail[0].x;
      const dy = trail[0].targetY - trail[0].y;
      trail[0].x += dx * 0.3;
      trail[0].y += dy * 0.3;
      
      // Following points with smooth trailing
      for (let i = 1; i < trail.length; i++) {
        const smoothing = 0.2 - (i * 0.003);
        trail[i].targetX = trail[i - 1].x;
        trail[i].targetY = trail[i - 1].y;
        
        const dx = trail[i].targetX - trail[i].x;
        const dy = trail[i].targetY - trail[i].y;
        
        trail[i].x += dx * smoothing;
        trail[i].y += dy * smoothing;
      }
      
      // Update cursor dot position
      cursorDot.style.left = `${trail[0].x}px`;
      cursorDot.style.top = `${trail[0].y}px`;
      
      // Update outer ring position with slight delay
      outerRing.style.left = `${trail[2].x}px`;
      outerRing.style.top = `${trail[2].y}px`;
      
      // Update SVG path for the yellow line
      let pathData = `M ${trail[0].x} ${trail[0].y}`;
      
      // Use quadratic curves for smooth line
      for (let i = 1; i < trail.length - 1; i++) {
        const xc = (trail[i].x + trail[i + 1].x) / 2;
        const yc = (trail[i].y + trail[i + 1].y) / 2;
        pathData += ` Q ${trail[i].x} ${trail[i].y}, ${xc} ${yc}`;
      }
      
      // Add the last point
      const lastIdx = trail.length - 1;
      pathData += ` L ${trail[lastIdx].x} ${trail[lastIdx].y}`;
      
      if (lineRef.current) {
        lineRef.current.setAttribute("d", pathData);
        
        // Dynamic opacity based on movement
        const velocity = Math.sqrt(dx * dx + dy * dy);
        const opacity = Math.min(1, 0.4 + velocity * 0.01);
        lineRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Fade out animation before cleanup
      anime({
        targets: [cursorDot, outerRing, svg],
        opacity: 0,
        scale: 0,
        duration: 400,
        easing: 'easeInCubic',
        complete: () => {
          if (mount.contains(cursorDot)) mount.removeChild(cursorDot);
          if (mount.contains(outerRing)) mount.removeChild(outerRing);
          if (mount.contains(svg)) mount.removeChild(svg);
        }
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
};

export default NeonCursor;