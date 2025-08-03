import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'AGBADA',
    slug: 'agbada',
    image: '/images/agbada2.JPG',
    productCount: 24,
    description: 'Traditional flowing robes with modern sophistication'
  },
  {
    id: '2',
    name: 'KAFTANS',
    slug: 'kaftans',
    image: '/images/nativeorkaftan.JPG',
    productCount: 18,
    description: 'Elegant kaftans blending comfort with style'
  },
  {
    id: '3',
    name: 'POLO',
    slug: 'polo',
    image: '/images/poloorbaggy.JPG',
    productCount: 32,
    description: 'Contemporary polo shirts for the modern gentleman'
  },
  {
    id: '4',
    name: 'VINTAGE',
    slug: 'vintage',
    image: '/images/vintage2.jpeg',
    productCount: 15,
    description: 'Timeless vintage-inspired pieces'
  },
  {
    id: '5',
    name: 'SPECIALS',
    slug: 'specials',
    image: '/images/specials.jpeg',
    productCount: 20,
    description: 'Exclusive special collection pieces'
  }
];

export const products: Product[] = [
  // Agbada Collection
  {
    id: 'agbada-1',
    name: 'Premium White Agbada',
    description: 'Classic white agbada crafted from premium cotton with intricate embroidery details. Perfect for special occasions and cultural celebrations.',
    price: 299,
    images: ['/images/agbada1.JPG', '/images/agbada3.JPG'],
    category: 'agbada',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cream', hex: '#F5F5DC' }
    ],
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    featured: true
  },
  {
    id: 'agbada-2',
    name: 'Royal Blue Agbada',
    description: 'Elegant royal blue agbada with gold thread embroidery. A statement piece that commands respect and admiration.',
    price: 329,
    images: ['/images/agbada4.JPG', '/images/agbada5.JPG'],
    category: 'agbada',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Royal Blue', hex: '#4169E1' },
      { name: 'Navy', hex: '#000080' }
    ],
    rating: 4.9,
    reviewCount: 18,
    inStock: true,
    featured: false
  },

  // Kaftan Collection
  {
    id: 'kaftan-1',
    name: 'Luxury Traditional Kaftan',
    description: 'Handcrafted traditional kaftan with authentic African patterns. Comfortable fit with premium fabric quality.',
    price: 199,
    images: ['/images/kaftan1.JPG', '/images/nativeorkaftan.JPG'],
    category: 'kaftans',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Earth Brown', hex: '#8B4513' },
      { name: 'Forest Green', hex: '#228B22' }
    ],
    rating: 4.9,
    reviewCount: 32,
    inStock: true,
    featured: true
  },

  // Polo Collection
  {
    id: 'polo-1',
    name: 'Designer Cotton Polo',
    description: 'Premium cotton polo shirt with modern cut and sophisticated styling. Perfect for casual and semi-formal occasions.',
    price: 89,
    images: ['/images/polo1.JPEG', '/images/poloorbaggy.JPG'],
    category: 'polo',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Navy', hex: '#000080' }
    ],
    rating: 4.7,
    reviewCount: 45,
    inStock: true,
    featured: true
  },

  // Vintage Collection
  {
    id: 'vintage-1',
    name: 'Vintage Classic Ensemble',
    description: 'Timeless vintage-inspired outfit that captures the essence of classic African fashion with modern comfort.',
    price: 159,
    images: ['/images/vintage1.jpeg', '/images/vintage2.jpeg', '/images/vintage3.jpeg'],
    category: 'vintage',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Vintage Brown', hex: '#8B4513' },
      { name: 'Classic Beige', hex: '#F5F5DC' }
    ],
    rating: 4.6,
    reviewCount: 28,
    inStock: true,
    featured: true
  },

  // Specials Collection
  {
    id: 'special-1',
    name: 'Premium Special Edition',
    description: 'Exclusive special edition piece from our luxury collection. Limited availability with exceptional craftsmanship.',
    price: 249,
    images: ['/images/specials.jpeg', '/images/specials2.jpeg', '/images/specials3.jpeg'],
    category: 'specials',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Luxury Gold', hex: '#FFD700' },
      { name: 'Deep Purple', hex: '#4B0082' }
    ],
    rating: 4.9,
    reviewCount: 15,
    inStock: true,
    featured: false
  },
  {
    id: 'special-2',
    name: 'Designer Special Collection',
    description: 'Carefully curated designer piece that represents the pinnacle of African-inspired luxury fashion.',
    price: 289,
    images: ['/images/specials4.jpeg', '/images/specials5.jpeg', '/images/specials6.jpeg'],
    category: 'specials',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Emerald Green', hex: '#50C878' },
      { name: 'Sapphire Blue', hex: '#0F52BA' }
    ],
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    featured: false
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(product => product.category === categorySlug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};