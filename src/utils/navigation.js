/**
 * Instant top jump helper without smooth scroll jump artifacts
 */
export const instantScrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }
};
