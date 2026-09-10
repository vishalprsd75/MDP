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
  CategoryStorePage,
  FontPreviewStudio
} from './components';
import { useTheme } from './hooks/useTheme';
import { useHashRoute } from './hooks/useHashRoute';

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const {
    activeCategoryPage,
    isFontPreviewOpen,
    handleOpenCategoryPage,
    handleOpenFontPreview,
    handleCloseFontPreview,
    handleBackToHome,
    handleGoBack
  } = useHashRoute();

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
        onOpenFontStudio={handleOpenFontPreview}
      />

      {/* DYNAMIC VIEW ROUTER: Font Preview Studio OR Category Store Page OR Main Landing Page */}
      {isFontPreviewOpen ? (
        <FontPreviewStudio
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
          onClose={handleCloseFontPreview}
          onNavigateHome={handleBackToHome}
        />
      ) : activeCategoryPage !== null ? (
        <CategoryStorePage
          category={activeCategoryPage}
          onBackToHome={handleBackToHome}
          onGoBack={handleGoBack}
          onOpenProductDetails={(product) => setSelectedProduct(product)}
          onSelectCategory={(cat) => handleOpenCategoryPage(cat)}
          darkMode={darkMode}
        />
      ) : (
        <main>
          {/* Top Announcement Banner to Directly Launch Font Studio */}
          <div className="pt-24 pb-2.5 px-4 bg-gradient-to-r from-brand-gold-dark/20 via-brand-gold/15 to-brand-gold-dark/20 border-b border-brand-gold/30">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-base">🔤</span>
                <span className="font-bold text-brand-gold">Brand Design & Font Studio:</span>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Preview 10 One-Color styles & 32 fonts for Munna Dyeing Printing
                </span>
              </div>
              <button
                onClick={handleOpenFontPreview}
                className="px-4 py-1.5 rounded-full bg-gold-gradient text-brand-dark font-extrabold text-xs shadow-md hover:shadow-brand-gold/30 hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Open Font Studio Now →</span>
              </button>
            </div>
          </div>

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

      {/* Quick Launch Floating Pill for Font Preview Studio */}
      {!isFontPreviewOpen && (
        <aside aria-label="Font Preview Studio" className="fixed bottom-5 left-5 z-40">
          <button
            onClick={handleOpenFontPreview}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-light text-brand-dark font-bold text-xs shadow-2xl hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transform hover:scale-105 transition-all duration-300 border border-white/40"
            title="Open Interactive Font Preview Studio"
          >
            <span className="text-sm">🔤</span>
            <span className="tracking-wide">Choose Font</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </button>
        </aside>
      )}

    </div>
  );
};

export default App;

