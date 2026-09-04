import { useState, useMemo } from 'react';
import productService from '../services/productService';

/**
 * Custom hook to interact with product catalog and filter states
 */
export const useProducts = (initialCategory = 'All') => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const allProducts = useMemo(() => productService.getAllProducts(), []);
  const categoryNames = useMemo(() => productService.getCategoryNames(), []);
  const dynamicCategories = useMemo(() => productService.getDynamicCategoryBlocks(), []);

  const filteredProducts = useMemo(() => {
    return productService.getProductsByCategory(selectedCategory);
  }, [selectedCategory]);

  return {
    allProducts,
    filteredProducts,
    categoryNames,
    dynamicCategories,
    selectedCategory,
    setSelectedCategory
  };
};

export default useProducts;
