import { useState, useEffect } from 'react';

/**
 * Custom hook to manage Dark Mode theme preference with localStorage sync
 */
export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('mdp_theme');
    return saved !== null ? saved === 'dark' : false;
  });

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

  return { darkMode, toggleTheme, setDarkMode };
};

export default useTheme;
