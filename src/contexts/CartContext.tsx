import { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';
import { CartItem, Product } from '@/types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

const CART_STORAGE_KEY = 'exclusive-ecommerce-cart';

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedColor?: string,
    selectedSize?: string
  ): void => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
        return newItems;
      } else {
        return [
          ...prevItems,
          {
            product,
            quantity,
            selectedColor,
            selectedSize,
          },
        ];
      }
    });
  };

  const removeFromCart = (productId: string): void => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number): void => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = (): void => {
    setItems([]);
  };

  const getCartCount = (): number => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = (): number => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const isInCart = (productId: string): boolean => {
    return items.some((item) => item.product.id === productId);
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    isInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

