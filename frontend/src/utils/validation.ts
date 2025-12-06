import { VALIDATION } from '@/constants';

/**
 * Validation utility functions for form inputs
 */

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (supports various formats)
const PHONE_REGEX = /^[\d\s\-\+\(\)]+$/;

/**
 * Validate email address
 */
export const validateEmail = (email: string): { valid: boolean; error?: string } => {
  if (!email) {
    return { valid: false, error: 'Email is required' };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  return { valid: true };
};

/**
 * Validate password
 */
export const validatePassword = (password: string): { valid: boolean; error?: string } => {
  if (!password) {
    return { valid: false, error: 'Password is required' };
  }

  if (password.length < VALIDATION.MIN_PASSWORD_LENGTH) {
    return {
      valid: false,
      error: `Password must be at least ${VALIDATION.MIN_PASSWORD_LENGTH} characters`,
    };
  }

  // Check for at least one letter and one number
  if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    return {
      valid: false,
      error: 'Password must contain at least one letter and one number',
    };
  }

  return { valid: true };
};

/**
 * Validate phone number
 */
export const validatePhone = (phone: string): { valid: boolean; error?: string } => {
  if (!phone) {
    return { valid: false, error: 'Phone number is required' };
  }

  // Remove spaces and special characters for length check
  const digitsOnly = phone.replace(/[\s\-\+\(\)]/g, '');

  if (digitsOnly.length < VALIDATION.MIN_PHONE_LENGTH) {
    return {
      valid: false,
      error: `Phone number must be at least ${VALIDATION.MIN_PHONE_LENGTH} digits`,
    };
  }

  if (!PHONE_REGEX.test(phone)) {
    return { valid: false, error: 'Please enter a valid phone number' };
  }

  return { valid: true };
};

/**
 * Validate required field
 */
export const validateRequired = (
  value: string,
  fieldName: string = 'This field'
): { valid: boolean; error?: string } => {
  if (!value || value.trim() === '') {
    return { valid: false, error: `${fieldName} is required` };
  }

  return { valid: true };
};

/**
 * Validate name (no numbers or special characters)
 */
export const validateName = (name: string): { valid: boolean; error?: string } => {
  if (!name) {
    return { valid: false, error: 'Name is required' };
  }

  if (name.length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return { valid: false, error: 'Name can only contain letters and spaces' };
  }

  return { valid: true };
};

/**
 * Validate quantity
 */
export const validateQuantity = (quantity: number): { valid: boolean; error?: string } => {
  if (quantity < VALIDATION.MIN_PRODUCT_QUANTITY) {
    return {
      valid: false,
      error: `Quantity must be at least ${VALIDATION.MIN_PRODUCT_QUANTITY}`,
    };
  }

  if (quantity > VALIDATION.MAX_PRODUCT_QUANTITY) {
    return {
      valid: false,
      error: `Quantity cannot exceed ${VALIDATION.MAX_PRODUCT_QUANTITY}`,
    };
  }

  return { valid: true };
};

/**
 * Sanitize string input (remove dangerous characters)
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent XSS
    .slice(0, 500); // Limit length
};

/**
 * Validate credit card number (basic Luhn algorithm)
 */
export const validateCreditCard = (cardNumber: string): { valid: boolean; error?: string } => {
  // Remove spaces and dashes
  const cleaned = cardNumber.replace(/[\s\-]/g, '');

  if (!/^\d{13,19}$/.test(cleaned)) {
    return { valid: false, error: 'Please enter a valid card number' };
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  if (sum % 10 !== 0) {
    return { valid: false, error: 'Invalid card number' };
  }

  return { valid: true };
};

/**
 * Validate CVV
 */
export const validateCVV = (cvv: string): { valid: boolean; error?: string } => {
  if (!/^\d{3,4}$/.test(cvv)) {
    return { valid: false, error: 'CVV must be 3 or 4 digits' };
  }

  return { valid: true };
};

/**
 * Validate expiry date (MM/YY format)
 */
export const validateExpiryDate = (expiry: string): { valid: boolean; error?: string } => {
  if (!/^\d{2}\/\d{2}$/.test(expiry)) {
    return { valid: false, error: 'Please enter expiry date in MM/YY format' };
  }

  const [month, year] = expiry.split('/').map(Number);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100; // Get last 2 digits
  const currentMonth = currentDate.getMonth() + 1;

  if (month < 1 || month > 12) {
    return { valid: false, error: 'Invalid month' };
  }

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return { valid: false, error: 'Card has expired' };
  }

  return { valid: true };
};

