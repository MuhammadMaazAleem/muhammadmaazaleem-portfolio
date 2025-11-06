import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container" ref={heroRef} style={{ transition: 'transform 0.1s ease-out' }}>
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          style={{
            marginBottom: '2.5rem',
            marginTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '5px solid var(--neon-cyan)',
            boxShadow: '0 0 50px rgba(0, 212, 255, 0.6), 0 0 100px rgba(0, 212, 255, 0.3)',
            animation: 'glow 3s ease-in-out infinite',
            position: 'relative',
          }}>
            <img 
              src="https://avatars.githubusercontent.com/u/191116040?v=4" 
              alt="Muhammad Maaz Aleem"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gradient-text">
            Muhammad Maaz Aleem
          </h1>
        </motion.div>

        <motion.p
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          BSCS Student | Full-Stack Developer | Blockchain Enthusiast | Building Modern Web Solutions
        </motion.p>

        <motion.div
          className="pickup-line"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          💙 <strong>Are you a compiler?</strong> Because you make my heart run without errors
        </motion.div>

        <motion.div
          style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="#contact"
            style={{
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = '0 10px 40px rgba(184, 71, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Let's Connect
          </a>
          <a
            href="#projects"
            style={{
              padding: '1rem 2.5rem',
              background: 'transparent',
              border: '2px solid var(--neon-cyan)',
              borderRadius: '50px',
              color: 'var(--neon-cyan)',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--neon-cyan)';
              e.target.style.color = 'var(--bg-dark)';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--neon-cyan)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scroll to explore</span>
        <div style={{
          width: '2px',
          height: '30px',
          background: 'linear-gradient(180deg, var(--neon-cyan), transparent)',
        }} />
      </motion.div>
    </section>
  );
}

export default Hero;
