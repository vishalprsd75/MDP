import { useState, useEffect, useLayoutEffect } from 'react';
import { instantScrollToTop } from '../utils/navigation';

/**
 * Custom hook to handle URL Hash state routing (#category=..., #hero, etc.)
 */
export const useHashRoute = () => {
  const [activeCategoryPage, setActiveCategoryPage] = useState(null);
  const [isFontPreviewOpen, setIsFontPreviewOpen] = useState(false);

  // Synchronously reset scroll position whenever view changes
  useLayoutEffect(() => {
    instantScrollToTop();
  }, [activeCategoryPage, isFontPreviewOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#fonts' || hash === '#font-preview' || hash === '#font-studio') {
        setIsFontPreviewOpen(true);
        setActiveCategoryPage(null);
        instantScrollToTop();
      } else {
        setIsFontPreviewOpen(false);
        if (hash.startsWith('#category=')) {
          const catName = decodeURIComponent(hash.replace('#category=', ''));
          setActiveCategoryPage(catName);
          instantScrollToTop();
        } else if (hash === '' || hash === '#hero' || hash === '#about' || hash === '#sales' || hash === '#gallery' || hash === '#contact') {
          setActiveCategoryPage(null);
        }
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleOpenFontPreview = () => {
    instantScrollToTop();
    if (window.location.hash !== '#fonts') {
      window.history.pushState(null, '', '#fonts');
    }
    setIsFontPreviewOpen(true);
    setActiveCategoryPage(null);
    instantScrollToTop();
  };

  const handleCloseFontPreview = () => {
    instantScrollToTop();
    if (window.location.hash !== '' && window.location.hash !== '#hero') {
      window.history.pushState(null, '', '#hero');
    }
    setIsFontPreviewOpen(false);
    instantScrollToTop();
  };

  const handleOpenCategoryPage = (category) => {
    instantScrollToTop();
    setIsFontPreviewOpen(false);
    const newHash = `#category=${encodeURIComponent(category)}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash);
    }
    setActiveCategoryPage(category);
    instantScrollToTop();
  };

  const handleBackToHome = () => {
    instantScrollToTop();
    setIsFontPreviewOpen(false);
    if (window.location.hash !== '' && window.location.hash !== '#hero') {
      window.history.pushState(null, '', '#hero');
    }
    setActiveCategoryPage(null);
    instantScrollToTop();
  };

  const handleGoBack = () => {
    instantScrollToTop();
    if (typeof window !== 'undefined' && window.history.length > 1 && window.history.state !== null) {
      window.history.back();
    } else {
      handleBackToHome();
    }
  };

  return {
    activeCategoryPage,
    isFontPreviewOpen,
    handleOpenCategoryPage,
    handleOpenFontPreview,
    handleCloseFontPreview,
    handleBackToHome,
    handleGoBack
  };
};

export default useHashRoute;
