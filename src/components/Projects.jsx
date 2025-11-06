import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Store',
    description: 'Modern e-commerce platform with product management, shopping cart, and secure checkout functionality.',
    icon: '🛒',
    tech: ['Python', 'Django', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    githubUrl: 'https://github.com/MuhammadMaazAleem/ecommerce-store',
  },
  {
    id: 2,
    title: 'Secure VPN Desktop',
    description: 'Modern cross-platform VPN desktop application built with Electron, React, and TypeScript for secure browsing.',
    icon: '�',
    tech: ['React', 'TypeScript', 'Electron', 'Vite'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    githubUrl: 'https://github.com/MuhammadMaazAleem/secure-vpn-dekstop',
  },
  {
    id: 3,
    title: 'Blockchain DApp',
    description: 'Decentralized application frontend with Web3 integration for blockchain interactions.',
    icon: '⛓️',
    tech: ['React', 'JavaScript', 'Web3', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    githubUrl: 'https://github.com/MuhammadMaazAleem/Blockchain-frontEnd',
  },
  {
    id: 4,
    title: 'Currency Converter',
    description: 'User-friendly currency converter with real-time exchange rates and intuitive interface with country flags.',
    icon: '💱',
    tech: ['JavaScript', 'HTML', 'CSS', 'API'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    githubUrl: 'https://github.com/MuhammadMaazAleem/currency-converter',
  },
  {
    id: 5,
    title: 'Stake Wallet',
    description: 'Cryptocurrency staking wallet application with secure transaction management.',
    icon: '💰',
    tech: ['TypeScript', 'React', 'Web3'],
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    githubUrl: 'https://github.com/MuhammadMaazAleem/stakewallet',
  },
  {
    id: 6,
    title: 'Blockchain Frontend',
    description: 'Modern frontend interface for blockchain applications with responsive design.',
    icon: '🌐',
    tech: ['JavaScript', 'React', 'Web3'],
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    githubUrl: 'https://github.com/MuhammadMaazAleem/blockchainfrontend',
  },
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-card-inner">
        <div className="project-image" style={{ background: project.gradient }}>
          <span style={{ fontSize: '4rem' }}>{project.icon}</span>
        </div>
        
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="tech-stack">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '1rem',
            padding: '0.7rem 1.5rem',
            background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
            border: 'none',
            borderRadius: '25px',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="gradient-text"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🚀 <em>Are you a Git repository? Because I want to commit to you</em>
        </motion.p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
