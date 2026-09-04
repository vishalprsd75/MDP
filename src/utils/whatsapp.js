/**
 * Utility functions for WhatsApp link generation
 */

/**
 * Generates an encoded WhatsApp ordering URL for a given product.
 * @param {string} phone - Target phone number with country code (e.g., "916289835944")
 * @param {Object} product - Product object details
 * @returns {string} Encoded WhatsApp URL
 */
export const generateProductWhatsAppLink = (phone, product) => {
  if (!product) return `https://wa.me/${phone}`;

  const productName = product.name || product.title || "Fabric Product";
  const productPrice = product.price 
    ? `₹${product.price}/${product.priceUnit || 'meter'}`
    : "Price on Request";
  
  const text = `Hello Munna Dyeing Printing, I am interested in purchasing/inquiring about:
- Product: ${productName}
- Category: ${product.category || 'N/A'}
- Price: ${productPrice}
- Fabric Type: ${product.fabricType || 'Custom Dyeable'}
- MOQ: ${product.moq || 'N/A'}

Please share more details and order process.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};

/**
 * Generates a general WhatsApp inquiry link.
 * @param {string} phone - Target phone number with country code
 * @param {string} customMessage - Optional initial message
 * @returns {string} Encoded WhatsApp URL
 */
export const generateGeneralWhatsAppLink = (phone, customMessage = "") => {
  const defaultText = customMessage || "Hello Munna Dyeing Printing, I have an inquiry regarding your fabric dyeing and printing services.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;
};
