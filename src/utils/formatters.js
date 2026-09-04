/**
 * Formatting utilities for currency, numbers, and text
 */

/**
 * Formats a number as Indian Rupee currency (e.g. ₹150 or ₹150/meter)
 * @param {number} amount 
 * @param {string} unit Optional price unit (e.g. 'meter')
 * @returns {string} Formatted price string
 */
export const formatCurrency = (amount, unit = '') => {
  if (!amount || amount === 0) return 'Price on Request';
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);

  return unit ? `${formatted}/${unit}` : formatted;
};

/**
 * Converts text into a URL-friendly slug
 * @param {string} text 
 * @returns {string} Slugified string
 */
export const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};
