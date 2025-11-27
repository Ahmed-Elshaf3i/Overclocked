import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/types';
import productsData from '@/data/products.json';
import { TIMING, PRODUCT_LIMITS } from '@/constants';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (you can remove setTimeout in production)
    setTimeout(() => {
      setProducts(productsData as Product[]);
      setLoading(false);
    }, TIMING.LOADING_SIMULATION_DELAY);
  }, []); // ✅ Empty array - runs only once

  // ✅ Wrap all functions with useCallback to prevent recreation
  
  // Get products by category
  const getProductsByCategory = useCallback((category: string, limit?: number): Product[] => {
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    return limit ? filtered.slice(0, limit) : filtered;
  }, [products]);

  // Get product by ID
  const getProductById = useCallback((id: string): Product | undefined => {
    return products.find((product) => product.id === id);
  }, [products]);

  // Get related products (same category, excluding current product)
  const getRelatedProducts = useCallback((productId: string, limit: number = PRODUCT_LIMITS.RELATED): Product[] => {
    const currentProduct = products.find((product) => product.id === productId);
    if (!currentProduct) return [];

    return products
      .filter(
        (product) =>
          product.category === currentProduct.category &&
          product.id !== productId
      )
      .slice(0, limit);
  }, [products]);

  // Get flash sale products (products with highest discount percentage)
  const getFlashSaleProducts = useCallback((limit: number = PRODUCT_LIMITS.FLASH_SALE): Product[] => {
    return products
      .filter((product) => product.originalPrice && product.originalPrice > product.price)
      .sort((a, b) => {
        const discountA = a.originalPrice
          ? ((a.originalPrice - a.price) / a.originalPrice) * 100
          : 0;
        const discountB = b.originalPrice
          ? ((b.originalPrice - b.price) / b.originalPrice) * 100
          : 0;
        return discountB - discountA;
      })
      .slice(0, limit);
  }, [products]);

  // Get best selling products (highest number of reviews)
  const getBestSellingProducts = useCallback((limit: number = PRODUCT_LIMITS.BEST_SELLING): Product[] => {
    return products
      .filter((product) => product.reviews > 0)
      .sort((a, b) => b.reviews - a.reviews)
      .slice(0, limit);
  }, [products]);

  // Get products to explore (mix of different categories)
  const getExploreProducts = useCallback((limit: number = PRODUCT_LIMITS.EXPLORE): Product[] => {
    // Get diverse products from different categories
    const categories = Array.from(new Set(products.map((p) => p.category)));
    const exploreProducts: Product[] = [];

    categories.forEach((category) => {
      const categoryProducts = products
        .filter((product) => product.category.toLowerCase() === category.toLowerCase())
        .slice(0, 2);
      exploreProducts.push(...categoryProducts);
    });

    // Shuffle and limit
    return exploreProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);
  }, [products]);

  // Get all products
  const getAllProducts = useCallback((): Product[] => {
    return products;
  }, [products]);

  // Search products by name
  const searchProducts = useCallback((query: string): Product[] => {
    const lowerQuery = query.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerQuery)
    );
  }, [products]);

  return {
    products,
    loading,
    getProductsByCategory,
    getProductById,
    getRelatedProducts,
    getFlashSaleProducts,
    getBestSellingProducts,
    getExploreProducts,
    getAllProducts,
    searchProducts,
  };
};