import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? 'hidden' : ''}`}>
        <div className="loader"></div>
      </div>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* 3D Background */}
      <Background3D />

      {/* Main Content */}
      <div className="app-content">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
