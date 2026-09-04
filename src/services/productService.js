/**
 * Product Service Layer
 * Abstracts raw data sources (static files or future REST API endpoints)
 */
import products, { productCategories, getDynamicCategories } from '../data/products';

export const productService = {
  /**
   * Get all available products
   * @returns {Promise<Array>|Array} List of product objects
   */
  getAllProducts: () => {
    return products.filter(p => p.available !== false);
  },

  /**
   * Get product by ID or Slug
   * @param {string} idOrSlug 
   * @returns {Object|null}
   */
  getProductById: (idOrSlug) => {
    if (!idOrSlug) return null;
    return products.find(p => p.id === idOrSlug || p.slug === idOrSlug) || null;
  },

  /**
   * Get products filtered by category
   * @param {string} category 
   * @returns {Array}
   */
  getProductsByCategory: (category) => {
    if (!category || category === 'All') return productService.getAllProducts();
    return products.filter(p => p.category === category && p.available !== false);
  },

  /**
   * Get list of all category names
   * @returns {Array<string>}
   */
  getCategoryNames: () => {
    return productCategories;
  },

  /**
   * Get dynamic category blocks metadata
   * @returns {Array<Object>}
   */
  getDynamicCategoryBlocks: () => {
    return getDynamicCategories();
  }
};

export default productService;
