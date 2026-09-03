import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sales from './components/Sales';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('mdp_theme');
    return saved !== null ? saved === 'dark' : false;
  });

  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('mdp_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen font-body antialiased transition-colors duration-500 selection:bg-brand-gold selection:text-brand-dark ${
      darkMode ? 'bg-brand-dark text-gray-200' : 'bg-brand-cream text-gray-800'
    }`}>
      
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Single Page Sections */}
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Sales darkMode={darkMode} />
        <Gallery
          darkMode={darkMode}
          onOpenLightbox={(item) => setLightboxItem(item)}
        />
        <WhyChooseUs darkMode={darkMode} />
        <Process darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <MapSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Photo Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        darkMode={darkMode}
      />

    </div>
  );
}

export default App;
