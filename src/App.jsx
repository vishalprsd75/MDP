import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sales from './components/Sales';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ProductDetailsModal from './components/ProductDetailsModal';
import CategoryStorePage from './components/CategoryStorePage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('mdp_theme');
    return saved !== null ? saved === 'dark' : false;
  });

  const [lightboxItem, setLightboxItem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Dynamic Category Page State (null = Home Landing Page, string = Category Page)
  const [activeCategoryPage, setActiveCategoryPage] = useState(null);

  // Sync theme with document class
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

  // Dynamic Hash URL Routing Listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#category=')) {
        const catName = decodeURIComponent(hash.replace('#category=', ''));
        setActiveCategoryPage(catName);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#hero' || hash === '#about' || hash === '#sales' || hash === '#gallery' || hash === '#contact') {
        setActiveCategoryPage(null);
      }
    };

    // Initial check on page load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handleOpenCategoryPage = (category) => {
    window.location.hash = `#category=${encodeURIComponent(category)}`;
    setActiveCategoryPage(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = '#hero';
    setActiveCategoryPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen font-body antialiased transition-colors duration-500 selection:bg-brand-gold selection:text-brand-dark ${
      darkMode ? 'bg-brand-dark text-gray-200' : 'bg-brand-cream text-gray-800'
    }`}>
      
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onNavigateHome={handleBackToHome}
        onSelectCategory={(cat) => handleOpenCategoryPage(cat)}
      />

      {/* DYNAMIC VIEW ROUTER: Category Store Page OR Main Landing Page */}
      {activeCategoryPage !== null ? (
        <CategoryStorePage
          category={activeCategoryPage}
          onBackToHome={handleBackToHome}
          onOpenProductDetails={(product) => setSelectedProduct(product)}
          onSelectCategory={(cat) => handleOpenCategoryPage(cat)}
          darkMode={darkMode}
        />
      ) : (
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Sales
            darkMode={darkMode}
            onOpenProductDetails={(product) => setSelectedProduct(product)}
            onOpenCategoryPage={(category) => handleOpenCategoryPage(category)}
          />
          <Gallery
            darkMode={darkMode}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
          <WhyChooseUs darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <MapSection darkMode={darkMode} />
        </main>
      )}

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Root-Level Modals (Always Rendered Above Navbar z-[100]) */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        darkMode={darkMode}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        darkMode={darkMode}
      />

    </div>
  );
}

export default App;
