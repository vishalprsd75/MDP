import React, { useState } from 'react';
import {
  Navbar,
  Hero,
  About,
  Sales,
  Gallery,
  WhyChooseUs,
  Contact,
  MapSection,
  Footer,
  LightboxModal,
  ProductDetailsModal,
  CategoryStorePage
} from './components';
import { useTheme } from './hooks/useTheme';
import { useHashRoute } from './hooks/useHashRoute';

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const { activeCategoryPage, handleOpenCategoryPage, handleBackToHome } = useHashRoute();

  const [lightboxItem, setLightboxItem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

