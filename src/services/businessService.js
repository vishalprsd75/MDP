/**
 * Business Service Layer
 * Centralized service for business details, craft services, process steps, and FAQs
 */
import { siteConfig } from '../config/siteConfig';
import { servicesData, salesProducts, galleryItems, whyChooseUsData, processSteps } from '../data/businessData';

export const businessService = {
  /**
   * Get core site config metadata
   */
  getSiteConfig: () => {
    return siteConfig;
  },

  /**
   * Get craft services list (Dyeing, Screen Printing, Shibori, etc.)
   */
  getServices: () => {
    return servicesData;
  },

  /**
   * Get hero featured sales products
   */
  getSalesProducts: () => {
    return salesProducts;
  },

  /**
   * Get gallery portfolio items
   */
  getGalleryItems: () => {
    return galleryItems;
  },

  /**
   * Get why choose us value propositions
   */
  getWhyChooseUs: () => {
    return whyChooseUsData;
  },

  /**
   * Get manufacturing process steps
   */
  getProcessSteps: () => {
    return processSteps;
  }
};

export default businessService;
