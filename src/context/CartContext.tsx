import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Cart, CartItem } from '../types';

interface CartState {
  cart: Cart;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: Cart };

const initialState: CartState = {
  cart: {
    items: [],
    total: 0,
    itemCount: 0,
  },
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.cart.items.find(
        item => item.productId === action.payload.productId && 
                 item.size === action.payload.size && 
                 item.color === action.payload.color
      );

      let newItems;
      if (existingItem) {
        newItems = state.cart.items.map(item =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.color === action.payload.color
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.cart.items, action.payload];
      }

      const newCart = {
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        total: newItems.reduce((sum, item) => sum + (item.quantity * 0), 0), // Price calculation would be done with product data
      };

      return { cart: newCart };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.cart.items.filter(item => item.productId !== action.payload);
      const newCart = {
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        total: newItems.reduce((sum, item) => sum + (item.quantity * 0), 0),
      };

      return { cart: newCart };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.cart.items.map(item =>
        item.productId === action.payload.productId
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);

      const newCart = {
        items: newItems,
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        total: newItems.reduce((sum, item) => sum + (item.quantity * 0), 0),
      };

      return { cart: newCart };
    }

    case 'CLEAR_CART':
      return { cart: { items: [], total: 0, itemCount: 0 } };

    case 'LOAD_CART':
      return { cart: action.payload };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('omoluabi-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('omoluabi-cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}