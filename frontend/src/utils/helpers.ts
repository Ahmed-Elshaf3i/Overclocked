/**
 * Helper utility functions for common operations
 */

/**
 * Format currency to USD with 2 decimal places
 */
export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

/**
 * Calculate discount percentage
 */
export const calculateDiscountPercentage = (
  originalPrice: number,
  discountedPrice: number
): number => {
  if (originalPrice <= 0 || discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

/**
 * Truncate text to a specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Generate a unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Debounce function for search inputs
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Safe JSON parse with fallback
 */
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch (error) {
    console.error('JSON parse error:', error);
    return fallback;
  }
};

/**
 * Check if code is running in browser
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Get error message from unknown error type
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return 'An unexpected error occurred';
};

/**
 * Capitalize first letter of a string
 */
export const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Format date to locale string
 */
export const formatDate = (date: string | Date): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error('Date formatting error:', error);
    return 'Invalid date';
  }
};

/**
 * Sleep/delay function for async operations
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Clamp a number between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Check if an object is empty
 */
export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Remove duplicates from array based on a key
 */
export const uniqueBy = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

