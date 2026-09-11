import { useState, useEffect, useLayoutEffect } from 'react';
import { instantScrollToTop } from '../utils/navigation';

/**
 * Custom hook to handle URL Hash state routing (#category=..., #hero, etc.)
 */
export const useHashRoute = () => {
  const [activeCategoryPage, setActiveCategoryPage] = useState(null);

  // Synchronously reset scroll position whenever view changes
  useLayoutEffect(() => {
    instantScrollToTop();
  }, [activeCategoryPage]);

  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash || '';
      if (hash.startsWith('#category=')) {
        const catName = decodeURIComponent(hash.replace('#category=', ''));
        setActiveCategoryPage(catName);
        instantScrollToTop();
      } else if (
        hash === '' ||
        hash === '#hero' ||
        hash === '#about' ||
        hash === '#sales' ||
        hash === '#gallery' ||
        hash === '#contact' ||
        hash === '#why-us'
      ) {
        setActiveCategoryPage(null);
      }
    };

    handleRouteChange();

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleOpenCategoryPage = (category) => {
    instantScrollToTop();
    const newHash = `#category=${encodeURIComponent(category)}`;
    if (window.location.hash !== newHash) {
      window.history.pushState(null, '', newHash);
    }
    setActiveCategoryPage(category);
    instantScrollToTop();
  };

  const handleBackToHome = () => {
    instantScrollToTop();
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
    handleOpenCategoryPage,
    handleBackToHome,
    handleGoBack,
  };
};

export default useHashRoute;
