// src/contexts/WishlistContext.tsx
import { createContext, useContext, useState, FC, ReactNode, useEffect } from 'react';
import { Product } from '@/types';
import { STORAGE_KEYS } from '@/constants';

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};

export const WishlistProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error loading wishlist:', error);
      return [];
    }
  });

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlistItems));
    } catch (error) {
      console.error('Error saving wishlist:', error);
    }
  }, [wishlistItems]);

  const addToWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      // Check if already in wishlist
      if (prev.some((item) => item.product.id === product.id)) {
        return prev;
      }
      return [...prev, { product, addedAt: new Date().toISOString() }];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.product.id === productId);
  };

  const clearWishlist = () => setWishlistItems([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

