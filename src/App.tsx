import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'achievements':
        return <Achievements />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="transition-all duration-500 ease-in-out">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;