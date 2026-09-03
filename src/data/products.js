export const products = [
  {
    id: "product-001",
    slug: "premium-100-cotton-dyeable-base",
    name: "Premium 100% Cotton Dyeable Base",
    category: "Dyeable Base",
    images: [
      "/images/gallery_dyeing.jpg",
      "/images/about_craft.jpg"
    ],
    price: 150,
    priceUnit: "meter",
    showPrice: true,
    description: "Ultra-absorbent premium pure cotton fabric base ideal for custom dye vats, screen printing, and hand block craft.",
    fabricType: "Pure Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "60 GSM",
    badge: "Best Seller",
    featured: true,
    available: true
  },
  {
    id: "product-002",
    slug: "pure-chiffon-mulberry-silk-dyeable",
    name: "Pure Chiffon & Mulberry Silk Dyeable",
    category: "Dyeable Base",
    images: [
      "/images/hero_textile.jpg",
      "/images/gallery_dyeing.jpg"
    ],
    price: 450,
    priceUnit: "meter",
    showPrice: true,
    description: "Lightweight, sheer silk chiffons that take vibrant natural dyes and synthetic color fastness with radiant sheen.",
    fabricType: "Mulberry Silk Chiffon",
    moq: "5 meters",
    width: "44 inches",
    gsm: "40 GSM",
    badge: "Luxury Base",
    featured: true,
    available: true
  },
  {
    id: "product-003",
    slug: "artisanal-indigo-shibori-patterned-fabric",
    name: "Artisanal Indigo Shibori Patterned Fabric",
    category: "Traditional Prints",
    images: [
      "/images/gallery_shibori.jpg"
    ],
    price: 280,
    priceUnit: "meter",
    showPrice: true,
    description: "Authentic spiderweb & wave resist tie-dyed cotton meters suitable for designer dupattas, kurtis, and ethnic wear.",
    fabricType: "Fine Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "80 GSM",
    badge: "Handcrafted",
    featured: true,
    available: true
  },
  {
    id: "product-004",
    slug: "hand-carved-teak-wooden-block-printed-cotton",
    name: "Hand Carved Teak Wooden Block Printed Cotton",
    category: "Traditional Prints",
    images: [
      "/images/gallery_block_print.jpg"
    ],
    price: 220,
    priceUnit: "meter",
    showPrice: true,
    description: "Classic terracotta & indigo floral paisley block stamping using eco-friendly fast dyes on fine weave cotton.",
    fabricType: "100% Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "75 GSM",
    badge: "Heritage Print",
    featured: false,
    available: true
  },
  {
    id: "product-005",
    slug: "kalamkari-hand-block-printed-yardage",
    name: "Kalamkari Hand Block Printed Yardage",
    category: "Traditional Prints",
    images: [
      "/images/gallery_kalamkari.jpg"
    ],
    price: 320,
    priceUnit: "meter",
    showPrice: true,
    description: "Rich peacock vine and floral storytelling motifs stamped with organic vegetable dyes.",
    fabricType: "Natural Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "85 GSM",
    badge: "Classic Indian",
    featured: false,
    available: true
  },
  {
    id: "product-006",
    slug: "crackle-texture-batik-wax-resist-fabric-roll",
    name: "Crackle Texture Batik Wax Resist Fabric Roll",
    category: "Wholesale Rolls",
    images: [
      "/images/gallery_batik.jpg"
    ],
    price: 0,
    priceUnit: "meter",
    showPrice: false,
    description: "Distinctive fine crackle wax-resist dyed fabric roll, available in factory bulk quantities.",
    fabricType: "Cotton Cambric",
    moq: "20 meters",
    width: "44 inches",
    gsm: "80 GSM",
    badge: "Factory Bulk",
    featured: true,
    available: true
  }
];

export const productCategories = [
  "All",
  "Dyeable Base",
  "Traditional Prints",
  "Wholesale Rolls"
];

export default products;
