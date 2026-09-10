import { useState, useEffect, useLayoutEffect } from 'react';
import { instantScrollToTop } from '../utils/navigation';

/**
 * Custom hook to handle URL Hash state routing (#category=..., #hero, etc.)
 */
const checkIsFontRoute = () => {
  if (typeof window === 'undefined') return false;
  const hash = (window.location.hash || '').toLowerCase();
  const path = (window.location.pathname || '').toLowerCase();
  const search = (window.location.search || '').toLowerCase();
  return (
    hash === '#fonts' ||
    hash === '#font' ||
    hash === '#font-preview' ||
    hash === '#font-studio' ||
    hash.includes('font') ||
    path === '/fonts' ||
    path === '/font' ||
    path.startsWith('/font') ||
    search.includes('font')
  );
};

export const useHashRoute = () => {
  const [activeCategoryPage, setActiveCategoryPage] = useState(null);
  const [isFontPreviewOpen, setIsFontPreviewOpen] = useState(() => checkIsFontRoute());

  // Synchronously reset scroll position whenever view changes
  useLayoutEffect(() => {
    instantScrollToTop();
  }, [activeCategoryPage, isFontPreviewOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (checkIsFontRoute()) {
        setIsFontPreviewOpen(true);
        setActiveCategoryPage(null);
        instantScrollToTop();
      } else {
        setIsFontPreviewOpen(false);
        const hash = window.location.hash || '';
        if (hash.startsWith('#category=')) {
          const catName = decodeURIComponent(hash.replace('#category=', ''));
          setActiveCategoryPage(catName);
          instantScrollToTop();
        } else if (hash === '' || hash === '#hero' || hash === '#about' || hash === '#sales' || hash === '#gallery' || hash === '#contact') {
          setActiveCategoryPage(null);
        }
      }
    };

    handleRouteChange();

    const handleCustomOpen = () => {
      setIsFontPreviewOpen(true);
      setActiveCategoryPage(null);
      instantScrollToTop();
    };

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('mdp_open_fonts', handleCustomOpen);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('mdp_open_fonts', handleCustomOpen);
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
    window.dispatchEvent(new Event('mdp_open_fonts'));
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
