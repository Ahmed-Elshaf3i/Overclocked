// Product Types
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

// User Types (Backend MongoDB Schema)
export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  address?: Address;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface UpdateProfileData {
  name?: string;
  address?: Address;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  billing: BillingDetails;
  payment: PaymentMethod;
  subtotal: number;
  shipping: number;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

export interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  phone: string;
  email: string;
  saveInfo?: boolean;
}

export interface PaymentMethod {
  type: "card" | "cod";
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

// Team Member Type
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Statistics Type
export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
  highlighted?: boolean;
}

// Contact Form Type
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
// Wishlist Type
export interface WishlistItem {
  product: Product;
  addedAt: string;
}
