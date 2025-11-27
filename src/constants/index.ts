// Application-wide constants

// Timing Constants
export const TIMING = {
  CAROUSEL_AUTO_ROTATE_INTERVAL: 5000, // 5 seconds
  TOAST_DURATION: 3000, // 3 seconds
  NAVIGATION_DELAY: 500, // 0.5 seconds
  COUNTDOWN_UPDATE_INTERVAL: 1000, // 1 second
  LOADING_SIMULATION_DELAY: 100, // 100ms
} as const;

// React Query Constants
export const QUERY_CONFIG = {
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  GC_TIME: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  RETRY_COUNT: 3,
  MUTATION_RETRY_COUNT: 1,
} as const;

// Shipping Constants
export const SHIPPING = {
  FREE_SHIPPING_THRESHOLD: 140, // $140
  STANDARD_SHIPPING_COST: 0, // Free shipping
} as const;

// Product Display Constants
export const PRODUCT_LIMITS = {
  FLASH_SALE: 4,
  BEST_SELLING: 4,
  EXPLORE: 8,
  RELATED: 4,
} as const;

// UI Constants
export const UI = {
  SEARCH_INPUT_WIDTH: 'w-64',
  ICON_SIZE_SM: 'w-5 h-5',
  ICON_SIZE_MD: 'w-6 h-6',
  ICON_SIZE_LG: 'w-8 h-8',
} as const;

// Validation Constants
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MIN_PHONE_LENGTH: 10,
  MAX_PRODUCT_QUANTITY: 99,
  MIN_PRODUCT_QUANTITY: 1,
} as const;

// Storage Keys
export const STORAGE_KEYS = {
  CART: 'cart',
  WISHLIST: 'wishlist',
  THEME: 'theme',
  USER: 'user',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  CART_EMPTY: 'Your cart is empty!',
  INVALID_COUPON: 'Invalid coupon code',
  NETWORK_ERROR: 'Network error. Please try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_CART: 'added to cart!',
  ADDED_TO_WISHLIST: 'added to wishlist!',
  ORDER_PLACED: 'Order placed successfully!',
  COUPON_APPLIED: 'Coupon applied successfully!',
} as const;

