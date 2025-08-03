export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: CategoryType;
  sizes: Size[];
  colors: Color[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
  description?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  preferences: UserPreferences;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export type CategoryType = 'agbada' | 'kaftans' | 'polo' | 'baggy-pants' | 'accessories' | 'vintage' | 'specials';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Color {
  name: string;
  hex: string;
}

export interface UserPreferences {
  favoriteCategories: CategoryType[];
  preferredSizes: Size[];
}